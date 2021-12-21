// Hayvanlarla ilgili array hazirla;
//array icerisinden hayvan isimlerinden hayvan sayilarini tespit et; 
// console ile kontrol yap;
// hayvan listesinden secilen uygun hayvan  turleri icin function yaz;
//fonksiyonu cagir ;
//console ile yazdir   ve kontrol et !!!

//hayvanlarin listesini hazirla
let hayvanlar = ["inek","tavuk","domuz","tavuk","koyun","inek","koyun","inek","inek","koyun"];

//hayvanlarin kac tane oldugunun tespiti console ile kontrolu
let ineksayisi = hayvanlar.filter(x => x == "inek").length;
let koyunsayisi = hayvanlar.filter(x => x == "koyun").length;
let tavuksayisi = hayvanlar.filter(x => x == "domuz").length;
let domuzsayisi = hayvanlar.filter(x => x == "tavuk").length;
 

console.log("ineksayisi" ,ineksayisi);
console.log("koyunsayisi" , koyunsayisi);
console.log("domuzsayisi" ,domuzsayisi);
console.log("tavuksayisi" , tavuksayisi);

//kellepaca icin uygun paca sayilarinin tespiti

function pacabul(uygun1,uygun2){
    let necipusta = (uygun1 + uygun2)*4 ;
    return necipusta ;

}

let tespit = pacabul(ineksayisi,koyunsayisi);
console.log("kelle paca icin uygun bacak sayisi" ,tespit);