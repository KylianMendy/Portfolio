
let position = 0;

const $arrowRight = document.getElementById('arrow__right');

const $arrowLeft = document.getElementById ('arrow__left')

const $slide = document.querySelector('.carroussel__projects');

const sliderWidth = document.getElementById('slider').offsetWidth;

$slide.appendChild(document.querySelector('.carroussel__project').cloneNode()); 

const sliderLength = document.querySelectorAll('.carroussel__project').lenght;

$arrowRight.addEventListener('click', right);

$arrowLeft.addEventListener
('click', left);



function move() {
  $slide.style.transform = 'translateX(' + (position * sliderWidth * -1) + 'px)';
}


function left() {
  if (position === 0) {
    position = sliderLength - 1;
  } else {
    position --;
    move();
  }
}


function right() {
  position++;
  move();

  if (position === sliderLength - 1) {
    setTimeout(function() {
      position = 0;
      jump();
    }, 300);
  }
}

function jump(callback) {
  $slide.style.transition = 'none';
  window.requestAnimationFrame(function() {
    move();
    
    window.requestAnimationFrame(function() {
      $slide.style.transition = 'transform 0.3s';
      if (callback) {
        callback();      
      }
    });
  });
}