var dataLabels = {
	"population": "Население",
	"capital": "Столица",
	"large_cities": "Крупнейшие города",
	"gdp": "ВВП",
	"gdp_per_capita": "ВВП на душу населения",
	"neighbors": "Соседние государства"
};

var Details = function ($container) {
	this.$container = $container;
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
	if (countryData.flag) {
		var $flag = document.createElement('img');
		$flag.src = countryData.flag;
		$flag.className = 'flag';
		$flag.alt = 'Флаг';
		elements.push($flag);
	}

	// name
	var $name = document.createElement('h2');
	$name.innerText = countryData.name;
	elements.push($name);

	elements.push(createDataElement('capital', countryData));
	elements.push(createDataElement('population', countryData));
	elements.push(createDataElement('large_cities', countryData));
	elements.push(createDataElement('gdp', countryData));

	clearContainer(this.$container);
	for (var key in elements) {
		if (elements[key] === null || !elements.hasOwnProperty(key)) {
			continue;
		}

		this.$container.appendChild(elements[key]);
	}

	this.show();
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