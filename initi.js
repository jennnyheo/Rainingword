const words = ['Java', 'coding', 'design', 'interative', 'front-end', 'developer'];
const container = document.querySelector('#container');

function getRandom (minimum, maximun) {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximun);
    
    return Math.floor(Math.random()*(max - min)) + min;

}

function init () {
    const maxPositionX = container.offsetWidth -90;
    const maxPositionY = container.offsetHeight -100;

    for (let word of words) {
        const span = document.createElement('span');
        span.style.top = `${getRandom (20, maxPositionY)}px`;
        span.style.left = `${getRandom (20, maxPositionX)}px`;
        span.classList.add('word');
        span.dataset.word = word;
        span.textContent = word;
        container.append(span);
    }
}

init();