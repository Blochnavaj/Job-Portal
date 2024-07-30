import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'job',
        require : true
    },
    applicant : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'User',
        default: 'padding'
    },
    
 
},{timestamps:true})

export default Application = mongoose.model('Application', applicationSchema)
