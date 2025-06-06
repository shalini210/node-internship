const studentModel = require("../models/studentModel")

exports.insertStudent =async (s)=>
{
    var msg = "blank";
    let studnet = new studentModel({
        name:s.name,
        age:s.age,
        city:s.city
    })
   await studnet.save()
    .then(()=>{msg = "Record Inserted"})     
    .catch((err)=>msg = "err occured")
    let data = [];
    if(msg=="Record Inserted")
    {
        await studentModel.find()
        .then((d)=>data=d)
    }
    return {msg:msg,data:data }
}
exports.getStudents = async()=>
{
    let students = [];
    await studentModel.find()
    .then((d)=>students=d)
    .catch((e)=>students = e)
    return students
}
exports.getStudentById =async (id)=>
{
    let students = [];
    await studentModel.findById(id)
    .then((d)=>students=d)
    .catch((e)=>students = e)
    return students
}