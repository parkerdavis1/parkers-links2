import Sprite from "./sprite.js";

function adjustTurkeyAnimation() {
    const pixelsPerSecond = 30
    const width = window.innerWidth;

    const seconds = width / pixelsPerSecond + 's';
    document.documentElement.style.setProperty('--animation-duration', seconds);
}

function createTurkeyContainer() {
    const turkeyContainer = document.createElement('div');
    turkeyContainer.setAttribute('class', 'turkey');
    document.body.appendChild(turkeyContainer);
    adjustTurkeyAnimation()
}

window.addEventListener('load', createTurkeyContainer);
window.addEventListener('resize', adjustTurkeyAnimation);


// Audio
const gobble = new Sprite({
    src: "assets/turkey/turkey-sprite.m4a",
    sprite: {
        a: [0, 1000],
        b: [1000, 1000],
        c: [2000, 1100]
    }
})

window.addEventListener('load', () => {
    const turkey = document.querySelector('.turkey');
    turkey.addEventListener('click', () => {
        const sprites = ['a', 'b', 'c'];
        const randomSprite = sprites[Math.floor(Math.random() * sprites.length)] 
        gobble.play(randomSprite)
    })
})