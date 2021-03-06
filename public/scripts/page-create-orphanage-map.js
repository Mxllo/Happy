const options = ({ 
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
})

const map = L.map('mapid').setView([-23.53, -46.20], 14);
var marker = "0";
var lat;
var lng;
var control = "enabled";

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
var popup = L.popup({
    offset: [0, -40],
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
    closeOnClick: false,
    closeOnEscapeKey: false
});

//map click + store lat lng
function onMapClick(e) {
    if(control != "disabled"){  
        
        if(marker != "0")
        marker.removeFrom(map);

    lat = e.latlng.lat;
    lng = e.latlng.lng;
    popup
        .setLatLng(e.latlng)
        .setContent("O endereço é " + e.latlng.toString() +'<a href="javascript:blockMap()" class="choose-orphanage"> <img src="/images/arrow-white.svg"></a>')
        .openOn(map);
    marker = new L.Marker(e.latlng, {icon:happyIcon});
    marker.addTo(map);
    saveLocation(lat, lng);
    }
}

map.on('click', onMapClick);

//create icon
var happyIcon = L.icon({
    iconUrl: '/images/logo-icon.png',
    iconSize:     [45, 50], // size of the icon
    iconAnchor:   [20, 50], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//save lat lng
function saveLocation() {
    var location = [lat,lng];
    map.setView(location);
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
}

//block map
function blockMap(){
    map.zoomIn(14);
    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    map.zoomControl.disable();
    control = "disabled"
    var element = document.getElementById("footerUnblocked");
    element.style.display = "none";
    var element = document.getElementById("footerBlocked");
    element.style.display = "flex";
}
//unblock map
function unblockMap() {
    if (control == "disabled"){
    map.zoomOut(5);
    map.dragging.enable();
    map.touchZoom.enable();
    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
    map.boxZoom.enable();
    map.keyboard.enable();
    map.zoomControl.enable();
    control = "enabled"
    var element = document.getElementById("footerUnblocked");
    element.style.display = "flex";
    var element = document.getElementById("footerBlocked");
    element.style.display = "none";
    
    }
}

function validate(event){
    if(event.srcElement[1].value == "" && event.srcElement[2].value == ""){
        event.preventDefault();
        alert("Selecione um ponto no mapa!")
    }
}

