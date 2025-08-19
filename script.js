document.getElementById("button").addEventListener("click",save);
document.getElementById("button2").addEventListener("click",retrieve);
document.getElementById("make").addEventListener("click",makeTable);
const output = document.getElementById("output")
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

function makeTable(){
    const table = document.querySelector("#cityTable tbody");

    for(let i = 0; i < computerdata.length; i++){
        let row = document.createElement("tr")
        
        let num = document.createElement("td")
        num.innterHTML = i+1;

        let modelname = document.createElement("td")
        modelname.innterHTML = computerdata[i].model_name;

        let ram = document.createElement("td")
        ram.innterHTML = computerdata[i].ram;

        let storage = document.createElement("td")
        storage.innterHTML = computerdata[i].storage;

        let CPU = computerdata[i].gpu;
        CPU.innerHTML = computerdata.gpu

        let GPU = computerdata[i].gpu;
        GPU.innerHTML = computerdata.gpu

        row.appendChild(num)
        row.appendChild(modelname)
        row.appendChild(ram)
        row.appendChild(storage)
        row.appendChild(CPU)
        row.appendChild(GPU)
        table.appendChild(row)
    }
}