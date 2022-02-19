import React from 'react';
import { Route, Redirect } from "react-router-dom";

const GuardCompo = ({ PassCompo,...rest }) => {
    const user = localStorage.getItem('user');
   return (<Route  
        {...rest}
        render={(props)=>(
            user ? <PassCompo {...props} /> : 
             <Redirect to='/login' />
        )}
    />);
}

export default GuardCompo;
