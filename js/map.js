function initMap(){
  var tokyo = {lat: 35.714436, lng: 139.729721};
  var shinjuku = {lat: 35.687435, lng: 139.708514};
  var iidabashistation = {lat: 35.42078, lng: 139.44395};
  
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 30, center: bridge
    }
  );

  var marker1 = new google.maps.Marker({
    position: tokyo,
    map: map
  });
        
  var marker2 = new google.maps.Marker({
    position: shinjuku,
    map: map
  });
        
  var marker3 = new google.maps.Marker({
    position: iidabashistation,
    map: map
  });
}