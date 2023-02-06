# GraphQL Node JS Crud With Authentication & File Upload Queries & Mutations


### 1. User signup mutation request
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

### 2.User login query request
```
{
  login(email: "mdrabiulhasan.me@gmail.com", password: "123456"){
    token
    userId
    token_expire
  }
}
```
### User login query response
```
{
  "data": {
    "login": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2UwYmM1NzU2YWM2OTRhYTMzZWNhZTgiLCJlbWFpbCI6Im1kcmFiaXVsaGFzYW4ubWVAZ21haWwuY29tIiwiaWF0IjoxNjc1Njc0MjUyLCJleHAiOjE2NzU2Nzc4NTJ9.Ew8qwDTa8VxrNIDr1uKUplr_qHk17AdtIXPUoU2uCJc",
      "userId": "63e0bc5756ac694aa33ecae8",
      "token_expire": 3600
    }
  }
}
```