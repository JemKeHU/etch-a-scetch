let tool = "brush";

const squareContainer = document.querySelector(".container");

const ETCH_WIDTH = 608;
const ETCH_HEIGHT = 608;

const toolsList = document.querySelector("#tools");

toolsList.addEventListener("click", (e) => {
    let target = e.target.closest("button");
    if (!target) return;

    switch(target.id) {
        case "brush":
            tool = "brush";
            alert("Brush chosen.");
            break;
        case "eraser":
            tool = "eraser";
            alert("Eraser chosen.");
            break;
        case "color-wheel":
            tool = "color-wheel";
            alert("Random color chosen.");
            break;
        case "cursor":
            tool = "cursor";
            alert("Cursor chosen.");
            break;
    }   
});

const initialGrid = (gridSize) => {
    for (let i = 0; i < gridSize**2; i++) {
        let square = document.createElement("div");
        square.classList.add("div-square");
        square.style.width = `${ETCH_WIDTH / gridSize}px`;
        square.style.height = `${ETCH_HEIGHT / gridSize}px`;
        squareContainer.appendChild(square);

        square.addEventListener("mouseover", () => {
            if (tool === "brush") {
                square.style.backgroundColor = "black";
            } else if (tool === "eraser") {
                square.style.backgroundColor = "white";
            } else if (tool === "color-wheel") {
                square.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
            } else if (tool === "cursor") {
                return;
            }
        });
    }
}

const changeGrid = document.querySelector(".main-button");

changeGrid.addEventListener("click", () => {
    let squareNumber = +prompt("Please type from 1 to 100");
    
    if (squareNumber > 0 &&  squareNumber< 101) {
        while (squareContainer.hasChildNodes()) {
            squareContainer.removeChild(squareContainer.childNodes[0]);
        }
        initialGrid(squareNumber);
    } else {
        alert("ERROR");
    }
});

initialGrid(16);

const resetGrid = document.querySelector(".reset-grid");

let nodeList = squareContainer.children;

resetGrid.addEventListener("click", () => {
    for (const node of nodeList) {
        node.style.backgroundColor = "white";
    }
});