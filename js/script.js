/*jshint esversion: 6 */

// We need to listen for scroll events on the page
// When the scroll bar reaches a certain distance
// We want to change the background color of the body

// Step 1: Decide which tags in html we want to use & save them as constants at the top of the page
const bodyTag = document.querySelector("body");

// Step 2: Decide which user events ie, click, scroll, etc, we want to trigger our code on. Here we want to listen out for any scroll events on our page
document.addEventListener("scroll", function() {

  // Do something when the page is scrolled
  // console.log("Page has been scrolled! Wooo!");

  // Step 3: Find out and store how far from the top of the page the scrolbar is.
  // Use window when referring to the scroll bar in the browser frame
  let distanceFromTop = window.scrollY;
  //console.log(distanceFromTop);

  // If the distance from the top is greater than a 1000 pixels, do something

  if (distanceFromTop > 1000) {
    // do this
    // bodyTag.style.backgroundColor = "red";
    bodyTag.classList.add("brogue-active");
  } else {
    // do something else
    // bodyTag.style.backgroundColor = "#f5f5f5";
    bodyTag.classList.remove("brogue-active");
  }

  if (distanceFromTop > 4300) {
    bodyTag.classList.add("stationary-active");
  } else {
    bodyTag.classList.remove("stationary-active");
  }

});

//Lightbox
// When we click on an image
// We want to show the Lightbox
// Inside the Lightbox we want to show the image we clicked on
// When we click on the lightbox we want it to disappear

// Step 1: Decide which tags in HTML we want to use and save them in constants

// Save all of our images into a constant - This will be a list of images
const images = document.querySelectorAll("section img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");

//Let's look at what is saved in images
console.log(images);

// Our images constant contains a list of images. We want to add an event listener to all of them. To do this we use a loop. In Javascript this is called a forEach function. It loops through all of our images & applies the same code.
images.forEach(image => {

  // Step 2: Add a click event listener to all of our images
  image.addEventListener("click", function() {

    console.log("Your image was clicked");
    // Step 3: Show the lightbox
    lightbox.classList.add("fadeIn");
    // Step 4: Show the correct image
    // Save the correct image source from the image we click on
    // The keyword "this" references the image we have clicked on - THIS image. .getAttribute allows us to store an attribute. We want the src attribute because it contains the image location.
    let imageSrc = this.getAttribute("src");
    console.log(imageSrc);
    // Set the lightbox image src to the one we save
    lightboxImage.setAttribute("src", imageSrc);
  });

});

lightbox.addEventListener("click", function() {
  lightbox.classList.remove("fadeIn");
});