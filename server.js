'use strict'

var express = require("express"),
app = express(),
router = require("./routes"),
path = __dirname + '/views/',
port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000,
host = process.env.OPENSHIFT_NODEJS_IP;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('./'));
app.use("/",router);
app.use('*',function(req,res){
  res.render('pages/404');
});

app.listen(port, host, function(){
  host = host || 'localhost';
  console.log('Server is running at '+ host  + ':' + port);
});