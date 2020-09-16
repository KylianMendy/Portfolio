import anime from 'animejs/lib/anime.es.js';

anime({
  targets: '.animation__letter',
  translateY:'-100px',
  opacity: .0,
  direction:'reverse',
  delay: anime.stagger(100),
});

anime({
  targets: '.animation',
  translateY:1000,
  duration: 3000,
  delay: 5000,
});
