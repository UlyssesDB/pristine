const express = require('express')
const app = express()

app.get('/endpointName', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify("goodbye"))
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})