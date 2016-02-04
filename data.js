var data = {
	"finland": {
		"name": "Финляндия",
		"population": "5.5M",
		"capital": "Хельсинки",
		"large_cities": ["Хельсинки", "Эспоо", "Тампере"],
		"gdp": "",
		"flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/800px-Flag_of_Finland.svg.png",
		"neighbors": ["karelia", "ingria", "sapmi", "aland", "bornholm", "estonia"]
	},
	"sapmi": {
		"name": "Лапландия",
		"population": "2M",
		"capital": "",
		"large_cities": ["Мурманск", "Умео", "Тромсё"],
		"gdp": "",
		"flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Sami_flag.svg/1280px-Sami_flag.svg.png",
		"neighbors": ["karelia", "finland", "norway", "sweden"]
	},
	"norway": {
		"name": "Норвегия",
		"population": "5M",
		"capital": "Осло",
		"large_cities": ["Осло", "Берген", "Тронхейм"],
		"gdp": "",
		"flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/800px-Flag_of_Norway.svg.png",
		"neighbors": ["karelia", "sapmi", "sweden", "denmark"]
	},
	"sweden": {
		"name": "Швеция",
		"population": "10M",
		"capital": "Стокгольм",
		"large_cities": ["Стокгольм", "Гётеборг", "Мальмё"],
		"gdp": "",
		"flag": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1600px-Flag_of_Sweden.svg.png",
		"neighbors": ["sapmi", "norway", "estonia", "aland", "bornholm", "skaneland"]
	},
	"iceland": {
		"name": "Исландия",
		"population": "300K",
		"capital": "	Рейкьявик",
		"large_cities": ["Рейкьявик", "Коупавогюр"],
		"gdp": "12.4B",
		"flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1920px-Flag_of_Iceland.svg.png",
		"neighbors": []
	},
	"ingria": {
		"name": "Ингерманландия",
		"population": "7M",
		"capital": "Санкт-Петербург",
		"large_cities": ["Санкт-Петербург", "Гатчина", "Выборг", "Сосновый Бор"],
		"gdp": "",
		"flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Inkerin_lippu.svg/1020px-Inkerin_lippu.svg.png",
		"neighbors": ["karelia", "finland", "russia", "estonia"]
	},
	"karelia": {
		"name": "Карелия",
		"population": "600K",
		"capital": "Петрозаводск",
		"large_cities": ["Петрозаводск", "Кондопога"],
		"gdp": "",
		"flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_Karelia.svg/324px-Flag_of_Karelia.svg.png",
		"neighbors": ["finland", "sapmi", "russia", "norway", "ingria"]
	},
	"aland": {
		"name": "Аланды",
		"neighbors": ["finland", "sweden", "skaneland"]
	},
	"bornholm": {
		"name": "Борнхольм",
		"neighbors": ["finland", "sweden", "skaneland", "denmark"]
	},
	"estonia": {
		"name": "Эстония",
		"neighbors": ["ingria", "finland", "russia", "sweden", "latgalia", "latvia"]
	},
	"faroe": {
		"name": "Фареры"
	},
	"latgalia": {
		"name": "Латгалия",
		"neighbors": ["estonia", "latvia", "russia", "belarus"]
	},
	"latvia": {
		"name": "Латвия",
		"neighbors": ["estonia", "latgalia", "belarus", "samogitia", "lithuania"]
	},
	"lithuania": {
		"name": "Литва",
		"neighbors": ["samogitia", "prussia", "latvia", "belarus", "poland"]
	},
	"prussia": {
		"name": "Пруссия",
		"neighbors": ["samogitia", "lithuania", "poland"]
	},
	"samogitia": {
		"name": "Жемайтия",
		"neighbors": ["lithuania", "latvia", "prussia"]
	},
	"skaneland": {
		"name": "Сконеланд",
		"neighbors": ["sweden", "denmark", "bornholm", "aland"]
	},
	"belarus": {
		"name": "Беларусь",
		"neighbors": ["russia", "lithuania", "latgalia", "ukraine", "latvia", "poland"]
	},
	"denmark": {
		"name": "Дания",
		"neighbors": ["bornholm", "slezvig", "skaneland", "norway"]
	},
	"flanders": {
		"name": "Фландрия",
		"neighbors": ["netherlands", "wallonia", "france"]
	},
	"frisia": {
		"name": "Фризия",
		"neighbors": ["germany", "slezvig", "netherlands"]
	},
	"germany": {
		"name": "Германия",
		"neighbors": ["poland", "netherlands", "frisia", "wallonia", "luxemburg", "france", "alsace", "bavaria", "switzerland", "czech", "slezvig", "austria"]
	},
	"ireland": {
		"name": "Ирландия",
		"neighbors": ["ulster", "scotland", "wales", "isle_of_man"]
	},
	"luxemburg": {
		"name": "Люксембург",
		"neighbors": ["wallonia", "france", "germany"]
	},
	"isle_of_man": {
		"name": "Остров Мэн",
		"neighbors": ["ulster", "ireland", "scotland", "england", "wales"]
	},
	"netherlands": {
		"name": "Нидерланды",
		"neighbors": ["frisia", "flanders", "france", "germany", "wallonia"]
	},
	"poland": {
		"name": "Польша",
		"neighbors": ["prussia", "germany", "czech", "silesia", "moravia", "slovakia", "ukraine", "belarus", "lithuania", "ruthenia"]
	},
	"scotland": {
		"name": "Шотландия",
		"neighbors": ["england", "ulster", "isle_of_man", "ireland", "outer_hebrides", "orkney", "shetland"]
	},
	"slezvig": {
		"name": "Шлезвиг",
		"neighbors": ["denmark", "germany", "frisia"]
	},
	"ulster": {
		"name": "Ульстер",
		"neighbors": ["ireland", "scotland", "isle_of_man"]
	},
	"wallonia": {
		"name": "Валлония",
		"neighbors": ["luxemburg", "flanders", "france", "germany", "netherlands"]
	},
	"novorussia": {
		"name": "Новороссия",
		"neighbors": ["russia", "ukraine"]
	},
	"cornwall": {
		"name": "Корнуолл",
		"neighbors": ["devon", "channel_islands"]
	},
	"devon": {
		"name": "Девон",
		"neighbors": ["cornwall", "wessex", "channel_islands"]
	},
	"england": {
		"name": "Англия",
		"neighbors": ["wales", "wessex", "isle_of_wight", "isle_of_man", "yorkshire", "scotland", "france"]
	},
	"wales": {
		"name": "Уэльс",
		"neighbors": ["england", "ireland", "isle_of_man", "wessex"]
	},
	"wessex": {
		"name": "Уэссекс",
		"neighbors": ["england", "isle_of_wight", "wales", "devon", "channel_islands"]
	},
	"isle_of_wight": {
		"name": "Остров Уайт",
		"neighbors": ["england", "wessex", "channel_islands", "normandy"]
	},
	"yorkshire": {
		"name": "Йоркшир",
		"neighbors": ["england"]
	},
	"bavaria": {
		"name": "Бавария",
		"neighbors": ["germany", "czech", "austria"]
	},
	"czech": {
		"name": "Чехия",
		"neighbors": ["germany", "bavaria", "austria", "moravia", "poland", "silesia"]
	},
	"crimea": {
		"name": "Крым",
		"neighbors": ["ukraine", "russia"]
	},
	"hungary": {
		"name": "Венгрия",
		"neighbors": ["slovakia", "austria", "ruthenia", "romania", "slovenia", "croatia", "vojvodina"]
	},
	"moravia": {
		"name": "Моравия",
		"neighbors": ["slovakia", "silesia", "czech", "austria", "poland"]
	},
	"ruthenia": {
		"name": "Закарпатье",
		"neighbors": ["ukraine", "poland", "slovakia", "hungary", "romania"]
	},
	"silesia": {
		"name": "Силезия",
		"neighbors": ["poland", "czech", "moravia", "slovakia"]
	},
	"slovakia": {
		"name": "Словакия",
		"neighbors": ["poland", "silesia", "moravia", "austria", "hungary", "ruthenia"]
	},
	"ukraine": {
		"name": "Украина",
		"neighbors": ["belarus", "poland", "ruthenia", "romania", "moldavia", "transnistria", "crimea", "novorussia", "russia", "gagauzia"]
	},
	"alsace": {
		"name": "Эльзас",
		"neighbors": ["germany", "france", "switzerland"]
	},
	"austria": {
		"name": "Австрия",
		"neighbors": ["south_tyrol", "carinthia", "slovenia", "hungary", "slovakia", "moravia", "czech", "bavaria", "germany", "lichtenstein", "switzerland", "friuli-venezia_giulia", "venetia"]
	},
	"britanny": {
		"name": "Бретань",
		"neighbors": ["france", "channel_islands", "normandy"]
	},
	"carinthia": {
		"name": "Каринтия",
		"neighbors": ["austria", "slovenia", "friuli-venezia_giulia", "south_tyrol", "venetia"]
	},
	"channel_islands": {
		"name": "Нормандские острова",
		"neighbors": ["normandy", "britanny", "wessex", "devon", "cornwall", "isle_of_wight"]
	},
	"france": {
		"name": "Франция",
		"neighbors": ["england", "normandy", "britanny", "occitania", "savoy", "switzerland", "alsace", "germany", "luxemburg", "wallonia", "flanders", "netherlands"]
	},
	"lichtenstein": {
		"name": "Лихтенштейн",
		"neighbors": ["switzerland", "austria"]
	},
	"normandy": {
		"name": "Нормандия",
		"neighbors": ["isle_of_wight", "channel_islands", "britanny", "france"]
	},
	"occitania": {
		"name": "Окситания",
		"neighbors": ["france", "savoy", "padania", "liguria", "andorra", "aragon", "basque", "catalonia", "corsica"]
	},
	"savoy": {
		"name": "Савойя",
		"neighbors": ["france", "occitania", "switzerland", "padania"]
	},
	"switzerland": {
		"name": "Швейцария",
		"neighbors": ["alsace", "france", "savoy", "austria", "lichtenstein", "germany", "padania", "south_tyrol"]
	},
	"balearic_islands": {
		"name": "Балеарские острова",
		"neighbors": ["catalonia", "sardinia", "castile"]
	},
	"outer_hebrides": {
		"name": "Внешние Гербидские острова",
		"neighbors": ["scotland"]
	},
	"orkney": {
		"name": "Оркнейские острова",
		"neighbors": ["scotland", "shetland"]
	},
	"shetland": {
		"name": "Шетландские острова",
		"neighbors": ["scotland", "orkney"]
	},
	"andalusia": {
		"name": "Андалусия",
		"neighbors": ["portugal", "extermadura", "castile", "murcia", "leon"]
	},
	"andorra": {
		"name": "Андорра",
		"neighbors": ["catalonia", "occitania"]
	},
	"aragon": {
		"name": "Арагон",
		"neighbors": ["occitania", "basque", "catalonia", "castile", "valencia"]
	},
	"asturia": {
		"name": "Астурия",
		"neighbors": ["galicia", "leon", "cantabria"]
	},
	"basque": {
		"name": "Баскония",
		"neighbors": ["occitania", "aragon", "castile", "cantabria"]
	},
	"cantabria": {
		"name": "Кантабрия",
		"neighbors": ["basque", "castile", "leon", "asturia"]
	},
	"castile": {
		"name": "Кастилия",
		"neighbors": ["cantabria", "basque", "aragon", "valencia", "murcia", "andalusia", "extermadura", "leon", "balearic_islands"]
	},
	"catalonia": {
		"name": "Каталония",
		"neighbors": ["occitania", "andorra", "aragon", "valencia", "balearic_islands"]
	},
	"extermadura": {
		"name": "Эстермадура",
		"neighbors": ["portugal", "leon", "castile", "andalusia"]
	},
	"galicia": {
		"name": "Галисия",
		"neighbors": ["asturia", "leon", "portugal"]
	},
	"leon":  {
		"name": "Леон",
		"neighbors": ["galicia", "asturia", "cantabria", "castile", "andalusia", "portugal", "extermadura"]
	},
	"murcia": {
		"name": "Мурсия",
		"neighbors": ["andalusia", "castile", "valencia"]
	},
	"portugal": {
		"name": "Португалия",
		"neighbors": ["galicia", "leon", "extermadura", "andalusia"]
	},
	"valencia": {
		"name": "Валенсия",
		"neighbors": ["murcia", "castile", "aragon", "catalonia"]
	},
	"corsica": {
		"name": "Корсика",
		"neighbors": ["liguria", "occitania", "padania", "italy", "sardinia"]
	},
	"friuli-venezia_giulia": {
		"name": "Фриули-Венеция Джулия",
		"neighbors": ["venetia", "carinthia", "austria", "slovenia"]
	},
	"italy": {
		"name": "Италия",
		"neighbors": ["padania", "corsica", "sardinia", "sicily"]
	},
	"liguria": {
		"name": "Лигурия",
		"neighbors": ["padania", "occitania", "corsica"]
	},
	"malta": {
		"name": "Мальта",
		"neighbors": ["sicily"]
	},
	"padania": {
		"name": "Падания",
		"neighbors": ["switzerland", "savoy", "occitania", "liguria", "corsica", "sardinia", "italy", "venetia", "south_tyrol"]
	},
	"sardinia": {
		"name": "Сардиния",
		"neighbors": ["corsica", "sicily", "balearic_islands", "italy", "padania"]
	},
	"sicily": {
		"name": "Сицилия",
		"neighbors": ["italy", "malta", "sardinia"]
	},
	"south_tyrol": {
		"name": "Южный Тироль",
		"neighbors": ["austria", "switzerland", "padania", "venetia", "carinthia"]
	},
	"venetia": {
		"name": "Венеция",
		"neighbors": ["south_tyrol", "padania", "friuli-venezia_giulia", "carinthia", "austria"]
	},
	"albania": {
		"name": "Албания",
		"neighbors": ["crna_gora", "sandzak", "kosovo", "fyrom", "northern_epirus"]
	},
	"bosnia": {
		"name": "Босния",
		"neighbors": ["croatia", "vojvodina", "serbia", "crna_gora", "sandzak", "herzegovina"]
	},
	"bulgaria": {
		"name": "Болгария",
		"neighbors": ["romania", "turkey", "greece", "fyrom", "serbia"]
	},
	"crna_gora": {
		"name": "Черногория",
		"neighbors": ["croatia", "herzegovina", "bosnia", "sandzak", "albania"]
	},
	"croatia": {
		"name": "Хорватия",
		"neighbors": ["slovenia", "istria", "hungary", "vojvodina", "bosnia", "crna_gora", "herzegovina"]
	},
	"cyprus": {
		"name": "Кипр",
		"neighbors": ["trnc", "turkey", "greece"]
	},
	"fyrom": {
		"name": "Македония",
		"neighbors": ["kosovo", "serbia", "bulgaria", "greece", "northern_epirus", "albania"]
	},
	"gagauzia": {
		"name": "Гагаузия",
		"neighbors": ["moldavia", "transnistria", "ukraine", "romania"]
	},
	"greece": {
		"name": "Греция",
		"neighbors": ["northern_epirus", "fyrom", "bulgaria", "turkey", "cyprus"]
	},
	"herzegovina": {
		"name": "Герцеговина",
		"neighbors": ["croatia", "bosnia", "sandzak", "crna_gora"]
	},
	"istria": {
		"name": "Истрия",
		"neighbors": ["slovenia", "croatia"]
	},
	"kosovo": {
		"name": "Косово",
		"neighbors": ["sandzak", "serbia", "fyrom", "albania"]
	},
	"moldavia": {
		"name": "Молдавия",
		"neighbors": ["romania", "ukraine", "transnistria", "gagauzia"]
	},
	"northern_epirus": {
		"name": "Северный Эпир",
		"neighbors": ["albania", "fyrom", "greece"]
	},
	"romania": {
		"name": "Румыния",
		"neighbors": ["hungary", "ukraine", "moldavia", "gagauzia", "bulgaria", "serbia", "vojvodina", "ruthenia", "szekely_land"]
	},
	"russia": {
		"name": "Россия",
		"neighbors": ["karelia", "ingria", "estonia", "latgalia", "belarus", "ukraine", "novorussia", "crimea"]
	},
	"sandzak": {
		"name": "Санджак",
		"neighbors": ["bosnia", "serbia", "kosovo", "albania", "crna_gora", "herzegovina"]
	},
	"serbia": {
		"name": "Сербия",
		"neighbors": ["vojvodina", "romania", "bulgaria", "fyrom", "kosovo", "sandzak", "bosnia"]
	},
	"slovenia": {
		"name": "Словения",
		"neighbors": ["friuli-venezia_giulia", "carinthia", "austria", "hungary", "croatia", "istria"]
	},
	"szekely_land": {
		"name": "Секейский край",
		"neighbors": ["romania"]
	},
	"transnistria": {
		"name": "Приднестровье",
		"neighbors": ["ukraine", "moldavia", "gagauzia"]
	},
	"trnc": {
		"name": "Турецкая Республика Северного Кипра",
		"neighbors": ["turkey", "cyprus"]
	},
	"turkey": {
		"name": "Турция",
		"neighbors": ["bulgaria", "greece", "trnc", "cyprus"]
	},
	"vojvodina": {
		"name": "Воеводина",
		"neighbors": ["croatia", "hungary", "romania", "serbia", "bosnia"]
	},
};