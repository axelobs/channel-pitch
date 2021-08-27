import axios from 'axios';

axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';

async function onSubmit(endpoint, data) {
    try {
        const response = await axios.post(endpoint, data);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
}

async function postContact(data){
    return axios.post('/api/contacts', data)
}

async function getCompanyTypes(){
    return axios.get('/api/company-types')
}

export {
    onSubmit,
    postContact,
    getCompanyTypes
}