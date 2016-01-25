var data = {
	"finland": {
		"name": "Финляндия",
		"population": "5.5M",
		"capital": "Хельсинки",
		"large_cities": ["Хельсинки", "Эспоо", "Тампере"],
		"gdp": "",
		"flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/800px-Flag_of_Finland.svg.png",
		"neighbors": ["karelia", "ingria", "sapmi"]
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
		"neighbors": ["karelia", "sapmi", "sweden"]
	},
	"sweden": {
		"name": "Швеция",
		"population": "10M",
		"capital": "Стокгольм",
		"large_cities": ["Стокгольм", "Гётеборг", "Мальмё"],
		"gdp": "",
		"flag": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1600px-Flag_of_Sweden.svg.png",
		"neighbors": ["sapmi", "norway", "estonia"]
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
		"neighbors": ["karelia", "finland", "russia"]
	},
	"karelia": {
		"name": "Карелия",
		"population": "600K",
		"capital": "Петрозаводск",
		"large_cities": ["Петрозаводск", "Кондопога"],
		"gdp": "",
		"flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_Karelia.svg/324px-Flag_of_Karelia.svg.png",
		"neighbors": ["finland", "sapmi", "russia"]
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
		"neighbors": ["ingria", "finland", "russia", "sweden"]
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
		"neighbors": ["samogitia", "prussia", "latvia", "belarus"]
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
		"neighbors": ["sweden", "denmark", "bornholm"]
	},
	"belarus": {
		"name": "Беларусь",
		"neighbors": ["russia", "lithuania", "latgalia", "ukraine", "latvia"]
	},
	"denmark": {
		"name": "Дания",
		"neighbors": ["sweden", "bornholm", "slezvig", "skaneland"]
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
		"neighbors": ["poland", "netherlands", "frisia", "wallonia", "luxemburg", "france", "alsace", "bavaria", "switzerland", "czech"]
	},
	"ireland": {
		"name": "Ирландия",
		"neighbors": ["ulster", "scotland", "wales"]
	},
	"luxemburg": {
		"name": "Люксембург",
		"neighbors": ["wallonia", "france", "germany"]
	},
	"isle_of_man": {
		"name": "Остров Мэн",
		"neighbors": ["ulster", "ireland", "scotland"]
	},
	"netherlands": {
		"name": "Нидерланды",
		"neighbors": ["frisia", "flanders", "france", "germany"]
	},
	"poland": {
		"name": "Польша",
		"neighbors": ["prussia", "germany", "czech", "silesia", "moravia", "slovakia", "ukraine", "belarus", "lithuania"]
	},
	"scotland": {
		"name": "Шотландия",
		"neighbors": ["england", "ulster", "isle_of_man"]
	},
	"slezvig": {
		"name": "Шлезвиг",
		"neighbors": ["denmark", "germany"]
	},
	"ulster": {
		"name": "Ульстер",
		"neighbors": ["ireland", "scotland", "isle_of_man"]
	},
	"wallonia": {
		"name": "Валлония",
		"neighbors": ["luxemburg", "flanders", "france", "germany", "netherlands"]
	},
	"portugal": {
		"name": "Португалия",
		"neighbors": ["@TODO"]
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
		"neighbors": ["wales", "wessex", "isle_of_wight", "isle_of_man", "yorkshire", "scotland"]
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
		"neighbors": ["germany", "bavaria", "austria", "moravia", "poland"]
	},
	"crimea": {
		"name": "Крым",
		"neighbors": ["ukraine"]
	},
	"hungary": {
		"name": "Венгрия",
		"neighbors": ["slovakia", "austria", "ruthenia", "romania", "slovenia", "croatia", "vojvodina"]
	},
	"moravia": {
		"name": "Моравия",
		"neighbors": ["slovakia", "silesia", "czech", "austria"]
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
		"neighbors": ["belarus", "poland", "ruthenia", "romania", "moldavia", "transnistria", "crimea", "novorussia", "russia"]
	},
	"alsace": {
		"name": "Эльзас",
		"neighbors": ["germany", "france", "switzerland"]
	},
	"austria": {
		"name": "Австрия",
		"neighbors": ["south_tyrol", "carinthia", "slovenia", "hungary", "slovakia", "moravia", "czech", "bavaria", "germany", "lichtenstein", "switzerland"]
	},
	"britanny": {
		"name": "Бретань",
		"neighbors": ["france", "channel_islands", "normandy"]
	},
	"carinthia": {
		"name": "Каринтия",
		"neighbors": ["austria", "slovenia", "friuli"]
	},
	"channel_islands": {
		"name": "Нормандские острова",
		"neighbors": ["normandy", "britanny", "wessex", "devon", "cornwall", "isle_of_wight"]
	},
	"france": {
		"name": "Франция",
		"neighbors": ["england", "normandy", "britanny", "occitania", "savoy", "switzerland", "alsace", "germany", "luxemburg", "wallonia", "flanders"]
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
		"neighbors": ["france", "savoy", "@TODO"]
	},
	"savoy": {
		"name": "Савойя",
		"neighbors": ["france", "occitania", "switzerland", "@TODO"]
	},
	"switzerland": {
		"name": "Швейцария",
		"neighbors": ["alsace", "france", "savoy", "austria", "lichtenstein", "germany", "@TODO"]
	},
	"balearic_islands": {
		"name": "Балеарские острова",
		"neighbors": ["@TODO"]
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
};