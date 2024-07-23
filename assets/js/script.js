
const weatherBody = document.getElementById('weather-info');
const directionsMap = document.getElementById('directions-map');
const mapEl = document.getElementById('map');

function weatherApi() {
    const requestUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dallas%2CUSA?unitGroup=us&key=VPMU84SNM5D6G5XLFH3KYPUT3'
        fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            const currentWeather = document.createElement('p');
            currentWeather.textContent = 'Current: ' + data.currentConditions.conditions + ' Temp: ' + data.currentConditions.temp + 'F° Feels Like:' + data.currentConditions.feelslike + 'F°';
            weatherBody.appendChild(currentWeather);
            
            const todayWeatherDesc = document.createElement('p');
            const todayWeather = document.createElement('p');
            todayWeatherDesc.textContent = 'Today: ' + data.days[0].description;
            todayWeather.textContent = 'Average Temp: ' + data.days[0].temp + 'F° High Temp: ' + data.days[0].tempmax + 'F° Low Temp: ' + data.days[0].tempmin + 'F° Chance of Rain: ' + data.days[0].precipprob + '%';
            weatherBody.appendChild(todayWeatherDesc);
            weatherBody.appendChild(todayWeather);

            const tomorrowWeatherDesc = document.createElement('p');
            const tomorrowWeather = document.createElement('p');
            tomorrowWeatherDesc.textContent = 'Tomorrow: ' + data.days[1].description;
            tomorrowWeather.textContent = 'Average Temp: ' + data.days[1].temp + 'F° High Temp: ' + data.days[1].tempmax + 'F° Low Temp: ' + data.days[1].tempmin + 'F° Chance of Rain: ' + data.days[1].precipprob + '%';
            weatherBody.appendChild(tomorrowWeatherDesc);
            weatherBody.appendChild(tomorrowWeather);
        })
}

weatherApi();

function mapApi() {
    L.mapquest.key = 'gcaTh8IG8qArs8DxIIB6bognAJFNRbUJ';
    let map = L.mapquest.map('map', {
        center: [32.909635630945935,-96.7452920605264],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12,
    });


    let directionsControl = L.mapquest.directionsControl({
        className: 'directions',
        directions: {
          options: {
            timeOverage: 25,
            doReverseGeocode: false,
          }
        },
        directionsLayer: {
          startMarker: {
            title: 'Drag to change location',
            draggable: true,
            icon: 'marker-start',
            iconOptions: {
              size: 'sm'
            }
          },
          endMarker: {
            draggable: true,
            title: 'Drag to change location',
            icon: 'marker-end',
            iconOptions: {
              size: 'sm'
            }
          },
          viaMarker: {
            title: 'Drag to change route'
          },
          routeRibbon: {
            showTraffic: true
          },
          alternateRouteRibbon: {
            showTraffic: true
          },
          paddingTopLeft: [450, 20],
          paddingBottomRight: [180, 20],
        },
        startInput: {
          compactResults: true,
          disabled: false,
          location: {},
          placeholderText: 'Starting point or click on the map...',
          geolocation: {
            enabled: true
          },
          clearTitle: 'Remove starting point'
        },
        endInput: {
          compactResults: true,
          disabled: false,
          location: {},
          placeholderText: 'Destination',
          geolocation: {
            enabled: true
          },
          clearTitle: 'Remove this destination'
        },
        addDestinationButton: {
          enabled: true,
          maxLocations: 3,
        },
        routeTypeButtons: {
          enabled: true,
        },
        reverseButton: {
          enabled: true,
        },
        optionsButton: {
          enabled: true,
        },
        routeSummary: {
          enabled: true,
          compactResults: false,
        },
        narrativeControl: {
          enabled: true,
          compactResults: false,
          interactive: true,
        }
      });
     
    directionsControl.addTo(map);
    map.addControl(L.mapquest.control());


    mapEl.append(map);
}


mapApi();


// Selects the <img> element inside the .hero .image section and assigns it to the heroImage variable.
const heroImage = document.querySelector('.hero .image img');

// Array containing URLs of the images that will be used in the carousel.
const imageUrls = [
    'https://d1a9132atmzyve.cloudfront.net/image_143632_small.jpg?1658748286',
    'https://www.sunshinenewyork.com/images/photos/home.jpg',
    'https://winnie.imgix.net/47bd6773-5ae3-46ab-b19d-2f6f2dde396e?w=242&h=124&dpr=3&fit=crop&auto=compress',
    'https://media.licdn.com/dms/image/C4E1BAQFhp-ipaO0soA/company-background_10000/0/1584507505377/sunshine_daycare_center_cover?e=2147483647&v=beta&t=p_92rEz8h1Xy54XUiSXLAuBCL5vIGnn2iHAEvA0MWeY',
    'https://wpcdn.us-east-1.vip.tn-cloud.net/www.pittsburghparent.com/content/uploads/data-import/6e99a385/daycare-1050x700.jpg',
    'https://www.naeyc.org/sites/default/files/styles/page_header_media_large/public/102017/Public%20Policy%20Overview_2.jpg?itok=0f0oHaix',
    'https://winnie.imgix.net/54eaa4aa-b08a-44aa-9a35-9e1283c72e36?w=242&h=124&dpr=3&fit=crop&auto=compress',
    'https://static1.squarespace.com/static/558c39a6e4b04cda071fb9fa/558d4e6ce4b04885fa76863f/5921978f29687fe45e717cb0/1495373722835//img.jpg',
    'https://lh4.ggpht.com/-2fUuLw7-fhw/T39nkzfp8OI/AAAAAAAARYI/TsW-PK2Lb-0/image_thumb%25255B1%25255D.png?imgmax=800'


];

// Initializes the currentIndex variable to keep track of the currently displayed image.
let currentIndex = 0;

// This function changes the src attribute of heroImage to the next image URL in imageUrls array,
// and updates the currentIndex to the next image index, looping back to the start if necessary.
function changeImage() {
    heroImage.src = imageUrls[currentIndex];
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Executes the changeImage function every 1000 milliseconds (1 second) using setInterval,
// which creates a carousel effect by continuously updating the displayed image.
setInterval(changeImage, 3000);

//Logs form submit to local storage

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const display = document.getElementById('footer');

function onSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("message", messageInput.value);

  displayMessage(); // Call the displayMessage function after saving to localStorage
  localStorage.clear(); // Clear localStorage after displaying the message

  // Clear input fields
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
}

function displayMessage() {
  const name = localStorage.getItem("name");
  display.textContent = `Thank you ${name}! We will get back to you within 12-24 hours.`;
}

const form = document.getElementById("form");
form.addEventListener('submit', onSubmit); // Listen for form submit event