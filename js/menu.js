// main picture

var picture = document.querySelector('#pic')

// thumbnails
var picture1 = document.querySelector('#pic1')
var picture2 = document.querySelector('#pic2')
var picture3 = document.querySelector('#pic3')
var picture4 = document.querySelector('#pic4')

//main picture container
var mainContainer = document.querySelector('#picture';)

//change image

function changeImage(imgSrc, n) {
    // This will change  the main picture
    picture.src = imgSrc;
}


// width and height of main picture in px

let w1 = mainContainer.offsetWidth;
let h1 = mainContainer.offsetHeight;

//cordinates of mouse

let x,y;
//moving the selector box

function movee(event) {
    //how far is the mouse cursorto an element
    x = event.offsetX;
    y = event.offsetY;
    console.log(x,y)
};