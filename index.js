const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let lat = 0;
let long = 0;

app.listen(8080, () => {
    console.log("Started in port 8080")
})

app.get('/getGreeting', function (req, res) {
    res.send('Saludos desde express');
});

app.get('/location', (req, res) => {
    res.send('https://maps.google.com/?q='+lat+","+long)
})

app.post('/location', (req, res) => {
    
    console.log(req);
    lat = req.body.lat
    long = req.body.long
    //res.send("Latitude: " + lat + "\tLongitude: " + long)
    res.status(200).send()
    console.log("Latitude: " + lat + "\tLongitude: " + long)
})
