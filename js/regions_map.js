var RegionsMap = function ($container) {
	this.paths = [];
	this.labels = [];
	this.selectedPath = null;
	this.capitals = [];

	SvgMap.call(this, $container);
};

RegionsMap.prototype = Object.create(SvgMap.prototype);

/**
 * Initialize map
 */
RegionsMap.prototype.initialize = function () {
	SvgMap.prototype.initialize.apply(this, arguments);

	this.checkLabels();
	this.checkCapitals();
};

/**
 * Add country path and label and its events
 */
RegionsMap.prototype.addPath = function (path, color, label, labelOffset, clickCallback) {
	var polygon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	polygon.setAttributeNS(null, 'd', path);
	polygon.setAttributeNS(null, 'stroke', 'black');
	polygon.setAttributeNS(null, 'stroke-width', '1');
	polygon.setAttributeNS(null, 'fill', color);

	this.$map.appendChild(polygon);
	this.paths.push({
		path: polygon,
		label: label,
		callback: clickCallback,
		labelOffset: labelOffset || [0, 0]
	});

	var that = this;
	polygon.addEventListener('mouseup', function (e) {
		if (!that.isDrag) {
			clickCallback();
		}
	});

	return polygon;
};

/**
 * Add capital to the list of capitals
 */ 
RegionsMap.prototype.addCapital = function (coords, name, position, clickCallback) {
	this.capitals.push({
		coords: coords,
		position: position || 'top-right',
		name: name,
		callback: clickCallback,
		path: null
	});
};

/**
 * Render country labels
 * @source: http://stackoverflow.com/questions/10992691/how-to-place-text-in-the-center-of-an-svg-path
 */
RegionsMap.prototype.checkLabels = function () {
	// remove existing labels
	for (var i = 0; i < this.labels.length; i++) {
		if (this.labels[i]) {
			this.$map.removeChild(this.labels[i]);
		}
	}

	var that = this;
	this.labels = [];

	// add new labels
	for (var i = 0; i < this.paths.length; i++) {
		this.labels.push(this.addLabel(this.paths[i]));
	}
};

/**
 * Render single country label
 */
RegionsMap.prototype.addLabel = function (obj) {
	var that = this,
		size = obj.path.getBBox(),
		text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

	// create label element, add text and color and append to the map
	text.textContent = obj.label.toUpperCase();
	text.setAttribute('fill', '#666');
	text.setAttribute('font-size', 13 * Math.pow(2, this.scale));
	text.setAttribute('font-family', 'Tahoma, sans-serif');
	text.setAttribute('font-weight', 'bold');

	// add click events
	text.addEventListener('mouseup', function () {
		if (!that.isDrag) {
			obj.callback();
		}
	});
	this.$map.appendChild(text);

	// if the label is too huge, remove it from the map
	var ownSizes = text.getBBox();
	if (ownSizes.width > size.width / 2) {
		this.$map.removeChild(text);

		return null;
	}

	// place label into the center of the country plus manual offset
	var positionX = size.x + size.width / 2 - ownSizes.width / 2 + obj.labelOffset[0],
		positionY = size.y + size.height / 2 + obj.labelOffset[1];
	text.setAttribute('transform', 'translate(' + positionX + ' ' + positionY +')');

	return text;
};

/**
 * Render capitals
 */
RegionsMap.prototype.checkCapitals = function () {
	var that = this;

	for (var i = 0; i < this.capitals.length; i++) {
		var capital = this.capitals[i];

		// remove previous label
		if (capital.circle && capital.label) {
			this.$map.removeChild(capital.circle);
			this.$map.removeChild(capital.label);
		}

		var scaleCoefficient = Math.pow(2, this.scale);

		// create a dot for the capital and append to the map
		var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		circle.setAttributeNS(null, 'cx', capital.coords[0]);
		circle.setAttributeNS(null, 'cy', capital.coords[1]);
		circle.setAttributeNS(null, 'r', 3 * scaleCoefficient);
		circle.setAttributeNS(null, 'fill', 'black');

		capital.circle = circle;
		this.$map.appendChild(circle);

		// create a label element and append to the map
		var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		label.textContent = capital.name;
		label.setAttribute('fill', '#000');
		label.setAttribute('font-size', 13 * scaleCoefficient);
		label.setAttribute('font-family', 'Tahoma, sans-serif');
		this.$map.appendChild(label);

		// add click events
		(function (capital) {
			circle.addEventListener('mouseup', function () {
				if (!that.isDrag) {
					capital.callback();
				}
			});

			label.addEventListener('mouseup', function () {
				if (!that.isDrag) {
					capital.callback();
				}
			});
		})(capital);

		var dimensions = label.getBBox();

		// place label somewhere relative to the circle
		var labelPosition = capital.position.split('-');
		if (labelPosition[0] === 'top') {
			label.setAttribute('y', capital.coords[1] - 5 * scaleCoefficient);
		} else {
			label.setAttribute('y', capital.coords[1] + dimensions.height);
		}

		if (labelPosition[1] === 'right') {
			label.setAttribute('x', capital.coords[0] + 5 * scaleCoefficient);
		} else {
			label.setAttribute('x', capital.coords[0] - 10 * scaleCoefficient - dimensions.width);
		}

		capital.label = label;
	}
};

RegionsMap.prototype.setScale = function () {
	SvgMap.prototype.setScale.apply(this, arguments);

	this.checkLabels();
	this.checkCapitals();
};