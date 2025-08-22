// Get the query string from the URL (e.g., ?name=John&age=30)
const queryString = window.location.search;

console.log(queryString)
// Parse it using URLSearchParams
const params = new URLSearchParams(queryString);

// Example: Get a query parameter named 'id'
const display = document.getElementById("output")

const id = params.get('id');

let model = computerdata[id]



display.innerText = "model: " + model.model_name + "\n";
display.innerText += "ram: " + model.ram + "\n";
display.innerText += "storage: " + model.storage + "\n";
display.innerText += "cpu: " + model.cpu + "\n";
display.innerText += "gpu: " + model.gpu + "\n";


console.log(model)




