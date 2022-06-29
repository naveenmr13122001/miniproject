const express = require("express");
const { Router } = require("express");
const mysql = require("mysql");
const cors = require("cors");
const apiRouter = require("./Routes/routes.js");
const { rmSync } = require("fs");
const { allowedNodeEnvironmentFlags } = require("process");

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/question',apiRouter);

let a = "";

const db = mysql.createConnection({
    user:"root",
    password:"password",
    host: "localhost",
    database: "MINI_PROJECT",
});

app.post('/register',(req,res)=>{
    const email = req.body.username;
    const password = req.body.password;
    const username = req.body.email;
    const phone = req.body.phone;
    const slice_email = email.slice(-10);
    if(slice_email === "ssn.edu.in"){
        db.query("INSERT INTO LOGIN(EMAIL,PASSWORD) VALUES (?,?);",[email,password],
            (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send({message:"1"});
            console.log("inserted");
        }else{
            res.send({message:"3"});
            console.log("error code")
        }
    })
    }else{
        res.send({message:"2"});
        console.log("error");
    }
    db.query("INSERT INTO USERLOGIN(EMAIL,USERNAME,PHONE) VALUES (?,?,?)",[email,username,phone],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            console.log("added");
        }
    }
    )
});

app.post('/login',(req,res)=>{
    const email = req.body.username;
    a = email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    db.query(
        "SELECT * FROM LOGIN WHERE EMAIL = ? AND PASSWORD = ?;",
        [email,password],
        (err,result)=>{
            if(err){
                res.send({err},err);
            }
            if(result.length>0){
                res.send({message:"1"})
            }
            else{
                res.send({message:"2"})
            }
        }
    )
})

app.post('/question',(req,res)=>{
    const title_s = req.body.title;
    const body_s = req.body.body_content;
    const tag_s = req.body.tags_content;
    console.log(title_s);
    console.log(body_s);
    console.log(tag_s);
    db.query("INSERT INTO QUESTION(QUESTION_TITLE,BODY,TAGS) VALUES (?,?,?);",
        [title_s,body_s,tag_s],
        (err,result)=>{
            if(err){
                res.send({err},err);
            }
            if(result){
                console.log("entered");
                res.send({message:"1"});
            }else{
                res.send({message:"2"});
            }
        }
    )
});

app.post('/answer',(req,res)=>{
    const answer_s = req.body.Answer;
    const title_s = req.body.Title;
    console.log(answer_s);
    console.log(title_s);
    if(answer_s == ""){
        res.send({message:"Empty"});
        console.log("empty");
    }else{
        db.query(
            "INSERT INTO ANSWER(ANSWER,QUESTION_TITLE) VALUES(?,?)",
            [answer_s,title_s],
            (err,result)=>{
                if(err){
                    res.send({err},err);
                }
                if(result){
                    console.log("entered");
                    res.send(result)
                }
            }
        )
    }
});

app.post('/tags',(req,res)=>{
    const tag_Name = req.body.tag_Name;
    const tag_content  = req.body.Content;
    console.log(tag_Name);
    console.log(tag_content);
    db.query("INSERT INTO TAGS(TAGS_NAME,TAGS_CONTENT) VALUES (?,?) ;",
        [tag_Name,tag_content],
        (err,result)=>{
            if(err){
                res.send({err},err);
            }
            if(result){
                console.log("entered");
                res.send({message:"1"});
            }else{
                res.send({message:"2"});
            }
        }
    )
});

app.post('/article',(req,res)=>{
    const article_Name = req.body.Title;
    const article_content  = req.body.Content;
    const link = req.body.Link;
    console.log(article_Name);
    console.log(article_content);
    console.log(link);
    db.query("INSERT INTO ARTICLE(ARTICLE_TITLE,ARTICLE_CONTENT,LINK) VALUES (?,?,?) ;",
        [article_Name,article_content,link],
        (err,result)=>{
            if(err){
                res.send({err},err);
            }
            if(result){
                console.log("entered");
                res.send({message:"1"});
            }else{
                res.send({message:"2"});
            }
        }
    )
});



app.listen(3001,()=>{
    console.log("running server");
});

module.exports = a;