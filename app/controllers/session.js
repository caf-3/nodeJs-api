const User = require('../models/user');

module.exports.create = async (req, res) => {
    try{
        req.session.user = {};
        const username = 'adam';
        req.session.user.username = username;
        req.session.user.salary = (Math.random()*10000000).toString().slice(0, 7);

        let sessiondData = req.session;

        return res.status(200).json({
            response: 'HTTP 2000',
            sessiondData
        });
    }catch(err){
        return res.status(500).json({
            message: "There was an error creating account "+err
        });
    }
}


module.exports.get = async (req, res) => {
    try{
        let sessiondData = req.session;

        return res.status(200).json({
            response: 'HTTP 2000',
            sessiondData
        });
    }catch(err){
        return res.status(500).json({
            message: "There was an error creating account "+err
        });
    }
}
