function paintSquare(e) {
    element = document.getElementById(e.currentTarget.id);
    element.style.backgroundColor = "black";
}

function generateGrid(size) {
    let elementSize = 560 / size;
    let sketchpad = document.getElementById("sketchpad");
    for (let i = 1; i < size + 1; i++) {
        sketchpad.appendChild(document.createElement("div")).className = "grid";
        let grid = document.getElementsByClassName("grid");
        grid = grid[grid.length - 1];
        for (let j = 1; j < size + 1; j++) {
            let square = grid.appendChild(document.createElement("div"));
            square.className = "square";
            square.id = i.toString() + "-" + j.toString();
            square.style = "width: " + elementSize + "px; height: " + elementSize + "px;";
            square.addEventListener("mouseover", paintSquare);
        }
    }
}

function reset(gridChange) {
    let gridSize = parseInt(document.getElementById("gridSize").value, 10);
    let sketchpad = document.getElementById("sketchpad");
    while (sketchpad.lastElementChild) {
        sketchpad.removeChild(sketchpad.lastElementChild);
      }
    if(!gridChange) generateGrid(gridSize);
}

function updateGridSize() {
    let gridSize = parseInt(document.getElementById("gridSize").value, 10);
    document.getElementById("gridText").innerHTML = gridSize + "x" + gridSize;
    reset(true);
    generateGrid(gridSize);
}

generateGrid(16);