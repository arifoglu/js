//////////////////////////////////////// buttona ulas///////////////////////////

const button = document.querySelector("#trigger-animation");

//////////////////////buttona dinleyici ekle////////////////////////////////////

let dinle = button.addEventListener()


/////////////////////////////////html ye yazi yaz style degistir////////////////

var city = "bern" ;
document.getElementById("div1").innerText = city ;

document.querySelector('div.class1').style.color = 'red' ;


///////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////ARRAY METODLARI////////////////////////////////

let namelist = ["ali","veli"];

console.log(namelist[1]);
console.log(namelist.length);

///////////////////////////////// ""push"""   ekleme yapiyor ///////////////////////////

 let ekleme = namelist.push("jale" , "hakki"));  
 console.log(ekleme);


 /////////////////////////////////""shift""  1.elemani cikariyor/////////////////////

 let cikar = namelist.shift();  
 console.log(cikar);

 /////////////////////////////////""unshift""  /////////////////////////////////////


let cikar2 = namelist.unshift("test");
console.log(cikar2);



///////////////////////"""pop"""sondan eleman cikariyor///////////////////////////////////////

let cikar3 = namelist.pop();
console.log(cikar3);


//////////////////////////"""sort"""siralama yapar////////////////////////////////////////////

let siralama = namelist.sort();
console.log(siralama);

//////////////////////////"""reverse"""ters cevirior ////////////////////////////////////////////

let cevir = namelist.reverse();
console.log(cevir);

///////////////////////////"""indexof"""dizi icinde arama yapiyor///////////////////////////////

console.log(namelist.indexOf("mehmet3"))

let result = namelist.indexOf("mehmet3");
if (result == -1){
    console.log("mehmet yok")
}

///////////////////////////""""lastIndexof""""son sirayi kontrol ediyor////////////////////  


let result = namelist.lastIndexOf("mehmet3")
console.log(result)

let result = namelist.includes("mehmet3")
console.log(result)


//////////////////////////////""""concat"""" dizileri birlestiriyor////////////

let namelist2 =["ali", "veli"]
console.log(namelist.concat(namelist2))


///////////////////""""slice"""" dizi icerisinde baslangic ve bitis degeri arasini alir 

console.log(namelist.slice(1,4));


//////////////////"""""splice""""""" girilen sayi kadar siler

let sil = namelist.splice(1, 2));
console.log(sil);


///////////////////////"""""toUpperCase"""" buyuk harf yapma /////////////////////////////

let buyukharf = namelist[0].toUpperCase();
console.log(buyukharf);

////////////dongude istedimizi bulup harfi buyutuyor (degisken.length)dizinin uzunluk

for(let i = 0 ; i < namelist.length ; i++){
    console.log(namelist[i].toUpperCase());
}


///////////"""charAt"""istedimiz siradaki harfi getiriyor////////////////////////////////

let fruit = "apple"
console.log(fruit.charAt(2));


//////////////////////////""""""charCodeAt"""""" istedigimiz harfin uniq kodunu veriyor

console.log(fruit.charCodeAt(2));
///istedigimiz harfi degistiriyor
console.log(fruit.replace("p" , "x"));

/////////////////////////////////////////////////////////////////////////

////when someone entered any 2 numbers for two input areas our function 
//will comparis that two numbers // 


// function comparis(){
// //first input area and second input area are defined//
// let numero1 = document.getElementById("numero1").value ;
// let numero2 = document.getElementById("numero2").value ;

// let firstinput = Number(numero1);
// let secondinput = Number(numero2);

// //comparison options//
// if(firstinput > secondinput)
// document.getElementById("result").innerHTML = firstinput ;
// else if(secondinput > firstinput)
// document.getElementById("result").innerHTML = secondinput ;
// else
// document.getElementById("result").innerHTML = "equal" ;
// }