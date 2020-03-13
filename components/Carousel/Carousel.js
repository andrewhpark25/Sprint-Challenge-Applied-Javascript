/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function createCarousel() {
  const newCarousel = document.createElement("div"),
  leftBtn = document.createElement("div"),
  image = document.createElement("img"),
  image2 = document.createElement("img"),
  image3 = document.createElement("img"),
  image4 = document.createElement("img"),
  rightBtn = document.createElement("div")
 

  
  image.src = './assets/carousel/mountains.jpeg';
  image2.src = './assets/carousel/computer.jpeg';
  image3.src = './assets/carousel/trees.jpeg';
  image4.src = './assets/carousel/turntable.jpeg';


 newCarousel.appendChild(leftBtn);
 newCarousel.appendChild(image);
 newCarousel.appendChild(image2);
 newCarousel.appendChild(image3);
 newCarousel.appendChild(image4);
 newCarousel.appendChild(rightBtn);

 newCarousel.classList.add('carousel');
 leftBtn.classList.add('left-button');
 rightBtn.classList.add('right-button');

 const images = [image, image2];
 const images2 = [image3, image4];

 leftBtn.addEventListener("click",
  () => {
    
    images.forEach(img => {

      img.style.display = "block";
     img[img.length-1].style.display = "block";
    })
    })
    rightBtn.addEventListener("click",
    () => {
        
      images2.forEach(img => {
  
        img.style.display = "block";
        img[img.length-1].style.display = "block";
    
      })
      })

 return newCarousel;
}
const carouselContainer = document.querySelector(".carousel-container");
container.appendChild(createCarousel());