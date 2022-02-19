import React from 'react';
import '../assets/myStyle.css';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { doRegister } from '../Helper/ApiCall';

const SignUp = () => {

    const { register, handleSubmit, errors } = useForm();
    const histroy = useHistory();
    
    const onSubmit = (data) => {
        console.log(data);
        doSignUp(data);
    };
    
    const doSignUp = async(data) => {
        try {
            const sendData = {
                "firstname" : data.fname,
                "lastname" : data.lName,
                "email" : data.email,
                "password" : data.password,
            };
            const res = await doRegister(sendData);
            console.log(res.data); 
            if (res.data.status) {
                histroy.push('/login');
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log('error:',error);
        }
    }

    return (
        <div className="center-div" >
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label>First Name</label><br/>
                    <input
                        className="form-control"
                        type="text"
                        {...register('fname',{
                            required: 'First Name is required.'
                        })}
                    />
                </div>
                <br/>
                <div>
                    <label>Last Name</label><br/>
                    <input
                        type="text"
                        className="form-control"
                        {...register('lName',{
                            required: 'Last Name is required.'
                        })}
                    />
                </div>
                <br/>
                <div>
                    <label>Email</label><br/>
                    <input
                        type="email"
                        className="form-control"
                        {...register('email',{
                            required: 'Email is required.',
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: 'Email is not valid.'
                            }
                        })}
                    />
                </div>
                <br/>
                <div>
                    <label>Password</label><br/>
                    <input
                        type="password"
                        className="form-control"
                        {...register('password',{
                            required: 'Password is required.',
                            minLength: {
                                value: 6,
                                message: 'Password should be at-least 6 characters.'
                            }
                        })}
                    />
                </div>
                <br />
                <div style={{ textAlign: 'center' }} >
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <br/><br/><br/>
                    <Link to="/login" >LogIn</Link>
                </div>
            </form>
        </div> 
    )
}

export default SignUp;
