const mongo = require('mongoose');
const schema = mongo.Schema

const UserSchema = new schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        unique:true,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    date:{
        type:Date,
        default: Date.now
    }
});

module.exports = item =   mongo.model('user',UserSchema);