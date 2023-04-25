'use strict';

/**
 * navbar varables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElenArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElenArr.length; i++) {

    navElenArr[i].addEventListener("click", function () {

        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("active");

    });

}

/***
 * header sticky 
 **/

const header =  document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

    this.window.scrolly = 10 ? header.classList.add("active") : header.classList.remove("active");

});