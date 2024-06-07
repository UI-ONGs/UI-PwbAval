document.addEventListener("DOMContentLoaded", function () {
    initMap();
    const btn = document.getElementById("btn");
    const switchDiv = document.querySelector(".switch");

    function leftClick() {
        btn.style.left = '0';
    }

    function rightClick() {
        const switchWidth = switchDiv.offsetWidth;
        const btnWidth = btn.offsetWidth;
        btn.style.left = (switchWidth - btnWidth - 6) + 'px';
    }

    document.querySelector(".toggle-btn:nth-of-type(1)").addEventListener("click", leftClick);
    document.querySelector(".toggle-btn:nth-of-type(2)").addEventListener("click", rightClick);

    window.addEventListener("resize", function () {
        if (btn.style.left !== '0') {
            rightClick();
        }
    });
});

let map;
let currentInfoWindow = null;
let geocoder;
let markersArray = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -20.3155, lng: -40.3128 },
        zoom: 12
    });

    geocoder = new google.maps.Geocoder();

    loadMarkers();

    map.addListener('rightclick', function (event) {
        showAddLocationForm(event.latLng);
    });
}

function showAddLocationForm(location) {
    if (currentInfoWindow) {
        currentInfoWindow.close();
    }

    geocoder.geocode({ location: location }, function (results, status) {
        if (status === 'OK' && results[0]) {
            const address = results[0].formatted_address;
            const addressComponents = results[0].address_components;
            let street = '';
            let neighborhood = '';
            let city = '';

            for (const component of addressComponents) {
                if (component.types.includes('route')) {
                    street = component.long_name;
                }
                if (component.types.includes('sublocality') || component.types.includes('political')) {
                    neighborhood = component.long_name;
                }
                if (component.types.includes('administrative_area_level_2')) {
                    city = component.long_name;
                }
            }

            const formHtml = `
                <div id="form">
                    <h3>Adicionar Local</h3>
                    <label>Nome:</label><br>
                    <input type="text" id="name"><br>
                    <label>Descrição:</label><br>
                    <textarea id="description"></textarea><br>
                    <label>Imagens:</label><br>
                    <input type="file" id="images" multiple><br>
                    <p>Endereço: ${address}</p>
                    <p>Rua: ${street}</p>
                    <p>Bairro: ${neighborhood}</p>
                    <p>Cidade: ${city}</p>
                    <button onclick="addMarker('${street}', '${neighborhood}', '${city}', ${location.lat()}, ${location.lng()})">Adicionar</button>
                </div>
            `;

            const infoWindow = new google.maps.InfoWindow({
                content: formHtml,
                position: location
            });

            infoWindow.open(map);
            currentInfoWindow = infoWindow;
        } else {
            alert('Geocoder falhou devido a: ' + status);
        }
    });
}

function addMarker(street, neighborhood, city, lat, lng) {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const imageFiles = document.getElementById('images').files;

    let images = [];
    if (imageFiles.length > 0) {
        const promises = Array.from(imageFiles).map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = function () {
                    resolve(reader.result);
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        });

        Promise.all(promises).then(results => {
            images = results;
            saveMarker({ lat, lng, name, description, images, street, neighborhood, city });
            createMarker({ lat, lng, name, description, images, street, neighborhood, city });
        }).catch(error => {
            console.error("Error loading images: ", error);
        });
    } else {
        saveMarker({ lat, lng, name, description, street, neighborhood, city });
        createMarker({ lat, lng, name, description, street, neighborhood, city });
    }

    if (currentInfoWindow) {
        currentInfoWindow.close();
    }
}

function saveMarker(marker) {
    let markers = JSON.parse(localStorage.getItem('markers')) || [];
    markers.push(marker);
    localStorage.setItem('markers', JSON.stringify(markers));
}

function loadMarkers() {
    let markers = JSON.parse(localStorage.getItem('markers')) || [];
    markers.forEach(marker => {
        createMarker(marker);
    });
}

function createMarker({ lat, lng, name, description, images, street, neighborhood, city }) {
    const location = { lat: parseFloat(lat), lng: parseFloat(lng) };

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: name
    });

    markersArray.push(marker);

    marker.addListener('click', function () {
        displayMarkerInfo({ name, description, images, street, neighborhood, city, lat, lng });
    });

    map.panTo(location);
}

function displayMarkerInfo({ name, description, images, street, neighborhood, city, lat, lng }) {
    const infoDiv = document.querySelector(".info");
    let imageHtml = '';

    if (images && images.length > 0) {
        imageHtml = `
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    ${images.map((_, index) => `<li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>`).join('')}
                </ol>
                <div class="carousel-inner">
                    ${images.map((image, index) => `<div class="carousel-item ${index === 0 ? 'active' : ''}"><img src="${image}" class="d-block w-100"></div>`).join('')}
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        `;
    }

    infoDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${description}</p>
        <p>Endereço: ${street}, ${neighborhood}, ${city}</p>
        <p>Coordenadas: ${lat}, ${lng}</p>
        ${imageHtml}
        <button onclick="deleteMarker(${lat}, ${lng})">Excluir</button>
    `;
}

function deleteMarker(lat, lng) {
    let markers = JSON.parse(localStorage.getItem('markers')) || [];
    markers = markers.filter(marker => marker.lat !== lat || marker.lng !== lng);
    localStorage.setItem('markers', JSON.stringify(markers));

    clearMarkers();
    loadMarkers();

    const infoDiv = document.querySelector(".info");
    infoDiv.innerHTML = '';
}

function clearMarkers() {
    for (let i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
    }
    markersArray = [];
}

document.querySelector("#go-to").addEventListener("click", function() {
    const address = document.getElementById("searchBox").value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
        } else {
            alert('Geocode was not successful due to: ' + status);
        }
    });
});

document.querySelector(".nav").addEventListener("mouseover", hideDiv);
document.querySelector(".nav").addEventListener("mouseout", showDiv);

function hideDiv() {
    document.querySelector(".carousel-indicators").style.opacity = "0";
    document.querySelectorAll(".carousel-control-prev, .carousel-control-next").forEach(function(element) {
        element.style.opacity = "0";
    });
}

function showDiv() {
    document.querySelector(".carousel-indicators").style.opacity = "1";
    document.querySelectorAll(".carousel-control-prev, .carousel-control-next").forEach(function(element) {
        element.style.opacity = "1";
    });
}
