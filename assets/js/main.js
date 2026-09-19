console.log('Hello World!');
const closeNavBtn = document.getElementById("close-nav");
const nav = document.getElementById("navigation");
const openNavBtn = document.getElementById('open-nav-btn');
const innerNavSection = document.getElementById("inner-nav-section");
const aboutUsNavigator = document.getElementById("about-usnavigator");
const MoreAboutUsBtn = document.getElementById("more-abt-us-btn");

aboutUsNavigator.onclick = () => {
    innerNavSection.classList.remove('nav-inner-active')
    nav.classList.remove('nav-active')


}

openNavBtn.addEventListener('click', () => {
    innerNavSection.classList.toggle('nav-inner-active')

    nav.classList.toggle('nav-active')

});
// innerNavSection.addEventListener("clck", (e) => {
//     e.stopPropagation()
// })
// nav.addEventListener("click", () => {
//     innerNavSection.classList.remove('nav-inner-active')

//     nav.classList.remove('nav-active')

// })
MoreAboutUsBtn.onclick = () => window.location.href = "pages/abou-us.html"
const autonumusAutor = `<a href="https://iconscout.com/icons/autonomous" class="text-underline font-size-sm" target="_blank">Autonomous</a> by <a href="https://iconscout.com/contributors/vectorvalley" class="text-underline font-size-sm" target="_blank">Vector Valley</a>`