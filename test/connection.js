const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

//Connect to the DB before tests run
before(function(done){
    mongoose.connect('mongodb://localhost/kamamidb');

    mongoose.connection.once('open', function () {
        console.log('Connection has been made, now make fireworks...');
    done();

    }).on('error', function(error){
        console.log('Connection error:', error);
    })
})

//Drop the characters collection before each test

beforeEach(function (done) {
    //Drop the Collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})

