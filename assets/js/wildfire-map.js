// Initialize the map
const map = L.map('map').setView([37.7749, -122.4194], 6); // Default view: California

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add sample wildfire markers (replace with real coordinates when available)
const wildfires = [
    { name: "Fire 1", coords: [37.7749, -122.4194], link: "https://example.com/fire1" },
    { name: "Fire 2", coords: [34.0522, -118.2437], link: "https://example.com/fire2" },
    { name: "Fire 3", coords: [36.7783, -119.4179], link: "https://example.com/fire3" }
];

wildfires.forEach(fire => {
    L.marker(fire.coords)
        .addTo(map)
        .bindPopup(`<b>${fire.name}</b><br><a href="${fire.link}" target="_blank">More Info</a>`);
});
