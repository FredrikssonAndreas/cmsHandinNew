import { fadeInOnScroll } from './effectScript.js';
import { rotateOnScroll } from './effectScript.js';
import { validateForm } from './validationScript.js';
import { toggleSearchBox } from './searchScript.js';
 

document.addEventListener('DOMContentLoaded', function () {
    fadeInOnScroll();
    rotateOnScroll();
    validateForm();
    toggleSearchBox();
});

