import React,{useState,useEffect} from "react"
import Axios from "axios";
import "./Rightsidebar.css";
import "../Question_Ask/Question.css"
const Rightsidebar = () =>{
    const [tags,settags] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/question/tags")
        .then(res=>{
            console.log(res);
            settags(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    })
    return(
            <div className="tag-div">
            <div className="tag-header">
                <center><a href="/">Question Related Tags</a></center>
            </div>
            <div className="tag-nav"></div>
                <nav className="tag-nav-main">
                    <ul className="tag-nav-ul">
                        {tags.map(tag=>(
                            <li className="tags-q main-title">{tag.TAGS}</li>
                        ))}
                    </ul>
                </nav>
            </div>            
    );
};

export default Rightsidebar