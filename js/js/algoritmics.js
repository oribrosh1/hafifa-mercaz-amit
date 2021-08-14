document.getElementById("palindrome").addEventListener("click", colorBackground = () =>{

    const input = document.getElementById("input");
    const val = input.value;
    
    let array1 = val.split(" ");
    let array2 = val.split(" ").reverse();
    array2 = array2.filter((val)=> Boolean(val));
    array1 = array1.filter((val)=> Boolean(val));

    let ok = true;
    for (let i = 0; i < array1.length / 2; i++) {
        if(array1[i] != array2[i]){
            ok = false;
        }   
    }

    if(ok){
        input.classList.remove("red");
        input.classList.add("green");
    }else{
        input.classList.remove("green");
        input.classList.add("red");
    }

});

document.getElementById("encrypt").addEventListener("click", colorBackground = () =>{
    const number = document.getElementById("number").value;    
    const english = document.getElementById("english").value;
    if(english.length > 0 && number.length > 0){
        let newValue = [];
        english.split("").forEach(element => {
            newValue.push(String.fromCharCode(element.charCodeAt() + Number(number)));
        });                
        document.getElementById("number").value = "";
        document.getElementById("english").value = newValue.join("");
    }
});


document.getElementById("decrypt").addEventListener("click", colorBackground = () =>{
    const number = document.getElementById("number").value;    
    const english = document.getElementById("english").value;
    if(english.length > 0 && number.length > 0){
        let newValue = [];
        english.split("").forEach(element => {
            newValue.push(String.fromCharCode(element.charCodeAt() - Number(number)));
        });                
        document.getElementById("number").value = "";
        document.getElementById("english").value = newValue.join("");
    }
});