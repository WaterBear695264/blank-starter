document.getElementById("saveEdit").addEventListener("click", save)
document.getElementById("makeEdit").addEventListener("click", swap)
document.getElementById("view").addEventListener("click", swap2)
// Get the query string from the URL (e.g., ?name=John&age=30)
const queryString = window.location.search;
let stringy;

console.log(queryString)
// Parse it using URLSearchParams
const params = new URLSearchParams(queryString);

let arrOfTypes = ["model_name", "ram", "storage", "cpu", "gpu"]

// Example: Get a query parameter named 'id'
const display = document.getElementById("output")
const showPage = document.getElementById("show")
const editPage = document.getElementById("edit")

const id = params.get('id');
const create = params.get('create')
console.log(typeof(create))

console.log(id)

function defineorigin(){
    if("data" in localStorage){
        console.log("wheheeeeeeeeee")
        return localStorage.getItem("data");
    }else{
        return JSON.stringify(computerdata);
    }
}

function swap(){
    editPage.style.display = "inline";
    showPage.style.display = "none";
}

function swap2(){
    editPage.style.display = "none";
    showPage.style.display = "inline";
    updateText()
    for(let i = 0; i < 5; i++){
        document.getElementById(i.toString()).value = ""
    }
}

function save() {

    if(create === "1" ){
        let obj = {
            model_name: "",
            ram: "",
            storage: "",
            cpu: "",
            gpu: ""
        }
        for(let i = 0; i < 5; i++){
            obj[arrOfTypes[i]] = document.getElementById(i.toString()).value
        }
        stringy = JSON.parse(localStorage.getItem("data"))
        stringy.push(obj)
        console.log(stringy)
        localStorage.setItem("data", JSON.stringify(stringy))
        console.log(localStorage)
    }else{
        for(let i = 0; i < 5; i++){
            stringy = JSON.parse(localStorage.getItem("data"))
            stringy[id][arrOfTypes[i]] = document.getElementById(i.toString()).value
            localStorage.setItem("data", JSON.stringify(stringy))
        }

    }
            }



function updateText(){
    let model = JSON.parse(localStorage.getItem("data"))[id]
    display.innerText = "model: " + model.model_name + "\n";
    display.innerText += "ram: " + model.ram + "\n";
    display.innerText += "storage: " + model.storage + "\n";
    display.innerText += "cpu: " + model.cpu + "\n";
    display.innerText += "gpu: " + model.gpu + "\n";
}

stringy = defineorigin()
console.log(stringy)
localStorage.setItem("data", stringy);
updateText()





