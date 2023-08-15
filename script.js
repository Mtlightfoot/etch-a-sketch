console.log("hello");

const container = document.createElement("div");
container.id = "container";
container.className = "container";
container.style.maxWidth = "500px";
container.style.maxHeight = "500px";
container.style.margin = "0 auto";
container.style.border = "red 2px solid"
document.body.appendChild(container);

let pixel = 100;

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


