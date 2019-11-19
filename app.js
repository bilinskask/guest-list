let submitButtonSelector = document.querySelectorAll("button")
let guestName = document.getElementById("guest-name")
let guestList = [];

submitButtonSelector.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        const btnId = e.target.id;
        handleGuest(btnId);
        showGuestList()
        })
})

function handleGuest(btnId){
    let inputName = guestName.value
    switch(btnId){
        case("add-vip"):      
        guestList.unshift(inputName)
        break;
        case("add-peasant"):      
        guestList.push(inputName)
        break;
        case("remove-vip"):      
        guestList.shift(inputName)
        break;
        case("remove-peasant"):      
        guestList.pop(inputName)
        break;
        case("shuffle-guests"):      
        guestList.reverse(inputName)
        break;
        case("remove-guests"):
        let startPoint = Number(document.getElementById("guest-start-position").value)
        let endPoint = Number(document.getElementById("guest-end-position").value)
        if(startPoint !== 0){
            if(endPoint === 0){
                endPoint = endPoint + 1;
            }            
            guestList.splice(startPoint, endPoint)        
        }
        break;
        case("inverse-name"):      
        console.log(inverseName(inputName))
        break;
        case("sort-az"):
        sortList(btnId)
        break;
        case("sort-za"):
        sortList(btnId)
        break;
    }
}

function showGuestList(){
    document.querySelector("#guest-list").innerHTML = null
    guestList.forEach(guest => {
        let guestName = document.createElement("p")
        document.querySelector("#guest-list").appendChild(guestName).innerText = guest
    })
}

function inverseName(guestName){
    let reversedName = [];
    for(let i = guestName.length; i >= 0; i--){
        reversedName.push(guestName[i])
    }
    console.log(reversedName.join(''))
}

function sortList(sortDirection){
    if(sortDirection === "sort-az"){
        guestList.sort((a,b) =>{
            return a.toLowerCase().localeCompare(b.toLowerCase())
        })
        return guestList
    }
    else if (sortDirection === "sort-za"){
        guestList.sort(function(a, b){
            return b.toLowerCase().localeCompare(a.toLowerCase())
        })
    }
}

function findAndReplace(fruitArr, searchName, replaceName){
    fruitArr.forEach((value, i) =>{
        if(value === searchName && replaceName != null){
            fruitArr[i] = replaceName
        }     
        })
        return fruitArr
}

//findAndReplace(["apple", "orange", "kiwi", "orange"], "orange")

// var dataLabel= document.createElement("guest");
// document.querySelector("#guest-list").appendChild(dataLabel)

// function loopThroughData(dataObject){
//     const dataKeys = Object.keys(dataObject)
//     const dataValues = Object.values(dataObject)
//     for(i=0; i < dataKeys.length; i++){
//         const keyName = dataKeys[i];
//         const keyValue = dataValues[i]
//         createCardElems(keyName, keyValue);
//     }
//     return dataObject
// }

// function createCardElems(keyName, keyValue){
//     var dataLabel= document.createElement("label");
//     document.querySelector("body > div:nth-child(2) > div").appendChild(dataLabel).innerText = `${keyName.charAt(0).toUpperCase() + keyName.slice(1)}:`;
//     var dataInnerValue = document.createElement("p");
//     document.querySelector("body > div:nth-child(2) > div").appendChild(dataInnerValue).innerText = `${keyValue}`;
// }

// function checkStorage(){
//     if(localStorage.length !== 0){
//         const parsedData = JSON.parse(window.localStorage.getItem("storedata"))
//         loopThroughData(parsedData)
//     }
// }

// function storeToStorage(){
//     loopThroughData(pickInputValues());
//     localStorage.setItem("storedata", JSON.stringify(pickInputValues()));
// }

// checkStorage()