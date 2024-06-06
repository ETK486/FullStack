const express = require('express');
const fs=require('fs');
const app=express();
app.get('/',(req,res)=>{
    res.send("Vanakkam da mapla");
});
app.get('/Theni',(req,res)=>{
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
    console.log(`Vetri Vetri Server Run Aaguthu on ${port}`);
});