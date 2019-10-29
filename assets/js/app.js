
 $(document).ready(function(){
    setInterval(function () {
        $('#data-display-1').delay(1000).fadeIn(1000).fadeOut();
        $('#data-display-2').fadeIn().fadeOut();
    },5000)
  
 });

 //homepage carousel slider 
 $('#image-slides').owlCarousel({
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