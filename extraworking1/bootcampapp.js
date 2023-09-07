// function myfunction(){

// let string = "HiCoders gönüllüleri, HiCoders egitmenleri, HiCoders yöneticileri ve HiCoders ögrencileri olarak, HiCoders JS BootCamp’i icra ediyoruz."
// let kelime = "HiCoders" ;
// let sayac = 0 ;
// let arama = document.getElementById("input1").value ;

//     let array = string.split(" ") ;
//     array.forEach((element) => {
//         if(element === kelime){
//             sayac++ ;
//         }
//     });

//     if (arama == kelime){
//         alert(kelime);
//     }else alert("yanlis")
//     document.getElementById("result2").innerHTML = sayac;
//     console.log(sayac)
// }


/////////////////////////////////////Kullanici sifresi ve Kullanici Adi dogru ise/////////////////////////////
///////////////////////////////////alert ile ekranda onay mesaji veren bir Login Sistemi oluşturunuz.///////////

// function myfunction(){
//     let cevap1 = document.getElementById("input1").value ;
//     let cevap2 = document.getElementById("input2").value ;

//     if (cevap1 == "ali" && cevap2 == "12345");
//     alert("tebrikler gir")
//     else alert("yanlis yoldasin") ;                    
//      
// } 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////hem 7 ye ve hem 9 a bolunen sayilari yazdir 100e kadar////////////////////

// for (var i = 0 ; i<100 ;i++){
//     if(i%7 == 0){
//         console.log(i+"7ye bolundu")
//     }
//     if(i%9 == 0){
//         console.log(i+"9a bolundu")
//     }
//     if(i%7 ==0 && i%9 ==0 ){
//         console.log(i+"tebrikler")
//     }
//     else console.log(i+"sayilar")

// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//let isimlistesi = ["ali","veli","ahmet","hasan","ferda","kemal","lokman"]

 //let rastgelesecer = isimlistes [Math.floor(Math.random()* isimlistesi.length];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//let numeros = [18,45] ;

//let kiyas =Math.max(...numeros);
//let kiyas =Math.min(...numeros);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//let sayi = 9;

//let karekok = Math.sqrt(sayi);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//let ondalik = 2.7;

//let yuvarlama =Math.round( ondalik)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//let isimlistesi = ["ali","veli","ahmet","hasan","ferda","kemal","lokman"]


//let yazi = "I can go to School every day."
//let kucukharf = yazi.toLowerCase();
//let buyukharf = yazi.toUpperCase();
//let tekrar = yazi.repeat(2);
//let degisim = yazi.replace("day","week")
//let bolusturme = yazi.slice(12,18)


//let sorgu = isimlistesi.includes("ferda");

//let siralama = isimlistesi.indexOf("hasan");

//let isimlistesi = ["ali","veli","ahmet","hasan","ferda","kemal","lokman"];

//let yenigelenler = ["merdan","aslan","selman"];

//let birlestirme =isimlistesi.concat(yenigelenler);

// let ters = isimlistesi.reverse();

//let eklenti = isimlistesi.join(">");

//let yenibiri = isimlistesi.push("jale");

//let cikarma = isimlistesi.pop();

//let cikarma = isimlistesi.shift();

//let alfabe = isimlistesi.sort();


////////////// ///////////////////////1'den 100'e kadar tam sayıları konsola yazdıran bir JavaScript programı yazın.///////////////////////////// 
///////////// ////////////////////////Ancak üçün katları için sayı yerine "Cizz" ve //////////////////////////////////////////////////////////
////////////////////////////////////// beşin katları için "Bizz" yazdırın. /////////////////////////////////////////////////////////////
////////////////////////////////////// Hem üçün hem de beşin katı olan sayılar için "CizzBizz" yazdırın.


//  for (let numeros = 0 ; numeros < 100 ; numeros++ ){
//       if (numeros%3 == 0){
//          console.log(numeros,"cizz");
//     }
//      if (numeros%5 == 0){
//          console.log(numeros,"bizz");
//      }
//      if (numeros%3 ==0 && numeros%5 == 0 ){
//         console.log(numeros ,"cizzbizz");
//      }
//  }

///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////Asagidaki sekli programlama yapılarını kullanarak çizdiriniz.

// let garip = "!"

// for (let index = 0 ; index < 10 ; index++){
//     console.log(garip.repeat(index));
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// *
// **
// ***
// ****
// *****

// let isaret ="*";

// for(let index = 0; index < 5; index++){
//     console.log(isaret.repeat(index));
// }

 //////////////////////////////////////// 0 dan 100 e kadar olan prime (asal sayilari) yazdirin /////////////////
 ////////////////////////////////////////(Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar)/////////////
 /////////////////////////////////////// bulunmasi gereken sonuc: 1, 2, 3, 5, 7, 11 ....////////////////////////


// for(let mainindex = 2 ; mainindex<101 ; mainindex++){
// const prime = mainindex ;
// let dividable = false ;

// ////// bu for dongusu 2 den baslayip kendisine kadar bolup sayiyi belirliyor
// ///asal sayi olup olmadigini 
// for (let index = 2 ; index < prime ;index++){
//     if (prime%index == 0){
//         dividable = true ;
//     }
// }
// if(dividable == false){
//     console.log(prime,"is prime number")
// } else {
//     console.log(prime,"is a prime not number")
// }

// }



// //////////////////////////////////stim sanayideki Cabbar Ustamizin uzmanlik alani, belli araba modellerini kapsamaktadir. Bundan dolayi Cabbar Usta online arac kabul sistemi icin bizden bir program istemektedir.
// /////////////////////////////////Bu program asagidaki durumlari kontrol edebilmelidir.
/////////////////////////////////// 1. Cabbar Usta sadece kirmizi ve siyah arabalari tamir etmektedir.
// ///////////////////////////////2. Sadece BMW, Audi ve VW markalarini kabul etmektedir.
// /////////////////////////////3. BMW arabalarinda sadece kirmizi olanlari ve yas araligi 2010 ile 2019 arasindakileri kabul etmektedir.
///////////////////////////// 4. Audi de ise sadece yas araligi 2005 ile 2010 veya 2014 ile 2020 arasindakileri kabul etmektedir.
/////////////////////////// 5. VW de ise sadece siyah olanlari ve yas araligi 2001 ile 2018 arasindakileri kabul etmektedir.
/////////////////////// 6. Bu seneden itibaren de Cabbar Usta, 2020 cikisli siyah renkli BMWleri de kabul etmektedir.
///////////////////// 7. 5 yildan uzun sureli sabit musterilerine ise, tum araba modellerinde (tum
///////////////////// yas araligi ve tüm renkler) hizmet vermektedir.

// let marka = prompt("marka");
// let model = prompt("model") ;
// let renk = prompt("renk") ;
// let yil = prompt("hangi yildayiz") ;
// let mudavim = prompt("kac yillik musterisiniz") ;

// if ((marka == "bmw") && (renk == "kirmizi") && (model >=2010 && model <= 2019)){
//             console.log("KABUL!!! kirmizi ve 2010<model<2019 ");
//             }
//         else { console.log("ret") }


//  if ((marka == "audi") && (model >= 2005 && model <=2010 ) | (model >= 2014 && model <=2020)){
//         {
//             console.log("KABUL !!! audi ve 2005<model<2010 veya 2014<model< 2020" );
//         }
//         else {console.log("ret")}

//  if (marka == "vw"){
//              if ((renk =="siyah") && (model <= 2018) && (model >=2001)){
//                  console.log("KABUL !!! vw ve siyah 2001<model<2018");
//              } else {console.log("ret")}
//          }
//             else if (yil == 2021){
//              if(marka == "bmw" && model == 2021 && renk == "siyah"){
//                  console.log("KABUl !!! bu yil geldiniz")
//              }
//             else if (mudavim <= 5){
//                  console.log(" KABUL mudavim hosgeldin")
//              }
//          }
//     }
// }

//////////////////////////////////////////   ''!'' ekleyin //////////////////////////////////////////////

//   let colors = ["Red", "Green", "White", "Black"];
//   let ekleme = colors.join("!!");


////////////////////////////////////////////////////////////////////////////////////////////////
///let myColor = ["Red", "Green", "White", "Black"];  

//////////////////////////////////////////Yukaridaki dizeyi konsola "red+green+white+black" seklinde yazdirin.

// let myColor = ["Red", "Green", "White", "Black"];  

// console.log(myColor.join("+"));

// let kucukharf = myColor.join("+");

// console.log(kucukharf.toLowerCase())

////////////////////////////////////////Verilen bir Array içinden rastgele bir eleman alip ekrana yazdirini/////

// let colors = ["Red", "Green", "White", "Black"];

// let rastgelesecer = Math.floor(Math.random()*3);

// console.log(colors[rastgelesecer]);


////////////////////////////////////////////////////////////////////////////////////

// let meyveler = ["elma","armut","ananas","kiwi","muz","kiraz","portakal"];

// let uzunluk = meyveler.length;

// let secici = Math.floor(Math.random()*8);

//  console.log(meyveler[secici])
/////////////////////////////////////////////////////////////////////////////////////////


// let names = ["Ahmet", "Mehmet", "Selami", "Necmi", "Bekir", "Ayse", "Seyma"]; 
// let rastgele = Math.floor(Math.random()*7) ;


// console.log(names[rastgele]);

////////////////////////////////////////////////////////////////////
