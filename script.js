window.onload = function () {
	var canvas = document.getElementById('svg_path');

	for (var i in contours) {
		var polygon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		polygon.setAttributeNS(null, 'd', contours[i]);
		polygon.setAttributeNS(null, 'stroke', 'black');
		polygon.setAttributeNS(null, 'stroke-width', '1');
		polygon.setAttributeNS(null, 'fill', '#f00');
		(function (i) {
			polygon.addEventListener('click', function () {
				alert('You clicked ' + i);
			});
		})(i);

		canvas.appendChild(polygon);
	}

	var btn = document.getElementById('zoom_in');
	var x1 = document.getElementById('x1'),
		y1 = document.getElementById('y1'),
		x2 = document.getElementById('x2'),
		y2 = document.getElementById('y2');

	btn.addEventListener('click', function () {
		var dimensions = canvas.getBBox();

		canvas.setAttribute('viewBox', dimensions.x + ' ' + dimensions.y + ' ' + dimensions.width + ' ' + dimensions.height);
		// canvas.setAttribute('viewBox', x1.value + ' ' + y1.value + ' ' + x2.value + ' ' + y2.value);
	});
};