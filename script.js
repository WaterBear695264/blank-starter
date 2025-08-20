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
    const table = document.querySelector("#computertable tbody");
    // while (table.firstChild) {
    //     table.removeChild(myNode.lastChild);
    // }
    for(let i = 0; i < computerdata.length; i++){
        let row = document.createElement("tr")
        
        let num = document.createElement("td");
        num.innerHTML = i+1;

        let modelname = document.createElement("td");
        modelname.innerHTML = computerdata[i].model_name;

        let ram = document.createElement("td");
        ram.innerHTML = computerdata[i].ram;

        let storage = document.createElement("td");
        storage.innerHTML = computerdata[i].storage;

        let cpu = document.createElement("td");
        cpu.innerHTML = computerdata[i].cpu;

        let gpu = document.createElement("td");
        gpu.innerHTML = computerdata[i].gpu;

        row.appendChild(num);
        row.appendChild(modelname);
        row.appendChild(ram);
        row.appendChild(storage);
        row.appendChild(cpu);
        row.appendChild(gpu);
        table.appendChild(row);
    }
}