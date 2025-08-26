document.getElementById("button").addEventListener("click",save);
document.getElementById("button2").addEventListener("click",retrieve);
document.getElementById("make").addEventListener("click",makeTable);
document.getElementById("delete").addEventListener("click",deleteTable);
const output = document.getElementById("output")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");
let raf;
let info = {email: ""};

class circle{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }


}

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
    console.log(computerdata)
    const table = document.querySelector("#computertable tbody");
    while (table.firstChild) {
        table.removeChild(table.lastChild);
    }
    for(let i = 0; i < computerdata.length; i++){
        let row = document.createElement("tr")
        
        let num = document.createElement("td");
        num.innerHTML = i+1;

        let link = document.createElement("a")
        let div = document.createElement("div")
        let modelname = document.createElement("td");
        link.href = "detail.html?id=" + i
        div.innerHTML = computerdata[i].model_name;
        link.append(div)
        modelname.append(link)
        

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

function deleteTable(){
    const table = document.querySelector("#computertable tbody");
    while (table.firstChild) {
        table.removeChild(table.lastChild);
    }
}

let x = 0;
let y = 0
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeRect(x, y, 50, 50);
    ctx.fillStyle = "red";
    ctx.fill()
    x++;
    y++;
    raf = window.requestAnimationFrame(draw);
}

draw()

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});
