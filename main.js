var typed = new Typed(".text", {
    strings: ["Frontend Developer", "YouTuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
}); 
particlesJS("particles-js", {

"particles": {

"number": {
"value": 80,
"density": {
"enable": true,
"value_area": 800
}
},

"color": {
"value": "#00eeff"
},

"shape": {
"type": "circle"
},

"opacity": {
"value": 0.5
},

"size": {
"value": 3
},

"line_linked": {
"enable": true,
"distance": 150,
"color": "#00eeff",
"opacity": 0.4,
"width": 1
},

"move": {
"enable": true,
"speed": 3
}

},

"interactivity": {

"events": {

"onhover": {
"enable": true,
"mode": "repulse"
},

"onclick": {
"enable": true,
"mode": "push"
}

}

},

"retina_detect": true

});
// MOBILE MENU TOGGLE

let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};