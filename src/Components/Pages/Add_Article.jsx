import React,{useState,useEffect} from "react"
import Axios from "axios";
import Navbar_login from "../Navbar_Login/Navbar_login";
import Sidebar from "../Sidebar/Sidebar";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../Style/Ask_your_query.css"

toast.configure();
const Add_Artical = () =>{

    const [article_title,setarticle_title] = useState('');
    const [article_content,setarticle_content] = useState('');
    const [link,setlink] = useState('');

    const navigate = useNavigate();

    const add_article = (e) =>{
      e.preventDefault();
      Axios.post("http://localhost:3001/article", {Title:article_title,Content:article_content,Link:link})
      .then((response)=>{
        if(response.data.message === "1"){
          toast.success("Article Added successfull",{position:toast.POSITION.TOP_RIGHT});
          navigate("/article");
        }
        if(response.data.message === "2"){
          toast.error("Article Adding Error",{position:toast.POSITION.TOP_RIGHT});
          navigate("/");
        }
      })
      .catch(error=>{
        console.log(error.response);
      })
    }

    return(
        <div className="ask_your_query-body">
            <Navbar_login/>
            <Sidebar/>
            <div class="container">
      <form onSubmit={(e)=>add_article(e)}>
        <div class="title">Add Article</div>
        <div class="input-box underline">
          <label>Title:</label>
          <input type="text" placeholder="Enter Your Title"
           onChange={(e) => {
            setarticle_title(e.target.value);
          }}
           required/>
        </div>
        <div class="input-box">
          <label>Article_Content</label>
          <input className="artical_content" type="text" placeholder="Enter Your Content"
          onChange={(e) => {
            setarticle_content(e.target.value);
          }}required/>   
        </div>
        <div class="input-box">
          <label>Link</label>
          <input className="artical_content" type="text" placeholder="Enter Your Link"
          onChange={(e) => {
            setlink(e.target.value);
          }}
           required/>   
        </div>
        <div class="input-box button">
          <input type="submit" name="" value="Continue"/>
        </div>
      </form>
    </div>
  </div>
    );
};

export default Add_Artical