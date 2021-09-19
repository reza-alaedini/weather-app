var city = document.getElementById("city");
var now_temp = document.getElementById("temp");
var mx_temp = document.getElementById("mx_temp");
var mn_temp = document.getElementById("mn_temp");
var symbol_pic = document.getElementById("symbol_pic");
var weatherCard = document.getElementById("weatherCard");
weatherCard.style.display = "none";
var city_name_card = document.getElementById("city_name");
var day = document.getElementById("day");
var status_card = document.getElementById("status");
var my_alert = document.getElementById("alert");
my_alert.style.display = "none";
function sendRequest() {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://parsijoo.ir/api?serviceType=weather-API&q=" + city.value
  );
  request.onreadystatechange = function () {
    if (request.status == 200) {
      var day_name, status, symbol, temp, city_name, max_temp, min_temp;
      day_name = request.responseXML.getElementsByTagName("day-name");
      status = request.responseXML.getElementsByTagName("status");
      symbol = request.responseXML.getElementsByTagName("symbol");
      temp = request.responseXML.getElementsByTagName("temp");
      city_name = request.responseXML.getElementsByTagName("city-name");
      max_temp = request.responseXML.getElementsByTagName("max-temp");
      min_temp = request.responseXML.getElementsByTagName("min-temp");

      symbol_pic.setAttribute(
        "src",
        "https://cdn.parsijoo.ir/static/home/source/cdn/images/services/weather/" +
          symbol[0].firstChild.nodeValue +
          ".png"
      );
      city_name_card.innerHTML = city_name[0].firstChild.nodeValue;
      day.innerHTML = day_name[0].firstChild.nodeValue;
      status_card.innerHTML = status[0].firstChild.nodeValue;
      mn_temp.innerHTML = min_temp[0].firstChild.nodeValue;
      now_temp.innerHTML = temp[0].firstChild.nodeValue;
      mx_temp.innerHTML = max_temp[0].firstChild.nodeValue;
    }
  };
  request.send();
  weatherCard.style.display = "block";
}
function myAlert() {
  my_alert.style.display = "block";
}
window.addEventListener("load", hide);
function hide() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("container").removeAttribute("style");
}