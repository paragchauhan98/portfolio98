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
setTimeout("hideDiv()",2000)
function hideWidgetsClock(){
  document.querySelector('.widgets__clock--day').style.display='block'
  document.querySelector('.widgets__clock--time').style.display='block'
  document.querySelector('.widgets__clock--city').style.display='block'

}
setTimeout("hideWidgetsClock()",3000)
setTimeout("hideDiv()",2000)
function hideWidgetsWeather(){
  document.querySelector('.widgets__weather--temp').style.display='block'
  document.querySelector('.widgets__weather--icon').style.display='block'
  document.querySelector('.widgets__weather--icon1').style.display='block'
}
setTimeout("hideWidgetsWeather()",3000)

//show and hide div of loader


function showDiv(){
    // document.querySelector('.mySlides').style.display='block';
    document.querySelector('.header').style.display='block';
    // document.querySelector('.section-about').style.display="block"
    //document.querySelector('.navigation').style.display="block"
    
}
setTimeout("showDiv()",2100)
function showNav(){
  
  document.querySelector('.navigation').style.display="block"
  
}

setTimeout("showNav()",3000)
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
var nameOfDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var beader = document.querySelector(".header");
var about1 = document.querySelector(".about");
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
    // beader.style.backgroundImage="linear-gradient( to bottom, rgb(0, 0, 0) 45%,rgb(138, 9, 9) 135%)"
    // about1.style.backgroundImage="linear-gradient( to bottom, rgb(0, 0, 0) 45%,rgb(138, 9, 9) 135%)"
   // document.getElementsByClassName("header").style.backgroundImage ="linear-gradient( to bottom, rgb(black) 45%,rgb(red) 135%)"
  //  beader.style.backgroundImage="url(../img/apple2.jpg)"
  //  about1.style.backgroundImage="url(../img/apple2.jpg)"
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
var temp = document.querySelector(".widgets__weather--temp");
console.log(temp);

var icons = document.querySelector(".widgets__weather--icon");
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
  // dots[slideIndex-1].className += "active";
}
setTimeout("showSlides(slideIndex)",2600)
setTimeout("showSlides(n) ",2600)
// setTimeout("function currentSlide(n)",2600)


///folder
let red=document.querySelector('.window__winhead__btn--close');
let green=document.querySelector('.window__winhead__btn--max');
let yellow=document.querySelector('.window__winhead__btn--min');
let macWindow=document.querySelector('.window')
let macWindow2=document.querySelector('.window2')
let macWindow3=document.querySelector('.window3')
let macWindow4=document.querySelector('.window4')
let macWindow5=document.querySelector('.window5')
let folder=document.querySelector('.folder')
let invisible=document.querySelector('.invisible')

function onCloser(){
 macWindow.classList.add('hide')
 macWindow.classList.remove('min')
 macWindow.classList.remove('openFolder')
//  macWindow.style.display="none"
}
function onCloser2(){
// macWindow2.style.display="none"
  macWindow2.classList.add('hide')
 macWindow2.classList.remove('min2')
 macWindow2.classList.remove('openFolder')
}
function onCloser3(){
  macWindow3.classList.add('hide')
  macWindow3.classList.remove('min3')
  macWindow3.classList.remove('openFolder')
  // macWindow3.style.display="none"
}
function onCloser4(){
  macWindow4.classList.add('hide')
  macWindow4.classList.remove('min')
  macWindow4.classList.remove('openFolder')
  // macWindow3.style.display="none"
}
function onCloser5(){
  macWindow5.classList.add('hide')
  macWindow5.classList.remove('min')
  macWindow5.classList.remove('openFolder1')
  macWindow5.classList.remove('openFolder')
  // macWindow3.style.display="none"
}
function onMax(){
  // macWindow.style.width="90%"
  // macWindow.style.height="50rem"
  // macWindow.style.position="abosolute"
  // macWindow.style.top="15%"
  // macWindow.style.left="5%"
  macWindow.classList.add('max')
  macWindow.classList.remove('min')
 
  // macWindow.classList.add('max')
  // macWindow.classList.remove('window')
  // macWindow.classList.remove('min')
}
function onMax2(){
  // macWindow2.style.width="90%"
  // macWindow2.style.height="50rem"
  // macWindow2.style.position="abosolute"
  // macWindow2.style.top="20%"
  // macWindow2.style.left="5%"
  macWindow2.classList.add('max')
  macWindow2.classList.remove('min2')
}
function onMax3(){
  macWindow3.classList.add('max')
  macWindow3.classList.remove('min3')
  // macWindow3.style.width="90%"
  // macWindow3.style.height="50rem"
  // macWindow3.style.position="abosolute"
  // macWindow3.style.top="25%"
  // macWindow3.style.left="5%"
}
function onMax4(){
  macWindow4.classList.add('max')
  macWindow4.classList.remove('min')
}

function onMin(){
 
  // macWindow.style.width="17rem"
  // macWindow.style.height="12rem"
  // invisible.style.display="inline-block"
  // macWindow.style.position="absolute"
  // macWindow.style.top="125%"
  // macWindow.style.left="40%"
  macWindow.classList.remove('openFolder')
macWindow.classList.add('min')
//macWindow.classList.add('hide')
//invisible.style.display="inline-block"
// macWindow.style.display="none"
  
}
  

function onMin2(){
  macWindow2.classList.remove('openFolder')
  macWindow2.classList.add('min2') 
  // macWindow2.style.width="17rem"
  // macWindow2.style.height="12rem"
  // invisible.style.display="inline-block"
  // macWindow2.style.position="abosolute"
  // macWindow2.style.top="125%"
  // macWindow2.style.left="50%"
 // macWindow2.classList.add('hide')
}
function onMin3(){
  macWindow3.classList.remove('openFolder')
  macWindow3.classList.add('min3')
  // macWindow3.style.width="17rem"
  // macWindow3.style.height="12rem"
  // invisible.style.display="inline-block"
  // macWindow3.style.position="abosolute"
  // macWindow3.style.top="125%"
  // macWindow3.style.left="60%"
  //macWindow3.classList.add('hide')
}
function onMin4(){
  macWindow4.classList.remove('openFolder')
  macWindow4.classList.add('min')
}

function openFolder(){
  // macWindow.classList.remove('hide')
  // macWindow.classList.add('show')
  // macWindow.style.display="block"
  // macWindow.style.width="90%"
  // macWindow.style.height="50rem"
  // macWindow.style.position="abosolute"
  // macWindow.style.top="15%"
  // macWindow.style.left="5%"
  console.log("hello clicked")
  macWindow.classList.add('openFolder')
   macWindow.classList.remove('min')
  macWindow.classList.remove('hide')
}

function openFolder2(){
  //macWindow2.style.display="block"
  macWindow2.classList.add('openFolder')
  // macWindow.classList.remove('min')
  macWindow2.classList.remove('hide')
  // macWindow2.style.display="block"
  // macWindow2.style.width="90%"
  // macWindow2.style.height="50rem"
  // macWindow2.style.position="abosolute"
  // macWindow2.style.top="20%"
  // macWindow2.style.left="5%"
  macWindow2.classList.remove('min2') 
}
function openFolder3(){
  macWindow3.classList.add('openFolder')
  // macWindow.classList.remove('min')
  macWindow3.classList.remove('hide')
  // macWindow3.style.display="block"
  // macWindow3.style.width="90%"
  // macWindow3.style.height="50rem"
  // macWindow3.style.position="abosolute"
  // macWindow3.style.top="25%"
  // macWindow3.style.left="5%"
  macWindow3.classList.remove('min3')
}
function openFolder4(){
  macWindow4.classList.add('openFolder')
  macWindow.classList.add('hide')
  macWindow4.classList.remove('hide')
 
  macWindow4.classList.remove('min')
}
function openDocx(){
  macWindow5.classList.add('openFolder1')
  macWindow.classList.add('hide')
  macWindow5.classList.remove('hide')
 
  macWindow5.classList.remove('min')
}
//////image preview
let imgPrev1=document.querySelector('.popup')
let imgPrev2=document.querySelector('.popup2')
function openPrev(){
  imgPrev1.style.display="block"
}
function openPrev2(){
  imgPrev2.style.display="block"
}
function onImgClose(){
imgPrev1.style.display="none"
}
function onImgClose2(){
  imgPrev2.style.display="none"
  }
////drag the window

dragElement(document.querySelector(".window"));
dragElement(document.querySelector(".window2"));
dragElement(document.querySelector(".window3"));

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
   // e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
   // e.preventDefault();
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
//visa card
// // ***** GSAP Timeline Initialization *****
// var animateCard1 = gsap.timeline({ paused: true });
// var animateCard2 = gsap.timeline({ paused: true });
// var animateCard3 = gsap.timeline({ paused: true });
// var animateCard4 = gsap.timeline({ paused: true });
// var selectCard = gsap.timeline({ paused: true });

// // ***** GSAP TimelineMax Initialization *****
// var animateCurrentCard = new TimelineMax();
// var animateExtraCards = new TimelineMax();

// // ***** SCSS Parameters *****
// const colors = {
//   $black: "#111",
//   $lightBlack: "#242224",
//   $blue: "#1b2f69",
//   $lightBlue: "#27408f",
//   $white: "#fff",
//   $lightWhite: "#dae4ee"
// };
// const balance = {
//   $card1: 3021,
//   $card2: 568,
//   $card3: 2748
// };
// const cardPositions = {
//   $top: {
//     $marginTop: "-300px"
//   },
//   $behind: {
//     $marginTop: "-30px"
//   },
//   $end: {
//     $marginTop: "0px"
//   }
// };

// // ***** Animation Parameters Initialization *****
// let rotateAxis = 180;
// const duration = 0.5;

// // ***** Variables Initialization *****
// let extraCardsBackgroundColor = null;
// let bodyBackgroundColor = null;

// // ***** Function : updateBalance : Start *****
// const updateBalance = (updatedValue) => {
//   var counter = { val:0 };

//   TweenLite.to(counter, duration ,{
//     val: updatedValue,
//     roundProps:"val",
//     onUpdate:function(){
//       $("#balance-counter").text(counter.val);
//     }});
// }
// // ***** Function : updateBalance : End *****

// // ***** Function : setAnimationForExtraCards : Start *****
// const setAnimationForExtraCards = () => {
//   animateExtraCards
//     .to("body", duration, {
//       backgroundColor: bodyBackgroundColor
//     })
//     .to( ".card-stack", {
//         backgroundColor: extraCardsBackgroundColor },0)
//     .to(".card-1",{
//         rotateX: rotateAxis,
//         backgroundColor: extraCardsBackgroundColor},0)
//     .set(".card-1", { rotateX: 0 })
//     .to(".card-2",{
//         rotateX: rotateAxis,
//         backgroundColor: extraCardsBackgroundColor},0)
//     .set(".card-2", { rotateX: 0 })
//     .to(".card-3",{
//         rotateX: rotateAxis,
//         backgroundColor: extraCardsBackgroundColor},0)
//     .set(".card-3", { rotateX: 0 })
//     .to(".card-4",{
//         rotateX: rotateAxis,
//         backgroundColor: extraCardsBackgroundColor},0)
//     .set(".card-4", { rotateX: 0 })
//     .to(".card-5",{
//         rotateX: rotateAxis,
//         backgroundColor: extraCardsBackgroundColor},0)
//     .set(".card-5", { rotateX: 0 })
//     .to(".card-6",{
//         rotateX: rotateAxis,
//         backgroundColor: extraCardsBackgroundColor},0)
//     .set(".card-6", { rotateX: 0 });
// };
// // ***** Function : setAnimationForExtraCards : End *****

// // ***** Function : setAnimationForCard1 : Start *****
// const setAnimationForCard1 = () => {
//   const slide2MarginTop = $(".slide-2").css("margin-top");
//   const slide3MarginTop = $(".slide-3").css("margin-top");
//   const slide4MarginTop = $(".slide-4").css("margin-top");

//   animateCard1
//     .to(".slide-1", duration, {
//       ease: "back.inOut(1.7)",
//       translateY: -200,
//       width: 270
//     })
//     .set(".slide-1", { zIndex: 2 });
//   if (slide2MarginTop === cardPositions.$end.$marginTop) {
//     animateCard1
//       .set(".slide-2", { zIndex: 1 })
//       .to(".slide-2", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
//   }
//   if (slide3MarginTop === cardPositions.$end.$marginTop) {
//     animateCard1
//       .set(".slide-3", { zIndex: 1 })
//       .to(".slide-3", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
//   }
//   if (slide4MarginTop === cardPositions.$end.$marginTop) {
//     animateCard1
//       .set(".slide-4", { zIndex: 1 })
//       .to(".slide-4", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
//   }
//   animateCard1
//     .to(".slide-1", {
//       ease: "back",
//       translateY: 0,
//       marginTop: 0
//     })
//     .set(".slide-1", { marginTop: 0, zIndex: 4 });
// };
// // ***** Function : setAnimationForCard1 : End *****

// // ***** Function : setAnimationForCard2 : Start *****
// const setAnimationForCard2 = () => {
//   const slide1MarginTop = $(".slide-1").css("margin-top");
//   const slide3MarginTop = $(".slide-3").css("margin-top");
//   const slide4MarginTop = $(".slide-4").css("margin-top");

//   animateCard2
//     .to(".slide-2", duration, {
//       ease: "back.inOut(1.7)",
//       translateY: -200,
//       width: 270
//     })
//     .set(".slide-2", { zIndex: 2 });
//   if (slide1MarginTop === cardPositions.$end.$marginTop) {
//     animateCard2
//       .set(".slide-1", { zIndex: 1 })
//       .to(".slide-1", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
//   }
//   if (slide3MarginTop === cardPositions.$end.$marginTop) {
//     animateCard2
//       .set(".slide-3", { zIndex: 1 })
//       .to(".slide-3", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
//   }
//   if (slide4MarginTop === cardPositions.$end.$marginTop) {
//     animateCard2
//       .set(".slide-4", { zIndex: 1 })
//       .to(".slide-4", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
//   }
//   animateCard2
//     .to(".slide-2", {
//       ease: "back",
//       translateY: 0,
//       marginTop: 0
//     })
//     .set(".slide-2", { marginTop: 0, zIndex: 3 });
// };
// // ***** Function : setAnimationForCard2 : End *****

// // ***** Function : setAnimationForCard3 : Start *****
// const setAnimationForCard3 = () => {
//   const slide1MarginTop = $(".slide-1").css("margin-top");
//   const slide2MarginTop = $(".slide-2").css("margin-top");
//   const slide4MarginTop = $(".slide-4").css("margin-top");

//   animateCard3
//     .to(".slide-3", duration, {
//       ease: "back.inOut(1.7)",
//       translateY: -200,
//       width: 270
//     })
//     .set(".slide-3", { zIndex: 2 });
//   if (slide1MarginTop === cardPositions.$end.$marginTop) {
//     animateCard3
//       .set(".slide-1", { zIndex: 1 })
//       .to(".slide-1", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
//   }
//   if (slide2MarginTop === cardPositions.$end.$marginTop) {
//     animateCard3
//       .set(".slide-2", { zIndex: 1 })
//       .to(".slide-2", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
//   }
//   if (slide4MarginTop === cardPositions.$end.$marginTop) {
//     animateCard3
//       .set(".slide-4", { zIndex: 1 })
//       .to(".slide-4", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
//   }
//   animateCard3
//     .to(".slide-3", {
//       ease: "back",
//       translateY: 0,
//       marginTop: 0
//     })
//     .set(".slide-3", { marginTop: 0, zIndex: 3 });
// };


// // ***** Function : setAnimationForCard4 : Start ****
// const setAnimationForCard4 = () => {
//   const slide1MarginTop = $(".slide-1").css("margin-top");
//   const slide2MarginTop = $(".slide-2").css("margin-top");
//   const slide3MarginTop = $(".slide-3").css("margin-top");

// animateCard4
// .to(".slide-4", duration, {
//   ease: "back.inOut(1.7)",
//   translateY: -200,
//   width: 270
// })
// .set(".slide-4", { zIndex: 2 });
// if (slide1MarginTop === cardPositions.$end.$marginTop) {
// animateCard3
//   .set(".slide-1", { zIndex: 1 })
//   .to(".slide-1", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
// }
// if (slide2MarginTop === cardPositions.$end.$marginTop) {
// animateCard3
//   .set(".slide-2", { zIndex: 1 })
//   .to(".slide-2", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
// }
// if (slide3MarginTop === cardPositions.$end.$marginTop) {
// animateCard3
//   .set(".slide-3", { zIndex: 1 })
//   .to(".slide-3", duration/2, { ease: "back.inOut(1.7)", marginTop: -30, width: 240 });
// }
// animateCard4
// .to(".slide-4", {
//   ease: "back",
//   translateY: 0,
//   marginTop: 0
// })
// .set(".slide-4", { marginTop: 0, zIndex: 3 });
// };
// // ***** Function : setAnimationForCard3 : End *****

// // ***** Function : setCurrentCardAnimation : Start *****
// const setCurrentCardAnimation = () => {
//   const slide1MarginTop = $(".slide-1").css("margin-top");
//   const slide2MarginTop = $(".slide-2").css("margin-top");
//   const slide3MarginTop = $(".slide-3").css("margin-top");
//   const slide4MarginTop = $(".slide-4").css("margin-top");

//   if (slide1MarginTop === cardPositions.$behind.$marginTop) {
//     animateCurrentCard
//       .set(".slide-1", { zIndex: 4 },0)
//       .to(".slide-1",{
//         ease: "back",
//         marginTop: 0,
//         width: 270
//       },0);
//   }
//   if (slide2MarginTop === cardPositions.$behind.$marginTop) {
//     animateCurrentCard
//       .set(".slide-2", { zIndex: 4 }, 0)
//       .to(".slide-2",{
//         ease: "back",
//         marginTop: 0,
//         width: 270
//       },0);
//   }
//   if (slide3MarginTop === cardPositions.$behind.$marginTop) {
//     animateCurrentCard
//       .set(".slide-3", { zIndex: 4}, 0)
//       .to(".slide-3", {
//         ease: "back",
//         marginTop: 0,
//         width: 270
//       },0);
//   }
//   if (slide4MarginTop === cardPositions.$behind.$marginTop) {
//     animateCurrentCard
//       .set(".slide-4", { zIndex: 4 }, 0)
//       .to(".slide-4", {
//         ease: "back",
//         marginTop: 0,
//         width: 270
//       },0);
//   }
//   if (slide1MarginTop === cardPositions.$top.$marginTop) {
//     animateCurrentCard
//       .set(".slide-1", { zIndex: 2 }, 0)
//       .to(".slide-1",{
//         ease: "back",
//         marginTop: -30,
//         width: 240
//       },0);
//   }
//   if (slide2MarginTop === cardPositions.$top.$marginTop) {
//     animateCurrentCard
//       .set(".slide-2", { zIndex: 2 }, 0)
//       .to(".slide-2",{
//         ease: "back",
//         marginTop: -30,
//         width: 240
//       },0);
//   }
//   if (slide3MarginTop === cardPositions.$top.$marginTop) {
//     animateCurrentCard
//       .set(".slide-3", { zIndex: 2 }, 0)
//       .to(".slide-3",{
//         ease: "back",
//         marginTop: -30,
//         width: 240
//       },0);
//   }
//   if (slide4MarginTop === cardPositions.$top.$marginTop) {
//     animateCurrentCard
//       .set(".slide-4", { zIndex: 2 }, 0)
//       .to(".slide-4",{
//         ease: "back",
//         marginTop: -30,
//         width: 240
//       },0);
//   }
// };
// // ***** Function : setCurrentCardAnimation : End *****

// // ***** Event Handlers : Start *****
// $(".slide-1").click(function () {
//   const marginTop = $(this).css("margin-top");
//   if (marginTop === cardPositions.$behind.$marginTop) {
//     setAnimationForCard1();
//     animateCard1.play();
//   }
//   if (marginTop === cardPositions.$end.$marginTop) {
//     selectCard
//       .to(".slide-1", {
//         ease: "back",
//         translateY: -300
//       })
//       .set(".slide-1", { translateY: 0, marginTop: -300 })
//       .restart();
//     $(".balance").css("color", colors.$white);
//     updateBalance(balance.$card1);
//     setCurrentCardAnimation();
//     extraCardsBackgroundColor = colors.$lightBlack;
//     bodyBackgroundColor = colors.$black;
//     setAnimationForExtraCards();
//   }
// });

// $(".slide-2").click(function () {
//   const marginTop = $(this).css("margin-top");
//   if (marginTop === cardPositions.$behind.$marginTop) {
//     setAnimationForCard2();
//     animateCard2.play();
//   }
//   if (marginTop === cardPositions.$end.$marginTop) {
//     selectCard
//       .to(".slide-2", {
//         ease: "back",
//         translateY: -300
//       })
//       .set(".slide-2", { translateY: 0, marginTop: -300})
//       .restart();
//     $(".balance").css("color", colors.$black);
//     updateBalance(balance.$card2);
//     setCurrentCardAnimation();
//     extraCardsBackgroundColor = colors.$lightWhite;
//     bodyBackgroundColor = colors.$white;
//     setAnimationForExtraCards();
//   }
// });

// $(".slide-3").click(function () {
//   const marginTop = $(this).css("margin-top");
//   if (marginTop === cardPositions.$behind.$marginTop) {
//     setAnimationForCard3();
//     animateCard3.play();
//   }
//   if (marginTop === cardPositions.$end.$marginTop) {
//     selectCard
//       .to(".slide-3", {
//         ease: "back",
//         translateY: -300
//       })
//       .set(".slide-3", { translateY: 0, marginTop: -300})
//       .restart();
//     $(".balance").css("color", colors.$white);
//     updateBalance(balance.$card3);
//     setCurrentCardAnimation();
//     extraCardsBackgroundColor = colors.$lightBlue;
//     bodyBackgroundColor = colors.$blue;
//     setAnimationForExtraCards();
//   }
// });

// $(".slide-4").click(function () {
//   const marginTop = $(this).css("margin-top");
//   if (marginTop === cardPositions.$behind.$marginTop) {
//     setAnimationForCard4();
//     animateCard4.play();
//   }
//   if (marginTop === cardPositions.$end.$marginTop) {
//     selectCard
//       .to(".slide-4", {
//         ease: "back",
//         translateY: -300
//       })
//       .set(".slide-4", { translateY: 0, marginTop: -300 })
//       .restart();
//     $(".balance").css("color", colors.$white);
//     updateBalance(balance.$card3);
//     setCurrentCardAnimation();
//     extraCardsBackgroundColor = colors.$lightBlue;
//     bodyBackgroundColor = colors.$white;
//     setAnimationForExtraCards();
//   }
// });
// // ***** Event Handlers : End *****

// // ***** Clearing Timelines : Start *****
// animateExtraCards.eventCallback("onComplete", () => {
//   animateExtraCards.clear();
// });
// animateCurrentCard.eventCallback("onComplete", () => {
//   animateCurrentCard.clear();
// });
// selectCard.eventCallback("onComplete", () => {
//   selectCard.clear();
// });
// animateCard1.eventCallback("onComplete", () => {
//   animateCard1.clear();
// });
// animateCard2.eventCallback("onComplete", () => {
//   animateCard2.clear();
// });
// animateCard3.eventCallback("onComplete", () => {
//   animateCard3.clear();
// });
// animateCard4.eventCallback("onComplete", () => {
//   animateCard4.clear();
// });
// // ***** Clearing Timelines : End *****