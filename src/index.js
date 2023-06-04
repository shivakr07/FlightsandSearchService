const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig')

const ApiRoutes = require('./routes/index')

const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () =>{

    // create the express Object
    const app = express();

    //middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}))

    app.use('/api', ApiRoutes)

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
        // console.log(process.env);
        //creating te city / testing as we are in main index
        // const repo = new CityRepository();
        // repo.createCity({name : "Lucknow"});
    })
}

setupAndStartServer(); 