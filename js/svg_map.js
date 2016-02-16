var SvgMap = function ($container) {
	this.$container = $container;
	this.scale = 0;
	this.position = [0, 0];
	this.scaleStep = 0.5;
	this.minScale = -Infinity;
	this.maxScale = Infinity;
	this.animationId = null;
	this.isDrag = false;
	this.isScaling = false;
	this.oceanCallbacks = [];
	this.initializeElements();
};

// public

SvgMap.prototype.setScaleBounds = function (minScale, maxScale) {
	this.minScale = minScale;
	this.maxScale = maxScale;
};

SvgMap.prototype.setDimensions = function (dimensions) {
	this.dimensions = dimensions;
};

SvgMap.prototype.addOceanCallback = function (oceanCallback) {
	this.oceanCallbacks.push(oceanCallback);
};

SvgMap.prototype.initialize = function () {
	this.position = [
		(this.dimensions.x2 - this.dimensions.x1) / 2,
		(this.dimensions.y2 - this.dimensions.y1) / 2
	];
	this.attachEvents();
	this.onResize();
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

// protected

SvgMap.prototype.initializeElements = function () {
	// create map
	this.$map = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	this.$map.id = 'svg_path';
	this.$container.appendChild(this.$map);

	// create scale container
	this.$scaler = document.createElement('div');
	this.$scaler.id = 'scaler';
	this.$container.appendChild(this.$scaler);

	// create zoom in button
	var that = this;
	var $zoomIn = document.createElement('div');
	$zoomIn.innerHTML = '+';
	$zoomIn.className = 'scale-button';
	this.$scaler.appendChild($zoomIn);
	$zoomIn.addEventListener('click', function () {
		that.setScale(that.scale - that.scaleStep);
	});

	// create zoom out button
	var $zoomOut = document.createElement('div');
	$zoomOut.innerHTML = '&minus;';
	$zoomOut.className = 'scale-button';
	$zoomOut.addEventListener('click', function () {
		that.setScale(that.scale + that.scaleStep);
	});
	this.$scaler.appendChild($zoomOut);
};

function clamp (value, bounds) {
	if (bounds[0] > bounds[1]) {
		return bounds[0];
	}

	return value < bounds[0] ? bounds[0] : (value > bounds[1] ? bounds[1] : value);
}

SvgMap.prototype.getScaledWidth = function () {
	return this.width * Math.pow(2, this.scale);
};

SvgMap.prototype.getScaledHeight = function () {
	return this.height * Math.pow(2, this.scale);
};

SvgMap.prototype.recalculateViewport = function (e) {
	if (e instanceof MouseEvent) {
		var offsetX = e.clientX - this.currentEvent.clientX,
			offsetY = e.clientY - this.currentEvent.clientY;
	} else if (e instanceof TouchEvent) {
		var offsetX = e.touches[0].clientX - this.currentEvent.touches[0].clientX,
			offsetY = e.touches[0].clientY - this.currentEvent.touches[0].clientY;
	}

	this.position = [
		this.initialPosition[0] - offsetX * Math.pow(2, this.scale),
		this.initialPosition[1] - offsetY * Math.pow(2, this.scale)
	];

	this.resetViewport();
};

SvgMap.prototype.resetViewport = function () {
	this.position[0] = clamp(this.position[0], this.bounds.x);
	this.position[1] = clamp(this.position[1], this.bounds.y);

	this.$map.setAttribute('viewBox', [this.position[0], this.position[1], this.getScaledWidth(), this.getScaledHeight()].join(' '));
};

SvgMap.prototype.setBounds = function () {
	this.width = this.$map.width.baseVal.value;
	this.height = this.$map.height.baseVal.value;

	this.bounds = {
		x: [this.dimensions.x1, this.dimensions.x2 - this.getScaledWidth() + this.dimensions.x1],
		y: [this.dimensions.y1, this.dimensions.y2 - this.getScaledHeight() + this.dimensions.y1]
	};
};

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

SvgMap.prototype.onMoveStart = function (e) {
	this.isDrag = false;

	this.initialPosition = this.position;

	this.currentEvent = e;
};

SvgMap.prototype.onMove = function (e) {
	this.isDrag = true;

	if (this.currentEvent) {
		this.recalculateViewport(e);
	}
};

SvgMap.prototype.onOceanTap = function (e) {
	if (e.target === this.$map && !this.isDrag) {
		for (var i = 0; i < this.oceanCallbacks.length; i++) {
			this.oceanCallbacks[i]();
		}
	}
};

SvgMap.prototype.onMoveEnd = function (e) {
	if (this.currentEvent) {
		this.recalculateViewport(e);

		this.currentEvent = undefined;
	}
};

SvgMap.prototype.onWheel = function (e) {
	if (e.deltaY > 0) { // zoom in
		this.setScale(this.scale + this.scaleStep, e.layerX, e.layerY);
	} else if (e.deltaY < 0) { // zoom out
		this.setScale(this.scale - this.scaleStep, e.layerX, e.layerY);
	}
};

SvgMap.prototype.attachEvents = function () {
	this.$map.addEventListener('mousedown', this.onMoveStart.bind(this));
	this.$map.addEventListener('touchstart', this.onMoveStart.bind(this));

	window.addEventListener('mousemove', this.onMove.bind(this));
	window.addEventListener('touchmove', this.onMove.bind(this));

	window.addEventListener('mouseup', this.onOceanTap.bind(this));
	window.addEventListener('touchend', this.onOceanTap.bind(this));

	window.addEventListener('mouseup', this.onMoveEnd.bind(this));
	window.addEventListener('touchend', this.onOceanTap.bind(this));

	this.$map.addEventListener('wheel', this.onWheel.bind(this));

	window.addEventListener('resize', this.onResize.bind(this));
};