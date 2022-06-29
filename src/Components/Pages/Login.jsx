import React,{useState} from "react"
import Axios from "axios";
import Navbar from "../Navbar/HomeNavbar";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import Profile from "./Profile";
import "../Style/Login.css";

toast.configure();
const Login = () =>{
    const [email, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = (e) =>{
      e.preventDefault();
      <Profile data={email}/>
      Axios.post("http://localhost:3001/login", { username: email, password: password })
      .then((response)=>{
        if(response.data.message === "1"){
          toast.success("Login successfull",{position:toast.POSITION.TOP_RIGHT});
          navigate("/question");
        }
        if(response.data.message === "2"){
          toast.error("Login Error",{position:toast.POSITION.TOP_RIGHT});
          navigate("/");
        }
      })
      .catch(error=>{
        console.log(error.response);
      })
    }
    return(
    <div className="section-body">
        <div>
            <Navbar/>
        </div>
        <div class="container">
      <form onSubmit={(e)=>login(e)}>
        <div class="title">Login</div>
        <div class="input-box underline">
          <label>Email</label>
          <input type="text" placeholder="Enter Your Email" va
          onChange={(e) => {
            setUserName(e.target.value);
          }
        } required/>
        </div>
        <div class="input-box">
          <label>Password</label>
          <input type="password" placeholder="Enter Your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }
        } required/>   
        </div>
        <div class="input-box button">
          <input type="submit" name="" value="Continue" />
        </div>
      </form>
    </div>
    </div>
    );
};

export default Login