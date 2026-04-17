//condtional statement

//1) if else

    //i)
    let age=19;
    if(age>18)
    {
        console.log("you are eligible for voting");
        
    }
    else
    {
        console.log("you are not eligible for voting");
        
    }

   // ii)
    let no=10;
    if(no%2==0)
    {
        console.log("no is even");
        
    }
    else
    {
        console.log("no is odd");
        
    }

  // iii)
    let No=10;

    if(No>=0)
    {
        console.log(" no is possitive");
        
    }
    else
    {
      console.log(" no is negative");
      
    }

    // iv)

     let marks=parseInt(prompt("enter your marks"))

     if(marks>=50 || marks<=100)
     {
        console.log("average marks");
        
     }
     else
     {
        console.log("invalid marks");
        
     }

     // else if

     // we can check more than one condtion according to multiple block

     //i)

     let num1=70;
     let num2=60;
     let num3=90;

     if(num1>num2 && num1>num3)
     {
        console.log("num1 is a large");
        

     }
     else if(num2>num1 && num2>num3)
     {
        console.log("num2 is largest");
        
     }
     else if(num3>num1 && num3>num2)
     {
        console.log("num3 is largesrt");
        
     }
     else
     {
        console.log("num is not find in given no");
        
     }

     //switch case

     // it is a alternative of else if

     let time=12;

     switch(time)
     {
        case 6:
            console.log("good morning");
        break;

        case 12:
            console.log("good afternoon");
        break;

        case 4:
            console.log("good evening");
        break;

        default:
            console.log(" good night");
            
     }

     // ii)

     let letter='a';

     switch(letter)
     {
        case 'e':
            console.log("letter is vowel");
        break;

        case 'e':
            console.log("letter is vowel");
        break;

        default:
            console.log("letter is not vowel");
            

     }