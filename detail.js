document.getElementById("saveEdit").addEventListener("click", save)
document.getElementById("makeEdit").addEventListener("click", swap)
document.getElementById("view").addEventListener("click", swap2)
// Get the query string from the URL (e.g., ?name=John&age=30)
const queryString = window.location.search;

console.log(queryString)
// Parse it using URLSearchParams
const params = new URLSearchParams(queryString);

let arrOfTypes = ["model_name", "ram", "storage", "cpu", "gpu"]

// Example: Get a query parameter named 'id'
const display = document.getElementById("output")
const showPage = document.getElementById("show")
const editPage = document.getElementById("edit")

const id = params.get('id');

let model = computerdata[id]
console.log("hello")

function swap(){
    editPage.style.display = "inline";
    showPage.style.display = "none";
}

function swap2(){
    editPage.style.display = "none";
    showPage.style.display = "inline";
    updateText()
}

function save() {
    for(let i = 0; i < 5; i++){
        console.log(document.getElementById(i.toString()).value)
        if(document.getElementById(i.toString()).value !== "")
        computerdata[id][arrOfTypes[i]] = document.getElementById(i.toString()).value
    }
}

function updateText(){
    display.innerText = "model: " + model.model_name + "\n";
    display.innerText += "ram: " + model.ram + "\n";
    display.innerText += "storage: " + model.storage + "\n";
    display.innerText += "cpu: " + model.cpu + "\n";
    display.innerText += "gpu: " + model.gpu + "\n";
}

updateText()

console.log(model)




