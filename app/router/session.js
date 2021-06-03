const express = require('express');
const router =  express.Router();

const SessionController = require('../controllers/session');

router.post('/create', SessionController.create);
router.get('/get', SessionController.get);

module.exports = router;