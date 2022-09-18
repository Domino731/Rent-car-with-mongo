const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
const {EXPIRATION_TIME} = require("../const");
const {ACCESS_TOKEN_SECRET} = require("../mongo");

const handleError = (error) => {
    let message = {text: ''}
    if (error.message === 'Missing email') {
        message.text = 'Missing e-mail';
    } else if (error.message === 'E-mail must be unique') {
        message.text = 'This e-mail is already assigned to another account';
    } else if (error.message === 'Please, enter an valid e-mail') {
        message.text = 'Invalid e-mail';
    } else if (error.message === 'Missing password') {
        message.test = 'Missing password';
    } else if (error.message === 'Password is too short') {
        message.test = 'Password is too short';
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
module.exports.registerPost = async (req, res) => {
    const {email, password, username} = req.body;

    try {
        // create new user
        const user = await UserModel.create({email, password, username});

        // set jwt token cookie
        const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,
            expiresIn: 3 * 60 * 60 * 24 * 1000
        });

        // response
        res.status(201).json({data: {username: user.username, id: user._id}, status: 201});
    } catch ({message}) {
        res.status(400).json(message);
    }
}

module.exports.loginPost = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = {email, password};
        // set jwt token cookie
        // const token = createToken(user._id);
        // res.cookie('jwt', token, {
        //     httpOnly: true,
        //     expiresIn: 3 * 60 * 60 * 24 * 1000
        // });
        res.status(201).json({user});
    } catch (e) {
        console.log(e);
        res.status(201).json({message: "Error"})
    }
}

module.exports.authenticateToken = undefined;
