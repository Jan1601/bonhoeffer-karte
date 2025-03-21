// Karte erstellen und zentrieren
var map = L.map('map').setView([51.1657, 10.4515], 3);  // Deutschland als Mittelpunkt

// OpenStreetMap-Karte laden
L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors, Style von openstreetmap.de'
}).addTo(map);

// Städte mit Koordinaten und Infos
var locations = [
    { name: "Berlin", coords: [52.5200, 13.4050], info: "1912 zog Dietrich Bonhoeffer mit seiner Familie nach Berlin, da sein Vater an der Klinik und Poliklinik für Nervenkrankheiten der Charité Berlin zum Direktor ernannt wurde. Zu dieser Zeit (1916-1918) hat Bonhoeffer angefangen, sich mit den Fragen des Todes und der Ewigkeit auseinanderzusetzen. Ein Grund dafür war der Soldatentod seines zweitältesten Bruders und das Ableben seiner Mutter, welches ihn in große Trauer versetzte. 1923 hat Dietrich Bonhoeffer im Alter von 17 Jahren das Abitur bestanden." },
    { name: "Breslau", coords: [51.1079, 17.0385], info: "Dietrich Bonhoeffer wurde am 4. Februar 1906 in Breslau geboren. Er hatte insgesamt acht Geschwister. Sein Vater Karl Bonhoeffer war Psychiater und Neurologe. Seine Mutter Paula Bonhoeffer war Lehrerin. Dietrichs Mutter hat die Kinder in den ersten Jahren zu Hause unterrichtet. Dabei hat sie auf eine christliche Erziehung geachtet, obwohl Dietrichs Vater nicht religiös war. Daher war sie auch nur selten in Gottesdiensten." },
    { name: "Flossenbürg", coords: [49.7325, 12.3478], info: "Nachdem Dietrich Bonhoeffer am 5. April 1943 von der Gestapo verhaftet wurde, wurde er im Berliner Gefängnis Tegel inhaftiert. Im Februar 1945 wurde Bonhoefer dann in das Konzentrationslager Buchenwald und darauf in das KZ Flossenbürg gebracht. In Flossenbürg wurde er, aufgrund des gescheiterten Attentat vom 20. Juli 1944, bei dem ein Umsturz des Regimes geplant war, als Mitverschwörer angeklagt. Am 8. April 1945 wurde er von einem Standgericht zum Tode verurteilt. Am 9. April 1945 wurde er im Alter von 39 Jahren erhängt." },
    { name: "Tübingen", coords: [48.5216, 9.0576], info: "Kurzer Forschungsaufenthalt (1931/32): Nach seiner Rückkehr aus New York war Bonhoeffer für einige Zeit in Tübingen. Dort arbeitete er als Privatdozent für Theologie, hielt aber keine regulären Vorlesungen." },
    { name: "London", coords: [51.5074, -0.1278], info: "London war ein wichtiger Ort für den interreligiösen und intellektuellen Austausch für Bonhoeffer." },
    { name: "New York", coords: [40.7128, -74.0060], info: "Studium an der Union Theological Seminary (1930-1931): Bonhoeffer kam 1930 als Stipendiat nach New York." },
    { name: "Finkenwalde", coords: [53.4285, 14.5528], info: "Im Jahr 1935 erhielt Bonhoeffer die Aufgabe, ein neues Predigerseminar zu organisieren." },
    { name: "Stockholm", coords: [59.3293, 18.0686], info: "Bonhoeffer war im Mai und Juni 1942 in Stockholm." }
];

// Markierungen zur Karte hinzufügen
locations.forEach(location => {
    L.marker(location.coords)
        .addTo(map)
        .bindPopup(`<b>${location.name}</b><br><p>${location.info}</p>`, {
            maxWidth: 700,  
            minWidth: 500,
            maxHeight: 400
        });
});

// Koordinaten für Berlin und London
var berlin = [52.5200, 13.4050];  // Berlin
var london = [51.5074, -0.1278];  // London

// Blauer Pfeil von Berlin nach London
var arrow = L.polyline([berlin, london], {
    color: 'blue',       // Farbe des Pfeils
    weight: 4,           // Linienstärke
    opacity: 0.7,        // Transparenz
    dashArray: '5, 10'   // Gepunktete Linie für besseren Look
}).addTo(map);

// Beschriftung "1943" in der Mitte des Pfeils
arrow.bindTooltip("1943", { 
    permanent: true,     // Immer sichtbar
    direction: "center", // Positioniert in der Mitte
    className: "arrow-label"
});
