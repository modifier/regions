var dataLabels = {
	"population": "Население",
	"capital": "Столица",
	"large_cities": "Крупнейшие города",
	"gdp": "ВВП",
	"gdp_per_capita": "ВВП на душу населения",
	"neighbors": "Соседние страны"
};

var Details = function ($container) {
	this.$container = $container;
	this.countryCallbacks = [];
	this.initListeners();
};

Details.prototype.hide = function () {
	this.$container.classList.add('hidden');
};

Details.prototype.show = function () {
	this.$container.classList.remove('hidden');
};

Details.prototype.renderCountry = function (name) {
	var elements = [],
		countryData = data[name];

	// flag
	var $flag = document.createElement('img');
	$flag.src = 'flags/' + name + '.png';
	$flag.className = 'flag';
	$flag.alt = 'Флаг';
	elements.push($flag);

	// name
	var $name = document.createElement('h2');
	$name.innerText = countryData.name;
	elements.push($name);

	elements.push(createDataElement('capital', countryData));
	elements.push(createDataElement('population', countryData));
	elements.push(createDataElement('large_cities', countryData));
	elements.push(createDataElement('gdp', countryData));
	elements.push(createNeighborsList(countryData.neighbors));

	clearContainer(this.$container);
	for (var key in elements) {
		if (elements[key] === null || !elements.hasOwnProperty(key)) {
			continue;
		}

		this.$container.appendChild(elements[key]);
	}

	this.show();
};

Details.prototype.addCountryCallback = function (callback) {
	this.countryCallbacks.push(callback);
};

Details.prototype.initListeners = function () {
	var that = this;

	this.$container.addEventListener('click', function (e) {
		if (e.target.classList.contains('country-name')) {
			for (var i in that.countryCallbacks) {
				that.countryCallbacks[i](e.target.getAttribute('data-name'));
			}
		}
	});
};

function clearContainer ($container) {
	while ($container.firstChild) {
    	$container.removeChild($container.firstChild);
	}
}

function createDataElement (label, content) {
	if (!content[label]) {
		return null;
	}

	var $el = document.createElement('div');
	$el.className = 'data';
	$el.innerHTML = '<b>' + dataLabels[label] + ':</b> ' + (Array.isArray(content[label]) ? content[label].join(', ') : content[label]);

	return $el;
}

function createNeighborsList (neighbors) {
	if (neighbors === undefined || neighbors.length === 0) {
		return null;
	}

	var $el = document.createElement('div');
	$el.className = 'data';
	var code = '<b>' + dataLabels.neighbors + ':</b> ',
		neighborsList = [];

	for (var i = 0; i < neighbors.length; i++) {
		neighborsList.push(getCountrySpan(neighbors[i]));
	}

	$el.innerHTML = code + neighborsList.join(', ');

	return $el;
}

function getCountrySpan (name) {
	return '<span class="country-name" data-name="' + name + '"><img src="flags/' + name + '.png" class="flag-icon" />' + data[name].name + '</span>';
}