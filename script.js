let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

var set_clock = setInterval(function clock(){
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes() ;
    let ss = day.getSeconds() ;
    
    var calc_hour = (hh*30) + (mm/2);
    var calc_min = (mm*6) + (ss/10);
    var calc_sec = ss*6;
    
    hour.style.transform = 'rotate('+ calc_hour + "deg)";
    min.style.transform = 'rotate(' + calc_min + "deg)";
    sec.style.transform = 'rotate(' + calc_sec + "deg)";
},1000);
