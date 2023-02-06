const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        status: String!
    }

    input UserInputData {
        name: String!
        email: String!
        password: String!
    }

    type AuthData {
        token: String!
        userId: String!
        token_expire: Int
    }

    type RootQuery {
        user: User!
        login(email: String!, password: String!): AuthData!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }

`);