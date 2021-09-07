function generateGrid(size) {
    let elementSize = 500 / size;
    let sketchpad = document.getElementById("sketchpad");
    for (let i = 1; i < size+1; i++) {
        sketchpad.appendChild(document.createElement("div")).className = "grid";
        let grid = document.getElementsByClassName("grid");
        grid = grid[grid.length-1];
        for (let j = 1; j < size+1; j++) {
            let square = grid.appendChild(document.createElement("div"));
            square.className = "square";
            square.id = i.toString() + j.toString();
            square.style = "width: " + elementSize +"px; height: " + elementSize + "px;";
        }
    }
}

generateGrid(22);