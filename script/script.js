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
    document.querySelector('.header').style.display='block'
    
}
setTimeout("showDiv()",2600)



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
      navigation.style.backgroundColor="rgb(136, 15, 15)"
      navigation.style.boxShadow="0 1rem 12rem black"
    document.documentElement.style.setProperty('--color', "rgb(174, 7, 7)");
  }
  if(period=="AM"){
    navigation.style.backgroundColor="#97ABFF"
    document.documentElement.style.setProperty('--color', "#97ABFF");
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
