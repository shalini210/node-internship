function fun1()
{
    let student={name:"John",age:22,city:"Ahmedabad"}    
    console.log(student)
    console.log(`name: ${student.name} age: ${student.age} city:${student.city}`)
}
function fun2(user)
{
    console.log(`username is ${user.name} and pwd is ${user.pwd}`)
}
fun2({name:"Maria", pwd:"123456"})
fun1()
