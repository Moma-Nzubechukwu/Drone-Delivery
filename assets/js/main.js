console.log('Hello World!');
const closeNavBtn = document.getElementById("close-nav");
const nav = document.getElementById("navigation");
const openNavBtn = document.getElementById('open-nav-btn');
const innerNavSection = document.getElementById("inner-nav-section");

openNavBtn.addEventListener('click', ()=>{
  innerNavSection.classList.toggle('nav-inner-active')
  
nav.classList.toggle('nav-active')

});