document.getElementById("button").addEventListener("click",save);
document.getElementById("button2").addEventListener("click",retrieve);
let output = document.getElementById("output")
let info = {email: ""};
function save(){
    info.email = document.getElementById("scaminator5000").value;
    let stringified = JSON.stringify(info);
    localStorage.setItem("info", stringified);
    console.log(localStorage)
}

function retrieve () {
    let retrieveal = localStorage.getItem("info")
    let retrieved = JSON.parse(retrieveal)
    console.log(retrieved)
    output.innerHTML = retrieved.email
}
