const mongoose = require("mongoose")

let studentSchema  = mongoose.Schema(
    {
        name:   String,
        age:Number,
        city:String    
    }
)
let studentModel = new mongoose.model('student',studentSchema)
module.exports=(studentModel)