var Details = function ($container) {
	this.$container = $container;
	this.countryCallbacks = [];
	this.wikipediaPrefix = "https://ru.wikipedia.org/wiki/";
	this.initListeners();
};

Details.prototype.dataLabels = {
	"neighbors": "Соседние страны",
	"part_of": "Часть",
	"secessionists": "Регионы",
	"capital": "Столица",
	"admin_center": "Административный центр",
	"largest_city": "Крупнейший город"
};

/**
 * Make details invisible
 */
Details.prototype.hide = function () {
	this.$container.classList.add('hidden');
};

/**
 * Make details visible
 */
Details.prototype.show = function () {
	this.$container.classList.remove('hidden');
};

/**
 * Render country's details
 */
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

	elements.push(this.createDescription(countryData.description));
	elements.push(this.createCapitalElement(countryData.capital));
	elements.push(this.createPartOf(countryData.part_of));
	elements.push(this.createCountryList(countryData.secessionists, this.dataLabels.secessionists));
	elements.push(this.createCountryList(countryData.neighbors, this.dataLabels.neighbors));

	this.clearContainer();
	for (var key in elements) {
		if (elements[key] === null || !elements.hasOwnProperty(key)) {
			continue;
		}

		this.$container.appendChild(elements[key]);
	}

	this.show();
};

/**
 * Add callback to fire when .country-name is clicked
 */
Details.prototype.addCountryCallback = function (callback) {
	this.countryCallbacks.push(callback);
};

/**
 * Initialize container events: fire country callback when .country-name is clicked
 */
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

/**
 * Clear contents
 */
Details.prototype.clearContainer = function () {
	while (this.$container.firstChild) {
    	this.$container.removeChild(this.$container.firstChild);
	}
};

/**
 * Get code of clickable country label with a small flag
 */
Details.prototype.getCountrySpan = function (slug, genetive) {
	var name = genetive ? data[slug].genetive : data[slug].name;

	return '<span class="country-name" data-name="' + slug + '">' +
		'<img src="flags/' + slug + '.png" class="flag-icon" />' + name + '</span>';
}

/**
 * Create element with the list of countries
 */
Details.prototype.createCountryList = function (countries, label) {
	if (countries === undefined || countries.length === 0) {
		return null;
	}

	var $el = document.createElement('div');
	$el.className = 'data';
	var code = '<b>' + label + ':</b> ',
		countriesList = [];

	for (var i = 0; i < countries.length; i++) {
		countriesList.push(this.getCountrySpan(countries[i]));
	}

	$el.innerHTML = code + countriesList.join(', ');

	return $el;
}

/**
 * Create element with the list of countries of which country is part of
 * Differs from createCountryList because of using genetive for country names instead of nominative
 */
Details.prototype.createPartOf = function (countries) {
	if (countries === undefined || countries.length === 0) {
		return null;
	}

	var $el = document.createElement('div');
	$el.className = 'data';
	var code = '<b>' + this.dataLabels.part_of + '</b> ',
		countriesList = [];

	for (var i = 0; i < countries.length; i++) {
		countriesList.push(this.getCountrySpan(countries[i], true));
	}

	$el.innerHTML = code + this.joinRussian(countriesList);

	return $el;
}

/**
 * Join words with commas and with the conjunction in the end
 */
Details.prototype.joinRussian = function (list) {
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

/**
 * Create element with the name of the capital which has a link to wikipedia
 */
Details.prototype.createCapitalElement = function (capital) {
	if (!capital) {
		return null;
	}

	var labelType = capital.type || 'capital'

	var $el = document.createElement('div');
	$el.className = 'data';
	var url = this.wikipediaPrefix + (capital.url || capital.name);
	$el.innerHTML = '<b>' + this.dataLabels[labelType] + ':</b> <a href="' + url + '" target="_blank">' + capital.name + '</a>';

	return $el;
}

/**
 * Create element with the simple description
 */
Details.prototype.createDescription = function (description) {
	if (!description) {
		return null;
	}

	var $el = document.createElement('div');
	$el.className = 'data';
	$el.innerHTML = description;

	return $el;
}