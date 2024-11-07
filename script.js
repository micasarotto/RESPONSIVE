const carouselText = [
    "...vestibulum mollis, tortor ac congue commodo",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Phasellus eleifend semper tempor"
];

let index = 0;
const highlightElement = document.getElementById("carousel-text");

function updateCarouselText() {
    highlightElement.textContent = carouselText[index];
    index = (index + 1) % carouselText.length;
}

setInterval(updateCarouselText, 2000); // Cambia el texto cada 2 segundos