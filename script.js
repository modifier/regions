window.onload = function () {
	var canvas = document.getElementById('svg_path'),
		map = new SvgMap(canvas);

	for (var i in contours) {
		var path = map.addPath(contours[i]);
		// (function (i) {
		// 	path.addEventListener('click', function () {
		// 		alert('You clicked ' + i);
		// 	});
		// })(i);
	}

	map.initialize();

	var scale = 0,
		zoomIn = document.getElementById('zoom_in'),
		zoomOut = document.getElementById('zoom_out');

	zoomIn.addEventListener('click', function () {
		scale--;
		map.setScale(scale);
	});

	zoomOut.addEventListener('click', function () {
		scale++;
		map.setScale(scale);
	});
};