var map;

function park() {

	var mapProp = {
		center: new google.maps.LatLng(41.969243, -88.01230),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};

	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	console.log("Created map")

	var img = "media/marker.png";
	var parkMark = new google.maps.Marker({
		position: {
			lat: 41.969243,
			lng: -88.01230
		},
		icon: img,
		map: map
	});

	google.maps.event.addListener(parkMark, 'click', function () {
		map.setZoom(17);
		map.setCenter(parkMark.getPosition());
		info.open(map, parkMark)
	});
	var info = new google.maps.InfoWindow({
		content: "This is my favorite place to relax!"
	});


}

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;


	var slides = document.getElementsByClassName("imgfade");


	for (i = 0; i < slides.length; i++) {

		slides[i].style.display = "none";
	}

	slideIndex++;


	if (slideIndex > slides.length) {
		slideIndex = 1;
	}


	slides[slideIndex - 1].style.display = "block";


	setTimeout(showSlides, 3000);
}

window.addEventListener('load', park);
