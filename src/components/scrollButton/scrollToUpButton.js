import React from "react";
import $ from 'jquery';
import { Link } from "gatsby";

const ScrollToUp = () => (
    <Link id="back-to-top" onClick={toTop} to="#" className="btn btn-primary btn-lg back-to-top" role="button" title="Click to return on the top page" data-toggle="tooltip" data-placement="left">
        <span>Вверх</span>
    </Link>
);

function toTop(e) {
    e.preventDefault();
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
}

function init() {
    console.log('init');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
}

export { ScrollToUp, init }
