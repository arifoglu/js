//verilen array de maas tespiti
// arrayin icinden sadece sayilarin alinmasi
//yeni olusan array de toplama yaptirma
//sirket destegi icin hesaplama yapma



//fikretin notdefteri icin verilen array 

// const incomeStatement = [15000, 2000, 1000, 300, 200, 
//     "important electronic", 600, 79, "abo", 342, "printer",
//  450, 32, 45, "fitness", 64, 10, 23, 12, 2, 56, 7];


//  //fikretin maasini tespit 
//  const fikomaas = incomeStatement[0];

//  //incomeStatement arrayinda sayilari tespit ve yeni "sayilar" adinda bir array
//  //e atama  

//  function sayilaritespit(numeros){
//     return numeros.filter(x => typeof x === "number");
// }
//   const sayilar = sayilaritespit(incomeStatement);



//  //olusan yeni "sayilar" array inde elemanlari toplama
//  let toplam = 0 ;
// sayilar.map((element)=> toplam+=Number(element));

//  //istenen tespitler icin degisken atama


//  let aylikgider = toplam - fikomaas;
//  let eldekalan =fikomaas - aylikgider;


// // sirket desteginin hesaplanmasi
//  let sirketdestegi = aylikgider/ 5 ;

//  //console a yazdirma ;

//  console.log(fikomaas,"fikret aylik  maas");
//  console.log(aylikgider, "aylik giderler toplami ");
//  console.log(sirketdestegi ,"sirket destegi ");
//  console.log(eldekalan,"elde kalan para")