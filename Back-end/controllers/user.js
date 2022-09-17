const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
const {EXPIRATION_TIME} = require("../const");

const handleError = (error) => {
    let message = {text: '', code: 0}
    console.log(error);
    if (error.message === 'Incorrect email') {
        message.text = 'Pass valid e-mail';
        message.code = 'AL1'
    }
    if (error.message == 'Incorrect password') {

        message.text = 'Pass correct password';
        message.code = 'AL2'
    }

    return message;
}

const createToken = (id) => {
    return jwt.sign({id}, 'User key', {
        // 3 days in milliseconds
        expiresIn: EXPIRATION_TIME
    });
}

/** Controller, create new user is mongoDB, also create jwt token */
module.exports.register_post = async (req, res) => {
    const {email, password, username} = req.body;

    try {
        const user = await UserModel.create({email, password, username});
        // set jwt token to cookie
        const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,      // 3 days in milliseconds
            expiresIn: 3 * 60 * 60 * 24 * 1000
        });
        res.status(201).json({data: user, status: 201});
    } catch (err) {
        // console.log(err);
        handleError(err);
        res.status(400).json();
    }
}


