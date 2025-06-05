const studentModel = require("../models/studentModel")

exports.insertStudent = (s)=>
{
    let studnet = new studentModel({
        name:s.name,
        age:s.age,
        city:s.city
    })
    studnet.save()
    //   name:   String,
    //     age:Number,
    //     city:String    
}