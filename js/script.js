function paintSquare(e) {
    let element = document.getElementById(e.currentTarget.id);
    let rainbow = document.getElementById("rainbow").value;
    let color;
    if (rainbow == 1) {
        let colors = ['royalblue', 'limegreen', 'yellow', 'hotpink', 'purple', 'tomato'];
        color = colors[Math.floor(Math.random() * 6)];
    } else {
        color = document.getElementById("color").value;
    }
    element.style.backgroundColor = color;
}

function generateGrid(size) {
    let elementSize = 600 / size;
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

function rainbowToggle() {
    let rainbow = document.getElementById("rainbow");

    if(rainbow.value == 0) {
        rainbow.value = 1;
        rainbow.className = "btn rainbow";
        rainbow.innerHTML = "Rainbow mode ON";
    } else {
        rainbow.value = 0;
        rainbow.className = "btn";
        rainbow.innerHTML = "Rainbow mode OFF";
    }
}

function reset(gridChange) {
    let gridSize = parseInt(document.getElementById("gridSize").value, 10);
    let sketchpad = document.getElementById("sketchpad");
    while (sketchpad.lastElementChild) {
        sketchpad.removeChild(sketchpad.lastElementChild);
    }
    if (!gridChange) generateGrid(gridSize);
}

function updateGridSize() {
    let gridSize = parseInt(document.getElementById("gridSize").value, 10);
    document.getElementById("gridText").innerHTML = gridSize + "x" + gridSize;
    reset(true);
    generateGrid(gridSize);
}

generateGrid(16);