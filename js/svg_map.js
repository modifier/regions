var SvgMap = function ($container) {
	this.$container = $container;
	this.scale = 0;
	this.paths = [];
	this.labels = [];
	this.position = [0, 0];
	this.scaleStep = 0.5;
	this.minScale = -Infinity;
	this.maxScale = Infinity;
	this.selectedPath = null;
	this.isDrag = false;
	this.animationId = null;
	this.oceanCallbacks = [];
	this.initializeElements();
};

SvgMap.prototype.initializeElements = function () {
	this.$map = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	this.$map.id = 'svg_path';
	this.$container.appendChild(this.$map);

	this.$scaler = document.createElement('div');
	this.$scaler.id = 'scaler';
	this.$container.appendChild(this.$scaler);

	var that = this;
	var $zoomIn = document.createElement('div');
	$zoomIn.innerHTML = '+';
	$zoomIn.className = 'scale-button';
	this.$scaler.appendChild($zoomIn);
	$zoomIn.addEventListener('click', function () {
		that.setScale(that.scale - that.scaleStep);
	});

	var $zoomOut = document.createElement('div');
	$zoomOut.innerHTML = '&minus;';
	$zoomOut.className = 'scale-button';
	$zoomOut.addEventListener('click', function () {
		that.setScale(that.scale + that.scaleStep);
	});
	this.$scaler.appendChild($zoomOut);
};

SvgMap.prototype.addPath = function (path, color, label, clickCallback) {
	var polygon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	polygon.setAttributeNS(null, 'd', path);
	polygon.setAttributeNS(null, 'stroke', 'black');
	polygon.setAttributeNS(null, 'stroke-width', '1');
	polygon.setAttributeNS(null, 'fill', color);

	this.$map.appendChild(polygon);
	this.paths.push({
		path: polygon,
		label: label
	});

	var that = this;
	polygon.addEventListener('mouseup', function () {
		if (!that.isDrag) {
			clickCallback();
		}
	});

	return polygon;
};

SvgMap.prototype.initialize = function () {
	this.position = [
		(this.dimensions.x2 - this.dimensions.x1) / 2,
		(this.dimensions.y2 - this.dimensions.y1) / 2
	];
	this.attachEvents();
	this.onResize();
};

SvgMap.prototype.setDimensions = function (dimensions) {
	this.dimensions = dimensions;
};

SvgMap.prototype.setBounds = function () {
	this.width = this.$map.width.baseVal.value;
	this.height = this.$map.height.baseVal.value;

	this.bounds = {
		x: [this.dimensions.x1, this.dimensions.x2 - this.getScaledWidth() + this.dimensions.x1],
		y: [this.dimensions.y1, this.dimensions.y2 - this.getScaledHeight() + this.dimensions.y1]
	};

	this.checkLabels();
};

SvgMap.prototype.getScaledWidth = function () {
	return this.width * Math.pow(2, this.scale);
};

SvgMap.prototype.getScaledHeight = function () {
	return this.height * Math.pow(2, this.scale);
};

SvgMap.prototype.setScaleBounds = function (minScale, maxScale) {
	this.minScale = minScale;
	this.maxScale = maxScale;
}

SvgMap.prototype.setScale = function (scale, positionX, positionY) {
	var offsetX = positionX ? positionX / this.width : 0.5;
	var offsetY = positionY ? positionY / this.height : 0.5;

	var widthBefore = this.getScaledWidth(),
		heightBefore = this.getScaledHeight();

	this.scale = Math.min(Math.max(scale, this.minScale), this.maxScale);

	var widthAfter = this.getScaledWidth(),
		heightAfter = this.getScaledHeight();

	this.position[0] += widthBefore * offsetX - widthAfter * offsetX;
	this.position[1] += heightBefore * offsetY - heightAfter * offsetY;

	this.setBounds();
	this.resetViewport();
};

function clamp (value, bounds) {
	if (bounds[0] > bounds[1]) {
		return bounds[0];
	}

	return value < bounds[0] ? bounds[0] : (value > bounds[1] ? bounds[1] : value);
}

SvgMap.prototype.resetViewport = function () {
	this.position[0] = clamp(this.position[0], this.bounds.x);
	this.position[1] = clamp(this.position[1], this.bounds.y);

	this.$map.setAttribute('viewBox', [this.position[0], this.position[1], this.getScaledWidth(), this.getScaledHeight()].join(' '));
};

SvgMap.prototype.recalculateViewport = function (e) {
	this.position = [
		this.initialPosition[0] - (e.clientX - this.currentEvent.clientX) * Math.pow(2, this.scale),
		this.initialPosition[1] - (e.clientY - this.currentEvent.clientY) * Math.pow(2, this.scale)
	];

	this.resetViewport();
};

SvgMap.prototype.setPosition = function (positionX, positionY) {
	if (this.animationId !== null) {
		return;
	}

	var that = this,
		duration = 400,
		step = 20,
		steps = duration / step,
		endPosition = [positionX - this.getScaledWidth() / 2, positionY - this.getScaledHeight() / 2],
		positionQuantum = [(endPosition[0] - this.position[0]) / steps, (endPosition[1] - this.position[1]) / steps],
		indicator = 0;

	this.animationId = setTimeout(function timer () {
		if (indicator > steps) {
			that.animationId = null;

			return;
		}

		indicator++;

		that.position[0] += positionQuantum[0];
		that.position[1] += positionQuantum[1];

		that.resetViewport();

		that.animationId = setTimeout(timer, step);
	}, step);
};

SvgMap.prototype.attachEvents = function () {
	var that = this;

	this.$map.addEventListener('mousedown', function (e) {
		that.isDrag = false;

		that.initialPosition = that.position;

		that.currentEvent = e;
	});

	window.addEventListener('mousemove', function (e) {
		that.isDrag = true;

		if (that.currentEvent) {
			that.recalculateViewport(e);
		}
	});

	window.addEventListener('mouseup', function (e) {
		if (e.target === that.$map) {
			for (var i = 0; i < that.oceanCallbacks.length; i++) {
				that.oceanCallbacks[i]();
			}
		}

		if (that.currentEvent) {
			that.recalculateViewport(e);

			that.currentEvent = undefined;
		}
	});

	this.$map.addEventListener('wheel', function (e) {
		if (e.deltaY > 0) {
			that.setScale(that.scale + that.scaleStep, e.offsetX, e.offsetY);
		} else if (e.deltaY < 0) {
			that.setScale(that.scale - that.scaleStep, e.offsetX, e.offsetY);
		}
	});

	window.addEventListener('resize', function () {
		that.onResize();
	});
};

SvgMap.prototype.addOceanCallback = function (oceanCallback) {
	this.oceanCallbacks.push(oceanCallback);
};

SvgMap.prototype.onResize = function () {
	var width = window.innerWidth,
		height = window.innerHeight;

	this.width = width - 460;
	this.height = height - 45;

	this.$map.setAttribute('width', this.width);
	this.$map.setAttribute('height', this.height);

	this.setBounds();
	this.resetViewport();
};

// add possibility to manually override position of label
// source: http://stackoverflow.com/questions/10992691/how-to-place-text-in-the-center-of-an-svg-path
SvgMap.prototype.checkLabels = function () {
	for (var i = 0; i < this.labels.length; i++) {
		this.$map.removeChild(this.labels[i]);
	}

	this.labels = [];

	for (var i = 0; i < this.paths.length; i++) {
		var obj = this.paths[i],
			sizes = obj.path.getBBox();

		var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		text.textContent = obj.label.toUpperCase();
		text.setAttribute('fill', '#666');
		text.setAttribute('font-size', 13 * Math.pow(2, this.scale));
		text.setAttribute('font-family', 'Tahoma, sans-serif');
		text.setAttribute('font-weight', 'bold');
		this.$map.appendChild(text);

		var ownSizes = text.getBBox();
		if (ownSizes.width > sizes.width / 2) {
			this.$map.removeChild(text);

			continue;
		}

		text.setAttribute('transform', 'translate(' + (sizes.x + sizes.width / 2 - ownSizes.width / 2) + ' ' + (sizes.y + sizes.height / 2) +')');
		this.labels.push(text);
	}
};