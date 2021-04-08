const findDog = require('../../../../controllers/dogs/CRUD/getDog'); 
const newAppt = require('../../../../controllers/appointments/CRUD/newAppointment'); 
const Appt = require('../../../../db/models').Appointments; 
const Dog = require('../../../../db/models').Dogs; 
const createAppt = require('../../../../routes/appointments/post/new-appointment'); 

jest.mock('../../../../controllers/appointments/CRUD/newAppointment', () => {
    const Appt = require('../../../../db/models').Appointments; 
    const apptData = {
        dog_name: "Dro", 
        owner_first_name: "Brandon",
        owner_last_name: "Corn",   
        breed: "German Shephard",
        service: "daycare",
        arrival_date: "03/16/2021", 
    }
    let mockAppt = Appt.build(apptData); 
    return jest.fn().mockResolvedValue([mockAppt, 1]); 
});

jest.mock('../../../../controllers/dogs/CRUD/getDog');


const MockRequest = (sessionData, body, query = 'false') => ({
    session: {data: sessionData}, 
        body, 
        query: {
            newDog: query
        }
    }
); 

const MockResponse = () => {
    const res = {};  
    res.status = jest.fn().mockReturnValue(res); 
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);  
    return res; 
}

describe('POST /new-appointment', () => {
    const validApptExistingDog = {
        dog_name: "Dro", 
        owner_first_name: "Brandon",
        owner_last_name: "Corn",   
        breed: "German Shephard",
        service: "daycare",
        arrival_date: "03/16/2021",
    }; 
    const validApptNewDog = {
        dog_name: 'Kale', 
        owner_first_name: 'Becca', 
        owner_last_name: 'Blackwell', 
        breed: 'Shiba Inu', 
        service: 'daycare', 
        arrival_date: '03/16/2021'
    }; 
    const invalidAppt = {};
    afterAll(() => {
        jest.resetAllMocks(); 
    }); 

    it('should create an appointment for existing dog', async () => {
        const req = MockRequest({}, validApptExistingDog); 
        const res = MockResponse();
        const dog = Dog.build({
            dog_name: "Dro", 
            owner_first_name: "Brandon",
            owner_last_name: "Corn",   
            breed: "German Shephard",
        }) 
        jest.spyOn(findDog, 'findDogByOwner').mockResolvedValue(dog); 
        await createAppt(req, res); 
        expect(res.status).toHaveBeenCalledWith(201);  
    }); 
    it('should create an appointment for a new dog', async () => {
        const req = MockRequest({}, validApptNewDog, 'true'); 
        const res = MockResponse(); 
        await createAppt(req, res); 
        expect(res.status).toHaveBeenCalledWith(201); 
    }); 
    it('should not create an appointment', async () => {
        newAppt.mockResolvedValue({}); 
        const req = MockRequest({}, invalidAppt); 
        const res = MockResponse(); 
        await createAppt(req, res); 
        expect(res.status).toHaveBeenCalledWith(400); 
    }); 
}); 