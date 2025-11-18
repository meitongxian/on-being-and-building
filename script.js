const grid = document.querySelectorAll(".grid > div");

grid.forEach(sky => {
    sky.addEventListener("mouseover", function() {
        console.log("hi");
        var offsetX = Math.floor(Math.random() * (50 + 50 + 1)) -50;
        var offsetY = Math.floor(Math.random() * (50 + 50 + 1)) -50;
        console.log(offsetX, offsetY);
        this.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

const title = document.querySelectorAll(".title > h1 > span");

title.forEach(word => {
    word.addEventListener("mouseover", function() {
        console.log("hi");
        var offsetX = Math.floor(Math.random() * (50 + 50 + 1)) -50;
        var offsetY = Math.floor(Math.random() * (50 + 50 + 1)) -50;
        console.log(offsetX, offsetY);
        this.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});