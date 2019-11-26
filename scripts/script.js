function park() { 

	var mapProp = {
    center:new google.maps.LatLng(41.969243,-88.01230),
    zoom:5,
};

	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	console.log("Created map")
}
window.addEventListener('load', park);
