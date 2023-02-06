# GraphQL Node JS Crud With Authentication & File Upload Queries & Mutations


## User signup mutation
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
