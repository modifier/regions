// todo: correct zooming
// todo: coloring
// todo: capitals and country names

var SvgMap = function ($map) {
	this.$map = $map;
	this.scale = 0;
	this.paths = [];
	this.position = [0, 0];
	this.scaleQuantum = 0.5;
};

SvgMap.prototype.addPath = function (path) {
	var polygon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	polygon.setAttributeNS(null, 'd', path);
	polygon.setAttributeNS(null, 'stroke', 'black');
	polygon.setAttributeNS(null, 'stroke-width', '1');
	polygon.setAttributeNS(null, 'fill', '#f00');

	this.$map.appendChild(polygon);
	this.paths.push(polygon);

	return polygon;
};

SvgMap.prototype.initialize = function () {
	this.setBounds();
	this.attachEvents();
	this.resetViewport();
};

SvgMap.prototype.setDimensions = function () {
	var dimensions = this.$map.getBBox();
	this.dimensions = {
		x1: dimensions.x,
		y1: dimensions.y,
		x2: dimensions.width,
		y2: dimensions.height
	};

	this.width = this.$map.width.baseVal.value;
	this.height = this.$map.height.baseVal.value;
};

SvgMap.prototype.setBounds = function () {
	this.setDimensions();

	this.bounds = {
		x: [this.dimensions.x1, this.dimensions.x2 - this.getScaledWidth() + this.dimensions.x1],
		y: [this.dimensions.y1, this.dimensions.y2 - this.getScaledHeight() + this.dimensions.y1]
	};
};

SvgMap.prototype.getScaledWidth = function () {
	return this.width * Math.pow(2, this.scale);
};

SvgMap.prototype.getScaledHeight = function () {
	return this.height * Math.pow(2, this.scale);
};

SvgMap.prototype.setScale = function (scale) {
	this.scale = scale;

	// hello I'm tech debt. In order to make correct scaling I need to recalculate center
	// this.position[0] += this.getScaledWidth();
	// this.position[1] += this.getScaledHeight();

	this.setBounds();

	if (this.dimensions.x2 < this.getScaledWidth()
		|| this.dimensions.y2 < this.getScaledHeight()) {
		this.setScale(scale - this.scaleQuantum);

		return;
	}

	this.resetViewport();
};

function clamp (value, bounds) {
	return value < bounds[0] ? bounds[0] : (value > bounds[1] ? bounds[1] : value);
}

SvgMap.prototype.resetViewport = function () {
	this.position[0] = clamp(this.position[0], this.bounds.x);
	this.position[1] = clamp(this.position[1], this.bounds.y);

	this.$map.setAttribute('viewBox', [this.position[0], this.position[1], this.getScaledWidth(), this.getScaledHeight()].join(' '));
};

SvgMap.prototype.recalculateViewport = function (e) {
	this.position = [
		this.initialPosition[0] - (e.offsetX - this.currentEvent.offsetX) * Math.pow(2, this.scale),
		this.initialPosition[1] - (e.offsetY - this.currentEvent.offsetY) * Math.pow(2, this.scale)
	];

	this.resetViewport();
};

SvgMap.prototype.attachEvents = function () {
	var that = this;

	this.$map.addEventListener('mousedown', function (e) {
		that.initialPosition = that.position;

		that.currentEvent = e;
	});

	window.addEventListener('mousemove', function (e) {
		if (that.currentEvent) {
			that.recalculateViewport(e);
		}
	});

	window.addEventListener('mouseup', function (e) {
		if (that.currentEvent) {
			that.recalculateViewport(e);

			that.currentEvent = undefined;
		}
	});

	this.$map.addEventListener('wheel', function (e) {
		if (e.wheelDeltaY < 0) {
			that.setScale(that.scale + that.scaleQuantum);
		} else if (e.wheelDeltaY > 0) {
			that.setScale(that.scale - that.scaleQuantum);
		}
	});
};