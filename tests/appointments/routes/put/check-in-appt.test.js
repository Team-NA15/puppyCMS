const getAppt = require('../../../../controllers/appointments/CRUD/getAppointment'); 
const updateAppt = require('../../../../controllers/appointments/CRUD/updateAppointment'); 
const findDog = require('../../../../controllers/dogs/CRUD/getDog');
const checkIn = require('../../../../routes/appointments/put/check-in-appt'); 
const Appt = require('../../../../db/models').Appointments; 
const Dog = require('../../../../db/models').Dogs; 
require('mysql2/node_modules/iconv-lite').encodingExists('cesu8'); 

jest.mock('../../../../controllers/appointments/CRUD/getAppointment', () => {
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

jest.mock('../../../../controllers/appointments/CRUD/updateAppointment'); 

jest.mock('../../../../controllers/dogs/CRUD/getDog'); 

const MockRequest = (sessionData, body) => ({
    session: {sessionData}, 
    body
}); 

const MockResponse = () => {
    const res = {}; 
    res.send = jest.fn().mockReturnValue(res); 
    res.status = jest.fn().mockReturnValue(res); 
    res.json = jest.fn().mockReturnValue(res); 
    return res; 
}

describe('when we check in a dog with an appointment', () => {
    const updates = {
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
    }; 
    afterAll(() => {
        jest.resetAllMocks(); 
    }); 

    it('should check in existing dog with appointment', async () => {
        const req = MockRequest({}, updates); 
        const res = MockResponse(); 
        jest.spyOn(findDog, 'findDogByOwner').mockResolvedValue(Dog.build({
            id: 'lkasjdflkj232-lasdjf22384-lklireoweoirmccx',
            dog_name: 'Dro', 
            owner_first_name: 'Brandon', 
            owner_last_name: 'Corn', 
            breed: 'German Shephard', 
        })); 
        await checkIn(req, res); 
        expect(res.status).toHaveBeenCalledWith(200); 
    }); 

    it('should check in new dog with appointment', async () => {
        const req = MockRequest({}, updates); 
        const res = MockResponse(); 
        jest.spyOn(findDog, 'findDogByOwner').mockResolvedValue(Dog.build({
            dog_name: 'Dro', 
            owner_first_name: 'Brandon', 
            owner_last_name: 'Corn', 
            breed: 'German Shephard', 
        })); 
        await checkIn(req, res); 
        expect(res.status).toHaveBeenCalledWith(200); 
    }); 

    it('should not check in dog', async () => {
        getAppt.mockResolvedValue(null); 
        const req = MockRequest({}, {}); 
        const res = MockResponse(); 
        await checkIn(req, res); 
        expect(res.status).toHaveBeenCalledWith(400); 
    }); 
}); 
