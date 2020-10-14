
const map = L.map('mapid').setView([-23.53, -46.20], 14);

//attach map 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXhsbG8iLCJhIjoiY2tnOGU0NDFvMGc2bDJ5bXUxOXZ2enUzMyJ9.6t7THDi-ZqakqLhS_bmS0A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

//create popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>');

//create market
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

L.marker([-23.53, -46.20], { icon: icon})
    .addTo(map)
    .bindPopup(popup)
