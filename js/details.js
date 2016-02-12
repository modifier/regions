var dataLabels = {
	"population": "Население",
	"capital": "Столица",
	"large_cities": "Крупнейшие города",
	"gdp": "ВВП",
	"gdp_per_capita": "ВВП на душу населения",
	"neighbors": "Соседние страны",
	"part_of": "Часть",
	"secessionists": "Регионы"
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
	$name.innerHTML = countryData.name;
	elements.push($name);

	elements.push(createCapitalElement(countryData.capital));
	elements.push(createPartOf(countryData.part_of));
	elements.push(createCountryList(countryData.secessionists, dataLabels.secessionists));
	elements.push(createCountryList(countryData.neighbors, dataLabels.neighbors));

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

function getCountrySpan (slug, genetive) {
	var name = genetive ? data[slug].genetive : data[slug].name;

	return '<span class="country-name" data-name="' + slug + '">' +
		'<img src="flags/' + slug + '.png" class="flag-icon" />' + name + '</span>';
}

function createCountryList (countries, label) {
	if (countries === undefined || countries.length === 0) {
		return null;
	}

	var $el = document.createElement('div');
	$el.className = 'data';
	var code = '<b>' + label + ':</b> ',
		countriesList = [];

	for (var i = 0; i < countries.length; i++) {
		countriesList.push(getCountrySpan(countries[i]));
	}

	$el.innerHTML = code + countriesList.join(', ');

	return $el;
}

function createPartOf (countries) {
	if (countries === undefined || countries.length === 0) {
		return null;
	}

	var $el = document.createElement('div');
	$el.className = 'data';
	var code = '<b>' + dataLabels.part_of + '</b> ',
		countriesList = [];

	for (var i = 0; i < countries.length; i++) {
		countriesList.push(getCountrySpan(countries[i], true));
	}

	$el.innerHTML = code + joinRussian(countriesList);

	return $el;
}

function joinRussian (list) {
	if (list.length === 1) {
		return list[0];
	}

	var result = '',
		firstEls = [],
		lastEl = list[list.length - 1];

	for (var i = 0; i < list.length - 1; i++) {
		firstEls.push(list[i]);
	}

	return firstEls.join(', ') + ' и ' + lastEl;
}

function createCapitalElement (capital) {
	if (!capital) {
		return null;
	}

	var $el = document.createElement('div');
	$el.className = 'data';
	$el.innerHTML = '<b>' + dataLabels.capital + ':</b> ' + capital.name;

	return $el;
}