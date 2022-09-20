const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
const {EXPIRATION_TIME} = require("../const");

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
        res.status(201).json({payload: {username: user.username, id: user._id}, status: 201});
    } catch (err) {
        let error = {message: "", key: ""};
        if (err.message.includes('duplicate key error collection') && err.message.includes('email')) {
            error.message = 'This e-mail is already assigned to other account';
            error.key = 'email';
        } else if (err.message.includes('duplicate key error collection') && err.message.includes('username')) {
            error.message = 'This nickname is already used';
            error.key = 'username';
        } else if (err.message.includes('duplicate key error collection') && err.message.includes('password')) {
            error.message = 'Invalid password';
            error.key = 'password';
        }
        res.status(400).json({error, code: 400, message: "FAILED"});
    }
}

module.exports.loginPost = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await UserModel.login(email, password);
        // set jwt token to cookie
        const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,      // 3 days in milliseconds
            expiresIn: EXPIRATION_TIME
        });
        res.status(200).json({payload: {id: user._id, username: user.username}, status: 200});
    } catch (err) {
        res.status(400).json({code: 400, message: "FAILED"});
    }
}

module.exports.authenticateToken = undefined;
