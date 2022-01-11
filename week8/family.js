
const families = [
    {
       firstname: "Ahmet",
       lastname: "Kurnaz",
       partner: "Sevil",
       childrens: [
          {
             name: "Efe",
             age: 8,
             gender: "boy",
          },
          {
             name: "Ece",
             age: 6,
             gender: "girl",
          },
       ],
       salary: 4000,
    },
    {
       firstname: "Kemal",
       lastname: "Can",
       partner: "Elif",
       childrens: [
          {
             name: "Naz",
             age: 11,
             gender: "girl",
          },
          {
             name: "Kadir",
             age: 6,
             gender: "boy",
          },
       ],
       salary: 6000,
    },
    {
       firstname: "Zakir",
       lastname: "Cemal",
       partner: "Nida",
       childrens: [
          {
             name: "Hasan",
             age: 2,
             gender: "boy",
          },
          {
             name: "Hüseyin",
             age: 6,
             gender: "boy",
          },
       ],
       salary: 5500,
    },
    {
       firstname: "Murat",
       lastname: "Demirtas",
       partner: "Simay",
       childrens: [
          {
             name: "Oktay",
             age: 15,
             gender: "boy",
          },
          {
             name: "Gülsüm",
             age: 13,
             gender: "girl",
          },
       ],
       salary: 5300,
    },
    {
       firstname: "Umut",
       lastname: "Ilicak",
       partner: "Ayse",
       childrens: [
          {
             name: "Bilal",
             age: 8,
             gender: "boy",
          },
       ],
       salary: 3000,
    },
    {
       firstname: "Durmus",
       lastname: "Demir",
       partner: "Nur",
       childrens: [
          {
             name: "Meral",
             age: 4,
             gender: "girl",
          },
       ],
       salary: 7000,
    },
 ];
 //////////////////1) maasi 5000 uzeri olanlari isim listeine gore siralar
 
 const maasbesbinuzeri = families.filter((person)=> person.salary > 5000)
                                 .map((person)=> person.firstname + " " + person.lastname)
                                 .sort();                                   
 console.log(maasbesbinuzeri);
 //////////////////////////////////////////////////////
 
 /////////////////2) erkek cocuklari siralar
 const erkekcocuksiralama = families.map((pcocuklar)=> pcocuklar.childrens
                                  .filter((pcocuklar)=> pcocuklar.gender == "boy")
                                  .map((pcocuklar)=> pcocuklar.name))
                                  .sort()  ;                         
 console.log(erkekcocuksiralama);
 
 ///////////////////3) kiz cocuklari siralar
 const kizcocuksiralama = families.map((pcocuklar)=> pcocuklar.childrens
                                  .filter((pcocuklar)=> pcocuklar.gender == "girl")
                                  .map((pcocuklar)=> pcocuklar.name))
                                  .sort()  ;                         
 console.log(kizcocuksiralama);
 
 /////////////////////////////////////////
 //////////////////4) yasi 8den kucuk cocuklari siralar
 
 const sekizdenkcukler =families.map((pkids)=> pkids.childrens              
                                .filter((pkids)=> pkids.age<8) 
                                .map((pkids)=> pkids.name) )
                                .sort()  ;                                          
 console.log(sekizdenkcukler);
 
 ///////////////////5) yasi 8den buyuk olanlarin annelerinin isimleri
 
  const sekizdenbuyukler = families.map((cocuk)=> cocuk.childrens 
                                   .filter((cocuk)=> cocuk.age>8 )
                                   .map((cocuk)=>cocuk.name));
                                                              
  console.log(sekizdenbuyukler);
 
 