const { Worker, isMainThread, workerData } = require('worker_threads');
const express = require('express');
if (isMainThread) {
  
  const numWorkers = 30; 
  const startPort = 8080; 

  for (let i = 0; i < numWorkers; i+=10) {
    const port = startPort + i;
    new Worker(__filename, { workerData: port });
  }
} else {
  const port = workerData;
  const app = express();
if (port==8080){
  app.get('/', (req, res) => {
    res.send(`Hello, world! from server on port ${port}`);
  });
}
else if (port==8090){
    app.get('/',(req,res)=>{
        res.send(`Hi this is another Message from Server on ${port}`);
    });
}
else if (port==8100){
    app.get('/',(req,res)=>{
        res.send(`This is the End Statement on ${port}`);
    });
}

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
