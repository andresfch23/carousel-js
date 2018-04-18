var image1 = './images/publi1.jpg';
var image2 = './images/publi2.jpg';
var image3 = './images/publi3.jpg';
var position = 0;
var images = [image1, image2, image3];
var myNode = document.getElementById("carousel__images");

function renderImages() {
    var image = document.createElement("IMG");
    image.setAttribute("src", images[position]);
    image.setAttribute("alt", "");
    image.setAttribute("class","carousel__image")
    document.getElementById("carousel__images").appendChild(image);
} 

renderImages();

function onClickButtonRight() {
    if(position >= images.length - 1) {
        position = 0;
        myNode.innerHTML = '';
        renderImages();
        renderDots();
    } else {
        position = position + 1;
        myNode.innerHTML = '';
        renderImages();
        renderDots();
    }
}

function onClickButtonLeft() {
    if(position === 0) {
        position = images.length -1;
        myNode.innerHTML = '';
        renderImages();
        renderDots();
    } else {
        position = position - 1;
        myNode.innerHTML = '';
        renderImages();
        renderDots();
    }
}

function renderDots() {
    var myNode = document.getElementById("carousel__buttons");
    myNode.innerHTML = '';
    images.map((item, index) => {
        var dot = document.createElement("SPAN");
        dot.setAttribute("key", index);
        dot.setAttribute("class", index === position ? "carousel__dots is-active" : "carousel__dots");
        dot.addEventListener("click", () => onClickDots(index));
        document.getElementById("carousel__buttons").appendChild(dot);
    })
}
renderDots();

function onClickDots(index) {
    position = index;
    renderDots();
    
    myNode.innerHTML = '';
    renderImages();
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => { 
        onClickButtonRight();
        renderDots();
    }, 5000);
 }, false);