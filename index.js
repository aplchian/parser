var express = require("express");
var app = express();
var useragent = require('express-useragent');


var userInfo = {
	ipaddress: null,
	language: null,
	OS: null
}

app.enable('trust proxy');
app.use(useragent.express());

app.get("/", function(req, res){
	userInfo.ipaddress = req.ip;
	userInfo.language = req.acceptsLanguages()[0];
	userInfo.software = req.useragent.os;
	console.log(req.ip);
	res.send(JSON.stringify(userInfo));
})

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function(){
	console.log('Node app is now running on port', app.get('port'));
});