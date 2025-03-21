// Karte erstellen und zentrieren
var map = L.map('map').setView([51.1657, 10.4515], 3);  // Deutschland als Mittelpunkt

// OpenStreetMap-Karte laden
L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors, Style von openstreetmap.de'
}).addTo(map);

// Städte mit Koordinaten und Infos
var locations = [
    { name: "Berlin", coords: [52.5200, 13.4050], info: "1912 zog Dietrich Bonhoeffer mit seiner Familie nach Berlin, da sein Vater an der Klinik und Poliklinik für Nervenkrankheiten der Charite Berlin zum Direktor ernannt wurde. Zu dieser Zeit (1916-1918) hat Bonhoeffer angefangen, sich mit den Fragen des Todes und der Ewigkeit auseinanderzusetzen. Ein Grund dafür war der Soldatentod seines zweitältesten Bruders und das Ableben seiner Mutter, welches ihn in große Trauer versetzte. 1923 hat Dietrich Bonhoeffer im Alter von 17 Jahren das Abitur bestanden." },
    { name: "Breslau", coords: [51.1079, 17.0385], info: "Dietrich Bonhoeffer wurde am 4. Februar 1906 in Breslau geboren. Er hatte insgesamt acht Geschwister. Sein Vater Karl Bonhoeffer war Psychiater und Neurologe. Seine Mutter Paula Bonhoeffer war Lehrerin. Dietrichs Mutter hat die Kinder in den ersten Jahren zu Hause unterrichtet. Dabei hat sie auf eine christliche Erziehung geachtet, obwohl Dietrichs Vater nicht religiös war. Daher war die auch nur selten in Gottesdiensten." },
    { name: "Flossenbürg", coords: [49.7325, 12.3478], info: "Hier wurde Bonhoeffer 1945 hingerichtet." },
    { name: "Tübingen", coords: [48.5216, 9.0576], info: "Studium und theologische Arbeit." },
    { name: "London", coords: [51.5074, -0.1278], info: "Studium an der Union Theological Seminary (1930-1931): Bonhoeffer kam 1930 als Stipendiat für ein Jahr nach New York, um am Union Theological Seminary zu studieren. Dort lernte er Theologen wie Reinhold Niebuhr () kennen und setzte sich intensiv mit der Sozialethik und der praktischen Anwendung des Christentums auseinander. Besonders prägend war sein Kontakt mit der afroamerikanischen Gemeinde in Harlem, insbesondere der Abyssinian Baptist Church, wo er die lebendige Spiritualität und soziale Gerechtigkeitsbewegung der Schwarzen Kirche kennenlernte. Diese Erfahrung vertiefte seine Überzeugung, dass der christliche Glaube mit aktivem Handeln für Gerechtigkeit verbunden sein müsse. Letzter Aufenthalt in den USA (Juni 1939 - Juli 1939): Im Juni 1939 kehrte Bonhoeffer in die USA zurück, um dem drohenden Zweiten Weltkrieg und der Verfolgung durch die Nazis zu entgehen. Er wurde von amerikanischen Theologen wie Niebuhr eingeladen, dort zu bleiben. Doch nach wenigen Wochen entschied er sich, nach Deutschland zurückzukehren, da er der Meinung war, dass er sein Volk in dieser schweren Zeit nicht im Exil unterstützen könne. Am 7. Juli 1939 reiste er zurück nach Deutschland - eine Entscheidung, die letztlich zu seiner Beteiligung am Widerstand gegen Hitler und zu seiner Verhaftung 1943 führte. Auswirkung von Bonhoeffers Zeit in den USA auf sein Denken: Bonhoeffers Erfahrungen in New York beeinflussten sein theologisches Denken stark, insbesondere seine Vorstellung von 'Kirche für andere' und die Verantwortung des Glaubens für gesellschaftliche Veränderungen." },
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
