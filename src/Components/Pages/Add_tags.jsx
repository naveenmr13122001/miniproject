import React,{useState} from "react"
import Axios from "axios";
import Navbar_login from "../Navbar_Login/Navbar_login";
import Sidebar from "../Sidebar/Sidebar";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import "../Style/Ask_your_query.css"

toast.configure();

const Add_tags = () =>{
    const [tags_title,setTagsTitle]=useState('');
    const [tags_content,setTagsContent]=useState('');
    const navigate = useNavigate();

    const question = (e) =>{
      e.preventDefault();
      Axios.post("http://localhost:3001/tags",{tag_Name:tags_title,Content:tags_content})
      .then((response)=>{
        console.log(response);
        if(response.data.message==="1"){
          toast.success("Tags added successfull",{position:toast.POSITION.TOP_RIGHT});
          navigate("/tags");
        }
      })
      .catch(error=>{
        console.log(error);
      })
    }

    return(
        <div className="ask_your_query-body">
            <Navbar_login/>
            <Sidebar/>
            <div class="container">
      <form onSubmit={(e)=>question(e)}>
        <div class="title">Tags</div>
        <div class="input-box underline">
          <label>Tag Name:</label>
          <input type="text" placeholder="Enter Your Title"
            onChange={(e) => {
              setTagsTitle(e.target.value);
            }
          }
           required/>
        </div>
        <div class="input-box">
          <label>Tag Content:</label>
          <input type="text" placeholder="Enter Your Content"
          onChange={(e) => {
            setTagsContent(e.target.value);
            }
          }
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

export default Add_tags