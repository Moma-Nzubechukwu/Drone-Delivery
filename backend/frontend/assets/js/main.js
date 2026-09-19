console.log('Hello World!');
const closeNavBtn = document.getElementById("close-nav");
const nav = document.getElementById("navigation");
const openNavBtn = document.getElementById('open-nav-btn');
const innerNavSection = document.getElementById("inner-nav-section");
const aboutUsNavigator = document.getElementById("about-usnavigator");
const MoreAboutUsBtn = document.getElementById("more-abt-us-btn");
const closePupupBtn = document.getElementById("close-pup-up-btn");
const popUpSection = document.getElementById("popup-section");
localStorage.setItem("isFirstTime", JSON.stringify(true))

// let isFirstTime = JSON.parse(localStorage.getItem("isFirstTime"))
// document.addEventListener("DOMContentLoaded", () => {
//     console.log(localStorage)
//     if (isFirstTime) {
//         popUpSection.style.opacity = 1
//         popUpSection.style.pointerEvents = "all"
//         localStorage.setItem("isFirstTime", JSON.stringify(false))
//         console.log(localStorage)

//         alert(isFirstTime)
//     } else {
//         popUpSection.style.opacity = 0
//         popUpSection.style.pointerEvents = "none"
//     }
// })
document.addEventListener("DOMContentLoaded", () => {
    // 1. Select your element explicitly
    // Update selector if needed

    // 2. Fetch the value inside the event listener
    const storedValue = localStorage.getItem("isFirstTime");

    // 3. If it doesn't exist yet (null), treat them as a first-time user
    const isFirstTime = storedValue === null ? true : JSON.parse(storedValue);

    console.log("Initial state:", localStorage);

    if (isFirstTime) {
        popUpSection.style.opacity = 1;
        popUpSection.style.pointerEvents = "all";

        // Mark as visited so they don't see it again
        localStorage.setItem("isFirstTime", JSON.stringify(false));
        console.log("Updated state:", localStorage);

        alert("Welcome for the first time!");
    } else {
        popUpSection.style.opacity = 0;
        popUpSection.style.pointerEvents = "none";
    }
});


closePupupBtn.addEventListener("click", () => {
    popUpSection.style.opacity = 0
    popUpSection.style.pointerEvents = "none"

})

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