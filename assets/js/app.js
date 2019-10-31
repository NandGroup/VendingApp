
 $(document).ready(function(){
     $('#data-display-2').hide();
    setInterval(function () {
        $("#data-display-2").fadeIn(2000).delay(1000).fadeOut(2000,function() {
            $("#data-display-1").fadeIn(2000).delay(1000).fadeOut(2000);
          });
    },10000)
    $("#data-display-2").delay(2000).fadeOut(2000, function() {
        $("#data-display-1").fadeIn(3000).delay(1000).fadeOut(2000);
    });
 });

 //homepage carousel slider 
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
 })

 //footer breaking news date and time
 function clock() {
     const fullDate = new Date();
     var day = fullDate.getDate();
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

     document.getElementById('date').innerHTML=day;
     document.getElementById('month').innerHTML="/"+month;
     document.getElementById('year').innerHTML="/"+year;

     document.getElementById('hours').innerHTML = hour;
     document.getElementById('minutes').innerHTML = ":" + minutes;
     document.getElementById('seconds').innerHTML = ":" + sec;

 }
 setInterval(clock, 100);

 //hotDrink page slider
 $('#ht-slider').owlCarousel({
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
})