// Karte erstellen und zentrieren
var map = L.map('map').setView([51.1657, 10.4515], 3);  // Deutschland als Mittelpunkt

// OpenStreetMap-Karte laden
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors, Tiles by HOT'
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
// Koordinaten für Berlin und London
var berlin = [52.5200, 13.4050];  // Berlin
var london = [51.5074, -0.1278];  // London

function angleBetweenCoordinates(start, end) {
    var dx = end[1] - start[1];
    var dy = end[0] - start[0];
    var angle = Math.atan2(dy, dx) * 180 / Math.PI;
    return angle;
}

// Berechne den Winkel zwischen Berlin und London
var angle = angleBetweenCoordinates(berlin, london);

// Blauer Pfeil von Berlin nach London (PolyLine)
var arrowLine = L.polyline([berlin, london], {
    color: 'blue',       // Farbe der Linie
    weight: 4,           // Linienstärke
    opacity: 0.7,        // Transparenz
}).addTo(map);

// Größe und Aussehen des Pfeilkopfes
var arrowIcon = L.divIcon({
    className: 'leaflet-div-icon',
    html: '<div style="transform: rotate(' + angle + 'deg); font-size: 30px; color: blue;">→</div>',
    iconSize: [30, 30],    // Größe des Pfeils
    iconAnchor: [15, 15]   // Ankerpunkt des Pfeils
});

// Marker für den Pfeilkopf an der Spitze der Linie
L.marker(london, {icon: arrowIcon}).addTo(map);
}
// Beschriftung "1943" in der Mitte des Pfeils
arrow.bindTooltip("1943", { 
    permanent: true,     // Immer sichtbar
    direction: "center", // Positioniert in der Mitte
    className: "arrow-label"
});
