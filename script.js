const grid = document.querySelector('#grid');
let gridSize = prompt("Please enter number of grid rows/columns you would like", '');
console.log(typeof(gridSize));
let gridNumber = Number(gridSize);
console.log(typeof(gridNumber));
if (gridSize >= 100) {
    prompt("That is not valid. Please try again", '');
}

grid.style = "grid-template-columns: repeat("+ gridNumber +",1fr)";

for (let i = 0; i < (gridNumber * gridNumber); i++) {
    const div = document.createElement("div");
    div.className = "box";
    grid.appendChild(div);
};

let clickedBox = document.querySelectorAll(".box");
clickedBox.forEach(item => {
    item.addEventListener('mousedown', event => {
        item.style.backgroundColor = "black";
        clickedBox.forEach(item => {
            item.addEventListener('mouseover', event => {
                item.style.backgroundColor = "black";
            })})
    item.addEventListener('mouseup', event => {
        item.style.backgroundColor = "white";
        clickedBox.forEach(item => {
            item.addEventListener('mouseover', event => {
                item.style.backgroundColor = "white";
            })})
    })
})})