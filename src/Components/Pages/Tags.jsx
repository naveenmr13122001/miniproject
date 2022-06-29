import React,{useState,useEffect} from "react"
import Navbar_login from "../Navbar_Login/Navbar_login";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import "../Style/Tags.css";
const Tags = () =>{
    const [main_tags,setmain_tags] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/question/main_tags")
        .then(res=>{
            console.log(res);
            setmain_tags(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    })
    return(
        <div className="section-body">
            <Navbar_login/>
            <Sidebar/>
            <div className="question-body">
                <div className="question-header">
                    <center><h1 className="question-h1">TAGS</h1></center>                    
                    <a href="/add_tags" className="question-button"><button className="quesiton-button-width"><center>ADD TAG</center></button></a>
                </div>
                <div className="tags-body">
                    {main_tags.map(tag=>(
                        <div className="tags-content">
                        <div className="tags-total">
                            <div className="header-content">{tag.TAGS_NAME}</div>
                            <div className="main-content">{tag.TAGS_CONTENT}</div>
                        </div>
                    </div>
                    ))} 
                </div>
            </div>
        </div>
    );
};

export default Tags