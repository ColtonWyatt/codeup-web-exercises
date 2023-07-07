// <script src="./js/jquery-3.6.4.js"></script>
//
// <script>
//
// 	"use strict"
//
// 	const apiKey = "4885904ebdf757d7ee7de1f56167faa8"
// 	const apiUrl = "http://api.openweathermap.org/data/2.5/forecast"
//
// 	var weatherOptions = {
// 	lat: 34.0659,
// 	lon: -84.6769,
// 	APPID: apiKey,
// 	// exclude:'minutely, current, hourly',
// 	units: 'imperial'
// };
// 	// Search box and button selectors
// 	const searchBox = document.querySelector(".search input")
// 	const searchBtn = document.querySelector(".search button")
//
// 	// Function to call weather and map
// 	async function checkWeather(city) {
// 	const response = await $.get(apiUrl, weatherOptions).done(function (data) {
// 	console.log(data)
// 	//Formula to show date and time
// 	var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
// 	var firstDay = new Date(data.list[0].dt_txt);
// 	var secondDay = new Date(data.list[6].dt_txt);
// 	var thirdDay = new Date(data.list[14].dt_txt);
// 	var fourthDay = new Date(data.list[22].dt_txt);
// 	var fifthDay = new Date(data.list[30].dt_txt);
//
// 	// formula to pull type of weather on specific day
// 	const weatherArrayOne = data.list[0].weather[0].main
// 	const weatherArrayTwo = data.list[6].weather[0].main
// 	const weatherArrayThree = data.list[14].weather[0].main
// 	const weatherArrayFour = data.list[22].weather[0].main
// 	const weatherArrayFive = data.list[30].weather[0].main
// 	// console.log(weatherArrayOne);
// 	// console.log(weatherArrayTwo);
// 	// console.log(weatherArrayThree);
// 	// console.log(weatherArrayFour);
// 	// console.log(weatherArrayFive);
// 	//NEW CODE
// 	const weatherIconOne = document.querySelector(".weather-icon-one")
// 	const weatherIconTwo = document.querySelector(".weather-icon-two")
// 	const weatherIconThree = document.querySelector(".weather-icon-three")
// 	const weatherIconFour = document.querySelector(".weather-icon-four")
// 	const weatherIconFive = document.querySelector(".weather-icon-five")
// 	const videoOne = document.querySelector("#video-one")
// 	const videoTwo = document.querySelector("#video-two")
// 	const videoThree = document.querySelector("#video-three")
// 	const videoFour = document.querySelector("#video-four")
// 	const videoFive = document.querySelector("#video-five")
// 	// console.log(videoOne);
// 	// weather formulas to fill in data for card one
// 	document.querySelector("#day").innerHTML = firstDay;
// 	document.querySelector(".cityOne").innerHTML = data.city.name;
// 	document.querySelector(".tempOne").innerHTML = Math.round(data.list[0].main.temp) + "°";
// 	document.querySelector(".humidityPercentageOne").innerHTML = (data.list[0].main.humidity) + " % ";
// 	document.querySelector(".windOne").innerHTML = Math.round(data.list[0].wind.speed) + "mph";
// 	//Weather formulas to fill in data for  card 2
// 	document.querySelector("#dayTwo").innerHTML = secondDay
// 	document.querySelector(".cityTwo").innerHTML = data.city.name
// 	document.querySelector(".tempTwo").innerHTML = Math.round(data.list[1].main.temp) + "°";
// 	document.querySelector(".humidityPercentageTwo").innerHTML = (data.list[1].main.humidity) + "%"
// 	document.querySelector(".windTwo").innerHTML = Math.round(data.list[1].wind.speed) + "mph";
// 	// Weather formulas to fill in data for card Three
// 	document.querySelector("#dayThree").innerHTML = thirdDay
// 	document.querySelector(".cityThree").innerHTML = data.city.name
// 	document.querySelector(".tempThree").innerHTML = Math.round(data.list[2].main.temp) + "°";
// 	document.querySelector(".humidityPercentageThree").innerHTML = (data.list[2].main.humidity) + "%"
// 	document.querySelector(".windThree").innerHTML = Math.round(data.list[2].wind.speed) + "mph";
// 	// Weather formulas to fill in data for card Four
// 	document.querySelector("#dayFour").innerHTML = fourthDay
// 	document.querySelector(".cityFour").innerHTML = data.city.name
// 	document.querySelector(".tempFour").innerHTML = Math.round(data.list[3].main.temp) + "°";
// 	document.querySelector(".humidityPercentageFour").innerHTML = (data.list[3].main.humidity) + "%"
// 	document.querySelector(".windFour").innerHTML = Math.round(data.list[3].wind.speed) + "mph";
// 	// Weather Formulas to fill in data for card Five
// 	document.querySelector("#dayFive").innerHTML = fifthDay
// 	document.querySelector(".cityFive").innerHTML = data.city.name
// 	document.querySelector(".tempFive").innerHTML = Math.round(data.list[4].main.temp) + "°";
// 	document.querySelector(".humidityPercentageFive").innerHTML = (data.list[4].main.humidity) + "%"
// 	document.querySelector(".windFive").innerHTML = Math.round(data.list[4].wind.speed) + "mph";
//
// 	// if/else to change weather icon depending on forecast for day one
// 	if (weatherArrayOne == "Clouds") {
// 	weatherIconOne.src = "img/cloud-fill.svg";
// } else if (weatherArrayOne == "Clear") {
// 	weatherIconOne.src = "img/brightness-high.svg";
// } else if (weatherArrayOne == "Rain") {
// 	weatherIconOne.src = "img/cloud-rain.svg";
// } else if (weatherArrayOne == "Snow") {
// 	weatherIconOne.src = "img/cloud-snow-fill.svg"
// };
//
// 	// if/else to change weather video depending on forecast for day one
// 	if (weatherArrayOne == "Clear") {
// 	videoOne.src = "css/light blue sky.mp4"
// } else if (weatherArrayOne == "Clouds") {
// 	videoOne.src = "css/moving clouds.mp4"
// } else if (weatherArrayOne == "Rain") {
// 	videoOne.src = "css/light color rain.mp4"
// } else if (weatherArrayOne == 'Snow') {
// 	videoOne.src = "css/snow.mp4"
// };
// 	// if/else to change weather icon depending on forecast for day two
// 	if (weatherArrayTwo == "Clouds") {
// 	weatherIconTwo.src = "img/cloud-fill.svg"
// } else if (weatherArrayTwo == "Clear") {
// 	weatherIconTwo.src = "img/brightness-high.svg"
// } else if (weatherArrayTwo == "Rain") {
// 	weatherIconTwo.src = "./img/cloud-lightning-rain.svg"
// };
//
// 	// if/else to change weather video depending on forecast for day two
// 	if (weatherArrayTwo == "Clear") {
// 	videoTwo.src = "css/light blue sky.mp4"
// } else if (weatherArrayTwo == "Clouds") {
// 	videoTwo.src = "css/moving clouds.mp4"
// } else if (weatherArrayTwo == "Rain") {
// 	videoTwo.src = "css/light color rain.mp4"
// } else if (weatherArrayTwo == 'Snow') {
// 	videoTwo.src = "css/snow.mp4"
// };
//
// 	// 	// if/else to change weather icon depending on forecast for day three
// 	if (weatherArrayThree == "Clouds") {
// 	weatherIconThree.src = "img/cloud-fill.svg"
// } else if (weatherArrayThree == "Clear") {
// 	weatherIconThree.src = "img/brightness-high.svg"
// } else if (weatherArrayThree == "Rain") {
// 	weatherIconThree.src = "./img/cloud-lightning-rain.svg"
// };
//
// 	// if/else to change weather video depending on forecast for day three
// 	if (weatherArrayThree == "Clear") {
// 	videoThree.src = "css/light blue sky.mp4"
// } else if (weatherArrayThree == "Clouds") {
// 	videoThree.src = "css/moving clouds.mp4"
// } else if (weatherArrayThree == "Rain") {
// 	videoThree.src = "css/light color rain.mp4"
// } else if (weatherArrayThree == 'Snow') {
// 	videoThree.src = "css/snow.mp4"
// };
//
// 	// if/else to change weather depending on forecast for day four
// 	if (weatherArrayFour == "Clouds") {
// 	weatherIconFour.src = "img/cloud-fill.svg"
// } else if (weatherArrayFour == "Clear") {
// 	weatherIconFour.src = "img/brightness-high.svg"
// } else if (weatherArrayFour == "Rain") {
// 	weatherIconFour.src = "./img/cloud-lightning-rain.svg"
// };
//
// 	// if/else to change weather video depending on forecast for day four
// 	if (weatherArrayFour == "Clear") {
// 	videoFour.src = "css/light blue sky.mp4"
// } else if (weatherArrayFour == "Clouds") {
// 	videoFour.src = "css/moving clouds.mp4"
// } else if (weatherArrayFour == "Rain") {
// 	videoFour.src = "css/light color rain.mp4"
// } else if (weatherArrayFour == 'Snow') {
// 	videoFour.src = "css/snow.mp4"
// };
//
// 	// if/else to change weather depending on forecast for day five
// 	if (weatherArrayFive == "Clouds") {
// 	weatherIconFive.src = "img/cloud-fill.svg"
// } else if (weatherArrayFive == "Clear") {
// 	weatherIconFive.src = "img/brightness-high.svg"
// } else if (weatherArrayFive == "Rain") {
// 	weatherIconFive.src = "./img/cloud-lightning-rain.svg"
// };
//
// 	// if/else to change weather video depending on forecast for day five
// 	if (weatherArrayFive == "Clear") {
// 	videoFive.src = "css/light blue sky.mp4"
// } else if (weatherArrayFive == "Clouds") {
// 	videoFive.src = "css/moving clouds.mp4"
// } else if (weatherArrayFive == "Rain") {
// 	videoFive.src = "css/light color rain.mp4"
// } else if (weatherArrayFive == 'Snow') {
// 	videoFive.src = "css/snow.mp4"
// };
// });
// 	// 	Close weather loading
// }
// 	// MapBox
// 	mapboxgl.accessToken = 'pk.eyJ1IjoiY29sdC13eWF0dCIsImEiOiJjbGd5M25od2YwNW5nM3JwaWhzNWNkOGhhIn0.y29jCSBURKDZsdSW0-L-Yw';
// 	var map = new mapboxgl.Map({
// 	container: 'map',
// 	style: 'mapbox://styles/mapbox/streets-v11',
// 	center: [-84.6787, 34.0630],//Acworth, GA
// 	zoom: 13
// });
// 	// Mapbox Marker(Set to Acworth, GA
// 	var marker = new mapboxgl.Marker({
// 	draggable: true
// })
// 	.setLngLat({lng: -84.6787, lat: 34.0630}).addTo(map);
// 	marker.on("dragend", function () {
// 	var location = marker.getLngLat();
// 	console.log(marker.getLngLat());
// 	weatherOptions.lon = location.lng;
// 	weatherOptions.lat = location.lat;
// 	checkWeather();
// });
//
// 	function add_marker(event) {
// 	var coordinates = event.lngLat;
//
// 	marker.setLngLat([coordinates.lng, coordinates.lat]).addTo(map);
// 	console.log(coordinates);
// 	marker.addTo(map)
// };
// 	map.on('click', add_marker);
//
// 	function geocode(search, token) {
// 	var baseUrl = 'https://api.mapbox.com';
// 	var endPoint = '/geocoding/v5/mapbox.places/';
// 	return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
// 	.then(function (res) {
// 	return res.json();
// 	// to get all the data from the request, comment out the following three lines...
// }).then(function (data) {
// 	return data.features[0].center;
// });
// }
//
// 	searchBtn.addEventListener("click", () => {
// 	console.log(searchBox.value);
// 	geocode(searchBox.value, mapbox).then(function (result) {
// 	map.setCenter(result);
// 	map.setZoom(10);
// 	console.log(result);
// 	weatherOptions.lon = result[0];
// 	weatherOptions.lat = result[1];
// 	marker.setLngLat(result);
// 	checkWeather();
// });
// });
// 	}
// </script>