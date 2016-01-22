window.onload = function () {
	var details = new Details(document.getElementById('details')),
		map = new SvgMap(document.getElementById('svg_path')),
		$name = document.getElementById('name');

	for (var country in contours) {
		var path = map.addPath(contours[country]);
		(function (country) {
			path.addEventListener('click', function () {
				details.renderCountry(country);
			});
		})(country);
	}

	map.initialize();
};