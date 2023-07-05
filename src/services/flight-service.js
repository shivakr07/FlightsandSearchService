const {FlightRepository, AirplaneRepository} = require('../repository/index');
const { compareTime} = require('../utils/helper')
class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try{ 
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: 'Arrival time cant be smaller than departure'}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data, totalSeats:airplane.capacity}
            );
            return flight;
        } catch(error) {
            console.log('Something went wrong in the service layer');
            throw{error};
        }

    }
    async getFlightData() {
        //todo
    } 
}
module.exports = FlightService;

/**
 * {
 *    flightNumber,
 *    airplaneId,
 *    departureAirportId,
 *    arrivalAirportId,
 *    arrivalTime,
 *    departureTime,
 *    price,
 *    totalSeats  --> from airplane  
 *    / first logical thing in our service /
 *    / that means i need airplane repository also /
 * }  
 */