const backgroundDiv = document.querySelector('.background-div');

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const randomCoord = (dimension) => {
    return Math.round(Math.random() * dimension);
}

function createDiv(color) {
    const randomNum = Math.random();

    // const divSize = randomNum < 0.9 ? 75 : 100;
    const divSize = 100;
    const newDiv = document.createElement("div");
    const aniDur = (Math.random() * 10) + 5;

    newDiv.style.left = (randomCoord(windowWidth) - (divSize/2)) + 'px';
    newDiv.style.top = (randomCoord(windowHeight) - (divSize/2)) + 'px';
    newDiv.style.width = divSize + 'px';
    newDiv.style.height = divSize + 'px';
    newDiv.style.backgroundColor = color;
    newDiv.style.animationDuration = aniDur + 's';
    newDiv.classList.add('cell');
    
    backgroundDiv.appendChild(newDiv);

    // destroy each light after full animation
    setTimeout(()=> {
      backgroundDiv.removeChild(newDiv);
      // console.log('div destroyed!');
    }, aniDur*1000)
}

const numberOfLights = 10;

// for (let i = 0; i < numberOfLights; i++) {
//     createDiv('hsl(0 100% 50% / 0.75)');
// }

// for (let i = 0; i < numberOfLights; i++) {
//     createDiv('hsl(120 100% 30% / 0.75)');
// }

// const orangeId = setInterval(()=> {
//   createDiv('orange');
//   // console.log('orange div added');
// }, 10000);

// const redId = setInterval(()=> {
//   createDiv('hsl(0 100% 50% / 0.75)');
//   // console.log('red div added');
// }, 1000);

// const greenId = setInterval(()=> {
//   createDiv('hsl(120 100% 30% / 0.75)');
//   // console.log('green div added');
// }, 1000);

const randomId = setInterval(()=> {
  const randomHue = Math.round(Math.random()*360);
  createDiv(`hsl(${randomHue} 100% 50% / 0.75)`);
  // console.log('randomColor div added');
}, 1000);

// setTimeout(()=> {
//   console.log('STOP ADDING NOW!')
//   clearInterval(orangeId);
//   clearInterval(redId);
//   clearInterval(greenId);
// }, 30000)

// setInterval(() => {
//   const firstCell = document.body.querySelector('.cell');
//   if(!firstCell) {
//     return;
//   }
//   backgroundDiv.removeChild(firstCell);
//   console.log("removed cell!")
// }, 1000);