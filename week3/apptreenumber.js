//when someone entered any 2 numbers for two input areas our function will comparis that two numbers // 
function comparis(){
    //first input area and second input area are defined//
    let a = document.getElementById("numero1").value ;
    let b = document.getElementById("numero2").value ;
    let c = document.getElementById("numero3").value ;


    //comparison options//



    if(a >= b &&  a >= c && b > c ) 
    document.getElementById("result").innerHTML = a  + ">" + b + ">" + c;
    else if(b >= a && b >= c  )
    document.getElementById("result").innerHTML = b ;
    else if(c >= a && c >= b )
    document.getElementById("result").innerHTML = c ;
    else
    document.getElementById("result").innerHTML = "equal" ;
    }