const closeSearchSection = document.getElementById("close-search-section");
const openSearchBtn = document.getElementById("open-search-btn");
const searchSection = document.getElementById("search-section");
const openNav = document.getElementById("open-nav-btn");
const navOutterSection = document.getElementById("nav-outter-section");
const navImnerSection = document.getElementById("nav-imner-section");
const closeNav = document.getElementById("close-nav");



openNav.addEventListener("click", () => {


    navOutterSection.classList.add("css-header-more-action-section-active")
    navImnerSection.classList.add("header-more-imer-section-active")
})
closeNav.addEventListener("click", () => {
    navOutterSection.classList.remove("css-header-more-action-section-active")
    navImnerSection.classList.remove("header-more-imer-section-active")
})


openSearchBtn.addEventListener("click", () => {
    searchSection.classList.add("css-search-section-active");
})
closeSearchSection.addEventListener("click", () => {
    searchSection.classList.remove("css-search-section-active");

})