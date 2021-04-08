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
        console.log(request)

    }); 

    const setAuthToken = data => {
        return api.setHeader('Authorization',data.access_token)
    }

    const signIn = requestData => api.post('/login', {
        email: requestData.email ? requestData.email : '', 
        password: requestData.password ? requestData.password : ''
    }); 


    return {
        signIn, 
        setAuthToken, 
    }
}

export default{
    create, 
}