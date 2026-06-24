let itemList = [];

function addItem(){

    let item = document.getElementById("item").value;

    itemList.push(item);

    displayItem();
     
    document.getElementById('item').value ="";
}

function removeItem(){
     
    itemList.pop(item);

    displayItem();
}

function  displayItem(){
    let list = document.getElementById("list");

    list.innerHTML ="";
    for(let i = 0; i< itemList.length;i++){
        list.innerHTML += `<li>${itemList[i]}</li>`;
    }
}