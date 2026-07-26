console.log('Hello World!');
const closeNavBtn = document.getElementById("close-nav");
const nav = document.getElementById("navigation");
const openNavBtn = document.getElementById('open-nav-btn');
const innerNavSection = document.getElementById("inner-nav-section");
closeNavBtn.addEventListener('click', ()=>{
innerNavSection.classList.remove('nav-inner-active');
 nav.classList.remove("nav-active")


});
openNavBtn.addEventListener('click', ()=>{
  innerNavSection.classList.add('nav-inner-active')
  
nav.classList.add('nav-active')

});