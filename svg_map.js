var SvgMap = function ($map) {
	this.$map = $map;
	this.scale = 0;
	this.paths = [];
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

SvgMap.prototype.recalculateViewport = function (e) {
	console.log(e);
	
	this.currentEvent = null;
};

SvgMap.prototype.attachEvents = function () {
	var that = this;

	this.$map.addEventListener('mousedown', function (e) {
		that.currentEvent = e;
	});

	this.$map.addEventListener('mouseup', function (e) {
		if (that.currentEvent !== undefined) {
			that.recalculateViewport(e);
		}
	});
};