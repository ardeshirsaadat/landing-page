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
const sectionElements = document.querySelectorAll("section");
const navBarElement = document.querySelector("#navbar__list");
const button = buildButton();
let fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function buildButton() {
    let buttonElement = document.createElement("button");
    const anchorElement = document.createElement("A");
    anchorElement.setAttribute("href", "#");
    anchorElement.textContent = "UP";
    buttonElement.appendChild(anchorElement);
    return buttonElement;
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
// Build menu
for (let i = 0; i < sectionElements.length; i++) {
    let newElem = document.createElement("li");
    newElem.setAttribute("class", "menu__link");
    newElem.setAttribute("data-nav", `Section ${i + 1}`);
    newElem.textContent = document.querySelectorAll("h2")[i].textContent;
    fragment.appendChild(newElem);
}
navBarElement.appendChild(fragment);
// Add class 'active' to section when near top of viewport
function addAvtiveClass(target_element) {
    target_element.classList.add("your-active-class");
}

function removeAvtiveClass(target_element) {
    target_element.classList.remove("your-active-class");
}
// add/remove button as scroll up/down
document.addEventListener("scroll", function () {
    if (sectionElements[0].getBoundingClientRect()["y"] < 0) {
        this.body.appendChild(button);
    } else {
        button.remove();
    }
});
// Scroll to section on link click
// Set sections as active
navBarElement.addEventListener("click", function (evt) {
    if (evt.target.nodeName === "LI") {
        for (section of sectionElements) {
            if (section["dataset"]["nav"] === evt.target["dataset"]["nav"]) {
                addAvtiveClass(section);
                section.scrollIntoView();
            } else if (section.classList.contains("your-active-class")) {
                removeAvtiveClass(section);
            }
        }
    }
});
// Scroll to anchor ID using scrollTO event
document.addEventListener("scroll", function () {
    for (section of sectionElements) {
        if (section.getBoundingClientRect()["y"] > -40 && section.getBoundingClientRect()["y"] < section.getBoundingClientRect()["height"]) {
            addAvtiveClass(section);
        } else {
            removeAvtiveClass(section);
        }
    }
});
