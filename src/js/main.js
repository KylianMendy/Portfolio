import anime from 'animejs/lib/anime.es.js';

let position = 0;

const $rightArrow = document.getElementById('arrow__right');

const $leftArrow  = document.getElementById ('arrow__left')

const $carrouselSlide = document.getElementById('carrousel-slide');

const $slides = document.querySelector('.carroussel__projects')

const sliderWidth = document.querySelector('.carroussel').offsetWidth;

 $slides.appendChild(document.querySelector('.carroussel__project').cloneNode());

const sliderLength = document.querySelectorAll('.carroussel__project').length; 

$leftArrow.addEventListener('click', left);
$rightArrow.addEventListener('click', right);

function left() {
  // Si on essaie d'aller à gauche alors qu'on est à la première slide
  if (position === 0) {
    position = sliderLength - 1; // On passe à la fin du slider
    jump(left); // On passe la fonction left elle-même à jump(), pour qu'elle soit rappelée quand le saut sera fini (et cette fois elle passera dans le else)
  } else {
    position --;
    move();
  }
}

function right() {
  position++;
  move();

  // Si après le mouvement on est à la fin, on passe au début
  if (position === sliderLength - 1) {
    setTimeout(function() {
      position = 0;
      jump();
    }, 300);
  }
}

function move() {
  $slides.style.transform = 'translateX(' + (position * sliderWidth * -1) + 'px)';
}

// Pour sauter, on enlève la transition, on move(), et on remet la transition
// requestAnimationFrame est nécessaire pour attendre que le navigateur prenne en compte le changement de CSS (la transition)
function jump(callback) {
  $slides.style.transition = 'none';
  window.requestAnimationFrame(function() {
    move();
    
    window.requestAnimationFrame(function() {
      $slides.style.transition = 'transform 0.8s';
      
      // Si un callback a été passé, on l'utilise
      if (callback) {
        callback();      
      }
    });
  });
}


//Animation

const cross = document.getElementById('cross');

const triangle = document.getElementById('triangle');

anime({
  targets: cross,
  translateX: 0,
  rotate: '1turn',
  duration: 3000,
  loop:true
});

anime({
  targets: '.content__triangle1',
  duration: 1000,
  translateY:1250,
  easing: 'easeInOutSine',
  direction: 'reverse',
});

anime({
  targets:'.content__triangle2',
  duration:1200,
  translateY:1250,
  easing:'easeInOutSine',
  direction:'reverse',
});

anime({
  targets:'.content__kyle',
  duration:1000,
  translateX:200,
  easing:'easeInOutSine',
  direction:'reverse',
  delay:1000,
  opacity: .2,
});

anime({
  targets:'.vertical-stroke__1',
  rotate:90,
  keyframes: [
    {translateY:-150},
    {translateY:40},
    {translateY:400}
  ],
  duration:12000,
  easing:'easeOutElastic(1, .8)',
  loop: true,
  
});


anime({
  targets:'.vertical-stroke__2',
  rotate:90,
  keyframes: [
    {translateY:150},
    {translateY:40},
    {translateY:-400}
  ],
  duration:12000,
  easing:'easeOutElastic(1, .8)',
  loop: true,
  
});