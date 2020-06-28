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

//text changeant pour les diff projets

// const $info = document.querySelector('.info-project');

// const $title = document.getElementById('title');

// const $text = document.getElementById('text');

// const $button = document.getElementById('button');

// const $img = document.getElementById('image');

// const $link = document.getElementById('link');


// //objets projets 


// import colorsImg from '../img/Color-gif.svg'
// import moodeImg from '../img/gif_moode.png';
// import soranimImg from '../img/soranim_gif.png';
// import nikeImg from '../img/nike_gif.png';

// let number = 1 ;

// const $infos = [
//   {
//     title:'Colors App',
//     text:'Blabla sur Colors. You can find a variety of artist with their performances in the colors studio. The app send the users on youtube video for listening songs and resume briefly the artist career . (change 1)',
//     color:'F5D5C6',
//     link:'https://colorsappid.netlify.app/home.html',
//   },
//   {
//   title:'Moode Project',
//   text:'Blabla sur moode. You can find a variety of artist with their performances in the colors studio. The app send the users on youtube video for listening songs and resume briefly the artist career . (change 1)',
//   color:'F5D5C6',
//   link:'https://moode.netlify.app/index.html',
// },

//   {
//   title : 'Soranim project',
//   text:'blabla sur soranim. You can find a variety of artist with their performances in the colors studio. The app send the users on youtube video for listening songs and resume briefly the artist career . (change 2)',
//   color:'922C44',
//   link:'https://github.com/tlugat/Soranime',
// },

//   {
//   title :'Nike SB Travis Scott design',
//   text:'blabla sur travis The app send the users on youtube video for listening songs and resume briefly the artist career . (change 3)',
//   color:'343538',
//   link:'https://www.figma.com/proto/Cd170ESuU9iQTY2qjmyxhg/Travis-SB-Design?node-id=0%3A1',
// }
// ];

// let $colors = ['#A1DBC2','#F5D5C6','#922C44','#343538']
// let $changepic = [{img:colorsImg},{img:colorsImg},{img:moodeImg},{img:soranimImg},{img:nikeImg}]

// let $href = [{link:'https://colorsappid.netlify.app/home.html'},{link:'https://colorsappid.netlify.app/home.html'},{link:'https://moode.netlify.app/index.html'},{link:'https://github.com/tlugat/Soranime'},{link:'https://www.figma.com/proto/Cd170ESuU9iQTY2qjmyxhg/Travis-SB-Design?node-id=0%3A1'}]

// // console.log($infos);

// function changeContent(){
//   if(number<4){
//   $title.innerHTML = $infos[number].title ;
//   $text.innerHTML = $infos[number].text;
//   $button.style.backgroundColor= $colors[number];
//   number++;
//   $link.setAttribute = ("href",$href[number].link);
//   $img.setAttribute ("src",$changepic[number].img);
//   }
//   else{
//     number = 0
//   }
// }

// function changeContent2(){
//   if(number>0){
//   number--;
//   $title.innerHTML = $infos[number].title ;
//   $text.innerHTML = $infos[number].text;
//   $button.style.backgroundColor= $colors[number];
//   $img.setAttribute ("src",$changepic[number].img);
//   }
// }

// $rightArrow.addEventListener("click", changeContent);
// $leftArrow.addEventListener("click",changeContent2)


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
  targets: triangle,
  rotate:10,
  duration: 3000,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'reverse',
})