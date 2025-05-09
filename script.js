// Karte erstellen und zentrieren
var map = L.map('map').setView([51.1657, 10.4515], 3);  // Deutschland als Mittelpunkt

// OpenStreetMap-Karte laden
L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors, Style von openstreetmap.de'
}).addTo(map);

// Hyperlinks
const links = "<br><a href='https://www.britannica.com/biography/Dietrich-Bonhoeffer' target='_blank'>Britannica</a> | <a href='https://de.wikipedia.org/wiki/Dietrich_Bonhoeffer' target='_blank'>Wikipedia</a>";

// Städte mit Koordinaten und Infos
var locations = [
    {
        name: "Berlin", coords: [52.5200, 13.4050], info:
        "Dietrich Bonhoeffer verbrachte von 1912 bis 1923 eine prägende Zeit in Berlin..." + links
    },
    {
        name: "Breslau", coords: [51.1079, 17.0385], info:
        "Dietrich Bonhoeffer wurde am 4. Februar 1906 in Breslau geboren..." + links
    },
    {
        name: "Flossenbürg", coords: [49.7325, 12.3478], info:
        "Nachdem Dietrich Bonhoeffer am 5. April 1943 von der Gestapo verhaftet wurde..." + links
    },
    {
        name: "Tübingen", coords: [48.5216, 9.0576], info:
        "Kurzer Forschungsaufenthalt (1931/32): Nach seiner Rückkehr aus New York..." + links
    },
    {
        name: "London", coords: [51.5074, -0.1278], info:
        "Auch wenn Bonhoeffer keinen bedeutenden, dokumentierten Aufenthalt in London hatte..." + links
    },
    {
        name: "New York", coords: [40.7128, -74.0060], info:
        "Studium an der Union Theological Seminary (1930–1931): Bonhoeffer kam 1930 als Stipendiat..." + links
    },
    {
        name: "Finkenwalde", coords: [53.4285, 14.5528], info:
        "Dietrich Bonhoeffer hielt Gemeinschaft, Beichte und die Nachfolge Christi für sehr wichtig..." + links
    },
    {
        name: "Stockholm", coords: [59.3293, 18.0686], info:
        "Bonhoeffer war im Mai und Juni 1942 in Stockholm, um sich dort mit George Bell zu treffen..." + links
    },
    {
        name: "Oslo", coords: [59.9139, 10.7522], info:
        "In Norwegen setzte sich Bonhoeffer auch intensiver mit der Frage auseinander..." + links
    },
    {
        name: "Madrid", coords: [40.4168, -3.7038], info:
        "Spanien: Im Jahr 1928 verbrachte Dietrich Bonhoeffer einige Zeit in Barcelona..." + links
    },
    {
        name: "Zürich", coords: [47.3769, 8.5417], info:
        "Theologische Kontakte und Austausch: Bonhoeffer pflegte enge Beziehungen zu reformierten Theologen in der Schweiz..." + links
    }
];

// Marker für alle Städte hinzufügen
locations.forEach(function(location) {
    var marker = L.marker(location.coords).addTo(map);
    marker.bindPopup("<b>" + location.name + "</b><br>" + location.info);
});
