//when someone entered any 2 numbers for two input areas our function will comparis that two numbers // 
function comparis(){
    //first input area and second input area are defined//
    let numero1 = document.getElementById("numero1").value ;
    let numero2 = document.getElementById("numero2").value ;
    
    let firstinput = Number(numero1);
    let secondinput = Number(numero2);
    
    //comparison options//
    if(firstinput > secondinput)
    document.getElementById("result").innerHTML = firstinput ;
    else if(secondinput > firstinput)
    document.getElementById("result").innerHTML = secondinput ;
    else
    document.getElementById("result").innerHTML = "equal" ;
    }