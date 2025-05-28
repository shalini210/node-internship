function fun1()
{
    console.log("hi")
    // setTimeout(()=>
        let count = 0;
    let interval =     setInterval(()=>
    {
     console.log("this is inside callback function" +count)   
     count++;
     if(count==10)
     {
    clearInterval(interval)
     }
    },1000)
    console.log("end")
}
fun1()