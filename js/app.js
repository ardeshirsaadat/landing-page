/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
const sectionElements = document.querySelectorAll("section");
const navBarElement = document.querySelector("#navbar__list");
for (let i = 0; i < sectionElements.length; i++) {
    let newElem = document.createElement("li");
    newElem.setAttribute("class", "menu__link");
    newElem.setAttribute("data-nav", `Section ${i + 1}`);
    newElem.textContent = document.querySelectorAll("h2")[i].textContent;
    // let newAnchorElem = document.createElement("A");
    // newAnchorElem.setAttribute("href",`#section${i+1}`);
    // newAnchorElem.setAttribute("class",`Section ${i+1}`);
    // newAnchorElem.textContent = document.querySelectorAll("h2")[i].textContent;
    // newElem.appendChild(newAnchorElem);
    navBarElement.appendChild(newElem);
}

navBarElement.addEventListener("click", function (evt) {
    if (evt.target.nodeName === "LI") {
        for (section of sectionElements) {
            if (section["dataset"]["nav"] === evt.target["dataset"]["nav"]) {
                section.classList.add("your-active-class");
                section.scrollIntoView();
            } else if (section.classList.contains("your-active-class")) {
                section.classList.remove("your-active-class");
            }
        }
    }
});

document.addEventListener("scroll", function () {
    for (section of sectionElements) {
        if (section.getBoundingClientRect()["y"] > -40 && section.getBoundingClientRect()["y"] < section.getBoundingClientRect()["height"]) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    }
});
