// Create map const
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

// Create map and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;
const crdntOK = false;

// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remove last marker
    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
});

// Upload photos field
function addPhotoField() {
    // Get #images
    const container = document.querySelector('#images');

    // Get .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // Clone last images
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // Check empty field 
    const input = newFieldContainer.children[0];
    if(input.value != "") {
        // Clear field 
        input.value = "";
        // Add clone to container
        container.appendChild(newFieldContainer); 
    }        
        
};

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');
    if (fieldsContainer.length > 1) {
        span.parentNode.remove();        
    } else {
        span.parentNode.children[0].value = "";
    }
    
};

//  Active selection switch
function toggleSelect(event) {
    // Remove class. active if exists
    document.querySelectorAll('.button-select button').forEach(function(button) {
        button.classList.remove('active')
    });

    // Add class. active
    const button = event.currentTarget;
    button.classList.add('active');

    // Get selected button
    const input = document.querySelector('["open_on_weekends"]');
    
    // Check value
    input.value = button.dataset.value;
};

function validate(event) {        
    console.log(event)
    
}