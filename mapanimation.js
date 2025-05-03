// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken =  'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  // ✅ Add a marker to the map at the first coordinates in the array busStops
  let marker = new mapboxgl.Marker()
    .setLngLat(busStops[0])
    .addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  
  function move() {
    // Stop when we reach the end of the bus stops
    if (counter >= busStops.length) return;
  
    // Update marker position
    marker.setLngLat(busStops[counter]);
  
    // Increment counter and call move() again after 1000ms
    counter++;
    setTimeout(move, 1000);
  }
  
  // Start the animation
  move();
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  