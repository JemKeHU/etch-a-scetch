const container = document.querySelector("#container");
const blackColor = "black";

for (let i = 1; i < 257; i++) {
    const div = document.createElement("div");
    div.classList.add("normal");
    container.appendChild(div);
}

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("normal")) {
        event.target.classList.add(blackColor);
    }
});

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () => {
    document.querySelectorAll(`#container > .${blackColor}`).forEach(n => {
        n.classList.remove(blackColor);
    });
});