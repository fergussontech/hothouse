const adContainers = [
    { id: 'ad-container-1', top: 175, left: 30 },
    { id: 'ad-container-2', top: 440, left: 30 },
    { id: 'ad-container-3', top: 175, right: 30 },
    { id: 'ad-container-4', top: 440, right: 30 },
];

const gifArray = [
    'gifs/cute.gif',
    'gifs/wife.gif',
    'gifs/perform.gif',
    'gifs/craigslist.gif',
    'gifs/fme.gif'
];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function setRandomGif(container) {
    const element = document.getElementById(container.id);
    const randomIndex = getRandomIndex(gifArray);
    const randomGifUrl = gifArray[randomIndex];

    element.style.backgroundImage = `url('${randomGifUrl}')`;
    element.style.top = `${container.top}px`;
    
    if (container.right !== undefined) {
        element.style.right = `${container.right}px`;
    } else {
        element.style.left = `${container.left}px`;
    }
}

adContainers.forEach(container => setRandomGif(container));