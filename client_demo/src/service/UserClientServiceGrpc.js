const grpc = require('grpc');
const loader = require('@grpc/proto-loader');
const package = loader.loadSync('user.proto', {});
const object = grpc.loadPackageDefinition(package);
const userPackage = object.userPackage;

const client = new userPackage.user_service('localhost:5000',  grpc.credentials.createInsecure());

module.exports =  {
    createUser:(req,res) => {
        var body = req.body;
        console.log("call user server");
        client.createUser(
            {
            username: body.username,
            fullName: body.name,
            phone: body.phone,
            email: body.email
            }, 
            (err, response) => {
                console.log('Call User Server ERROR: '+err);
                res.json(response)
            }
        );
    },
    
    readUsers:(req,res) => {
        console.log("call user server");
        client.readUsers(null, 
            (err, response) => {
                console.log('Call User Server ERROR: '+err);
            res.json(response)
        })
    },

    readUserDetail:(req,res)  => {
        console.log("call user server");
        client.readUserDetail(req.param.id, (
            err, response) => {
            console.log('Call User Server ERROR: '+err);
            res.json(res)
        })
    }
}