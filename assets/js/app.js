/*jslint browser: true*/
/*global $, jQuery*/
// 'use strict'.
$(document).ready(function () {

    $('#data-display-2').hide();
    setInterval(function () {
        $("#data-display-2").fadeIn(2000).delay(1000).fadeOut(2000, function () {
            $("#data-display-1").fadeIn(2000).delay(1000).fadeOut(2000);
        });
    }, 10000);
    $("#data-display-2").delay(2000).fadeOut(2000, function () {
        $("#data-display-1").fadeIn(3000).delay(1000).fadeOut(2000);
    });
});
//homepage carousel slider 
$(document).ready(function () {
    $('#homepage-slides').owlCarousel({
        loop: true,
        autoplay: true,
        slideSpeed: 10000,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
//footer breaking news date and time
window.onload = function () {
function clock() {
    var fullDate = new Date();
    var day = fullDate.getDate();
    console.log(day);
    var month = fullDate.getMonth();
    var year = fullDate.getFullYear();
    var hour = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    var sec = fullDate.getSeconds();
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    document.getElementById('date').innerHTML = day;
    document.getElementById('month').innerHTML = "/" + month;
    document.getElementById('year').innerHTML = "/" + year;

    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = ":" + minutes;
    document.getElementById('seconds').innerHTML = ":" + sec;
}
setInterval(clock, 1000);
}
//Footer help Button onclick
window.onload = function(){
    document.getElementById('help-btn').addEventListener('click',function(){
        document.querySelector('#bg-support-popUp').style.display='block';
    });
    document.querySelector('.close-btn').addEventListener('click',function(){
        document.querySelector('#bg-support-popUp').style.display='none';
    });
}
//Footer  Product Code button onclick
window.onload = function () {
    document.querySelector('#productCode-btn').addEventListener('click', function () {
        document.getElementById('bg-ProductCode-popUp').style.display ='block';
    });
    document.querySelector('.close-btn1').addEventListener('click', function () {
        document.getElementById('bg-ProductCode-popUp').style.display = 'none';
    });
}
//Footer Language Button onclick
window.onload = function () {
    document.querySelector('#language-icon').addEventListener('click', function () {
        document.getElementById('bg-language-popUp').style.display = 'block';
    });
    document.querySelector('.close-btn2').addEventListener('click', function () {
        document.getElementById('bg-language-popUp').style.display = 'none';
    });
}
//hotDrink page slider
$('document').ready(function(){
    $('#hd-slider').owlCarousel({
        loop: true,
        autoplay: true,
        slideSpeed: 10000,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})

//hot drink page product popUp
$('document').ready(function(){
    $('#hd-popUp-slider').owlCarousel({
        loop: true,
        autoplay: true,
        slideSpeed: 10000,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})
