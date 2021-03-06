// Create map options 
const options = {
    dragging: false,
    touchZone: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get value from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// Create map const
const map = L.map('mapid', options).setView([lat, lng], 15);

// Create map and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

// Add marker
L.marker([lat,lng], {icon}).addTo(map);

// Image gallery
function selectImage(event) {
    // Consts
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button");    
    
    // Functions
    function removeActiveClass(button) {
        button.classList.remove("active");
    };
    
    // Remove all .active classes
    buttons.forEach(removeActiveClass);

    // Select the image
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");
    
    // Update image container
    imageContainer.src = image.src;

    // Add selected button the .active class 
    button.classList.add('active')
}