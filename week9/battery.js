//function were writtten that names are artirma and azalma

let counter = 0;

function artirma(){
    if(counter<4){
        counter = counter+1
    }
    if(counter==1){
        document.getElementById("ground").style.backgroundColor = "red"
        document.getElementById("gosterge").innerHTML = "runnig out";
    }else if(counter==2){
        document.getElementById("ground").style.backgroundColor = "yellow";
        document.getElementById("middle").style.backgroundColor = "yellow";
        document.getElementById("gosterge").innerHTML = "good ";   
    }else if(counter==3){
        document.getElementById("ground").style.backgroundColor = "green";
        document.getElementById("middle").style.backgroundColor = "green";
        document.getElementById("top").style.backgroundColor = "green";
        document.getElementById("gosterge").innerHTML = "battery is full";
    }
    return

}
function azaltma(){
    if(counter>0){
        counter=counter-1
    }
    if(counter==2){
    document.getElementById("top").style.backgroundColor = "white";
    document.getElementById("middle").style.backgroundColor = "yellow";
    document.getElementById("ground").style.backgroundColor = "yellow";
    document.getElementById("gosterge").innerHTML = "battery is decreasing";
   } else if(counter==1){
    document.getElementById("middle").style.backgroundColor = "white";
    document.getElementById("ground").style.backgroundColor = "red";
    document.getElementById("gosterge").innerHTML = "battery is going";
   }else if(counter==0){
    document.getElementById("ground").style.backgroundColor = "white";
    document.getElementById("gosterge").innerHTML = "battery is over";
   }
   return
}



