var QPXClient = require('qpx-client'),
    util = require('util'),
 
    options = {
        key: 'AIzaSyByRha-AaK6pAH25EAbjqeLvrSxP7fT5p4',
        timeout: 15000
    },
 
    searchConfig = {
        body: {
            "request": {
                "passengers": {
                    "adultCount": 1
                },
                "slice": [
                    {
                        "origin": "ORY",
                        "destination": "MAD",
                        "date": "2017-05-12"
                    }
                ],
                "solutions": 50
            }
        }
    },
 
    qpxClient = new QPXClient(options);
 
qpxClient.search(searchConfig, function (err, data) {
    console.log('\n-------------search-------------');
    if (err) {
        console.log('ERROR: qpxClient.search: ' + err);
    } else {
        console.log(util.inspect(data, { depth : 8 }));
    }
});