//parcalistesi belirle 
//array yaz
//buyuk harf  degisimi icin fonksiyon yaz
//sayilarin cikarilmasi icin fonksiyon yaz
//listeyi cevirmek  icin fonksiyon yaz
//yazi eklenmesi icin fonksiyon yaz
//tarih eklemek icin fonksiyon yaz
//for ile butun array elemanlarinina uygula


///parca listesi icin array yazildi
let parcalist = ["Kaporta5","Ak3u","Stop Lambasi","Radyator 21","Karburator 42","Tekerlek","3 AYNA", "Jant"];

 
//buyukharf icin fonksiyon yazildi
//for dongusu ile butun array kontrol edildi
for (let index = 0 ;index < parcalist.length; index++){
    function capital(pName){
        return pName.toUpperCase();
     }
     console.log(capital(parcalist[index]));   
}

//sayilarin cikarilamasi icin fonksiyon yazildi
//for dongusu ile butun array kontrol edildi

for (let index = 0 ;index < parcalist.length; index++){
    function parcaname(pName){
        return pName.replace(/[0-9]/g,'');
    }
    console.log(parcaname(parcalist[index]));   
}


//ters cevirmek icin fonksiyon yazildi
//for dongusu ile butun array kontrol edildi
for (let index = 0 ;index < parcalist.length; index++){
    function tersisim(pName){
        return pName.split("").reverse().join("");
    }
    console.log(tersisim(parcalist[index])) ;
}

//parcalara marka basildi
//for dongusu ile butun array kontrol edildi


// for (let index = 0 ;index < parcalist.length; index++){
//     function markabas(pName){
//         return "KEREMAG_" + pName ;
//     }
//     console.log(markabas(parcalist[index]));
// }


// //parcalarin satin alma tarihi eklendi
// for (let index = 0 ;index < parcalist.length; index++){
//     function tarih(pName){
//         return pName + "satinAlmaTarihi " + Date();
//     }
//     console.log(tarih(parcalist[index])) ;
// }




