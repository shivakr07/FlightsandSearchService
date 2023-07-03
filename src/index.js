const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig')

const ApiRoutes = require('./routes/index')

// const CityRepository = require('./repository/city-repository');
const {City, Airport} = require('./models/index')
// const db = require('./models/index');

const setupAndStartServer = async () =>{

    // create the express Object
    const app = express();

    //middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}))

    app.use('/api', ApiRoutes)

    app.listen(PORT, async() => {
        console.log(`Server started at ${PORT}`);
        // console.log(process.env);
        //creating te city / testing as we are in main index
        // const repo = new CityRepository();
        // repo.createCity({name : "Lucknow"});

        // ---------------------------------------
        // const airports = await Airport.findAll({
        //     include : City
        // });
        // console.log(airports);

        // db.sequelize.sync({alter : true});
        const city = await City.findOne({
            where : {
                id : 8
            }
        });
        const airports = await city.getAirports();
        console.log(city, airports)
        // const newAirport = await Airport.findOne({
        //     where : {
        //         id : 9
        //     }
        // });
        // await city.addAirport(newAirport)
    })
}

setupAndStartServer(); 