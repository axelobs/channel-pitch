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

export {
    onSubmit
}