const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const User = require("./../models/user");

exports.signup = async ({ userInput }, req) => {
    const errors = [];
    if (!validator.isEmail(userInput.email)) {
        errors.push({ message: 'E-Mail is invalid.' });
    }
    if (validator.isEmpty(userInput.password) || !validator.isLength(userInput.password, { min: 5 })) {
        errors.push({ message: 'Password too short!' });
    }
    if (errors.length > 0) {
        const error = new Error('Invalid input.');
        error.data = errors;
        error.code = 422;
        throw error;
    }

    // check existing email
    const existingUser = await User.findOne({
        email: userInput.email
    });
    if (existingUser) {
        const error = new Error('User exists already!');
        throw error;
    }
    const hashedPw = await bcrypt.hash(userInput.password, 12);
    const user = new User({
        email: userInput.email,
        name: userInput.name,
        password: hashedPw
    });
    // save user in database
    const createdUser = await user.save();
    return {
        ...createdUser._doc,
        _id: createdUser._id.toString()
    }

}

exports.login = async (email, password) => {

    const user = await User.findOne({
        email: email
    });

    if (!user) {
        const error = new Error('User not found.');
        error.code = 401;
        throw error;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        const error = new Error('Password is incorrect.');
        error.code = 401;
        throw error;
    }

    const token = jwt.sign(
        {
            userId: user._id.toString(),
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    );
    return {
        token: token,
        userId: user._id.toString(),
        token_expire: 3600
    }

}