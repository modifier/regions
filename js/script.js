window.onload = function () {
	var app = new Application(document.getElementById('details'), document.getElementById('map_container'));

	app.initialize();
};

var Application = function ($details, $map) {
	this.details = new Details($details);
	this.map = new SvgMap($map);
	this.colors = ['#FCEFDC', '#FCFBDC', '#E8FCDC', '#FCDCFB', '#FCDCDC'];
	this.selectedColor = '#F0E289';
	this.selectedPath = null;
	this.paths = [];
};

Application.prototype.initialize = function () {
	this.colorizePaths();
	this.checkDataSymmetry();

	this.map.setDimensions({x1: 450, y1: 10, x2: 2500, y2: 2500});
	this.map.setScaleBounds(-1, 0.5);

	for (var country in contours) {
		this.paths[country] = this.map.addPath(contours[country], data[country].color, data[country].name);
	}

	var that = this;
	for (var country in this.paths) {
		if (!this.paths.hasOwnProperty(country)) {
			continue;
		}

		(function (country, path) {
			path.addEventListener('click', function () {
				that.details.renderCountry(country);

				that.selectCountry(country);
			});
		})(country, this.paths[country]);
	}

	this.map.initialize();
};

Application.prototype.selectCountry = function (country) {
	if (this.selectedPath !== null) {
		var currentName = this.selectedPath.country,
			nativeColor = data[currentName].color;

		this.selectedPath.path.setAttributeNS(null, 'fill', nativeColor);
	}

	var path = this.paths[country];
	path.setAttributeNS(null, 'fill', this.selectedColor);

	this.selectedPath = {
		path: path,
		country: country
	};
};

Application.prototype.colorizePaths = function () {
	for (var i in data) {
		data[i].color = this.getAvailableColor(i);
	}
};

Application.prototype.getAvailableColor = function (country) {
	var neighbors = data[country].neighbors;

	if (!Array.isArray(neighbors)) {
		return this.colors[0];
	}

	var neighboringColors = [];
	for (var i = 0; i < neighbors.length; i++) {
		var neighbor = neighbors[i];
		if (data[neighbor] && data[neighbor].color) {
			neighboringColors.push(data[neighbor].color);
		}
	}

	var availableColors = this.colors.filter(function(i) {
    	return neighboringColors.indexOf(i) < 0;
    });

	if (availableColors.length === 0) {
		console.log('No more colors available! Taking random for country ' + country);

		return this.colors[Math.floor(Math.random() * 4)];
	}

	return availableColors[0];
};

Application.prototype.checkDataSymmetry = function () {
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
};