
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


const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
});


function addMarker({id, name, lat, lng}){
//create popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
    //crase diz que posso inserir dados dinamicos
}).setContent(`${name}<a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`);

L.marker([lat, lng], { icon: icon})
    .addTo(map)
    .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {
  const orphanage = {
      id: span.dataset.id,
      name: span.dataset.name,
      lat: span.dataset.lat,
      lng: span.dataset.lng
  }
  console.log("Orfanato:"+orphanage.id+"  lido")
  console.log("Orfanato:"+orphanage.lat+orphanage.lng)
  addMarker(orphanage);
});
