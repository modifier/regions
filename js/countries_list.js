var CountriesList = function ($container) {
	this.$container = $container;
	this.countryCallbacks = [];
};

/**
 * Make countries list visible
 */
CountriesList.prototype.show = function () {
	this.$container.classList.remove('hidden');
};

/**
 * Make countries list invisible
 */
CountriesList.prototype.hide = function () {
	this.$container.classList.add('hidden');
};

/**
 * Render countries list
 */
CountriesList.prototype.render = function () {
	var list = [];
	for (var slug in contours) {
		if (data[slug].disabled) {
			continue;
		}

		list.push({
			name: data[slug].name,
			slug: slug
		});
	}

	list.sort(function (a, b) {
		return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
	});

	var result = '';
	for (var i = 0; i < list.length; i++) {
		result += '<div class="line">' + this.getCountry(list[i].slug) + '</div>';
	}

	this.$container.innerHTML = result;

	this.initListeners();
	this.show();
};

/**
 * Get code of clickable country label with a small flag
 * See Details.getCountrySpan
 */
CountriesList.prototype.getCountry = function (name) {
	return '<span class="country-name exists" data-name="' + name + '"><span class="flag-container"><img src="flags/' + name + '.png" class="flag-icon" /></span>' + data[name].name + '</span>';
};

/**
 * Add callback to fire when .country-name is clicked
 * @todo: create common class for this and Details and inherit both
 */
CountriesList.prototype.addCountryCallback = function (callback) {
	this.countryCallbacks.push(callback);
};

/**
 * Initialize container events: fire country callback when .country-name is clicked
 */
CountriesList.prototype.initListeners = function () {
	var that = this;

	this.$container.addEventListener('click', function (e) {
		if (e.target.classList.contains('country-name')) {
			for (var i in that.countryCallbacks) {
				that.countryCallbacks[i](e.target.getAttribute('data-name'));
			}
		}
	});
};