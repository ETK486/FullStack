const { Worker, isMainThread, workerData } = require('worker_threads');
const express = require('express');
if (isMainThread) {
  
  const numWorkers = 3; 
  const startPort = 3000; 

  for (let i = 0; i < numWorkers; i++) {
    const port = startPort + i;
    new Worker(__filename, { workerData: port });
  }
} else {
  const port = workerData;
  const app = express();
if (port==3000){
  app.get('/', (req, res) => {
    res.send(`Hello, world! from server on port ${port}`);
  });
}
else if (port==3001){
    app.get('/',(req,res)=>{
        res.send(`Hi this is another Message from Server on ${port}`);
    });
}
else if (port==3002){
    app.get('/',(req,res)=>{
        res.send(`This is the End Statement on ${port}`);
    });
}

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
