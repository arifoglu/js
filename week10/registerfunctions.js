//functions lists

function newlist(){
    student = {
        "name"    :`${ad.value}`,
        "surname" :`${soyad.value}`,
        "age"     :`${Number(yas.value)}`
    };
    return student ;
}

function pushlist(plist){
    return plist.push(newlist());
}

function studentpress(plist){
    let table = plist.map((element,index) => {
        return `<tr id="${index}">
        <td>${index+1}</td>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.age}</td>
        <td><button class="btn btn-danger" id="remove-button">Remove</button></td>
        </tr>`
    }).join("");
    return table ;
}

function resetscreen(){
    list.innerHTML  ="";
    ad.value        ="";
    soyad.value     ="";
    yas.value       ="";
}

function studentsnumber(plist){
    document.querySelector("#numberofstudent").innerHTML = "Total Number :" + (plist.length) ; 
}

function refreshlist(plist,pdom){
    return pdom.innerHTML = plist;
}

function validation(){
    if (ad.value !=="" && soyad.value !=="" && yas.value !==""){
        return true;
    }else {
        return false
    }
}