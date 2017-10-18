function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: Toronto,
    styles: mapStyle
  });

  initMarkers(map);
}

// Google Heatmap
function initMarkers(map) {
  for (let i = places.length - 1; i >= 0; i--) {
    let { latitude, longitude } = places[i]['coordinates'];
    let latLng = new google.maps.LatLng(latitude, longitude);
    let mainCategory = places[i]['categories'][0]['alias'];

    // Create emoji image, url left out blank to support emoji
    let image = {
      url: '',
      size: new google.maps.Size(10, 10),
      origin: new google.maps.Point(0, 0),
    }

    // Label is just emoji
    let label = {
      text: foodmoji[mainCategory],
      fontSize: "24px",
    }

    // https://stackoverflow.com/questions/42331086/adding-google-maps-infowindow-from-data-features-generates-error-b-get-is-not
    let infoWindow = new google.maps.InfoWindow({
      content: getContent(places[i])
    })
    infoWindow.setPosition(latLng);


    let marker = new google.maps.Marker({
      map: map,
      position: latLng,
      icon: image,
      label: label,
    });
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  }
}

function getContent(place) {
/*
name, rating, categories, price
*/
  const { name, rating, categories, price } = place;

  const mainCategory = place['categories'][0]['alias'];
  const mainmoji = foodmoji[mainCategory];
  const aliases = categories
    .map((category => {
      let { title } = category;
      return title;
    }))
    .join(', ');
  const dollars = price.split('').map(item => '💵').join('');
  let stars = '';
  for (let i = 0; i < parseInt(rating); i++) {
    stars = stars + '⭐';
  }
  return `<div>
    <strong>${mainmoji} ${name}</strong>
    <p>Categories: ${aliases}. ${stars} ${dollars}</p>
  </div>`;
}
