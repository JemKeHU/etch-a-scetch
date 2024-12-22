const container = document.querySelector("#container");
const blackColor = "black";
const tools = document.querySelectorAll(".instruments button");
let currentTool = "pen";

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

for (let i = 1; i < 257; i++) {
    const div = document.createElement("div");
    div.classList.add("normal");
    container.appendChild(div);
}

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("normal")) {
        if (currentTool === "pen") {
            event.target.style.backgroundColor = blackColor;
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