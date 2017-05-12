var API = require('qpx-express');
 
var apiKey = 'AIzaSyByRha-AaK6pAH25EAbjqeLvrSxP7fT5p4';
var qpx = new API(apiKey);
 
var body = {
    "request": {
        "passengers": { "adultCount": 1 },
        "slice": [{
            "origin": origin,
            "destination": destination,
            "date": departureDate // YYYY-MM-DD 
          },
          {
            "origin": destination,
            "destination": origin,
            "date": returningDate // YYYY-MM-DD 
          }
        ]
      }
    };
 
qpx.getInfo(body, function(error, data){
    console.log('Heyy!', data);
});