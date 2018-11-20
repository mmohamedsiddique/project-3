function initMap(){
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 12.5, center: bridge
    }
  );

  var marker1 = new google.maps.Marker({
    position: school,
    map: map
  });
        
  var marker2 = new google.maps.Marker({
    position: home,
    map: map
  });
        
  var marker3 = new google.maps.Marker({
    position: songdo,
    map: map
  });
  
  var marker4 = new google.maps.Marker({
    position: ICN,
    map: map
  });
  
  var marker5 = new google.maps.Marker({
    position: yellowsea,
    map: map
  });
  
  var marker6 = new google.maps.Marker({
    position: outlet,
    map: map
  });
  
  var marker7 = new google.maps.Marker({
    position: bridge,
    map: map
  });
}