(function() {

    'use strict';
  
    document.querySelector('.material-design-hamburger__icon').addEventListener(
      'click',
      function() {      
        var child;
        
        document.body.classList.toggle('background--blur');
        this.parentNode.nextElementSibling.classList.toggle('menu--on');
  
        child = this.childNodes[1].classList;
  
        if (child.contains('material-design-hamburger__icon--to-arrow')) {
          child.remove('material-design-hamburger__icon--to-arrow');
          child.add('material-design-hamburger__icon--from-arrow');
        } else {
          child.remove('material-design-hamburger__icon--from-arrow');
          child.add('material-design-hamburger__icon--to-arrow');
        }
  
      });
  
  })();





const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", windown.scrolly > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('activate');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal({
    distance: '25px',
    durantion: 2500,
    reset: true

})

sr.reveal('.home-text', { delay: 190, origin: 'bottom' })

sr.reveal('.about, .services, .portifolio, .contact', { delay: 200, origin: 'bottom' })

function toggleNav() {
    var state = document.getElementsByTagName("nav")[0].style.display;
    if (state == 'block') {
        document.getElementsByTagName("nav")[0].style.display = 'none';
    } else {
        document.getElementsByTagName("nav")[0].style.display = 'block';
    }
}

