console.log("hello");

const container = document.createElement("div");
container.id = "container";
container.className = "container";
container.style.maxWidth = "600px";
container.style.maxHeight = "600px";
container.style.margin = "0 auto";
document.body.appendChild(container);

function createGrid(pixel) {
    for (let i = 0; i < pixel; i++) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.display = "flex";
        for (let j = 0; j < pixel; j++) {
            let box = document.createElement("div");
            box.className = "box";
            box.style.flex = "1";
            box.style.backgroundColor = "white";
            box.style.border = "black 1px solid";
            box.style.aspectRatio = "1 / 1";
            row.appendChild(box);
            box.addEventListener("mouseover", function (e) {
                e.target.style.backgroundColor = "black";
            })
            document.getElementById("container").appendChild(row);
        }
    }
};
let userInput = 16;
createGrid(userInput);

const button = document.createElement("button");
button.id = "button";
button.className = "button";
button.textContent = "Amount of pixels";
button.style.border = "3px solid black"
button.style.borderRadius = "5px";
button.style.marginTop = "25px";
button.style.width = "250px";
button.style.height = "50px";
button.style.backgroundColor = "light gray";
button.style.boxShadow = "0px 2px 3px grey"
button.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "white"
});
button.addEventListener("mouseout", function (e) {
    e.target.style.backgroundColor = "";
});

button.addEventListener("click", function (e) {
    userInput = prompt("Please enter any number between 1 and 100!");
    createGrid(userInput);
});

document.body.appendChild(button);
