const { Router } = require("express");
const express = require("express");
const db  = require("../database/database");
const db1 = require("../database/database1");
const db2 = require("../database/database2");
const db3 = require("../database/database3");
const db4 = require("../database/database4");
const db5 = require("../database/database5");
const router = express.Router();


router.get("/", async (req,res)=>{
    try{
        let result = await db.all();
        res.json(result);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/tags", async (req,res)=>{
    try{
        let result1 = await db1.all();
        res.json(result1);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});


router.get("/main_tags",async (req,res)=>{
    try{
        let result2  = await db2.all();
        res.json(result2);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/answers",async (req,res)=>{
    try{
        let result3  = await db3.all();
        res.json(result3);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/article",async (req,res)=>{
    try{
        let result4  = await db4.all();
        res.json(result4);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/storedtags",async (req,res)=>{
    try{
        let result5  = await db5.all();
        res.json(result5);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});


module.exports = router;