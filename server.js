var express = require('express'); // for the stack of the server
var app = express(); 
var bodyParser = require('body-parser'); // to parse the queries/ url
var fileSys = require('fs'); // to read and write to files if needed

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// initial testing for the server
app.get('/server', function(req, res){ 
    res.send('working');
});

// code to get input and send output to the browser
var stateData = fileSys.readFileSync("states.json"); // need a synchronous read here
var states = JSON.parse(stateData);
//console.log(states);

function invalid_request(req) {
    if (req && req.body) {
        if (req.body.latitude && req.body.longitude) {
            return false;
        }
    }
    return true;
}

//function to determine point inside a polygon
function isPresent(coordinate, boundary) {
    var x = coordinate[0];
    var y = coordinate[1];
    // flag to determine presence
    var present = false;
    // iterate over the entire boundary
    for (var i = 0, j = boundary.length - 1; i < boundary.length; j = i++) {
        var xi = boundary[i][0];
        var yi = boundary[i][1];
        var xj = boundary[j][0];
        var yj = boundary[j][1];
        // finding the interection by projecting rays
        var intersect = ((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) { present = !present };
    }
    return present;
};

app.post('/', function(req, res){
    console.log(req.body);
    if (invalid_request(req)) {
        res.status(400).send('Invalid Query');
        return;
    }
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    for (var state of states) {
        if (isPresent([longitude, latitude], state.border)) {
            res.send(state.state);
            return;
        }
    }
    res.send("The entered data is not in USA boundaries");
});


app.listen(8080);
console.log('server is working');