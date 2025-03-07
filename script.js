// Karte erstellen und zentrieren
var map = L.map('map').setView([51.1657, 10.4515], 3);  // Deutschland als Mittelpunkt

// OpenStreetMap-Karte laden
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
}).addTo(map);

// Städte mit Koordinaten und Infos
var locations = [
    { name: "Berlin", coords: [52.5200, 13.4050], info: "Hier wurde Bonhoeffer geboren und war als Theologe aktiv." },
    { name: "Breslau", coords: [51.1079, 17.0385], info: "Ort seiner Kindheit." },
    { name: "Flossenbürg", coords: [49.7325, 12.3478], info: "Hier wurde Bonhoeffer 1945 hingerichtet." },
    { name: "Tübingen", coords: [48.5216, 9.0576], info: "Studium und theologische Arbeit." },
    { name: "London", coords: [51.5074, -0.1278], info: "Bonhoeffer arbeitete als Pastor in einer deutschen Gemeinde." },
    { name: "New York", coords: [40.7128, -74.0060], info: "Studium am Union Theological Seminary." },
    { name: "Finkenwalde", coords: [53.4285, 14.5528], info: "Illegales Predigerseminar der Bekennenden Kirche." },
    { name: "Stockholm", coords: [59.3293, 18.0686], info: "Geheimtreffen mit Widerstandskämpfern." }
];

// Markierungen zur Karte hinzufügen
locations.forEach(location => {
    L.marker(location.coords)
        .addTo(map)
        .bindPopup(`<b>${location.name}</b><br>${location.info}`);
});
