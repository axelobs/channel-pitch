import axios from 'axios';

axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';

function postEventAttendance(data, eventId) {
    const endpoint = `/api/v1/events/${eventId}/attendances`;
    return axios.post(endpoint, data);
}

export {
    postEventAttendance
}