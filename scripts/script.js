function park() {
	
	var mapProp= {
	  center:new google.maps.LatLng(41.969243,-88.01230),
	  zoom:5,	  
	};
	
	var myLatLng = {lat: 41.969243, lng:-88.01230}; 
	
	var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Click to zoom'
        });
		 map.addListener('center_changed', function() {
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 10000);
        });
		marker.addListener('click', function() {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        });
	
}
