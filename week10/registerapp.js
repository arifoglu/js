//variable list

let form = document.querySelector('#register');
let buton = document.querySelector('#kaydet');
let table =document.querySelector('#kayitlistesi');
let list = document.querySelector('#addedstudents');

let ad = document.querySelector('#studentname');
let soyad = document.querySelector('#studentsurname');
let yas = document.querySelector('#studentage');

let addedstudents =[];
let numberofstudents = 0;


buton.addEventListener("click", () => {
   if(validation()){
    pushlist(addedstudents);
    resetscreen();

    let studenttable = studentpress(addedstudents);
    refreshlist(studenttable,list);
    studentsnumber(addedstudents);

   } else {
       alert("please write corectly")
   }
});









