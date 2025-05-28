// docalculations(callback,value)
// docalculation(square,5) => square of 5 is 25
//docaluclation(cube,2)=>cube of 2 is 8
// docalculation(factorial,5)=>factorial of 5 is 120 5*4*3*2*1
function square(n)
{
    console.log(`square of ${n} is `+n*n)
}
function cube(n)
{
    console.log(`cube of ${n} is `+n*n*n)
}
function factorial(n)
{
    fact = 1;
    for(i=1;i<=n;i++)
    {
        fact=fact*i
    }
    console.log(`factorial of ${n} is `+fact)
}

function docalculations(callback,val)
{
    callback(val)
}
docalculations(square,2)
docalculations(cube,5)
docalculations(factorial,6)
// function gm(name)
// {
//     console.log("Gud morning "+name)
// }
// function ge(name)
// {
//     console.log("Gud evening "+name)
// }
// function usingcallback(callback,val)
// {
//     let username = val
//      callback(username)

// }
// usingcallback(factorial,5)
// usingcallback(ge,"John")
// usingcallback(gm,"RAman")
// // usingcallback(ge,gm)

