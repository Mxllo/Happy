
const options = ({ 
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
})

const map = L.map('mapid', options).setView([-23.53, -46.20], 14);

//attach map 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXhsbG8iLCJhIjoiY2tnOGU0NDFvMGc2bDJ5bXUxOXZ2enUzMyJ9.6t7THDi-ZqakqLhS_bmS0A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);


//create marker
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

L.marker([-23.53, -46.20], { icon })
.addTo(map)


function selectImage(event){
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {button.classList.remove("active")})
    button.classList.add('active')
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    imageContainer.src = image.src
}
