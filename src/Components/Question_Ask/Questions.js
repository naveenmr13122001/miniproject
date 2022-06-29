import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import {toast} from "react-toastify";
import "./Question.css"

const Questions = () =>{
    const [questions,setquestion] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/question")
        .then(res=>{
            console.log(res);
            setquestion(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    })

    const [answer1,setAnswer] = useState('');
    const [question_title,setquestion_title] = useState('');
    console.log(question_title);
    const navigate = useNavigate();
    var question;
    const answer_set = (e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/answer", {Answer: answer1,Title:question_title})
        .then((response)=>{
            console.log(response);
            if(response.data.message === "Empty"){
            toast.error("Enter the Answer",{position:toast.POSITION.TOP_RIGHT});
            }
            navigate("/question");
        })
    }
    
    const [answers,setanswers] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/question/answers")
        .then(res=>{
            console.log(res);
            setanswers(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    })

    return(
        <div className="question-body">
                <div className="question-header">
                    <center><h1 className="question-h1">QUESTIONS</h1></center>
                    <a href="/ask_your_query" className="question-button"><button className="quesiton-button-width"><center>ASK QUESTION</center></button></a>
                </div>
                <div className="question-field">
                    {questions.map(qb=>(
                        <div className="question-tag">
                            <div className="flex-div">
                            <span className="tags-q tags-title">TITLE:</span><span className="tags-q main-title">
                                {qb.QUESTION_TITLE}</span><br/>
                            <span className="tags-q tags-title">BODY:</span><span className="tags-q main-title">{qb.BODY}</span><br/>
                            <span className="tags-q tags-title">TAGS:</span><span className="tags-q main-title">{qb.TAGS}</span><br/>
                            <span className="tags-q tags-title">ANSWER:</span><span className="tags-q main">{qb.ANSWER}</span><br/>
                            {answers.map((answer)=>{
                                if(answer.QUESTION_TITLE===qb.QUESTION_TITLE){
                                    return(
                                        <div className="tags-q main-title">{answer.ANSWER}</div>
                                    )
                                }
                            })}
                            </div>
                            <input className="question-input" type="text" placeholder="Answer"
                            onChange={(e) => {
                                setAnswer(e.target.value);
                              }
                            } onClick={(e)=>{
                                setquestion_title(qb.QUESTION_TITLE);
                            }}/>
                            <button className="button-input" onClick={answer_set}><span className="content-button">submit</span></button>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Questions