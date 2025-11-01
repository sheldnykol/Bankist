'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal'); //empty div
const overlay = document.querySelector('.overlay'); //empty div at the end (alla exei position fix kai pianei ola ta element)
const btnCloseModal = document.querySelector('.btn--close-modal'); // 1 elemnt to close the moral hidden div
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
console.log(btnsOpenModal); // to open the element with the hidden div
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  console.log(modal);
  overlay.classList.add('hidden');
  console.log(overlay);
};

btnsOpenModal.forEach(element => {
  element.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal); //klick sto x kleinei
overlay.addEventListener('click', closeModal); // klik sto overlay tha kleisei

document.addEventListener('keydown', function (e) {
  // an pathseis to  ESC  kai to modal exei to hidden tote shmanie oti einai anoixto
  // to parahtro ara to kanw close !
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//////////////
///page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   console.log(el.textContent);
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     console.log(href);
//     console.log('LINK');
//     document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//   });
// });
///event daligation ( αναθεση συμβαντων)
//2 steps
// 1. add event listener to common parent element
//  2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const idFromHref = e.target.getAttribute('href');
    document.querySelector(idFromHref).scrollIntoView({
      behavior: 'smooth',
    });
    console.log('link');
  }
});
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  //einai opws einai visable se auton poy to kanei view
  //briskei to top apo to element to opoio zhththkan oi sunetagmens
  // an opws to blepeis ekeinh thn stigmh opoy exeis skrolarei exei mia apostash
  //10 px apo to top ths sleidas
  //an scrollarw kialo katw auto tha meithwthei px sto 4 !
  console.log('Current scroll (x/y)', window.scrollX, window.scrollY);
  //curent position based on scroll !
  //dhladh APO TO SHMEIO POY BLEPEIS TO TOP THS SLEIDAS TO PANW PANW AN EXEI SCROLLAREI
  //TO Y THA SOU PEI OTI EISAI KATW TOSA PX APO THN KORYFH THS SELIDAS ME BASH POS OEXEI SCROLLAREI

  console.log(
    // me bash to pws to blepeis ekienh thn stigmh sou dinei gia olo html element
    //to υψος και το πλατος ! απο το ποσο ορατο ειναι σε εσενα !
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //Scrolling
  // window.scrollTo(s1coords.left, s1coords.top);
  console.log(
    'Just to see the before : Current scroll (x/y)',
    window.scrollX,
    window.scrollY
  );

  console.log(
    'Current final scroll x / y ',
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  console.log(
    'Current final scroll x / y ',
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );

  //poio eukolos tropos na peis phgaine se auto to element
  //section1.scrollIntoView({ behavior: 'smooth' });
});
//event is a sginal genarated
//signal : something is happened click , mouse moved !
//and then we listen with eventlistener !

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventlistener : you are reading the heading !');
};
/// mouseenter : when you hover the selected element
h1.addEventListener('mouseenter', alertH1);

//remove add event listener in 3 sec

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
//kathe fora poy kanei hover to h1 element tote emfanizei alert !
// omws orizei ena timeout gia auto to event meta apo 3000 stamataei na to kanei auto !

// //================================//

// //bubbling
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   //this panta deixnei to element to opoio to event elemnt is attached !
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   // this.href = '';
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   //this panta deixnei to element to opoio to event elemnt is attached !
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
//   // this.href = '';
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

//eidame 3 event listenters opoy kanoyn receive events apo target elemtends kai apo thn bubble fase
// Me alla logia oi event handlers fucntios listen se click events  opoy symbainoyn apo to elemtn itself
// kai akoun kai se event opoy ginetai bubble phase apo ta children elemtns
//CAPTURE PHASe?
//an theloyme na kanoyme catch event otan ginete capture phase
//tote mporoume na orisoyme mia parametro sthn eventlistener

// addEventListener('click' , function (e)) {

// }, true); DEN THA AKOYEI PLEON STHN BUBBLING PHASE !

const H1 = document.querySelector('h1');

//going downwards : child

console.log(H1);
console.log(H1.childNodes);
console.log(H1.children);
H1.firstElementChild.style.color = 'white';
H1.lastElementChild.style.color = 'orange';

//Going upwards : parents
console.log(H1.parentNode);
console.log(H1.parentElement); // einai ta idia

H1.closest('.header').style.background = 'var(--gradient-primary)';
//lambanei ena elemnt opws to query
console.log(H1.closest('.header').style.background);

H1.closest('h1').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings

console.log(H1.previousElementSibling);
console.log(H1.nextElementSibling);

console.log(h1.previousElementSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

console.log([...h1.parentElement.children]);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

const tabs = document.querySelectorAll('.operations__tab');
console.log(tabs);

const tabsContainer = document.querySelector('.operations__tab-container');
console.log(tabsContainer);

const tabsContent = document.querySelectorAll('.operations__content');
console.log(tabsContent);

// tabs.forEach(t => t.addEventListener('click', () => console.log('tab')));
/// kakh praktikh giati an eixes 200 elemnt tha eixes 200 copy ! apo auta
// epibradunei thn selida

//event deligation
//prepei na anathesoume ton parent

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // const clicked = e.target.parentElement;
  //TO KANW AUTO GT OTAN KANW CLICK STO BUTTON MPOREI NA GINEI CLICK STO SPAN
  // STO SPAN ELEMENT KAI OXI STO BUTTON ENW EMEIS THELOYME TO BUTTON WSTE NA XEROYME POIO SE ARITHMO
  // BUTTON PATHTHKE OSTE NA EMFANISOYME TO ANALOGO KEIMENO ! TO 1 TO 2 H TO 3?

  console.log(clicked); //blepoyme ta button ta opoai patame click

  // guard clause (there is nothing clicked end the fucntion)
  if (!clicked) return;

  //Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  console.log(clicked.dataset.tab);
  // Activate content area
  console.log(
    document.querySelector('.operations__content.operations__content--2')
  );
  document
    .querySelector(
      `.operations__content.operations__content--${clicked.dataset.tab}`
    )
    .classList.add('operations__content--active');
});

//menu fade animation

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    console.log(link);
    //parent einai nav__Item (li) kai child to nav__link (a)
    const siblings = link.closest('.nav');
    console.log(siblings);
    const siblings1 = siblings.querySelectorAll('.nav__link');
    console.log(siblings1);
    const logo = link.closest('.nav').querySelector('img');
    siblings1.forEach(el => {
      console.log(el);
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};
//when we hover to a link in nav the others fade away
//we also want the logo to be fade out

//bublue up

const nav = document.querySelector('.nav');
console.log(nav);

nav.addEventListener('mouseover', function (e) {
  console.log('mouseover');
  handleHover(e, 0.5);
  console.log(handleHover); //epistrefei olo to function
  console.log(handleHover(e, 0.5)); //epistrefei undefined (epistrefei timh)
  console.log(handleHover.bind(0.5)); //epistrtefei function
});
// console.log('mouseover');
// if (e.target.classList.contains('nav__link')) {
//   const link = e.target;
//   console.log(link);
//   //parent einai nav__Item (li) kai child to nav__link (a)
//   const siblings = link.closest('.nav');
//   console.log(siblings);
//   const siblings1 = siblings.querySelectorAll('.nav__link');
//   console.log(siblings1);
//   const logo = link.closest('.nav').querySelector('img');
//   siblings1.forEach(el => {
//     console.log(el);
//     if (el !== link) el.style.opacity = 0.5;
//   });
//   logo.style.opacity = 0.5;
// }
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

//HINT
// const user = {
//   name: 'Bob',
//   greet: function() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// // Χωρίς bind: this χάνεται
// setTimeout(user.greet, 1000); // Μετά 1s: Hello, undefined! (this = window)

// // Με bind: Κλειδώνουμε το context
// setTimeout(user.greet.bind(user), 1000); // Μετά 1s: Hello, Bob!
// Κλειδί

// Το bind(user) λέει: «Όταν τρέξει η συνάρτηση, το this να είναι πάντα το user object».
// Χωρίς bind, το this εξαρτάται από το πώς καλείται η συνάρτηση (π.χ. από setTimeout ή event listener) και συχνά γίνεται window ή το element.

//===================//Sticky navigation
// window.addEventListener('scroll', function (e) {
//   console.log(e); //trexei se akthe scroll !
// });

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   // deixnei posa pixel makria eisai apo to top ths selidas oso ginetai scroll
// });

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY); // KATHE FORA POSO SCROLLAREI APO TO TOP THS SELIDAS (DEN EPHREAZETE ME BASGH SE POIO SHMEIO EGINE RELOAD H SELIDA)
//   console.log(initialCoords); // EXEI KRATHSEI THN APOSTASH TOU SECTION
//   // APO TO TOP THS SELIDAS ME BASH SE POIO SHMEIO EGINE RELOAD H SELIDA ANOIXE DHLADH
//   // OPOTE DEN EINAI ACCURATE THELOYME ENAN POIO EFFICIENT WAY

//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
//   // deixnei posa pixel makria eisai apo to top ths selidas oso ginetai scroll
// });
//pote theloyme na einai sticky ?
// otan ftasei to scroll sto prwto section ! section--1
//tha mporousa na pw otan ftanei to scrolly sta 300 px tote deixe to header
//alla to top allazei me vash to viewpoert dhladh an kaneis inspect kai allaxeis to poso thes na blepeis
//apo thn selida tha deis oti to y allazei !

//calculate dynamically
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// // ============= INTERSECTION OBSERVER (api)
// //viwport : the rentagular which shows the current portion of the page
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 1, 0.2], //to kanei triger to event to threshold
//   //dhladh an den ειναι ορατό sto viewport το element section που του λεω
//   //να κανει observe τότε γίνεται trigger διοτι υπαρχει το 0 στο threshold
//   // που σημαινει καντο trigger αν δεν ειναι καθολου ορατο στο viewport
//   // καντο triger οταν ειναι ολο το sectiont ορατό στο viewport που δεν γινεται γενικα ακραιο να τοχωρεσει ολο
//   // καντο triger an einai το 20% ορατο στο view port !
//   // threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1); // kane observe to section element 1

//when do we want our navigation to be sticky ?
// we want it to be visible when the header moves completel out of view !

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
console.log(header);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //90px outside of target element (header) giati to header pianei xwro mhn krubei ta ypoloipa apo katw
});

headerObserver.observe(header);

// ========= REAVEAL SECTIONS
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  console.log(entries);
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target); // its not working
  });
}; //the logic
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden'); sos
});

//LAZY LOADING IMAGES

//really impcats how the website works
// beacuse does not have to load the big size pictures at once
// So when we load the website the images which are loading its the images property src in the img tag
// so we load the one with the low size
// and the idea now that we are gonna accomplice
// is to show on the image with the big size ! And remove the class lazy-img which blurs the image

const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  console.log(entries);
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  //replace sc with data-src
  entry.target.src = entry.target.dataset.src;
  //entry.target.classList.remove('lazy-img');
  //listen to the event
  //that load image

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img'); //to bazw edw wste na einai blur h eikona mexri na ginei load h big size picture
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null, //root set to the entire viewport
  threshold: 0,
  rootMargin: '150px',
});
imgTargets.forEach(img => imgObserver.observe(img));

//SLIDER

const slides = document.querySelectorAll('.slide');
console.log(slides);

const slider = document.querySelector('.slider');
console.log(slider);
const maxSlides = slides.length;
let curSlide = 0;
slider.style.transform = 'scale(0.4) translateX(-1000px)';
slider.style.overflow = 'visible';

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

//select buttons
const btnLeft = document.querySelector('.slider__btn--left');

const btnRight = document.querySelector('.slider__btn--right');
console.log(btnRight);
//Events to buttons

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);
//nEXT SLIDE
const nextSlide = function () {
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', prevSlide);
