import React from 'react'
import { Navigate } from 'react-router-dom';

const Login = () => {

    const[login,setLogin]=useState(false);
    const[password,setPassword]=useState();

    issetLogin=(true)=>
    if(email==="admin@gmail.com" && password==="admin1234")
    alert("login success")
    }else{
    alert("wrong email or password")
    }
    return (
        <div>
            <input value="Login" type="email" placeholder='Enter email' />
            <input Password type="password" placeholder='Enter password' />
            <button onClick={issetLogin}>login</button>

            <Navigate to admin/>
        </div>
        
    )
}

export default Login