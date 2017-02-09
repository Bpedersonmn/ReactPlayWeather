var axios = require('axios');

const OWM_URL='http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=10e23330a11d229c49af863d0b4ff5bb';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OWM_URL}&q=${location}`;

       return axios.get(requestUrl).then(function(resp) {
           debugger;
            if (resp.data.cod && resp.data.messsage) {
                throw new Error(resp.data.messsage);
            } else {
                return resp.data.main.temp;
            }
        }, function(resp) {
            throw new Error(resp.data.messsage);
        })
    }
}