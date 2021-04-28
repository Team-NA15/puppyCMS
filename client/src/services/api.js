import apisauce from 'apisauce'; 
let token = null; 

const create = baseURL => {
    const api = apisauce.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache',
            'Accept': 'text/html,application/json',
            'Content-Type': 'application/json; charset=utf-8'
          },
          timeout: 6000
    }); 

    api.addResponseTransform(response => {
        console.log(response)
        if (response.ok) {
            if (response.data.token) {
                console.log('inside something to get jwt and set', response.access_token, 'response for tokjen')
                token = response.headers.authentication
            }
        }
    }); 

    api.addRequestTransform((request) => {
        console.log('request', request)

    }); 

    const setAuthToken = token => api.setHeader('Authorization', token); 
        

    const removeAuthToken = () => api.deleteHeader('Authorization'); 
    

    const signIn = requestData => api.post('/login', {
        email: requestData.email ? requestData.email : '', 
        password: requestData.password ? requestData.password : ''
    }); 

    const getTodaysAppointments = () => api.get('/get-todays-appointments'); 

    const updateAppointment = requestData => { 
        return api.put('/appointment', {
            prevAppt: requestData.prevAppt ? requestData.prevAppt : {}, 
            updates: requestData.updates ? requestData.updates : {}
        })
    } 

    const searchDogs = search => {
        return api.get(`/search-dogs?search=${search ? search : ''}`)
    }

    const checkInWithAppointment = appt => api.put('/check-in-appointment', appt); 

    const checkOutAppointment = appt => api.put('/check-out-appointment', appt); 

    const newDogSignUp = dogData => api.post('/new-dog', dogData); 

    const newAppointment = apptData => api.post('/new-appointment', apptData); 

    const fetchAppointmentHistory = dogData => console.log('called'); 

    return {
        signIn, 
        setAuthToken, 
        removeAuthToken,
        getTodaysAppointments,
        updateAppointment, 
        searchDogs,
        checkInWithAppointment,  
        checkOutAppointment, 
        newDogSignUp, 
        newAppointment, 
    }
}

export default{
    create, 
}