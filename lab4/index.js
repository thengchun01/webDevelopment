const p4one = document.getElementById("4.1");
const b4one = document.getElementById("b4.1");

b4one.addEventListener("click", ()=>{
    if(p4one.textContent == "Hello There!"){
        p4one.textContent ="Welcome to my website!";
        b4one.textContent = "Click me";
    }else{
        p4one.textContent = "Hello There!";
        b4one.textContent = "Click me again!";
    }
})

// lab4.2
const i42 = document.getElementById("i4.2");
const b42 = document.getElementById("b4.2");
const r42 = document.getElementById("r4.2");

function checkInput(){
    let value = parseInt(i42.value, 10);
    if(value == 10){
        r42.textContent = "The number is equal to 10";
    }
    else if(value > 10){
        r42.textContent = "The number is greater than 10";
    }
    else if (value < 10){
        r42.textContent = "The number is less than 10";
    }
    else if(isNaN(value)){
        r42.textContent = "Please insert a number!";
    }
    else{
        r42.textContent = "UNKNOWN ERROR!!!";
    }
}