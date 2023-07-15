const imageElement = document.getElementById('image');
const imagesList = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIk6xAYQZ8zTGTmd9tQcplcMXNjUIet3zYQ&usqp=CAU', 
    'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/pug-and-dachshund-cropped.jpg',
    'https://myfirstshiba.com/wp-content/uploads/2021/01/shutterstock_528110521_reduced-1.jpg',
    'https://st2.depositphotos.com/37291724/44401/i/1600/depositphotos_444017882-stock-photo-white-shiba-inu-hokkaido-inu.jpg'
];

let currentImage = 0;
imageElement.src = imagesList[currentImage];

function goLeft() {
    if (currentImage > 0) {
        currentImage--;
    }
    else {
        currentImage = 0;
    }
    imageElement.src = imagesList[currentImage];
}

function goRight() {
    if (currentImage < imagesList.length-1) {
        currentImage++;
    }
    else {
        currentImage = imagesList.length - 1;
    }
    imageElement.src = imagesList[currentImage];
}

function handleKeys(event) {
    if (event.key == 'ArrowLeft') {
        goLeft();
    }
    else if (event.key == 'ArrowRight') {
        goRight();
    }
}

function changeStyle(style) {
    imageElement.className = 'image ' + style;
}