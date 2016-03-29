var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://aravind:aravind123@ds059125.mongolab.com:59125/heroku_xqxl2mcv');


var bikesSchema = mongoose.Schema({
  bike_id: String,
  lat: String,
  long: String,
  owner: String
});

var autoIncrement = require("mongoose-auto-increment");
    autoIncrement.initialize(mongoose.connection)
    bikesSchema.plugin(autoIncrement.plugin, {
           model: 'bikesSchema',
            field: 'bike_id',
            startAt: 1,
            incrementBy: 1
    });

var fenceShema = new mongoose.Schema({
            str: String
    });
    var geo = mongoose.model('fence', fenceShema);

        router.get('/fence',function(req, res){
               geo.find({},function(err, docs){
                        if(err) res.json(err);
                        return res.send(docs);
                    });
            });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
console.log("Connected to DB");

var bikes = mongoose.model('bikes', bikesSchema);
/* GET users listing. */
router.get('/getAll', function(req, res, next) {
	 bikes.find({}, function(err, result){
    if ( err ) throw err;
         return res.send(result);
  });


 });

    router.post('/findById', function(req, res, next) {
        console.log(req.body);

 bikes.find({bike_id: req.body.bike_id}, function(err, result){
                           if ( err ) throw err;
                            console.log(result);
                        return res.send(result[0]);
                            });

            });

    router.post('/create', function(req, res, next) {
            var bike = new bikes();		// create a new instance of the Bear model
            if(!req.body.lat)
                {
                    res.json({ message: 'lat parameter is missing !' });
            }
            else if(!req.body.lng)
                {
                    res.json({ message: 'lng parameter is missing !' });
            }
            else if(!req.body.Owner)
                {
                    res.json({ message: 'Owner parameter is missing !' });
            }
            else {
                    bike.lat = req.body.lat;
                    bike.long = req.body.lng;
                    bike.owner = req.body.Owner;
                    bike.save(function (err) {
                        if (err)
                                            res.send(err);
                                    console.log("saved");
                                    res.json({message: 'Bike created !'});

                        });
            }

    });


router.post('/update', function(req, res, next) {
    console.log(req.body);
	 bikes.update({bike_id : {$eq: req.body[0].bike_id}}, {$set: req.body[1]}, function(err, result){
    if ( err ) throw err;
    console.log(result);
         return res.send(result);
     });
});

router.get('/create', function(req, res, next) {
var bike1 = new bikes({
    bike_id: "101",
  lat: "1000",
  long: "1000",
  owner: "ownerName"
  });

  bike1.save(function(err){
    if ( err ) throw err;
    console.log("Bike Created Successfully");
  });
});



    process.on('SIGINT', function() {
         mongoose.connection.close(function () {
             console.log('Mongoose disconnected on app termination');
             process.exit(0);
         });
     });

});

module.exports = router;
