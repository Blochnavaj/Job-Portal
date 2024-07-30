import mongoose from "mongoose";

const userSChema = new mongoose.Schema({
    fullname:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true,
        unique : true
    },
    phonenumber : {
          type: String,
          require: true
    },
    password : {
        type: String,
        require: true
    },
    role : {
        type: String,
        enum : ['student','recruiter'],
        require: true
    },
    profile : {
      bio:{type:String},
      skill : [{type: String}],
      resume : {type:String}, // URL for resume file 
      resumeOriginalName  : {type:String},
      company : {type:mongoose.Schema.Types.ObjectId, ref : 'company'},
      profilePhoto : {
        type: String,
        default:""
      }
    },
},{timestamps:true});
export default User = mongoose.model('user', userSChema)
