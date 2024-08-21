const express = require('express');
const router = express.Router();
const Location = require('../models/location')

// Define routes
router.get('/', (req, res) => {
    res.send('Home route');
});

router.post('/', (req, res) => {

});

module.exports = router;

async function addToDB(){
    
    

    try{

    }finally{

    }
}