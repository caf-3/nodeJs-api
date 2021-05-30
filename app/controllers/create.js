const User = require('../models/user');

module.exports.create = async (req, res) => {
    try{
        const {name, phone} = req.body;
        if(!name || !phone){
            return res.status(401).json({
                message: "Add all fields please"
            });
        }
        const createdUser = await User.create({name, phone});
        //createdUser.anotherField = 'Another field';
        return res.status(200).json({
            createdUser
        });
    }catch(err){
        return res.status(500).json({
            message: "There was an error creating account "+err
        });
    }
}