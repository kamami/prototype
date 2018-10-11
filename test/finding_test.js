const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe Tests

describe('Finding Records', function () {

    var char;


    beforeEach(function (done) {
         char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function() {
            done();
        });
    })
    //Create Tests
    it('Finds one record from the datatbase', function(done) {

        MarioChar.findOne({name: 'Mario'}).then(function (result) {
            assert(result.name === 'Mario');
            done();
        })
    });
    //next test
    it('Finds one record by ID from the datatbase', function(done) {

        MarioChar.findOne({_id: char._id}).then(function (result) {
            assert(result._id.toString() === char._id.toString());
            console.log(result.name);
            done();
        })
    });
});