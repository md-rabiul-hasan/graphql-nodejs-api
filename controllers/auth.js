const { validationResult } = require('express-validator/check');
const bcrypt               = require('bcryptjs');
const jwt                  = require('jsonwebtoken');
const User                 = require('./../models/user');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error('Validation Failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    const { name, email, password } = req.body;

    try{
        // generate hashed password
        const hashedPassword = await bcrypt.hash(password, process.env.PASSWORD_SALT);

        const user = new User({
            name:name,
            email: email,
            password: hashedPassword
        });
        const result = await user.save();
        res.status(201).json({
            message: 'User created',
            user:{
                name: result.name,
                email: result.email
            }
        })
    } catch (err) { // catch error
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }

}