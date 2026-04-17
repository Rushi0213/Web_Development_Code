// parameterized function

//1) named function

 function add(a,b)
{
    console.log(a+b);
    
}
add(3,5);


//2) ananomous function

/*function (a,b)
{
    console.log(a-b);
    
}
(5,2);
*/


//3) imediate function

(function(a,b)
{
    console.log(a+b);
    
}
(10,20))



// 4)function with expression

let mn= function(a,b)
{
    console.log(a*b);
    
}
mn(2,5);


//5) arrow function

let n=((a,b)=>
{
    console.log(a/b);
    
})
n(10,2);