var app = express();
var qpx = require('./qpx-client.js');

app.post('/', function(req,res){
    var flight = qpxClient.search(searchConfig, function (err, data) {
    console.log('\n-------------search-------------');
    if (err) {
        console.log('ERROR: qpxClient.search: ' + err);
    } else {
        console.log(util.inspect(data, { depth : 8 }));
    }
});     
});