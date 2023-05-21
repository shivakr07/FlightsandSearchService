// const City = require('../models/city');
const { City } = require('../models/index');

class CityRepository {

    // async createCity(obj) { //{name : "Lucknow"} or use destructuring
    async createCity({name}) {
        try{
            const city = await City.create({
                // name : name // or 
                //name (if key and value is same then you can write it)
                name
            });
            return city;
        }catch (error){
            console.log("something went wrong in repository layer");
            throw(error);
        }
    }

    async deleteCity(cityId) {
        try{
            await City.destroy({
                where : {
                    id : cityId
                }
            });
            return true;
        }catch(error){
            console.log("something went wrong in repository layer");
            throw(error);
        }
    }

    async updateCity(cityId, data) {
        try{
            const city = await City.update(data, {
                where : {
                    id : cityId
                }
            });
            return city
        }catch (error){
            console.log("something went wrong in the repository layer");
            throw(error);
        }
    }

    async getCity(cityId) {
        try{
            const city = await City.findByPk(cityId);
            return city;
        }catch (error){
            console.log("something went wrong in the repository layer");
            throw(error);
        }
    }
}
 
module.exports = CityRepository;