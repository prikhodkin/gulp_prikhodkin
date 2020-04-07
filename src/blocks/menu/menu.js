"use strict"
import $ from "jquery";
$('.menu__btn').click(() => {
    $('.menu__hamburger').toggleClass('menu__hamburger--active');
});

const test = () => {
    console.log($(document).height());
}

export default test();

