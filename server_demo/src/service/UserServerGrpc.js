const grpc = require('grpc');
const loader = require('@grpc/proto-loader');
const db = require('../config/mysql')
const package = loader.loadSync('user.proto', {});
const object = grpc.loadPackageDefinition(package);
const userPackage = object.userPackage;
const server = new grpc.Server();

server.addService(userPackage.user_service.service, {
    "createUser": createUser,
    "readUsers": readUsers,
    "readUserDetail": readUserDetail,
})

server.bind('0.0.0.0:5000', grpc.ServerCredentials.createInsecure())

function createUser(call, callback) {     
    console.log("Client call create user")
    const newUserItem = {
        id: users.length+1,
        username: call.request.username,
        fullName: call.request.fullName,
        phone: call.request.phone,
        email: call.request.email
    }

    db.query("Insert into users(username, name, email, phone) value(?,?,?,?)",[call.username, call.name, call.email, call.phone], 
    (err, response) => {
        if (err) throw err 
        callback(null, response);
    });
    console.log('Add new user success:' + JSON.stringify(newUserItem));
}

function readUsers(call, callback) {
    console.log("Client call get list user") 
    db.query("SELECT * FROM users", 
    (err, response) => {
        if (err) throw err 
        callback(null, {users:response});
    });
}

function readUserDetail(call, callback) { 
    console.log("Client call get user detail")
    db.query("SELECT * FROM users WHERE id =  ?",[call.id], 
    (err, response) => {
        if (err) throw err 
        callback(null, response);
    });
}

console.log('start server grpc on 5000')
module.exports=server;