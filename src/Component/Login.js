import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import {Link, Navigate } from "react-router-dom";
// import UserService from "../services/UserService";
import UserService from '../Services/UserService';
import { useState } from "react";
import { loginUser } from '../reduxData/UserSlice';
import { useDispatch, useSelector } from "react-redux";
export default function Login(){
    const dispatch = useDispatch()
    const loginStatus = useSelector(state => state.user.value.loginstatus)
    var loginidbox=undefined
    var loginpassbox = undefined
    const [loginMsg, setloginMsg] = useState("")

    const [isLoginStart, setIsLoginStart] = useState(false)


    var loginuser = (event) => {
        setIsLoginStart(true)
        var ob = {
            email: loginidbox.value,
            password: loginpassbox.value
        }
        console.log(ob)
        UserService.loginUser(ob)
            .then(response => response.json())
            .then(data=> {
                console.log(data)
                setIsLoginStart(false)
                if (data.status) {
                    dispatch(loginUser({ token: data.token, loginstatus: true, username: data.username }))
                }
                else
                    setloginMsg("Login Failed !..")
            })

        event.preventDefault()
    }


    return loginStatus ? <Navigate to="dashboard"/>: <div>
        <br/>
        <div className="container">
           <div className="login"> 
            <h1>Login</h1>
            <hr/>
            <form onSubmit={loginuser}>
           <div className='input'>
         <b><EmailIcon/></b> <input  type="email" ref={c =>loginidbox=c} placeholder='Enter Email'required/><br/><br/><br/>
         <b><PasswordIcon/></b> <input  type="password" ref={c =>loginpassbox=c} placeholder='Enter password' required/><br/><br/><br/>
         <button className='btn btn-success'> Login </button>
         <br/>
         {isLoginStart ? <>
                            <div class="spinner-grow spinner-grow-sm text-danger"></div>
                        </> : <>
                            <b className="text-danger">{loginMsg}</b>
                        </>}
           </div>
           </form>
           </div>
        </div>
    </div>
}