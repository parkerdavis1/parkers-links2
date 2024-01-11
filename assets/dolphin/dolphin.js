const dolphinButton = document.querySelector('.dolphin');
const metaThemeEl = document.querySelector('meta[name="theme-color"]');
console.log('metatheme', metaThemeEl);
dolphinButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dolphin-theme');
    if (document.documentElement.classList.contains('dolphin-theme')) {
        metaThemeEl.content = '#ffb8e8';
    } else {
        metaThemeEl.content = '#a7ffff';
    }
});
