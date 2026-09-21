const closeSearchSection = document.getElementById("close-search-section");
const openSearchBtn = document.getElementById("open-search-btn");
const searchSection = document.getElementById("search-section");
const openNav = document.getElementById("open-nav-btn");
const navOutterSection = document.getElementById("nav-outter-section");
const navImnerSection = document.getElementById("nav-imner-section");
const closeNav = document.getElementById("close-nav");
const popupMessageInnerSection = document.getElementById("popup-inner-section");
const closePopupBtn = document.getElementById("close-popup-btn");
const popupMesageSection = document.getElementById("popup-mesage-section");
const popupSection = document.getElementById("popup-section");
const loginBg = document.getElementById("loginorsignup-section");
const logInPupup = document.getElementById("log-in-popup");
const closeLoginPopUpBtn = document.getElementById("close-log-in-pop-up-btn");
const profileIconContainer = document.getElementById("profile-icon-container");



let isLoggedIn = false



const closeLogIn = () => {
    logInPupup.classList.remove("css-loginorsignup-inner-section-active")
    loginBg.classList.remove("css-loginorsignup-section-active")

}
const showLogIn = () => {
    logInPupup.classList.add("css-loginorsignup-inner-section-active")
    loginBg.classList.add("css-loginorsignup-section-active")


}
const openPopUp = (mssage) => {
    popupMessageInnerSection.classList.add("css-pop-inner-section-active");
    popupSection.classList.add("css-popup-section-active");

    popupMesageSection.textContent = mssage;

}
const closePopUp = () => {
    popupMessageInnerSection.classList.remove("css-pop-inner-section-active");
    popupSection.classList.remove("css-popup-section-active");

    popupMesageSection.textContent = "";


}
profileIconContainer.addEventListener("click", () => {
    if (isLoggedIn) {
        openPopUp("please this side is still under construction")
    } else {

        showLogIn()
    }
})
closeLoginPopUpBtn.addEventListener("click", () => {
    closeLogIn()
})

openNav.addEventListener("click", () => {


    navOutterSection.classList.add("css-header-more-action-section-active");
    navImnerSection.classList.add("header-more-imer-section-active");
})
closeNav.addEventListener("click", () => {
    navOutterSection.classList.remove("css-header-more-action-section-active");
    navImnerSection.classList.remove("header-more-imer-section-active");
})


openSearchBtn.addEventListener("click", () => {
    searchSection.classList.add("css-search-section-active");
})
closeSearchSection.addEventListener("click", () => {
    searchSection.classList.remove("css-search-section-active");

})
closePopupBtn.addEventListener("click", () => {
        closePopUp()
    })
    // openPopUp("please this side is still under construction");
    // showLogIn()