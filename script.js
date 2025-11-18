const grid = document.querySelectorAll(".grid > div");

grid.forEach(sky => {
    sky.addEventListener("mouseover", function() {
        console.log("hi");
        var offsetX = Math.floor(Math.random() * (20 + 20 + 1)) -20;
        var offsetY = Math.floor(Math.random() * (20 + 20 + 1)) -20;
        console.log(offsetX, offsetY);
        this.style.transform = "translateX(" + offsetX + "px)";
        this.style.transform = "translateY(" + offsetY + "px)";
    });
});

const title = document.querySelectorAll(".title > h1 > span");

title.forEach(word => {
    word.addEventListener("mouseover", function() {
        console.log("hi");
        var offsetX = Math.floor(Math.random() * (30 + 30 + 1)) -30;
        var offsetY = Math.floor(Math.random() * (30 + 30 + 1)) -30;
        console.log(offsetX, offsetY);
        this.style.transform = "translateX(" + offsetX + "px)";
        this.style.transform = "translateY(" + offsetY + "px)";
    });
});