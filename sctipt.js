const container = document.querySelector("#container");
const blackColor = "black";
const tools = document.querySelectorAll(".instruments button");
let currentTool = "pen";

function randomColor() {
    const max = 255;
    const min = 0;

    const maxFloored = Math.floor(max);
    const minCeiled = Math.ceil(min);

    let red = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    let green = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    let blue = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

    let rgbColors = `rgb(${red}, ${green}, ${blue})`;

    return rgbColors;
}

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 640 / size;

    for (let i = 0; i < size*size; i++) {
        const div = document.createElement("div");
        div.classList.add("normal");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        container.appendChild(div);
    }
}

function resetToolButtons() {
    tools.forEach((button) => button.classList.remove('active'));

}

tools.forEach((button) => {
    button.addEventListener("click", (event) => {
        resetToolButtons();
        event.currentTarget.classList.add("active");
        currentTool = event.currentTarget.id.replace("-tool", "");
        console.log("Выбран инструмент:", currentTool);
    });
});


container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("normal")) {
        if (currentTool === "pen") {
            event.target.style.backgroundColor = randomColor();
        } else if (currentTool === "eraser") {
            event.target.style.backgroundColor = "white";
        }
    }
});

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () => {
    document.querySelectorAll(`#container > .normal`).forEach(div => {
        div.style.backgroundColor = "";
    });
});

document.querySelector("#grid button").addEventListener("click", () => {
    const gridSize = parseInt(prompt());

    if (gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert("Please enter number between 1 and 100");
    }
});

createGrid(16);