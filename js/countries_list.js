var CountriesList = function ($container) {
	this.$container = $container;
	this.countryCallbacks = [];
};

CountriesList.prototype.show = function () {
	this.$container.classList.remove('hidden');
};

CountriesList.prototype.hide = function () {
	this.$container.classList.add('hidden');
};

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

CountriesList.prototype.getCountry = function (name) {
	return '<span class="country-name exists" data-name="' + name + '"><span class="flag-container"><img src="flags/' + name + '.png" class="flag-icon" /></span>' + data[name].name + '</span>';
};

// @todo: create common class for this and Details and inherit both
CountriesList.prototype.addCountryCallback = function (callback) {
	this.countryCallbacks.push(callback);
};

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