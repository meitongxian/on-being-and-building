const grid = document.querySelectorAll(".grid > div");

let deco3svg = 
        `<svg class="deco-3" width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="70.5" y="0.5" width="35" height="35" fill="#FAFAFA" stroke="#7F7F7F"/>
            <rect x="35.5" y="35.5" width="35" height="35" fill="#FAFAFA" stroke="#7F7F7F"/>
            <rect x="0.5" y="70.5" width="35" height="35" fill="#FAFAFA" stroke="#7F7F7F"/>
        </svg>
        `;

let deco2svg = 
        `
        <svg class="deco-2" width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="52.5" y="18.5" width="35" height="35" fill="#FAFAFA" stroke="#7F7F7F"/>
            <rect x="17.5" y="53.5" width="35" height="35" fill="#FAFAFA" stroke="#7F7F7F"/>
        </svg>
        `;


grid.forEach(sky => {
    sky.innerHTML += deco2svg + deco3svg;
    // random z index
    const z = Math.floor(Math.random() * 10);
    sky.style.zIndex = `${z}`;
    sky.addEventListener("mouseover", function() {
        //console.log("hi");
        var offsetX = Math.floor(Math.random() * (50 + 50 + 1)) -50;
        var offsetY = Math.floor(Math.random() * (50 + 50 + 1)) -50;
        //console.log(offsetX, offsetY);
        this.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

const background = document.querySelector(".background-wrapper");
const cloudWrapper = document.createElement("div");
cloudWrapper.className = "cloud-wrapper";
background.appendChild(cloudWrapper);

for (let i = 1; i <= 10; i++) {
    const cloudSVG = document.createElement("img");
    cloudSVG.src = `img/cloud-${i}.svg`;
    cloudSVG.className = "cloud";
    cloudWrapper.appendChild(cloudSVG);

    // random animation delay
    const delay = Math.floor(Math.random() * (10 + 10 + 1)) -10;
    cloudSVG.style.animationDelay = `${delay}s`;

    // random top position
    const top = Math.random() * 100;
    cloudSVG.style.top = `${top}vh`;

    // random z-index
    const z = Math.floor(Math.random() * 10);
    cloudSVG.style.zIndex = `${z}`;
}

// resize vh for mobile
mobileResize();

function mobileResize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

window.addEventListener("resize", () => {
    mobileResize();
    customScroll();
});


//scrollbar 
customScroll();

function customScroll() {
    const scrollBar = document.querySelector(".scrollbar");
    scrollBar.style.setProperty("width", "calc(" + window.innerWidth + "px - 4rem)"); // set to 100%
    let totalBarWidth = scrollBar.offsetWidth; // get 100% width

    const mainContent = document.querySelector("main");
    const totalWidth = mainContent.offsetWidth - window.innerWidth; // get total width of entire page

    let offsetX = window.pageXOffset;
    let fraction = offsetX / totalWidth; // get fraction of page scrolled

    scrollBarWidth = fraction * totalBarWidth;
    scrollBar.style.setProperty("width", scrollBarWidth + "px"); // set to new width

    const timestamp = document.querySelector("#timestamp");
    let minutes = Math.floor((fraction * 2065) / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let seconds = Math.ceil((fraction * 2065) % 60);
    if (seconds == 60) {
        seconds = "00";
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    timestamp.innerHTML = minutes + ":" + seconds;
}

document.addEventListener('scroll', () => {
    customScroll();
});


