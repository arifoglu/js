// if user click on  any button, the result display on the screen
// i will  put 10 button in  html code .
// i will  hide Ahmet to 7.vagon
// if user click on compartiment 7 the result (tebrikler) will write on the screen
// if user click on the others button the results will change

 
let  clicks = 0 ;


function uzak1(){
  clicks += 1;
  document.getElementById("result").innerHTML = "You didnt find it He is far away" + "<br>" + clicks ;
  vagon1.style.backgroundColor = "red";
  if (clicks > 3)
  document.getElementById("clicksnumber").innerHTML = "GAME OVER AHMET HAS GONE";
  if (clicks > 4)
  alert("!!!DONT TRY IT!!! ");

}

function uzak2(){
  clicks += 1;
  document.getElementById("result").innerHTML = "You didnt find it He is far away" + "<br>" + clicks ;
  vagon2.style.backgroundColor = "red";
  if (clicks > 3)
  document.getElementById("clicksnumber").innerHTML = "GAME OVER AHMET HAS GONE";
  if (clicks > 4)
  alert("!!!DONT TRY IT!!! ");
}
function uzak3(){
  clicks += 1;
  document.getElementById("result").innerHTML = "You didnt find it He is forward"+ "<br>"  + clicks  ;
  vagon3.style.backgroundColor = "yellow";
  if (clicks > 3)
  document.getElementById("clicksnumber").innerHTML = "GAME OVER AHMET HAS GONE";
  if (clicks > 4)
  alert("!!!DONT TRY IT!!! ");
}
function uzak4(){
  clicks += 1;
  document.getElementById("result").innerHTML = "You didnt find it He is forward"  + "<br>" + clicks ;
  vagon4.style.backgroundColor = "yellow";
  if (clicks > 3)
  document.getElementById("clicksnumber").innerHTML = "GAME OVER AHMET HAS GONE";
  if (clicks > 4)
  alert("!!!DONT TRY IT!!! ");
}
function uzak5(){
  clicks += 1;
  document.getElementById("result").innerHTML = "You came close He is forward" + "<br>" + clicks ;
  vagon5.style.backgroundColor = "yellow";
  if (clicks > 3)
  document.getElementById("clicksnumber").innerHTML = "GAME OVER AHMET HAS GONE";
  if (clicks > 4)
  alert("!!!DONT TRY IT!!! ");
}
function uzak6(){
  clicks += 1;
  document.getElementById("result").innerHTML = "You didnt find it He is back" + "<br>" + clicks  ;
  vagon10.style.backgroundColor = "red";
  if (clicks > 3)
  document.getElementById("clicksnumber").innerHTML = "GAME OVER AHMET HAS GONE";
  if (clicks > 4)
  alert("!!!DONT TRY IT!!! ");
}

function dogru(){
  clicks += 1;
  document.getElementById("result").innerHTML = "<strong>!!!Congratulations You found it !!!" ;
  vagon7.style.backgroundColor = "rgb(79, 238, 79)";
   if (clicks > 4)
  alert("!!!DONT TRY IT!!! ");

}

function yakin1(){
  clicks += 1;
  document.getElementById("result").innerHTML = "You came close.look at forward " + "<br>" + clicks  ;
  vagon6.style.backgroundColor = "yellow";
  if (clicks > 3)
  document.getElementById("clicksnumber").innerHTML = "GAME OVER AHMET HAS GONE";
  if (clicks > 4)
  alert("!!!DONT TRY IT!!! ");
}
function yakin2(){
  clicks += 1;
  document.getElementById("result").innerHTML = "You came close.look at back" + "<br>" + clicks ;
  vagon8.style.backgroundColor = "yellow";
  if (clicks > 3)
  document.getElementById("clicksnumber").innerHTML = "GAME OVER AHMET HAS GONE";
  if (clicks > 4)
  alert("!!!DONT TRY IT!!! ");
}
function yakin3(){
  clicks += 1;
  document.getElementById("result").innerHTML = "You came close.look at back" + "<br>" + clicks ;
  vagon9.style.backgroundColor = "yellow";
  if (clicks > 3)
  document.getElementById("clicksnumber").innerHTML = "GAME OVER AHMET HAS GONE";
  if (clicks > 4)
  alert("!!!DONT TRY IT!!! ");
}



















