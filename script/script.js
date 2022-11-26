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

  if (char === textSplit.length) {
   
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

//show and hide div of loader


function showDiv(){
    // document.querySelector('.mySlides').style.display='block';
    document.querySelector('.header').style.display='block';
    // document.querySelector('.section-about').style.display="block"
    //document.querySelector('.navigation').style.display="block"
    
}
setTimeout("showDiv()",2600)
function showNav(){
  
  document.querySelector('.navigation').style.display="block"
  
}
setTimeout("showNav()",4200)
// function showAbout(){
  
//   document.querySelector('.section-about').style.display="block"
  
// }
// setTimeout("showABout()",200)



//for date time and day

var date = new Date();
// var todayDate = document.querySelector(".widgets__clock--date");
var todayTime = document.querySelector(".widgets__clock--time");
var todayDay = document.querySelector(".widgets__clock--day");
var aboutTodayTime = document.querySelectorAll(".about__widgets__clock--time");
var aboutTodayDay = document.querySelectorAll(".about__widgets__clock--day");
var nameOfDay = ["sun", "Mon", "tue", "wed", "thu", "fri", "sat"];
var header = document.querySelector(".header");
var navigation=document.querySelector('.nav');


function printDay() {
  var date = new Date();
  var today = date.getDay();
  var day = nameOfDay[today];
  todayDay.innerHTML = day;
  for (let i = 0; i < aboutTodayDay.length; i++) {
   aboutTodayDay[i].innerHTML=day
  }

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
  for (let i = 0; i < aboutTodayDay.length; i++) {
    aboutTodayTime[i].innerHTML=hour + ":" + minute + " " + period;
   }

}
printTime();

//for weather
var temp = document.querySelector(".widgets__clock--temp");
console.log(temp);

var icons = document.querySelector(".widgets__clock--icon");
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

//closing ios notification

let noti=document.querySelectorAll('.about__section__box')
let num;
function onClose(num){
  for(let i=0;i<noti.length;i++){
    if(i==num){
      noti[i].style.display="none"
    }
  }
}

//show a div on scrolling


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


//for about section
// let text2 = document.querySelectorAll("about__text--letter");
// // let count=document.querySelector('.countdown')
// // let header=doucment.querySelector('.header')
// let strText2 = text2.textContent;
// text2.textContent = "";
// console.log(strtext2)
// let textSplit2 = strText2.split('')
// console.log(textSplit2);

// for (let i = 0; i < textSplit2.length; i++) {
//   text2.innerHTML += "<span>" + textSplit2[i] + "</span>";
// }
// let char2 = 0;
// let timer2 = setInterval(onTick2, 50);

// function onTick2() {
//   const span2 = text2.querySelectorAll("span")[char2];
//   span2.classList.add("hoverText");
//   char2++;

//   if (char2 === splitText2.length) {
   
//     complete2();
// // header.style.display='block';
// // count.style.display:'none'
//     return;
//   }
// //   function onClose(){
// //     if(char === splitText.length){
// //         count.style.display='none'
// //     }
// //   }
// //   let close=setInterval(onClose,50)
// }

// function complete2() {
//   clearInterval(timer2);
//   timer2 = n.slidesl;
// }

//observer interaction

// const observer=new IntersectionObserver((entries)=>{
//   entries.forEach((entry)=>{
//     console.log(entry)

//     if(entry.isIntersecting){
//       entry.target.classList.add('show');
//     }
//     else{
//       entry.target.classList.remove('show');
//       entry.target.classList.add('hello')
//     }
//   })
// })
// const hiddenElements=document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

// let header1=document.querySelector(".header");
// let y=window.screenY;
// console.log(y)


//for slideshow
let slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
 
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
setTimeout("showSlides(slideIndex)",2600)
setTimeout("showSlides(n) ",2600)
setTimeout("function currentSlide(n)",2600)


///folder
let red=document.querySelector('.window__winhead__btn--close');
let green=document.querySelector('.window__winhead__btn--max');
let yellow=document.querySelector('.window__winhead__btn--min');
let macWindow=document.querySelector('.window')
let folder=document.querySelector('.folder')

function onCloser(){
  macWindow.classList.remove('show')
  macWindow.classList.add('hide')
}
function onMax(){
  macWindow.classList.add('max')
  macWindow.classList.remove('window')
  macWindow.classList.remove('min')
}
function onMin(){
  
  macWindow.classList.remove('max')
  macWindow.classList.add('window')
  
}

function openFolder(){
  macWindow.classList.remove('hide')
  macWindow.classList.add('show')
  
}

////drag the window

dragElement(document.querySelector(".window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//sidebar menu
