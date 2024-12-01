console.log('Running bokeh script');
const backgroundDiv = document.createElement('div');
backgroundDiv.setAttribute('class', 'background-div');
document.body.appendChild(backgroundDiv);

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
});

const christmasMode = true;

const randomCoord = (dimension) => {
    return Math.round(Math.random() * dimension);
};

function createDiv(color) {
    const randomNum = Math.random();

    const divSize = randomNum < 0.8 ? 75 : 100;
    // const divSize = 100;
    const newDiv = document.createElement('div');
    const aniDur = Math.random() * 10 + 5;

    newDiv.style.left = randomCoord(windowWidth) - divSize / 2 + 'px';
    newDiv.style.top = randomCoord(windowHeight) - divSize / 2 + 'px';
    newDiv.style.width = divSize + 'px';
    newDiv.style.height = divSize + 'px';
    newDiv.style.backgroundColor = color;
    newDiv.style.animationDuration = aniDur + 's';
    newDiv.classList.add('cell');

    backgroundDiv.appendChild(newDiv);

    // destroy each light after full animation
    setTimeout(() => {
        backgroundDiv.removeChild(newDiv);
    }, aniDur * 1000);
}

const numberOfLights = 10;

const christmasColors = ['hsl(120 100% 30% / 0.75)', 'hsl(0 100% 50% / 0.75)'];

const randomId = setInterval(() => {
    if (christmasMode) {
        const randomChristmasColor =
            christmasColors[Math.floor(Math.random() * christmasColors.length)];
        createDiv(randomChristmasColor);
    } else {
        const randomHue = Math.round(Math.random() * 360);
        createDiv(`hsl(${randomHue} 100% 50% / 0.75)`);
    }
}, 2000);
