let router= require('express').Router()

let fs = require('fs');

router.get('/', function(req, res) {
    var dinosaurs = fs.readFileSync('./dinosaurs.json');
   let dinoData = JSON.parse(dinosaurs);
   //res.send(dinoData);
  res.render('index', {dinoData});
  });

  router.post('/', function(req, res) {
    var dinosaurs = fs.readFileSync('./dinosaurs.json');
   let dinoData = JSON.parse(dinosaurs);

   dinoData.push({name: req.body.name, type: req.body.type});
    console.log(dinoData);
   fs.writeFileSync('./dinosaurs.json',JSON.stringify(dinoData))
   res.redirect('/dinosaurs');
  });

  router.get('/new',(req,res)=>{
   // res.send('test');
    res.render('new');
  })
  
  router.delete('/:idx',(req,res)=>{
    let dinosaurs = fs.readFileSync('./dinosaurs.json');
    let dinoData = JSON.parse(dinosaurs);
    dinoData.splice(req.param.idx,1)
    fs.writeFileSync('./dinosaurs.json',JSON.stringify(dinoData))
    res.redirect('/dinosaurs');
   })

  router.get('/:id', function(req, res) {
    var dinosaurs = fs.readFileSync('./dinosaurs.json');
   let dinoData = JSON.parse(dinosaurs);
    let dinoIndex = parseInt(req.params.id);
   res.send(dinoData[dinoIndex]);
   });



//Export the routes so that we can include them in our file
module.exports = router;