const express = require('express');

const router = express.Router();

//import validator
const { userRegisterValidator } = require('../validators/auth')
const { runValidation } = require('../validators')

//import from controller
const { register } = require('../controllers/authController');


/**
 * here is where the front end will contact. the api endpoint for registering a user
 * each time a user wants to register, the front end will point an http(?) request to this location 
 * and execute this code
 */
// router.get('/register', register);
router.post('/register', userRegisterValidator, runValidation, register);
// router.post('/register', (req, res) => {
//     console.log(req.body)
// });

module.exports = router;