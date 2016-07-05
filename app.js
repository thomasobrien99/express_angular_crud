const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");

app.use('/js', express.static(__dirname +"/public/js"));
app.use('/css', express.static(__dirname +"/public/css"));
app.use('/templates', express.static(__dirname+"/public/templates"));

app.use(bodyParser.json({extended:true}));

app.use('/cars', routes.cars)
app.use('/', (req, res)=>{
	res.sendFile(__dirname+'/index.html');
})

app.listen(3000, function(){
	console.log("Server started on port 3000...")
});