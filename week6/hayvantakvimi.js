//takvim yilindaki hayvanlari belirle
//takvim yilindaki elementleri belirle
//her yil bir hayvani temsil ettigi icin girilecek yilin 12 hayvan icin modunu
//alacak fonksiyonu yaz
// fonksiyonu cagir


let hayvanlist = ["Monkey", "Cock", "Dog", "Boar", "Rat", "Ox",
                 "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"];

let element =["Metal","Water","Wood","Fire","Earth"];


function bul(yil){

    if(yil%12 == 0 ){
        console.log("monkey" + "metal")
    }
    if(yil%12 == 1){
        console.log("cock" + "metal")
    }
    if(yil%12 == 2){
        console.log("dog" + "water")
    } 
    if(yil%12 == 3){
        console.log("boar" + "water")
    } 
    if(yil%12 == 4){
        console.log("rat" + "wood")
    } 
    if(yil%12 == 5){
        console.log("ox" + "wood")
    } 
    if(yil%12 == 6){
        console.log("tiger" + "fire")
    } 
    if(yil%12 == 7){
        console.log("rabbit" + "fire")
    } 
    if(yil%12 == 8){
        console.log("dragon" + "earth")
    } 
    if(yil%12 == 9){
        console.log("snake" + "earth")
    } 
    if(yil%12 == 10){
        console.log("horse" + "water")
    } 
    if(yil%12 == 11){
        console.log("sheep" + "water")
    } 
}
// herhangibir yil yazildiginda sonuc verecek
bul(2040);
