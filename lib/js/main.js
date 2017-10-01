let i = 0; //start point
let images = [];
let time = 3000;

// Image List
images[0] = 'lib/img/1.jpg';
images[1] = 'lib/img/2.jpg';
images[2] = 'lib/img/3.jpg';
images[3] = 'lib/img/4.jpg';
images[4] = 'lib/img/5.jpg';
images[5] = 'lib/img/6.jpg';
images[6] = 'lib/img/7.jpg';
images[7] = 'lib/img/8.jpg';
images[8] = 'lib/img/9.jpg';
images[9] = 'lib/img/10.jpg';

// Change the images
function changeImg() {
  document.slide.src = images[i];

  if(i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time)
}

window.onload = changeImg;
