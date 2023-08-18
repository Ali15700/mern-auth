const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test , registerUser} = require('../controller/authController')

//middleware

router.use(
    cors({
        credientials: true,
        origin: 'http://localhost:3000'
    })
)

router.get('/', test)
router.post('/register', registerUser)

module.exports = router