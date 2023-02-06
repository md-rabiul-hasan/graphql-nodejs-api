const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const User = require("./../models/user");
const { signup, login } = require("./../controllers/auth");

module.exports = {
    // sign up resolver
    createUser: async function ({ userInput }, req) {
        return await signup({ userInput }, req);
    },

    // login resolver
    login: async function ({ email, password }) {
        return await login(email, password);
    }

}