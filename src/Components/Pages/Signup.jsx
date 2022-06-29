import React,{useState} from "react"
import Axios from "axios";
import Navbar from "../Navbar/HomeNavbar";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

toast.configure();
const Signup = () =>{
  const [usernameReg, setUserName] = useState('');
  const [passwordReg, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');


  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", { username: usernameReg, password: passwordReg,email:username,phone:phone})
    .then((response)=>{
      console.log(response);
      if(response.data.message === "1"){
        toast.success("Signup successfull",{position:toast.POSITION.TOP_RIGHT});
        navigate("/login");
      }
      if(response.data.message === "2"){
        toast.error("Signup error Not a SSN Domain",{position:toast.POSITION.TOP_RIGHT});
        navigate("/");
      }
      if(response.data.message==="3"){
        toast.error("Signup error with server",{position:toast.POSITION.TOP_RIGHT})
        navigate("/");
      }
    })
    .catch(error=>{
      console.log("correct error");
      console.log(error.response);
    })
  }
    return(
      <div className="section-body">
        <div>
            <Navbar/>
        </div>
    <div class="container">
      <form onSubmit={(e)=>register(e)} >
        <div className="title">Signup</div>
        <div className="input-box underline">
        <label for="Email">Email</label>
          <input type="text" placeholder="Enter Your Email"
          onChange={(e) => {
            setUserName(e.target.value);
          }
          }
          required/>
          <div className="underline"></div>
        </div>
        <div className="input-box">
        <label for="password">Create Password</label>
          <input type="password" placeholder="Enter Your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }
        }
          required/>
          <div class="underline"></div>
        </div>
        <div className="input-box">
        <label for="username">User Name</label>
          <input type="text" placeholder="Enter Your Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }
        }
          required/>
          <div class="underline"></div>
        </div>
        <div className="input-box">
        <label for="phone">Phone</label>
          <input type="text" placeholder="Enter Your Phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }
        }
          required/>
          <div class="underline"></div>
        </div>
        <div className="input-box button">
          <input type="submit" name="" value="Continue"/>
        </div>
      </form>
    </div>
    </div>
    );
};
export default Signup