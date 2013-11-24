var map;
function initialize() {
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(38.278349,-0.689645),
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var contentString = '<div>' +
      '<h1 style="color:#000;">PayLoad</h1>' +
      '<div id="bodyContent">' +
      '<p style="color:#000!important;">Avenida de la Universidad S/N Parque científico y Empresarial, Edificio Quorum 4<br />' + 
      'Elche, Spain 03202 <br />' +
      'Phone: (96) 12345678.</p>' +
      '</div>' +
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(38.278349,-0.689645),
        map: map,
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);