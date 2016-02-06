window.onload = function () {
	var details = new Details(document.getElementById('details')),
		map = new SvgMap(document.getElementById('map_container')),
		$name = document.getElementById('name');

	graphColoring();
	checkDataSymmetry();
	map.setDimensions({x1: 450, y1: 10, x2: 2500, y2: 2500});
	map.setScaleBounds(-1, 0.5);

	for (var country in contours) {
		var path = map.addPath(contours[country], data[country].color, data[country].name);
		(function (country) {
			path.addEventListener('click', function () {
				details.renderCountry(country);
			});
		})(country);
	}

	map.initialize();
};

var colors = ['#FFFBE7', '#F6FFEC', '#FFFCFF', '#FFF3EF', '#FFF4EB'];
function getAvailableColor (country) {
	var neighbors = data[country].neighbors;

	if (!Array.isArray(neighbors)) {
		return colors[0];
	}

	var neighboringColors = [];
	for (var i = 0; i < neighbors.length; i++) {
		var neighbor = neighbors[i];
		if (data[neighbor] && data[neighbor].color) {
			neighboringColors.push(data[neighbor].color);
		}
	}

	var availableColors = colors.diff(neighboringColors);
	if (availableColors.length === 0) {
		console.log('No more colors available! Taking random');

		return colors[Math.floor(Math.random() * 4)];
	}

	return availableColors[0];
}

// source: http://stackoverflow.com/questions/1187518/javascript-array-difference
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

function graphColoring () {
	for (var i in data) {
		data[i].color = getAvailableColor(i);
	}
}

function checkDataSymmetry() {
	for (var i in data) {
		var country = data[i];

		for (var j in country.neighbors) {
			if (!country.neighbors.hasOwnProperty(j)) {
				continue;
			}

			var neighborName = country.neighbors[j];

			if (data[neighborName].neighbors.indexOf(i) === -1) {
				console.log(neighborName + ' does not contain its neighbor ' + i);
			}
		}
	}
}