
//when someone entered any 2 numbers for two input areas our function will comparis that two numbers // 


function comparis(){
    //first input area and second input area are defined//
    let firstinput = document.getElementById("numero1").value ;
    let secondinput = document.getElementById("numero2").value ;
    

    
    //comparison options//
    if(firstinput > secondinput)
    document.getElementById("result").innerHTML = firstinput ;
    else if(secondinput > firstinput)
    document.getElementById("result").innerHTML = secondinput ;
    else
    document.getElementById("result").innerHTML = "equal" ;
    }

   