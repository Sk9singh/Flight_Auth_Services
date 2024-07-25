const express = require("express");

const { PORT } = require('./config/serverConfig');

const app = express();

const PrepareAndStartServer = () => {
  app.listen(PORT, ()=>{
    console.log(`Server Started ON Port: ${PORT}`);
  });
}

PrepareAndStartServer();