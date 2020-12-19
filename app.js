document.addEventListener("DOMContentLoaded", function () {
    let light = document.getElementById("get-light"),
        night = document.getElementById("get-night");
    light.addEventListener("click", function () {
        document.body.setAttribute("class", "light");
        light.style.display = "none";
        night.style.display = "block";
    });
    night.addEventListener("click", function () {
        document.body.setAttribute("class", "night");
        night.style.display = "none";
        light.style.display = "block";
    });
    let game = document.getElementById("game");
    class Item {
        constructor(id) {
            this.id = id;
        }
        generate() {
            let div = document.createElement("div");
            let span = document.createElement("span");
            span.setAttribute("id", String(this.id));
            span.classList.add("hidden");
            div.appendChild(span);
            div.setAttribute("class", "item");
            div.addEventListener("click", function () {
                if (div.classList.contains("cover")) {
                    div.classList.remove("cover");
                    span.style.display = "block";
                } else {
                    div.classList.add("cover");
                    span.style.display = "none";
                }
            })
            game.appendChild(div);
        }
    }
    const chs = [...'😋😄😃😘🤩🤗😎🥰😥😴🙄😶😏👗👙👡🌮🥗🧀🥞🥐🥟🍗🦼🎂🍨🍬🍵☕🥃🍺🍸'];
    const alpha = new Set();
    let content = [];
    while (alpha.size !== 8) {
        alpha.add(chs[Math.floor(Math.random() * chs.length)]);
    }
    let x = [],
        y = [];
    let pos1 = new Set();
    while (pos1.size !== 8) {
        pos1.add(Math.floor(Math.random() * 8 + 1));
    }
    for (let item of pos1) {
        x.push(item);
    }
    let min = 9,
        max = 17;
    let pos2 = new Set();
    while (pos2.size !== 8) {
        pos2.add(Math.floor(Math.random() * (max - min)) + min);
    }
    for (let item of pos2) {
        y.push(item);
    }
    const xOy = new Map();
    for (let i = 0; i < x.length; i++) {
        xOy.set(x[i], y[i]);
    }
    for (let item of alpha) {
        content.push(item);
    }
    for (let index = 1; index <= 16; index++) {
        let object = new Item(index);
        object.generate();
    }
    const setContent = (id1, id2, src) => {
        let x = document.getElementById(id1),
            y = document.getElementById(id2);
        x.innerHTML = src;
        y.innerHTML = src;
    }
    for (let i = 0; i < x.length; i++) {
        setContent(x[i], y[i], content[i]);
    }
    let items = document.getElementsByClassName("item");
    for (let item = 0; item < items.length; item++) {
        items[item].classList.add("cover");
    }
});