$(document).ready(function () {

	var frames = 8;
	var chimp = $(".chimp");

	var i = 0;

	function animate() {
		if(i < frames-1) {
			i++;
		} else {
			i = 0;
		}
		chimp.css({"backgroundPosition": -i*chimp.width()});
	}

	window.setInterval(animate, 100);

});
