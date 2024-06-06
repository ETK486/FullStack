const express = require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Vanakkam da mapla");
});
app.get('/Theni',(req,res)=>{
    res.send("./Trial.txt");
});
const port=8080;
app.listen(port,()=>{
    console.log(`Vetri Vetri Server Run Aaguthu on ${port}`);
});