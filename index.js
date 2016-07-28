var express = require("express");


var userInfo = {
	"ipaddress": null,
	"language": null,
	"software": null
}


app.get("/", function(req, res){
	res.send(JSON.stringify(userInfo));
})

app.set('port', (process.enc.PORT || 5000));

app.listen(app.get('port'), function(){
	console.log('Node app is now running on port', app.get('port'));
});