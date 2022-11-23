//timer

let ele = document.getElementById("timer");

let tier = 100;

(function () {
  var sec = 10;

  let timer = setInterval(() => {
    ele.innerHTML = "" + sec;

    sec--;

    if (sec == -1) {
      clearInterval(timer);

      ele.style.display = "none";
    }
  }, 100);
})();

//text on loader screen
let text = document.querySelector("#enter");
// let count=document.querySelector('.countdown')
// let header=doucment.querySelector('.header')
let strText = text.textContent;
text.textContent = "";
let textSplit = strText.split("");
console.log(textSplit);

for (let i = 0; i < textSplit.length; i++) {
  text.innerHTML += "<span>" + textSplit[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("anime");
  char++;

  if (char === splitText.length) {
   
    complete();
// header.style.display='block';
// count.style.display:'none'
    return;
  }
//   function onClose(){
//     if(char === splitText.length){
//         count.style.display='none'
//     }
//   }
//   let close=setInterval(onClose,50)
}

function complete() {
  clearInterval(timer);
  timer = null;
}
//show and hide div of loader
function hideDiv(){
    document.querySelector('.countdown').style.display='none'
}
setTimeout("hideDiv()",3000)

function showDiv(){
    document.querySelector('.header').style.display='block';
    // document.querySelector('.section-about').style.display="block"
    //document.querySelector('.navigation').style.display="block"
    
}
setTimeout("showDiv()",2600)
function showNav(){
  
  document.querySelector('.navigation').style.display="block"
  
}
setTimeout("showNav()",4200)
function showAbout(){
  
  document.querySelector('.section-about').style.display="block"
  
}
setTimeout("showABout()",200)



//for date time and day

var date = new Date();
// var todayDate = document.querySelector(".header__widgets__clock--date");
var todayTime = document.querySelector(".header__widgets__clock--time");
var todayDay = document.querySelector(".header__widgets__clock--day");
var nameOfDay = ["sun", "Mon", "tue", "wed", "thu", "fri", "sat"];
var header = document.querySelector(".header");
var navigation=document.querySelector('.nav');


function printDay() {
  var date = new Date();
  var today = date.getDay();
  var day = nameOfDay[today];
  todayDay.innerHTML = day;
}
printDay();

function printTime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var period = "AM";
  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    period = "PM";
    header.style.backgroundImage =
      "linear-gradient( to bottom, black 45%,red 135%)";
     // navigation.style.backgroundColor="rgb(136, 15, 15)"
      //navigation.style.boxShadow="0 1rem 12rem black"
   // document.documentElement.style.setProperty('--color', "rgb(174, 7, 7)");
  }
 

 

  if(hour<12){

   // navigation.style.backgroundColor="#97ABFF"
   // document.documentElement.style.setProperty('--color', "rgb(133, 156, 250)");
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  todayTime.innerHTML = hour + ":" + minute + " " + period;
}
printTime();

//for weather
var temp = document.querySelector(".header__widgets__weather--temp");
console.log(temp);

var icons = document.querySelector(".header__widgets__weather--icon");
console.log(icons);
//converting kelvin to celsius
function convert(val) {
  return (val - 273).toFixed(2);
}
//api key
const API_KEY = "0ef95e80220ad51f51a24422c1ca4ec0";

function getWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=haryana&appid=0ef95e80220ad51f51a24422c1ca4ec0"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      var temperature = data["main"]["temp"];
      var description = data["weather"]["0"]["icon"];
      console.log(description);
      temp.innerHTML = `${convert(temperature)} &degC`;
      // console.log(temp)
      // console.log(windSpeed)
      icons.classList.add = "weather__image";
      icons.innerHTML =
        "" + `<img src="css/openweather/icons/${description}.png" />`;
    });
}
getWeather();

//show a div on scrolling

let sectionAbout=document.querySelector('.section-about');
let screenScroll=function (){
 let y=window.scrollY;
 if(y>=1){
  sectionAbout.style.display="block";
 // header.style.display="none"
  console.log('it is scrolling')
  header.classList.add("scrollIn");
  sectionAbout.classList.add("moveIn");
 }

}
window.addEventListener("scroll", screenScroll);

//to add infinite scroll loop in a div


// var doc = window.document,
//   context = doc.querySelector('.js-loop'),
//   clones = context.querySelectorAll('.is-clone'),
//   disableScroll = false,
//   scrollHeight = 0,
//   scrollPos = 0,
//   clonesHeight = 0,
//   i = 0;

// function getScrollPos () {
//   return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
// }

// function setScrollPos (pos) {
//   context.scrollTop = pos;
// }

// function getClonesHeight () {
//   clonesHeight = 0;

//   for (i = 0; i < clones.length; i += 1) {
//     clonesHeight = clonesHeight + clones[i].offsetHeight;
//   }

//   return clonesHeight;
// }

// function reCalc () {
//   scrollPos = getScrollPos();
//   scrollHeight = context.scrollHeight;
//   clonesHeight = getClonesHeight();

//   if (scrollPos <= 0) {
//     setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
//   }
// }

// function scrollUpdate () {
//   if (!disableScroll) {
//     scrollPos = getScrollPos();

//     if (clonesHeight + scrollPos >= scrollHeight) {
//       // Scroll to the top when you’ve reached the bottom
//       setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
//       disableScroll = true;
//     } else if (scrollPos <= 0) {
//       // Scroll to the bottom when you reach the top
//       setScrollPos(scrollHeight - clonesHeight);
//       disableScroll = true;
//     }
//   }

//   if (disableScroll) {
//     // Disable scroll-jumping for a short time to avoid flickering
//     window.setTimeout(function () {
//       disableScroll = false;
//     }, 40);
//   }
// }

// function init () {
//   reCalc();
  
//   context.addEventListener('scroll', function () {
//     window.requestAnimationFrame(scrollUpdate);
//   }, false);

//   window.addEventListener('resize', function () {
//     window.requestAnimationFrame(reCalc);
//   }, false);
// }

// if (document.readyState !== 'loading') {
//   init()
// } else {
//   doc.addEventListener('DOMContentLoaded', init, false)
// }








// // Just for this demo: Center the middle block on page load
// window.onload = function () {
//   setScrollPos(Math.round(clones[0].getBoundingClientRect().top + getScrollPos() - (context.offsetHeight - clones[0].offsetHeight) / 2));
// };


