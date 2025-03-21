// Karte erstellen und zentrieren
var map = L.map('map').setView([51.1657, 10.4515], 3);  // Deutschland als Mittelpunkt

// OpenStreetMap-Karte laden
L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors, Style von openstreetmap.de'
}).addTo(map);

// Städte mit Koordinaten und Infos
var locations = [
    { name: "Berlin", coords: [52.5200, 13.4050], info: "1912 zog Dietrich Bonhoeffer mit seiner Familie nach Berlin, da sein Vater an der Klinik und Poliklinik für Nervenkrankheiten der Charité Berlin zum Direktor ernannt wurde. Zu dieser Zeit (1916-1918) hat Bonhoeffer angefangen, sich mit den Fragen des Todes und der Ewigkeit auseinanderzusetzen. Ein Grund dafür war der Soldatentod seines zweitältesten Bruders und das Ableben seiner Mutter, welches ihn in große Trauer versetzte. 1923 hat Dietrich Bonhoeffer im Alter von 17 Jahren das Abitur bestanden.<br><img src='https://picsum.photos/200' alt='Platzhalterbild' />" },
    { name: "Breslau", coords: [51.1079, 17.0385], info: "Dietrich Bonhoeffer wurde am 4. Februar 1906 in Breslau geboren. Er hatte insgesamt acht Geschwister. Sein Vater Karl Bonhoeffer war Psychiater und Neurologe. Seine Mutter Paula Bonhoeffer war Lehrerin. Dietrichs Mutter hat die Kinder in den ersten Jahren zu Hause unterrichtet. Dabei hat sie auf eine christliche Erziehung geachtet, obwohl Dietrichs Vater nicht religiös war. Daher war sie auch nur selten in Gottesdiensten." },
    { name: "Flossenbürg", coords: [49.7325, 12.3478], info: "Nachdem Dietrich Bonhoeffer am 5. April 1943 von der Gestapo verhaftet wurde, wurde er im Berliner Gefängnis Tegel inhaftiert. Im Februar 1945 wurde Bonhoefer dann in das Konzentrationslager Buchenwald und darauf in das KZ Flossenbürg gebracht. In Flossenbürg wurde er, aufgrund des gescheiterten Attentat vom 20. Juli 1944, bei dem ein Umsturz des Regimes geplant war, als Mitverschwörer angeklagt. Am 8. April 1945 wurde er von einem Standgericht zum Tode verurteilt. Am 9. April 1945 wurde er im Alter von 39 Jahren erhängt. Nur wenige Wochen später wurde das Lager befreit. Während seiner Zeit im Gefängnis sind die bedeutendsten theologischen Werke Bonhoeffers: 'Widerstand und Ergebung' und 'Ethik'. Diese Schriften sind von großer theologischer Bedeutung und spiegeln seine Auseinandersetzung mit dem nationalsozialistischen Regime sowie seine tiefen Überlegungen über Glaube, Ethik und das Leben als Christ in einer Zeit der Krise." },
    { name: "Tübingen", coords: [48.5216, 9.0576], info: "Kurzer Forschungsaufenthalt (1931/32): Nach seiner Rückkehr aus New York war Bonhoeffer für einige Zeit in Tübingen. Dort arbeitete er als Privatdozent für Theologie, hielt aber keine regulären Vorlesungen. In dieser Phase setzte er seine theologischen Forschungen fort. Verbindungen zur Theologischen Fakultät: Während seiner akademischen Laufbahn stand Bonhoeffer in Kontakt mit verschiedenen Tübinger Theologen. Die Universität war ein wichtiges Zentrum der evangelischen Theologie in Deutschland. Überbleibsel seines Denkens in Tübingen: Nach dem Zweiten Weltkrieg wurde Bonhoeffers Theologie besonders in Tübingen intensiv rezipiert. Jürgen Maltmann, einer der bekanntesten Tübinger Theologen, griff viele seiner Gedanken in der Theologie der Hoffnung auf. Die Universität Tübingen hat bis heute eine enge Verbindung zu Bonhoeffers theologischen Ideen. Auswirkungen: Bonhoeffers Aufenthalt in Tübingen hat sein Denken nicht unbedingt geprägt, sondern sorgte eher dafür, dass sein Denken dokumentiert wurde und in Erinnerung blieb." },
    { name: "London", coords: [51.5074, -0.1278], info: "Auch wenn Bonhoeffer keinen bedeutenden, dokumentierten Aufenthalt in London hatte (wie es z.B. in New York oder an den deutschen Universitäten der Fall war), so war die Stadt doch ein wichtiger Ort für den interreligiösen und intellektuellen Austausch. Diese Kontakte halfen ihm, seinen Blick über nationale Grenzen hinaus zu richten und trugen damit indirekt zur Entwicklung seines theologischen und ethischen Denkens bei." },
    { name: "New York", coords: [40.7128, -74.0060], info: "Studium an der Union Theological Seminary (1930-1931): Bonhoeffer kam 1930 als Stipendiat für ein Jahr nach New York, um am Union Theological Seminary zu studieren. Dort lernte er Theologen wie Reinhold Niebuhr kennen und setzte sich intensiv mit der Sozialethik und der praktischen Anwendung des Christentums auseinander. Besonders prägend war sein Kontakt mit der afroamerikanischen Gemeinde in Harlem, insbesondere der Abyssinian Baptist Church, wo er die lebendige Spiritualität und soziale Gerechtigkeitsbewegung der Schwarzen Kirche kennenlernte. Diese Erfahrung vertiefte seine Überzeugung, dass der christliche Glaube mit aktivem Handeln für Gerechtigkeit verbunden sein müsse. Letzter Aufenthalt in den USA (Juni 1939 - Juli 1939): Im Juni 1939 kehrte Bonhoeffer in die USA zurück, um dem drohenden Zweiten Weltkrieg und der Verfolgung durch die Nazis zu entgehen. Er wurde von amerikanischen Theologen wie Niebuhr eingeladen, dort zu bleiben. Doch nach wenigen Wochen entschied er sich, nach Deutschland zurückzukehren, da er der Meinung war, dass er sein Volk in dieser schweren Zeit nicht im Exil unterstützen könne. Am 7. Juli 1939 reiste er zurück nach Deutschland - eine Entscheidung, die letztlich zu seiner Beteiligung am Widerstand gegen Hitler und zu seiner Verhaftung 1943 führte. Auswirkung von Bonhoeffers Zeit in den USA auf sein Denken: Bonhoeffers Erfahrungen in New York beeinflussten sein theologisches Denken stark, insbesondere seine Vorstellung von 'Kirche für andere' und die Verantwortung des Glaubens für gesellschaftliche Veränderungen." },
    { name: "Finkenwalde", coords: [53.4285, 14.5528], info: "Im Jahr 1935 erhielt Bonhoeffer die Aufgabe, ein neues Predigerseminar für die Bekennende Kirche in Finkenwalde zu organisieren und zu leiten. Trotzdem diese durch die nationalsozialistischen Behörden im Jahr 1937 geschlossen wurde, setzte Bonhoeffer die Ausbildung der Seminaristen im Untergrund fort. Während seiner Zeit in Finkenwalde entwickelte Bonhoeffer zentrale theologische Konzepte, vor allem die Betonung der Gemeinschaft und der praktischen Nachfolge Christi. Diese Erfahrungen haben sein Buch 'Nachfolge' geprägt, welches 1937 veröffentlicht wurde. Das Predigerseminar in Finkenwalde beeinflusste Bonheeffers Leben und Wirken Stark. Darüberhinaus prägte sein Aufenthalt in Finkenwalde seine theologischen Schriften und festigte seinen Ruf als Widerstandskämpfer gegen das nationalsozialistische Regime." },
    { name: "Stockholm", coords: [59.3293, 18.0686], info: "Wieso war Bonhoeffer in Stockholm? Bonhoeffer war im Mai und Juni 1942 in Stockholm, um sich dort mit George Bell, dem Bischof von Chichester, zu treffen. Bell war ein enger Freund Bonhoeffers und ein wichtiger Kontaktmann im Ausland für die deutsche Widerstandsbewegung. Bonhoeffers Auftrag war es, die westlichen Alliierten über die Existenz des deutschen Widerstands zu informieren und mögliche Unterstützung zu sondieren. Besonders wichtig, falls ein Umsturz gegen Hitler gelingen sollte. Er konnte in Stockholm relativ unauffällig reisen, weil er offiziell beim Auslandsnachrichtendienst (ein Teil der deutschen Wehr) unter Admiral Canaris arbeitete, der ebenfalls zum Widerstand gehörte. Auswirkungen auf Bonhoeffers Denken: Vertiefung des ethischen Konflikts, der in ihm herrschte. Die Gespräche in Stockholm spiegelten Bonhoeffers innere Spannung zwischen christlicher Ethik von Frieden und Gewaltlosigkeit und dem praktischen Handeln im Widerstand, das auch Gewalt und Verrat einschloss. Er war sich bewusst, dass er Schuld auf sich lud, aber er hielt es für notwendig, um das größere Unrecht, den Nationalsozialismus, zu bekämpfen. Außerdem realisierte Bonhoeffer auf dieser Reise, dass der Glaube eine große politische Verantwortung hatte und dass die Kirche ein wichtiges Mittel war, den Widerstand international zu kommunizieren." }
];

// Markierungen zur Karte hinzufügen
locations.forEach(location => {
    L.marker(location.coords)
        .addTo(map)
        .bindPopup("<b>" + location.name + "</b><br>" + location.info, {
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
