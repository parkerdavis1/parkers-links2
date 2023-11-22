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