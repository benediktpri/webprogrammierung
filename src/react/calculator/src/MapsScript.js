const zoom = 15

const map = L.map('map').setView([49.474, 8.485], zoom);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 5,
}).addTo(map);

var marker = L.marker([49.4743, 8.4858]).addTo(map);

marker.bindPopup("<b>You are here!</b><br>Augartenstraße 112").openPopup();

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);