// Initialize and add the map
function initMap() {
  console.log("initMap")
  // The location of Uluru
  const uluru = { lat: 36.82425888863679, lng: 30.573476653451173 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.querySelector("#contact .map"), {
    zoom: 12,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon:"./assets/logos/logo.svg"
  });
}

window.initMap = initMap;

