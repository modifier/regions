window.onload = function () {
	var app = new Application(document.getElementById('map_container'), document.getElementById('details'), document.getElementById('list'));

	app.initialize();
};

var Application = function ($map, $details, $list) {
	this.details = new Details($details);
	this.map = new RegionsMap($map);
	this.list = new CountriesList($list);

	this.colors = ['#FCEFDC', '#FCFBDC', '#E8FCDC', '#FCDCFB', '#FCDCDC'];
	this.selectedColor = '#F0E289';
	this.disabledColor = '#EEEEEE';
	this.selectedPath = null;
	this.paths = [];
};

Application.prototype.initialize = function () {
	this.colorizePaths();
	this.checkNeighborsSymmetry();
	this.checkSecessionSymmetry();

	this.map.setDimensions({x1: 450, y1: 10, x2: 2500, y2: 2500});
	this.map.setScaleBounds(-1, 0.5);

	for (var country in contours) {
		var countryData = data[country];

		this.paths[country] = this.map.addPath(contours[country], countryData.color, countryData.name, countryData.offset, this.selectCountry.bind(this, country));
		if (countryData.capital && countryData.capital.coords) {
			this.map.addCapital(countryData.capital.coords, countryData.capital.name, countryData.capital.position, this.selectCountry.bind(this, country));
		}
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

		if (this.selectedPath.path) {
			this.selectedPath.path.setAttributeNS(null, 'fill', nativeColor);
		}
	}
};

Application.prototype.selectCountry = function (country) {
	this.deselectCountry();

	if (data[country].disabled) {
		return;
	}

	this.list.hide();
	this.details.renderCountry(country);

	var path = this.paths[country];
	if (path) {
		path.setAttributeNS(null, 'fill', this.selectedColor);
	}

	this.selectedPath = {
		path: path,
		country: country
	};
};

Application.prototype.followCountry = function (country) {
	if (!this.paths[country]) {
		return;
	}

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

Application.prototype.checkNeighborsSymmetry = function () {
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

Application.prototype.checkSecessionSymmetry = function () {
	for (var i in data) {
		var country = data[i],
			partOf = country.part_of || [],
			secessionists = country.secessionists || [];

		for (var j = 0; j < partOf.length; j++) {
			var partName = partOf[j],
				jSecessionists = data[partName].secessionists || [];

			if (jSecessionists.indexOf(i) === -1) {
				console.log(i + ' is not listed among secessionists in the state ' + partName);
			}
		}

		for (var j = 0; j < secessionists.length; j++) {
			var secessionistName = secessionists[j],
				jParts = data[secessionistName].part_of || [];;

			if (jParts.indexOf(i) === -1) {
				console.log(secessionistName + ' does not include state ' + i + 'in its parts');
			}
		}
	}
};