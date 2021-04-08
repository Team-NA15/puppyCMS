const request = require('supertest'); 
const app = require('../../../../server'); 
const Dog = require('../../../../db/models').Dogs; 
const Appt = require('../../../../db/models').Appointments; 
const checkIn = require('../../../../routes/appointments/post/check-in-no-appt'); 
const newAppt = require('../../../../controllers/appointments/CRUD/newAppointment'); 
let getDog = require('../../../../controllers/dogs/CRUD/getDog'); 

jest.mock('../../../../controllers/appointments/CRUD/newAppointment', () => {
    const Appt = require('../../../../db/models').Appointments; 
    const apptData = {
        dog_name: "Dro", 
        owner_first_name: "Brandon",
        owner_last_name: "Corn",   
        breed: "German Shephard",
        service: "daycare",
        arrival_date: "03/16/2021",
        depart_date: "03/16/2021 17:00:00", 
        cubby: 64,
        breakfast: true,
        breakfast_quant: "1 bag", 
    }
    let mockAppt = Appt.build(apptData); 
    return jest.fn().mockResolvedValue([mockAppt, 1]); 
}); 

  
jest.mock('../../../../controllers/dogs/CRUD/getDog');  


const mockRequest = (sessionData, body) => ({
    session: {data: sessionData}, 
    body, 
}); 

const mockResponse = () => {
    const res = {}; 
    res.send = jest.fn().mockReturnValue(res); 
    res.status = jest.fn().mockReturnValue(res);  
    res.json = jest.fn().mockReturnValue(res);  
    res.message = jest.fn().mockReturnValue(res);  
    return res; 
}

describe('POST/check-in-no-appointment', () => {
    let token; 
    const validAppt = {
        "dog_name": "Dro", 
        "owner_first_name": "Brandon",
        "owner_last_name": "Corn",   
        "breed": "German Shephard",
        "service": "daycare",
        "arrival_date": "03/16/2021",
        "depart_date": "03/16/2021 17:00:00", 
        "cubby": 64,
        "breakfast": true,
        "breakfast_quant": "1 bag",
    }
    const invalidAppt = {}; 
    
    afterEach(async () => {
        jest.resetAllMocks();
    }); 

    it('should check in a dog', async () => { 
        const mockDog = Dog.build({
            id: 'e9117ea0-bac0-4d21-9ec9-93f1805323a8',
            dog_name: 'Dro', 
            owner_first_name: 'Brandon', 
            owner_last_name: 'Corn', 
            breed: 'German Shephard'
        }); 
        jest.spyOn(getDog, 'findDogByOwner').mockResolvedValue(mockDog);   
        let req = mockRequest({}, validAppt);  
        const res = mockResponse();
        await checkIn(req, res); 
        expect(res.status).toHaveBeenCalledWith(201); 
    }); 

    it('should not check in a dog', async () => {
        jest.spyOn(getDog, 'findDogByOwner').mockResolvedValue({});
        let req = mockRequest({}, invalidAppt); 
        const res = mockResponse(); 
        await checkIn(req, res);  
        expect(res.status).toHaveBeenCalledWith(400);  
    }); 
}); 