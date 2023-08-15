console.log("hello");

const container = document.createElement("div");
container.id = "container";
container.className = "container";
container.style.maxWidth = "100%";
container.style.display = "flex";
container.style.marginLeft = "auto";
container.style.marginRight = "auto";
container.style.justifyContent = "center";
document.body.appendChild(container);

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.className = "row";
    row.style.margin = "0";
    for (let j = 0; j < 16; j++) {
        let box = document.createElement("div");
        box.className = "box";
        box.style.backgroundColor = "white";
        box.style.width = "40px";
        box.style.height = "40px";
        box.style.margin = "0";
        box.style.border = "black 1px solid"
        row.appendChild(box);
        box.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black";
        })
        document.getElementById("container").appendChild(row);

    }
}

