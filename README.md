# GraphQL Node JS Crud With Authentication & File Upload Queries & Mutations


### User signup mutation request
```
mutation{
  createUser(userInput:{
    name:"Rabiul Hasan"
    email:"rabiul.me@gmail.com"
    password: "123456"
  }){
    _id
    name
    email
    password
    status
  }
}
```
### User signup mutation response
```
{
  "data": {
    "createUser": {
      "_id": "63e0bd5056ac694aa33ecaec",
      "name": "Rabiul Hasan",
      "email": "rabiul.me@gmail.com",
      "password": "$2a$12$BRTwulkmKxrAQ5.oeLpfyO5ljrHdE6ic5O57sz1vclfq6ogNXboYW",
      "status": "active"
    }
  }
}
```