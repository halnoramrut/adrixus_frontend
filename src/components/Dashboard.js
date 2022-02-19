import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { fetchDummyUser, search } from "../Helper/ApiCall";
import '../assets/myStyle.css';
import { useHistory } from 'react-router';

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [total, setTotal] = useState(0);
    const [searchText, setSearchText] = useState('');

    const history = useHistory();

    const onPaginationChange = (counter, showPerPage) => {
        console.log('counter, showPerPage:',counter, showPerPage);
        getDummyUser(counter,showPerPage);
    };
    
    const getDummyUser = async(pageNo,size) => {
        try {
            const res = await fetchDummyUser(pageNo,size);
            console.log('getDummyUser res:',res.data);
            setUsers(res.data.data);
            setTotal(res.data.total);
        } catch (error) { 
            console.log('getDummyUser error:',error);
        }
    }

    const doSearch = async() => {
        console.log('doSearch called');
        try {
            if (searchText && searchText.trim()) {
                const res = await search(searchText);
                setUsers(res.data.data);
            }
        } catch (error) {

        }
    }

    const doLogout = async() => {
        localStorage.clear();
        history.push('/login');
    }

    return (
        <div className="center-div" >
            <div className="test" >
                <button style={{ float:'right', marginTop:'10px' }} onClick={doLogout} className="btn btn-danger" >
                Logout
            </button>
            </div>

            <h1>Dummy Users</h1>

            <input 
                type="text"
                className="search"
                placeholder="Search..."
                defaultValue={searchText}
                onChange={e => setSearchText(e.target.value)}
                onKeyUp={e=> { if(e.key === 'Enter') { doSearch() }} }
            />
            <br/>

            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                        <th>Contact No.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((value) => {
                          return  <tr key={value._id} >
                                <td>{ value.firstname }</td>
                                <td>{ value.lastname }</td>
                                <td>{ value.city }</td>
                                <td>{ value.phonenumber }</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
           <br/>
            <Pagination
            onPaginationChange={onPaginationChange}
            total={total}
            />
        </div>
    )
}

export default Dashboard;
 