var data = {
	"russia": {
		"name": "Россия",
		"genetive": "России",
		"neighbors": ["karelia", "ingria", "estonia", "latgalia", "belarus", "ukraine", "novorussia", "crimea"],
		"secessionists": ["sapmi", "crimea", "karelia", "ingria", "prussia"]
	},
	"finland": {
		"name": "Финляндия",
		"genetive": "Финляндии",
		"neighbors": ["karelia", "ingria", "sapmi", "aland", "bornholm", "estonia"],
		"secessionists": ["sapmi", "aland"],
		"capital": {
			"name": "Хельсинки",
			"coords": [2035, 781]
		}
	},
	"sapmi": {
		"name": "Лапландия",
		"neighbors": ["karelia", "finland", "norway", "sweden"],
		"part_of": ["norway", "sweden", "finland", "russia"]
	},
	"norway": {
		"name": "Норвегия",
		"genetive": "Норвегии",
		"neighbors": ["sapmi", "sweden", "denmark"],
		"secessionists": ["sapmi"],
		"capital": {
			"name": "Осло",
			"coords": [1563, 851]
		}
	},
	"sweden": {
		"name": "Швеция",
		"genetive": "Швеции",
		"neighbors": ["sapmi", "norway", "estonia", "aland", "bornholm", "skaneland"],
		"secessionists": ["sapmi", "skaneland"],
		"capital": {
			"name": "Стокгольм",
			"coords": [1822, 872]
		}
	},
	"iceland": {
		"name": "Исландия",
		"neighbors": ["faroe"],
		"capital": {
			"name": "Рейкьявик",
			"coords": [646, 340]
		}
	},
	"ingria": {
		"name": "Ингерманландия",
		"neighbors": ["karelia", "finland", "russia", "estonia"],
		"part_of": ["russia"],
		"capital": {
			"name": "Санкт-Петербург",
			"coords": [2221, 749]
		}
	},
	"karelia": {
		"name": "Карелия",
		"neighbors": ["finland", "sapmi", "russia", "ingria"],
		"part_of": ["russia"],
		"capital": {
			"name": "Петрозаводск",
			"coords": [2304, 581]
		}
	},
	"aland": {
		"name": "Аланды",
		"neighbors": ["finland", "sweden", "skaneland"],
		"part_of": ["finland"],
		"capital": {
			"name": "Мариехамн",
			"coords": [1877, 812]
		}
	},
	"bornholm": {
		"name": "Борнхольм",
		"neighbors": ["finland", "sweden", "skaneland", "denmark"],
		"part_of": ["denmark"],
		"capital": {
			"name": "Рённе",
			"coords": [1723, 1167]
		}
	},
	"estonia": {
		"name": "Эстония",
		"neighbors": ["ingria", "finland", "russia", "sweden", "latgalia", "latvia"],
		"capital": {
			"name": "Таллин",
			"coords": [2046, 827]
		}
	},
	"faroe": {
		"name": "Фарерские острова",
		"neighbors": ["iceland", "shetland"],
		"part_of": ["denmark"],
		"capital": {
			"name": "Торсхавн",
			"coords": [1011, 644]
		}
	},
	"latgalia": {
		"name": "Латгалия",
		"neighbors": ["estonia", "latvia", "russia", "belarus"],
		"part_of": ["latvia"],
		"capital": {
			"name": "Даугавпилс",
			"coords": [2163, 1045]
		}
	},
	"latvia": {
		"name": "Латвия",
		"neighbors": ["estonia", "latgalia", "belarus", "samogitia", "lithuania"],
		"secessionists": ["latgalia"],
		"capital": {
			"name": "Рига",
			"coords": [2056, 990]
		}
	},
	"lithuania": {
		"name": "Литва",
		"genetive": "Литвы",
		"neighbors": ["samogitia", "prussia", "latvia", "belarus", "poland"],
		"secessionists": ["samogitia"],
		"capital": {
			"name": "Вильнюс",
			"coords": [2136, 1140]
		}
	},
	"prussia": {
		"name": "Пруссия",
		"neighbors": ["samogitia", "lithuania", "poland"],
		"part_of": ["russia"],
		"capital": {
			"name": "Кёнигсберг",
			"coords": [1949, 1170]
		}
	},
	"samogitia": {
		"name": "Жемайтия",
		"neighbors": ["lithuania", "latvia", "prussia"],
		"part_of": ["lithuania"],
		"capital": {
			"name": "Тельшяй",
			"coords": [2003, 1078]
		}
	},
	"skaneland": {
		"name": "Скания",
		"neighbors": ["sweden", "denmark", "bornholm", "aland"],
		"part_of": ["sweden"],
		"capital": {
			"name": "Мальмё",
			"coords": [1659, 1134]
		}
	},
	"belarus": {
		"name": "Беларусь",
		"neighbors": ["russia", "lithuania", "latgalia", "ukraine", "latvia", "poland"]
	},
	"denmark": {
		"name": "Дания",
		"genetive": "Дании",
		"neighbors": ["bornholm", "slesvig", "skaneland", "norway"],
		"secessionists": ["bornholm", "faroe"],
		"capital": {
			"name": "Копенгаген",
			"coords": [1642, 1131]
		}
	},
	"flanders": {
		"name": "Фландрия",
		"neighbors": ["netherlands", "wallonia", "france"],
		"part_of": ["belgium"],
		"capital": {
			"name": "Брюссель",
			"coords": [1300, 1453]
		}
	},
	"frisia": {
		"name": "Фризия",
		"neighbors": ["germany", "slesvig", "netherlands"],
		"part_of": ["germany", "netherlands"]
	},
	"germany": {
		"name": "Германия",
		"genetive": "Германии",
		"neighbors": ["poland", "netherlands", "frisia", "wallonia", "luxembourg", "france", "alsace", "bavaria", "switzerland", "czech", "slesvig", "austria"],
		"secessionists": ["frisia", "bavaria", "slesvig"]
	},
	"ireland": {
		"name": "Ирландия",
		"genetive": "Ирландии",
		"neighbors": ["ulster", "scotland", "wales", "isle_of_man"],
		"secessionists": ["ulster"],
		"capital": {
			"name": "Дублин",
			"coords": [889, 1218]
		}
	},
	"luxembourg": {
		"name": "Люксембург",
		"neighbors": ["wallonia", "france", "germany"]
	},
	"isle_of_man": {
		"name": "Остров Мэн",
		"neighbors": ["ulster", "ireland", "scotland", "england", "wales"],
		"part_of": ["uk"],
		"capital": {
			"name": "Дуглас",
			"coords": [971, 1180]
		}
	},
	"netherlands": {
		"name": "Нидерланды",
		"genetive": "Нидерландов",
		"neighbors": ["frisia", "flanders", "france", "germany", "wallonia"],
		"secessionists": ["frisia"],
		"capital": {
			"name": "Амстердам",
			"coords": [1337, 1354]
		}
	},
	"poland": {
		"name": "Польша",
		"genetive": "Польши",
		"neighbors": ["prussia", "germany", "czech", "silesia", "moravia", "slovakia", "ukraine", "belarus", "lithuania", "ruthenia"],
		"secessionists": ["silesia"]
	},
	"scotland": {
		"name": "Шотландия",
		"neighbors": ["england", "ulster", "isle_of_man", "ireland", "outer_hebrides", "orkney", "shetland"],
		"part_of": ["uk"],
		"capital": {
			"name": "Эдинбург",
			"coords": [1023, 1057]
		}
	},
	"slesvig": {
		"name": "Шлезвиг",
		"neighbors": ["denmark", "germany", "frisia"],
		"part_of": ["germany"],
		"capital": {
			"name": "Гамбург",
			"coords": [1519, 1232]
		}
	},
	"ulster": {
		"name": "Ольстер",
		"neighbors": ["ireland", "scotland", "isle_of_man"],
		"part_of": ["uk", "ireland"],
		"capital": {
			"name": "Белфаст",
			"coords": [921, 1135]
		}
	},
	"wallonia": {
		"name": "Валлония",
		"neighbors": ["luxembourg", "flanders", "france", "germany", "netherlands"],
		"part_of": ["belgium"],
		"capital": {
			"name": "Намюр",
			"coords": [1316, 1479]
		}
	},
	"novorussia": {
		"name": "Новороссия",
		"neighbors": ["russia", "ukraine"],
		"part_of": ["ukraine"]
	},
	"cornwall": {
		"name": "Корнуолл",
		"neighbors": ["devon", "channel_islands"],
		"part_of": ["uk"],
		"capital": {
			"name": "Труро",
			"coords": [894, 1435]
		}
	},
	"devon": {
		"name": "Девон",
		"neighbors": ["cornwall", "wessex", "channel_islands"],
		"part_of": ["uk"],
		"capital": {
			"name": "Эксетер",
			"coords": [962, 1422]
		}
	},
	"england": {
		"name": "Англия",
		"neighbors": ["wales", "wessex", "isle_of_wight", "isle_of_man", "yorkshire", "scotland", "france"],
		"part_of": ["uk"],
		"capital": {
			"name": "Лондон",
			"coords": [1115, 1389]
		}
	},
	"wales": {
		"name": "Уэльс",
		"neighbors": ["england", "ireland", "isle_of_man", "wessex"],
		"part_of": ["uk"],
		"capital": {
			"name": "Кардифф",
			"coords": [988, 1372]
		}
	},
	"wessex": {
		"name": "Уэссекс",
		"neighbors": ["england", "isle_of_wight", "wales", "devon", "channel_islands"],
		"part_of": ["uk"],
		"capital": {
			"name": "Бристоль",
			"coords": [1012, 1369]
		}
	},
	"isle_of_wight": {
		"name": "Остров Уайт",
		"neighbors": ["england", "wessex", "channel_islands", "normandy"],
		"part_of": ["uk"],
		"capital": {
			"name": "Ньюпорт",
			"coords": [1058, 1435]
		}
	},
	"yorkshire": {
		"name": "Йоркшир",
		"neighbors": ["england"],
		"part_of": ["uk"],
		"capital": {
			"name": "Йорк",
			"coords": [1100, 1215]
		}
	},
	"bavaria": {
		"name": "Бавария",
		"neighbors": ["germany", "czech", "austria"],
		"part_of": ["germany"]
	},
	"czech": {
		"name": "Чехия",
		"genetive": "Чехии",
		"neighbors": ["germany", "bavaria", "austria", "moravia", "poland", "silesia"],
		"secessionists": ["moravia", "silesia"]
	},
	"crimea": {
		"name": "Крым",
		"neighbors": ["ukraine", "russia"],
		"part_of": ["ukraine", "russia"]
	},
	"hungary": {
		"name": "Венгрия",
		"neighbors": ["slovakia", "austria", "ruthenia", "romania", "slovenia", "croatia", "vojvodina"]
	},
	"moravia": {
		"name": "Моравия",
		"neighbors": ["slovakia", "silesia", "czech", "austria", "poland"],
		"part_of": ["czech"]
	},
	"ruthenia": {
		"name": "Закарпатье",
		"neighbors": ["ukraine", "poland", "slovakia", "hungary", "romania"],
		"part_of": ["ukraine"]
	},
	"silesia": {
		"name": "Силезия",
		"neighbors": ["poland", "czech", "moravia", "slovakia"],
		"part_of": ["poland", "czech"]
	},
	"slovakia": {
		"name": "Словакия",
		"neighbors": ["poland", "silesia", "moravia", "austria", "hungary", "ruthenia"]
	},
	"ukraine": {
		"name": "Украина",
		"genetive": "Украины",
		"neighbors": ["belarus", "poland", "ruthenia", "romania", "moldavia", "transnistria", "crimea", "novorussia", "russia", "gagauzia"],
		"secessionists": ["crimea", "ruthenia", "novorussia"]
	},
	"alsace": {
		"name": "Эльзас",
		"neighbors": ["germany", "france", "switzerland"],
		"part_of": ["france"]
	},
	"austria": {
		"name": "Австрия",
		"genetive": "Австрии",
		"neighbors": ["south_tyrol", "carinthia", "slovenia", "hungary", "slovakia", "moravia", "czech", "bavaria", "germany", "liechtenstein", "switzerland", "friuli-venezia_giulia", "venetia"],
		"secessionists": ["carinthia"]
	},
	"brittany": {
		"name": "Бретань",
		"neighbors": ["france", "channel_islands", "normandy"],
		"part_of": ["france"]
	},
	"carinthia": {
		"name": "Каринтия",
		"neighbors": ["austria", "slovenia", "friuli-venezia_giulia", "south_tyrol", "venetia"],
		"part_of": ["austria"]
	},
	"channel_islands": {
		"name": "Нормандские острова",
		"neighbors": ["normandy", "brittany", "wessex", "devon", "cornwall", "isle_of_wight"],
		"part_of": ["uk"]
	},
	"france": {
		"name": "Франция",
		"genetive": "Франции",
		"neighbors": ["england", "normandy", "brittany", "occitania", "savoy", "switzerland", "alsace", "germany", "luxembourg", "wallonia", "flanders", "netherlands"],
		"secessionists": ["alsace", "brittany", "normandy", "occitania", "savoy", "corsica"]
	},
	"liechtenstein": {
		"name": "Лихтенштейн",
		"neighbors": ["switzerland", "austria"]
	},
	"normandy": {
		"name": "Нормандия",
		"neighbors": ["isle_of_wight", "channel_islands", "brittany", "france"],
		"part_of": ["france"]
	},
	"occitania": {
		"name": "Окситания",
		"neighbors": ["france", "savoy", "padania", "liguria", "andorra", "aragon", "basque", "catalonia", "corsica"],
		"part_of": ["france"],
		"capital": {
			"name": "Марсель",
			"coords": [1312, 1970]
		}
	},
	"savoy": {
		"name": "Савойя",
		"neighbors": ["france", "occitania", "switzerland", "padania"],
		"part_of": ["france"]
	},
	"switzerland": {
		"name": "Швейцария",
		"neighbors": ["alsace", "france", "savoy", "austria", "liechtenstein", "germany", "padania", "south_tyrol"]
	},
	"balearic_islands": {
		"name": "Балеарские острова",
		"neighbors": ["catalonia", "sardinia", "castile", "valencia"],
		"part_of": ["spain"],
		"capital": {
			"name": "Пальма",
			"coords": [1158, 2208]
		}
	},
	"outer_hebrides": {
		"name": "Внешние Гербидские острова",
		"neighbors": ["scotland"],
		"part_of": ["uk"],
		"capital": {
			"name": "Сторновей",
			"coords": [963, 897]
		}
	},
	"orkney": {
		"name": "Оркнейские острова",
		"neighbors": ["scotland", "shetland"],
		"part_of": ["uk"],
		"capital": {
			"name": "Кёркуолл",
			"coords": [1089, 870]
		}
	},
	"shetland": {
		"name": "Шетландские острова",
		"neighbors": ["scotland", "orkney", "faroe"],
		"part_of": ["uk"],
		"capital": {
			"name": "Леруик",
			"coords": [1164, 802]
		}
	},
	"andalusia": {
		"name": "Андалусия",
		"neighbors": ["portugal", "extremadura", "castile", "murcia", "leon"],
		"part_of": ["spain"],
		"capital": {
			"name": "Севилья",
			"coords": [683, 2289]
		}
	},
	"andorra": {
		"name": "Андорра",
		"neighbors": ["catalonia", "occitania"],
		"capital": {
			"name": "Андорра-ла-Велья",
			"coords": [1125, 2000]
		}
	},
	"aragon": {
		"name": "Арагон",
		"neighbors": ["occitania", "basque", "catalonia", "castile", "valencia"],
		"part_of": ["spain"],
		"capital": {
			"name": "Сарагоса",
			"coords": [986, 2044]
		}
	},
	"asturia": {
		"name": "Астурия",
		"neighbors": ["galicia", "leon", "cantabria"],
		"part_of": ["spain"],
		"capital": {
			"name": "Авьедо",
			"coords": [765, 1880]
		}
	},
	"basque": {
		"name": "Баскония",
		"neighbors": ["occitania", "aragon", "castile", "cantabria"],
		"part_of": ["spain"],
		"capital": {
			"name": "Виктория-Гастейс",
			"coords": [906, 1949]
		}
	},
	"cantabria": {
		"name": "Кантабрия",
		"neighbors": ["basque", "castile", "leon", "asturia"],
		"part_of": ["spain"],
		"capital": {
			"name": "Сантандер",
			"coords": [867, 1904]
		}
	},
	"castile": {
		"name": "Кастилия",
		"neighbors": ["cantabria", "basque", "aragon", "valencia", "murcia", "andalusia", "extremadura", "leon", "balearic_islands"],
		"part_of": ["spain"],
		"capital": {
			"name": "Мадрид",
			"coords": [838, 2105]
		}
	},
	"catalonia": {
		"name": "Каталония",
		"neighbors": ["occitania", "andorra", "aragon", "valencia", "balearic_islands"],
		"part_of": ["spain"],
		"capital": {
			"name": "Барселона",
			"coords": [1139, 2080]
		}
	},
	"extremadura": {
		"name": "Эстремадура",
		"neighbors": ["portugal", "leon", "castile", "andalusia"],
		"part_of": ["spain"],
		"capital": {
			"name": "Мерида",
			"coords": [686, 2174]
		}
	},
	"galicia": {
		"name": "Галисия",
		"neighbors": ["asturia", "leon", "portugal"],
		"part_of": ["spain"],
		"capital": {
			"name": "Сантьяго-де-Компостела",
			"coords": [627, 1893]
		}
	},
	"leon":  {
		"name": "Леон",
		"neighbors": ["galicia", "asturia", "cantabria", "castile", "andalusia", "portugal", "extremadura"],
		"part_of": ["spain"],
		"capital": {
			"name": "Леон",
			"coords": [765, 1947]
		}
	},
	"murcia": {
		"name": "Мурсия",
		"neighbors": ["andalusia", "castile", "valencia"],
		"part_of": ["spain"],
		"capital": {
			"name": "Мурсия",
			"coords": [947, 2281]
		}
	},
	"portugal": {
		"name": "Португалия",
		"neighbors": ["galicia", "leon", "extremadura", "andalusia"],
		"capital": {
			"name": "Лиссабон",
			"coords": [544, 2144]
		}
	},
	"valencia": {
		"name": "Валенсия",
		"neighbors": ["murcia", "castile", "aragon", "catalonia", "balearic_islands"],
		"part_of": ["spain"],
		"capital": {
			"name": "Валенсия",
			"coords": [1000, 2188]
		}
	},
	"corsica": {
		"name": "Корсика",
		"neighbors": ["liguria", "occitania", "padania", "italy", "sardinia"],
		"part_of": ["france"],
		"capital": {
			"name": "Аяччо",
			"coords": [1480, 2069]
		}
	},
	"friuli-venezia_giulia": {
		"name": "Фриули-Венеция Джулия",
		"neighbors": ["venetia", "carinthia", "austria", "slovenia"],
		"part_of": ["italy"]
	},
	"italy": {
		"name": "Италия",
		"genetive": "Италии",
		"neighbors": ["padania", "corsica", "sardinia", "sicily"],
		"secessionists": ["padania", "venetia", "liguria", "south_tyrol", "friuli-venezia_giulia", "sicily", "sardinia"]
	},
	"liguria": {
		"name": "Лигурия",
		"neighbors": ["padania", "occitania", "corsica"],
		"part_of": ["italy"],
		"capital": {
			"name": "Генуя",
			"coords": [1485, 1900]
		}
	},
	"malta": {
		"name": "Мальта",
		"neighbors": ["sicily"]
	},
	"padania": {
		"name": "Падания",
		"neighbors": ["switzerland", "savoy", "occitania", "liguria", "corsica", "sardinia", "italy", "venetia", "south_tyrol"],
		"part_of": ["italy"]
	},
	"sardinia": {
		"name": "Сардиния",
		"neighbors": ["corsica", "sicily", "balearic_islands", "italy", "padania"],
		"part_of": ["italy"],
		"capital": {
			"name": "Кальяри",
			"coords": [1496, 2251]
		}
	},
	"sicily": {
		"name": "Сицилия",
		"neighbors": ["italy", "malta", "sardinia"],
		"part_of": ["italy"],
		"capital": {
			"name": "Палермо",
			"coords": [1727, 2321]
		}
	},
	"south_tyrol": {
		"name": "Южный Тироль",
		"neighbors": ["austria", "switzerland", "padania", "venetia", "carinthia"],
		"part_of": ["italy"]
	},
	"venetia": {
		"name": "Венеция",
		"neighbors": ["south_tyrol", "padania", "friuli-venezia_giulia", "carinthia", "austria"],
		"part_of": ["italy"]
	},
	"albania": {
		"name": "Албания",
		"genetive": "Албании",
		"neighbors": ["crna_gora", "sandzak", "kosovo", "fyrom", "northern_epirus"],
		"secessionists": ["northern_epirus"],
		"capital": {
			"name": "Тирана",
			"coords": [2039, 2073]
		}
	},
	"bosnia": {
		"name": "Босния и Герцеговина",
		"neighbors": ["croatia", "vojvodina", "serbia", "crna_gora", "sandzak"],
		"capital": {
			"name": "Сараево",
			"coords": [1946, 1920]
		}
	},
	"bulgaria": {
		"name": "Болгария",
		"neighbors": ["romania", "greece", "fyrom", "serbia"],
		"capital": {
			"name": "Болгария",
			"coords": [2206, 1956]
		}
	},
	"crna_gora": {
		"name": "Черногория",
		"genetive": "Черногории",
		"neighbors": ["croatia", "bosnia", "sandzak", "albania"],
		"secessionists": ["sandzak"],
		"capital": {
			"name": "Подгорица",
			"coords": [2006, 2001]
		}
	},
	"croatia": {
		"name": "Хорватия",
		"genetive": "Хорватии",
		"neighbors": ["slovenia", "istria", "hungary", "vojvodina", "bosnia", "crna_gora"],
		"secessionists": ["istria"],
		"capital": {
			"name": "Загреб",
			"coords": [1824, 1797]
		}
	},
	"cyprus": {
		"name": "Кипр",
		"genetive": "Кипра",
		"neighbors": ["trnc", "greece"],
		"secessionists": ["trnc"],
		"capital": {
			"name": "Никосия",
			"coords": [2833, 2325]
		}
	},
	"fyrom": {
		"name": "Македония",
		"neighbors": ["kosovo", "serbia", "bulgaria", "greece", "northern_epirus", "albania"],
		"capital": {
			"name": "Скопье",
			"coords": [2112, 2021]
		}
	},
	"gagauzia": {
		"name": "Гагаузия",
		"neighbors": ["moldavia", "transnistria", "ukraine", "romania"],
		"part_of": ["moldavia"]
	},
	"greece": {
		"name": "Греция",
		"neighbors": ["northern_epirus", "fyrom", "bulgaria", "cyprus"],
		"capital": {
			"name": "Афины",
			"coords": [2274, 2269]
		}
	},
	"istria": {
		"name": "Истрия",
		"neighbors": ["slovenia", "croatia"],
		"part_of": ["croatia"],
		"capital": {
			"name": "Пула",
			"coords": [1727, 1866]
		}
	},
	"kosovo": {
		"name": "Косово",
		"neighbors": ["sandzak", "serbia", "fyrom", "albania"],
		"part_of": ["serbia"],
		"capital": {
			"name": "Приштина",
			"coords": [2088, 1978]
		}
	},
	"moldavia": {
		"name": "Молдавия",
		"genetive": "Молдавии",
		"neighbors": ["romania", "ukraine", "transnistria", "gagauzia"],
		"secessionists": ["transnistria", "gagauzia"]
	},
	"northern_epirus": {
		"name": "Северный Эпир",
		"neighbors": ["albania", "fyrom", "greece"],
		"part_of": ["albania"],
		"capital": {
			"name": "Корча",
			"coords": [2099, 2113]
		}
	},
	"romania": {
		"name": "Румыния",
		"genetive": "Румынии",
		"neighbors": ["hungary", "ukraine", "moldavia", "gagauzia", "bulgaria", "serbia", "vojvodina", "ruthenia", "szekely_land"],
		"secessionists": ["szekely_land"]
	},
	"sandzak": {
		"name": "Санджак",
		"neighbors": ["bosnia", "serbia", "kosovo", "albania", "crna_gora"],
		"part_of": ["serbia", "crna_gora"],
		"capital": {
			"name": "Нови-Пазар",
			"coords": [2059, 1949]
		}
	},
	"serbia": {
		"name": "Сербия",
		"genetive": "Сербии",
		"neighbors": ["vojvodina", "romania", "bulgaria", "fyrom", "kosovo", "sandzak", "bosnia"],
		"secessionists": ["sandzak", "kosovo", "vojvodina"],
		"capital": {
			"name": "Белград",
			"coords": [2044, 1841]
		}
	},
	"slovenia": {
		"name": "Словения",
		"neighbors": ["friuli-venezia_giulia", "carinthia", "austria", "hungary", "croatia", "istria"],
		"capital": {
			"name": "Любляна",
			"coords": [1753, 1782]
		}
	},
	"szekely_land": {
		"name": "Секейский край",
		"neighbors": ["romania"],
		"part_of": ["romania"]
	},
	"transnistria": {
		"name": "Приднестровье",
		"neighbors": ["ukraine", "moldavia", "gagauzia"],
		"part_of": ["moldavia"]
	},
	"trnc": {
		"name": "Турецкая Республика Северного Кипра",
		"neighbors": ["cyprus"],
		"part_of": ["cyprus"],
		"capital": {
			"name": "Никосия"
		}
	},
	"vojvodina": {
		"name": "Воеводина",
		"neighbors": ["croatia", "hungary", "romania", "serbia", "bosnia"],
		"part_of": ["serbia"],
		"capital": {
			"name": "Нови-Сад",
			"coords": [2012, 1812]
		}
	},
	"turkey": {
		"name": "Турция",
		"disabled": true
	},
	"algeria": {
		"name": "Алжир",
		"disabled": true
	},
	"morocco": {
		"name": "Марокко",
		"disabled": true
	},
	"tunisia": {
		"name": "Тунис",
		"disabled": true
	},
	"uk": {
		"name": "Великобритания",
		"genetive": "Великобритании",
		"secessionists": ["scotland", "england", "wales", "ulster", "cornwall", "devon", "isle_of_wight", "isle_of_man", "wessex", "yorkshire", "channel_islands", "outer_hebrides", "orkney", "shetland"]
	},
	"spain": {
		"name": "Испания",
		"genetive": "Испании",
		"secessionists": ["castile", "catalonia", "basque", "balearic_islands", "andalusia", "aragon", "asturia", "cantabria", "extremadura", "galicia", "leon", "murcia", "valencia"]
	},
	"belgium": {
		"name": "Бельгия",
		"genetive": "Бельгии",
		"secessionists": ["flanders", "wallonia"]
	}
};