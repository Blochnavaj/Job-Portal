import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    tittle : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    requirement : [{
        type : String,
         
    }],
      salary: {
        type : Number,
        require : true
    },
    location : {
        type : String,
        require : true
    },
    jobType : {
        type : String,
        require : true
    },
    position : {
        type : Number,
        require : true
    },
    company : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : 'company'
    },
    created_by : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : 'user'
    },
    application  : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Application'
    },
},{timestamps:true})

export default Job = mongoose.model('Job', jobSchema)
