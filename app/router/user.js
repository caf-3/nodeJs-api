const express = require('express');
const router =  express.Router();

const UserController = require('../controllers/create');

router.post('/create', UserController.create);

module.exports = router;