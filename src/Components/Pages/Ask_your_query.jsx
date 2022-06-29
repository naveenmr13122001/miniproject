import React,{useState,useEffect} from "react"
import Axios from "axios";
import Navbar_login from "../Navbar_Login/Navbar_login";
import Sidebar from "../Sidebar/Sidebar";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import "../Style/Ask_your_query.css"

toast.configure();

const Ask_your_query = () =>{
    const [question_title, setQuestionTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags,setTags] = useState('');

    const navigate = useNavigate();


    const question = (e) =>{
      e.preventDefault();
      Axios.post("http://localhost:3001/question",{title:question_title,body_content:body,tags_content:tags})
      .then((response)=>{
        console.log(response);
        if(response.data.message==="1"){
          toast.success("Question added successfull",{position:toast.POSITION.TOP_RIGHT});
          navigate("/question");
        }
      })
      .catch(error=>{
        console.log(error);
      })
    }

    const [dbtags,setdbtags] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:3001/api/question/storedtags")
      .then(res=>{
          console.log(res);
          setdbtags(res.data);
      })
      .catch(err=>{
          console.log(err);
      })
  })    


    return(
        <div className="ask_your_query-body">
            <Navbar_login/>
            <Sidebar/>
            <div class="container">
      <form onSubmit={(e)=>question(e)}>
        <div class="title">Question Box</div>
        <div class="input-box underline">
          <label>Title:</label>
          <input type="text" placeholder="Enter Your Title"
            onChange={(e) => {
              setQuestionTitle(e.target.value);
            }
          }
           required/>
        </div>
        <div class="input-box">
          <label>Body</label>
          <input type="text" placeholder="Enter Your Body"
          onChange={(e) => {
            setBody(e.target.value);
          }
        }
           required/>   
        </div>
        <div class="input-box">
          <label>Tags</label><br/>
          <select name="tags" id="tags-name" onChange={(e)=>{
            setTags(e.target.value);
          }}>
            {dbtags.map((tag)=>(
              <option value={tag.TAGS_NAME}>{tag.TAGS_NAME}</option>
            ))}
          </select>
        </div>
        <div class="input-box button">
          <input type="submit" name="" value="Continue"/>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Ask_your_query;