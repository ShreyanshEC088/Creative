// JavaScript code to change image source dynamically (optional)
var image = document.getElementById('my-image');

image.addEventListener('mouseenter', function() {
  // Change the image source on mouse enter
  image.src = '/images/Design-1.png';
});

image.addEventListener('mouseleave', function() {
  // Change the image source back on mouse leave
  image.src = '/images/Design-1.png';
});
