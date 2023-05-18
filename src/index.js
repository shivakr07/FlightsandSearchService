const express = require("express");

const { PORT } = require('./config/serverConfig')
const setupAndStartServer = async () =>{

    // create the express Object
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
        // console.log(process.env);
        
    })
}

setupAndStartServer(); 