const {CityService}  = require('../services/index')

const cityService  = new CityService();

/*when you will create an api which will help you to create a city then
reques type = POST
data -> req.body
*/
const create = async(req, res) => {
    try{
        const city = await cityService.createCity(req.body)
        return res.status(201).json({
            data : city,
            success : true,
            message : 'Successfully created the city',
            err : {} // shows no error 
        })
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to create a city',
            err : error
        })
    }
}
// DELETE -> /city/:id
const destroy = async(req, res) => {
    try{
        const response = await cityService.deleteCity(req.params.id)
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted the city',
            err : {} // shows no error 
        })
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to delete the city',
            err : error
        })
    }
}

//patch -> /city/:id -> req.body
const update = async(req, res) => {
    try{
        const response = await cityService.updateCity(req.params.id, req.body)
        return res.status(200).json({
            data : city,
            success : true,
            message : 'Successfully updated a city',
            err : {} // shows no error 
        })
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to update the city',
            err : error
        })
    }
}

//GET -> /city/:id
const get = async(req, res) => {
    try{
        const response = await cityService.getCity(req.params.id)
        return res.status(200).json({
            data : city,
            success : true,
            message : 'Successfully fetched a city',
            err : {} // shows no error 
        })
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to get the city',
            err : error
        })
    }
}
module.exports = {
    create,
    destroy,
    get,
    update
}

