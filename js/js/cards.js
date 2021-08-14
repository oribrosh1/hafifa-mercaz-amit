
let localstorageCards = JSON.parse(localStorage.getItem("cards"));
console.log(localstorageCards);

if(localstorageCards && localStorage.getItem("cards")){    
    for (let i = 0; i < localstorageCards.length; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = localstorageCards[i];
        cards.appendChild(card);
    }
}

document.getElementById("addCard").addEventListener("click", addCard = () =>{
    let job = document.getElementById("job").value;
    const name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if(job.length > 0 && name.length > 2 && email.length > 0){
        const card = document.createElement("div");
        if(!(email.includes("@") && email.includes("."))){
            email = "valid@email.com";
        }
        job = job.replace(/פקיד/g,"");
        card.className = "card";
        card.innerHTML += '<button class="hide" id="' + name + job + email +'"> מחק </button>';
        card.innerHTML += '<div><h1>' + "שם: "+ name + "</h1>"+'<h2>' + "תפקיד: " + job + "</h2>" + '<h2>' + "אימייל: " + email + "</h2></div>";
        let localstorageCards = JSON.parse(localStorage.getItem("cards"));
        
        let array = localstorageCards == null ? [] : typeof(localstorageCards) == "string" ? [localstorageCards] : localstorageCards;
        
        array = localstorageCards != null ? [...array, card.innerHTML] : [card.innerHTML];
        console.log(array);

        localStorage.setItem("cards", JSON.stringify(array));
        document.getElementById("cards").appendChild(card);
        document.getElementById( name + job + email).addEventListener("click", addCard = () =>{
            document.getElementById("" + name + job + email).parentElement.remove();
        });
        document.getElementById( name + job + email).parentElement.addEventListener("mouseover", hoverOnCard = () =>{
            document.getElementById( name + job + email).classList.remove("hide");
            document.getElementById( name + job + email).classList.add("remove");
            document.getElementById( name + job + email).nextSibling.classList.add("insideTheCard");
        });
        document.getElementById( name + job + email).parentElement.addEventListener("mouseout", hoverOnCard = () =>{
            document.getElementById( name + job + email).classList.remove("remove");
            document.getElementById( name + job + email).classList.add("hide");
            document.getElementById( name + job + email).nextSibling.classList.remove("insideTheCard");
        });

        document.getElementById("job").value = "";
        document.getElementById("job").classList.remove("red");
        document.getElementById("job").classList.add("white");

        document.getElementById("name").value = "";
        document.getElementById("name").classList.remove("red");
        document.getElementById("name").classList.add("white");

        document.getElementById("email").value = "";
        document.getElementById("email").classList.remove("red");
        document.getElementById("email").classList.add("white");

    }else{
        if(job.length == 0){
            document.getElementById("job").value = "";
            document.getElementById("job").classList.remove("white");
            document.getElementById("job").classList.add("red");
        }else{
            document.getElementById("job").classList.add("white");
            document.getElementById("job").classList.remove("red");
        }

        if(name.length == 0){
            document.getElementById("name").value = "";
            document.getElementById("name").classList.remove("white");
            document.getElementById("name").classList.add("red");        
        }else{
            document.getElementById("name").classList.add("white");
            document.getElementById("name").classList.remove("red");
        }
        if(email.length == 0){
            document.getElementById("email").value = "";
            document.getElementById("email").classList.remove("white");
            document.getElementById("email").classList.add("red");        
        }else{
            document.getElementById("email").classList.add("white");
            document.getElementById("email").classList.remove("red");
        }
    }
});
