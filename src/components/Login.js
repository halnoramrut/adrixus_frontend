import React from 'react';
import '../assets/myStyle.css';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../Helper/ApiCall';

const Login = () => {

    const { register, handleSubmit, errors } = useForm();
    const histroy = useHistory();
    
    const onSubmit = (data) => {
        console.log(data);
        doLogin(data);
    };

    const doLogin = async(data) => {
        try {
            const sendData = {
                "email" : data.email,
                "password" : data.password
            }; 
            
            const res = await login(sendData);
            console.log(res.data); 
            if (res.data.status) {
               localStorage.setItem('user',JSON.stringify(res.data.user));
               histroy.push('/dashboard');
            } else {
                alert(res.data.message);
            }  
        } catch (error) {
            console.log('error:',error);
        }
    }

    return (
        <div className="center-div" >
            <h1>Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label>Email</label><br/>
                    <input
                        className="form-control"
                        type="email"
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
                        className="form-control"
                        type="password"
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
                    <Link to="/signup" >SignUp</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
