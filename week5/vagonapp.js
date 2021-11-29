// if user click on  any button, the result display on the screen
// i will  put 10 button in  html code .
// i will  hide Ahmet to 7.vagon
// if user click on compartiment 7 the result (tebrikler) will write on the screen
// if user click on the others button the results will change

 
let sayac = 0 ;
let sonuc = document.getElementById("vagon1").addEventListener("click" , function(){document.getElementById("result").innerHTML = "You didnt find it He is far away" ;
vagon1.style.backgroundColor = "red"});

while (sayac < 4){
  sonuc += +sayac ;
  sayac++ ;
}
if (sonuc > 4){
  document.getElementById("result").innerHTML = "GAME OVER"
}

 //for (let tiklama = 0; tiklama < 5; tiklama++){}


function dogru(){
  document.getElementById("result").innerHTML = "Congratulations you found it" ; 
  vagon7.style.backgroundColor = "rgb(79, 238, 79)"
}
function uzak1(){
  document.getElementById("result").innerHTML = "You didnt find it He is far away" ;
  vagon1.style.backgroundColor = "red"
}
function uzak2(){
  document.getElementById("result").innerHTML = "You didnt find it He is far away" ;
  vagon2.style.backgroundColor = "red"
}
function uzak3(){
  document.getElementById("result").innerHTML = "You didnt find it He is forward" ;
  vagon3.style.backgroundColor = "yellow"
}
function uzak4(){
  document.getElementById("result").innerHTML = "You didnt find it He is forward" ;
  vagon4.style.backgroundColor = "yellow"
}
function uzak5(){
  document.getElementById("result").innerHTML = "You came close He is forward" ;
  vagon5.style.backgroundColor = "yellow"
}
function uzak6(){
  document.getElementById("result").innerHTML = "You didnt find it He is back" ;
  vagon10.style.backgroundColor = "red"
}

function yakin1(){
  document.getElementById("result").innerHTML = "You came close.look at forward " ;
  vagon6.style.backgroundColor = "yellow"
}
function yakin2(){
  document.getElementById("result").innerHTML = "You came close.look at back" ;
  vagon8.style.backgroundColor = "yellow"
}
function yakin3(){
  document.getElementById("result").innerHTML = "You came close.look at back" ;
  vagon9.style.backgroundColor = "yellow"
}




// let sayac = 0;
// let text = "GAME OVER" ;
// while (sayac < 5){
//    text +=  +sayac ;
//  sayac++ ;
// }

//const container = document.querySelector("#container");

//console.log(container)

//container.addEventListener("click",function(){
  //  container.style.backgroundColor="red"
    //container.style.left="600px"
// })





















