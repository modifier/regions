window.onload = function () {
	var app = new Application(document.getElementById('map_container'), document.getElementById('details'), document.getElementById('list'));

	app.initialize();
};

var Application = function ($map, $details, $list) {
	this.details = new Details($details);
	this.map = new SvgMap($map);
	this.list = new CountriesList($list);

	this.colors = ['#FCEFDC', '#FCFBDC', '#E8FCDC', '#FCDCFB', '#FCDCDC'];
	this.selectedColor = '#F0E289';
	this.disabledColor = '#EEEEEE';
	this.selectedPath = null;
	this.paths = [];
};

Application.prototype.initialize = function () {
	this.colorizePaths();
	this.checkDataSymmetry();

	this.map.setDimensions({x1: 450, y1: 10, x2: 2500, y2: 2500});
	this.map.setScaleBounds(-1, 0.5);

	for (var country in contours) {
		this.paths[country] = this.map.addPath(contours[country], data[country].color, data[country].name, this.selectCountry.bind(this, country));
	}

	var that = this;
	this.details.addCountryCallback(function (country) {
		that.selectCountry(country);

		that.followCountry(country);
	});

	this.list.addCountryCallback(function (country) {
		that.selectCountry(country);

		that.followCountry(country);
	});

	this.list.render();

	this.map.addOceanCallback(this.deselectCountry.bind(this));

	this.map.initialize();
};

Application.prototype.deselectCountry = function () {
	this.details.hide();
	this.list.show();

	if (this.selectedPath !== null) {
		var currentName = this.selectedPath.country,
			nativeColor = data[currentName].color;

		this.selectedPath.path.setAttributeNS(null, 'fill', nativeColor);
	}
};

Application.prototype.selectCountry = function (country) {
	if (data[country].disabled) {
		this.deselectCountry();

		return;
	}

	this.list.hide();

	this.details.renderCountry(country);

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

Application.prototype.followCountry = function (country) {
	var bbox = this.paths[country].getBBox();

	this.map.setPosition(bbox.x + bbox.width / 2, bbox.y + bbox.height / 2);
};

Application.prototype.colorizePaths = function () {
	for (var i in data) {
		if (data[i].disabled) {
			data[i].color = this.disabledColor;

			continue;
		}

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