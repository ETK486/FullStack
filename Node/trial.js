const express = require('express');
const fs=require('fs');
const app=express();
app.get('/',(req,res)=>{
    res.send("Hi, Hello Everyone!");
});
app.get('/next',(req,res)=>{
    const filepath='Trial.txt';
    fs.readFile(filepath,(err,data)=>{
        if (err){
            return res.status(500).send("Error Occured");
        }
        res.set('Content-Type','text/plain');
        res.send(data);
    });
    
});
const port=8080;
app.listen(port,()=>{
    console.log(`Success, Hardwork never fails, Server is running on ${port}`);
});