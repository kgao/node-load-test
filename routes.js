var express = require('express'),
router = express.Router(),
LoadTestExpert = require('./src/loadtest');


router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  res.render('pages/index');
});

router.get('/about',function(req,res){
  res.render('pages/about');
});

router.get('/contact',function(req,res){
  res.render('pages/contact');
});

router.get('/test/:id',function(req,res){
  LoadTestExpert.test(req.params.id, function(e){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(e, null, 2));
  });
});


module.exports = router;