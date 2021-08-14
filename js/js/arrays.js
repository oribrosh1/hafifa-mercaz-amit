const cards = document.getElementById("cards");

for (let i = 0; i < usersArray.length; i++) {
    const card = document.createElement("div");
    const user = usersArray[i];
    card.className = "card";
    card.innerHTML += '<div><h1>' + "age: "+ user.age + "</h1>"+'<h2>' + "name: " + user.name + "</h2>" + '<h2>' + "admin: " + user.admin + "</h2>" + '<h2>' + "grades: " + user.grades + "</h2>" + '<h2>' + "address : \n\n " +  "city: " + user.address.city +" house number: " + user.address.houseNumber + "</h2></div>";
    cards.appendChild(card);
}

document.getElementById("findCard").addEventListener("click", addCard = () =>{
    const areaSelected = document.getElementById("area").value;
    const areaValue = document.getElementById("areaValue").value;
    cards.innerHTML = "";
    if(areaSelected == "age" ){
        for (let i = 0; i < usersArray.length; i++) {
            if(usersArray[i].age >= areaValue){
                const card = document.createElement("div");
                const user = usersArray[i];
                card.className = "card";
                card.innerHTML += '<div><h1>' + "age: "+ user.age + "</h1>"+'<h2>' + "name: " + user.name + "</h2>" + '<h2>' + "admin: " + user.admin + "</h2>" + '<h2>' + "grades: " + user.grades + "</h2>" + '<h2>' + "address : \n\n " +  "city: " + user.address.city +" house number: " + user.address.houseNumber + "</h2></div>";
                cards.appendChild(card);
            }
        }
    }else if(areaSelected == "name"){
        for (let i = 0; i < usersArray.length; i++) {
            if(usersArray[i].name == areaValue){
                const card = document.createElement("div");
                const user = usersArray[i];
                card.className = "card";
                card.innerHTML += '<div><h1>' + "age: "+ user.age + "</h1>"+'<h2>' + "name: " + user.name + "</h2>" + '<h2>' + "admin: " + user.admin + "</h2>" + '<h2>' + "grades: " + user.grades + "</h2>" + '<h2>' + "address : \n\n " +  "city: " + user.address.city +" house number: " + user.address.houseNumber + "</h2></div>";
                cards.appendChild(card);
            }
        }
    }else if(areaSelected == "admin"){ 
        if(areaValue.toLowerCase() == "true"){
            for (let i = 0; i < usersArray.length; i++) {
                if(usersArray[i].admin == true){
                    const card = document.createElement("div");
                    const user = usersArray[i];
                    card.className = "card";
                    card.innerHTML += '<div><h1>' + "age: "+ user.age + "</h1>"+'<h2>' + "name: " + user.name + "</h2>" + '<h2>' + "admin: " + user.admin + "</h2>" + '<h2>' + "grades: " + user.grades + "</h2>" + '<h2>' + "address : \n\n " +  "city: " + user.address.city +" house number: " + user.address.houseNumber + "</h2></div>";
                    cards.appendChild(card);
                }
            }
        }else if(areaValue.toLowerCase() == "false"){
            for (let i = 0; i < usersArray.length; i++) {
                if(usersArray[i].admin == false){
                    const card = document.createElement("div");
                    const user = usersArray[i];
                    card.className = "card";
                    card.innerHTML += '<div><h1>' + "age: "+ user.age + "</h1>"+'<h2>' + "name: " + user.name + "</h2>" + '<h2>' + "admin: " + user.admin + "</h2>" + '<h2>' + "grades: " + user.grades + "</h2>" + '<h2>' + "address : \n\n " +  "city: " + user.address.city +" house number: " + user.address.houseNumber + "</h2></div>";
                    cards.appendChild(card);
                }
            }
        }
    }else if(areaSelected == "grades"){
        for (let i = 0; i < usersArray.length; i++) {
            const len = usersArray[i].grades.length;
            let sum = 0;
            usersArray[i].grades.forEach(grade => {
                sum += grade;
            });
            if((sum / len) >= areaValue){
                const card = document.createElement("div");
                const user = usersArray[i];
                card.className = "card";
                card.innerHTML += '<div><h1>' + "age: "+ user.age + "</h1>"+'<h2>' + "name: " + user.name + "</h2>" + '<h2>' + "admin: " + user.admin + "</h2>" + '<h2>' + "grades: " + user.grades + "</h2>" + '<h2>' + "address: " +  "city: " + user.address.city +" house number: " + user.address.houseNumber + "</h2></div>";
                cards.appendChild(card);
            }
        }
    }else if(areaSelected == "address"){
        for (let i = 0; i < usersArray.length; i++) {
            
            if(areaValue.toLowerCase() == usersArray[i].address.city.toLowerCase()){
                const card = document.createElement("div");
                const user = usersArray[i];
                card.className = "card";
                card.innerHTML += '<div><h1>' + "age: "+ user.age + "</h1>"+'<h2>' + "name: " + user.name + "</h2>" + '<h2>' + "admin: " + user.admin + "</h2>" + '<h2>' + "grades: " + user.grades + "</h2>" + '<h2>' + "address : \n\n " +  "city: " + user.address.city +" house number: " + user.address.houseNumber + "</h2></div>";
                cards.appendChild(card);
            }
        }
    }
});
document.getElementById("allGreater").addEventListener("click", addCard = () =>{
    const areaSelected = document.getElementById("area").value;
    const areaValue = document.getElementById("areaValue").value;
    if(areaSelected == "grades"){
        cards.innerHTML = "";
        for (let i = 0; i < usersArray.length; i++) {
            let ok = true;
            usersArray[i].grades.forEach(grade => {
                if(grade < areaValue){
                    ok = false;
                }
            });
            if(ok){
                const card = document.createElement("div");
                const user = usersArray[i];
                card.className = "card";
                card.innerHTML += '<div><h1>' + "age: "+ user.age + "</h1>"+'<h2>' + "name: " + user.name + "</h2>" + '<h2>' + "admin: " + user.admin + "</h2>" + '<h2>' + "grades: " + user.grades + "</h2>" + '<h2>' + "address: " +  "city: " + user.address.city +" house number: " + user.address.houseNumber + "</h2></div>";
                cards.appendChild(card);
            }
        }
    }
});
document.getElementById("someGreater").addEventListener("click", addCard = () =>{
    const areaValue = document.getElementById("areaValue").value;
    cards.innerHTML = "";
    for (let i = 0; i < usersArray.length; i++) {
        let ok = false;
        usersArray[i].grades.forEach(grade => {
            if(grade > areaValue){
                ok = true;
            }
        });
        if(ok){
            const card = document.createElement("div");
            const user = usersArray[i];
            card.className = "card";
            card.innerHTML += '<div><h1>' + "age: "+ user.age + "</h1>"+'<h2>' + "name: " + user.name + "</h2>" + '<h2>' + "admin: " + user.admin + "</h2>" + '<h2>' + "grades: " + user.grades + "</h2>" + '<h2>' + "address: " +  "city: " + user.address.city +" house number: " + user.address.houseNumber + "</h2></div>";
            cards.appendChild(card);
        }
    }
});
document.getElementById("manipulation").addEventListener("click", addCard = () =>{
    const areaValue = document.getElementById("areaValue").value;
    cards.innerHTML = "";
    for (let i = 0; i < usersArray.length; i++) {
        const len = usersArray[i].grades.length;
        let sum = 0;
        usersArray[i].grades.forEach(grade => {
            sum += grade;
        }); 
        console.log((sum / len) < areaValue);
        
               
        if((sum / len) < areaValue && usersArray[i].address.houseNumber > areaValue){
            const card = document.createElement("div");
            const user = usersArray[i];
            const age = user.age + Number(areaValue);
            card.className = "card";
            card.innerHTML += '<div><h1>' + "age: "+ age + "</h1>"+'<h2>' + "name: " + user.name + "</h2>" + '<h2>' + "admin: " + user.admin + "</h2>" + '<h2>' + "grades: " + user.grades + "</h2>" + '<h2>' + "address: " +  "city: " + user.address.city +" house number: " + user.address.houseNumber + "</h2></div>";
            cards.appendChild(card);
        }
    }
});