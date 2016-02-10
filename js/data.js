var data = {
	"russia": {
		"name": "Россия",
		"genetive": "России",
		"neighbors": ["karelia", "ingria", "estonia", "latgalia", "belarus", "ukraine", "novorussia", "crimea"]
	},
	"finland": {
		"name": "Финляндия",
		"genetive": "Финляндии",
		"neighbors": ["karelia", "ingria", "sapmi", "aland", "bornholm", "estonia"]
	},
	"sapmi": {
		"name": "Лапландия",
		"neighbors": ["karelia", "finland", "norway", "sweden"],
		"part_of": ["norway", "sweden", "finland", "russia"]
	},
	"norway": {
		"name": "Норвегия",
		"genetive": "Норвегии",
		"neighbors": ["sapmi", "sweden", "denmark"]
	},
	"sweden": {
		"name": "Швеция",
		"genetive": "Швеции",
		"neighbors": ["sapmi", "norway", "estonia", "aland", "bornholm", "skaneland"]
	},
	"iceland": {
		"name": "Исландия",
		"neighbors": ["faroe"]
	},
	"ingria": {
		"name": "Ингерманландия",
		"neighbors": ["karelia", "finland", "russia", "estonia"],
		"part_of": ["russia"]
	},
	"karelia": {
		"name": "Карелия",
		"neighbors": ["finland", "sapmi", "russia", "ingria"],
		"part_of": ["russia"]
	},
	"aland": {
		"name": "Аланды",
		"neighbors": ["finland", "sweden", "skaneland"],
		"part_of": ["finland"]
	},
	"bornholm": {
		"name": "Борнхольм",
		"neighbors": ["finland", "sweden", "skaneland", "denmark"],
		"part_of": ["denmark"]
	},
	"estonia": {
		"name": "Эстония",
		"neighbors": ["ingria", "finland", "russia", "sweden", "latgalia", "latvia"]
	},
	"faroe": {
		"name": "Фареры",
		"neighbors": ["iceland", "shetland"],
		"part_of": ["denmark"]
	},
	"latgalia": {
		"name": "Латгалия",
		"neighbors": ["estonia", "latvia", "russia", "belarus"],
		"part_of": ["latvia"]
	},
	"latvia": {
		"name": "Латвия",
		"neighbors": ["estonia", "latgalia", "belarus", "samogitia", "lithuania"]
	},
	"lithuania": {
		"name": "Литва",
		"genetive": "Литвы",
		"neighbors": ["samogitia", "prussia", "latvia", "belarus", "poland"]
	},
	"prussia": {
		"name": "Пруссия",
		"neighbors": ["samogitia", "lithuania", "poland"],
		"part_of": ["russia"]
	},
	"samogitia": {
		"name": "Жемайтия",
		"neighbors": ["lithuania", "latvia", "prussia"],
		"part_of": ["lithuania"]
	},
	"skaneland": {
		"name": "Сконеланд",
		"neighbors": ["sweden", "denmark", "bornholm", "aland"],
		"part_of": ["sweden"]
	},
	"belarus": {
		"name": "Беларусь",
		"neighbors": ["russia", "lithuania", "latgalia", "ukraine", "latvia", "poland"]
	},
	"denmark": {
		"name": "Дания",
		"genetive": "Дании",
		"neighbors": ["bornholm", "slesvig", "skaneland", "norway"]
	},
	"flanders": {
		"name": "Фландрия",
		"neighbors": ["netherlands", "wallonia", "france"],
		"part_of": ["belgium"]
	},
	"frisia": {
		"name": "Фризия",
		"neighbors": ["germany", "slesvig", "netherlands"],
		"part_of": ["germany", "netherlands"]
	},
	"germany": {
		"name": "Германия",
		"genetive": "Германии",
		"neighbors": ["poland", "netherlands", "frisia", "wallonia", "luxembourg", "france", "alsace", "bavaria", "switzerland", "czech", "slesvig", "austria"]
	},
	"ireland": {
		"name": "Ирландия",
		"genetive": "Ирландии",
		"neighbors": ["ulster", "scotland", "wales", "isle_of_man"]
	},
	"luxembourg": {
		"name": "Люксембург",
		"neighbors": ["wallonia", "france", "germany"]
	},
	"isle_of_man": {
		"name": "Остров Мэн",
		"neighbors": ["ulster", "ireland", "scotland", "england", "wales"],
		"part_of": ["uk"]
	},
	"netherlands": {
		"name": "Нидерланды",
		"genetive": "Нидерландов",
		"neighbors": ["frisia", "flanders", "france", "germany", "wallonia"]
	},
	"poland": {
		"name": "Польша",
		"genetive": "Польши",
		"neighbors": ["prussia", "germany", "czech", "silesia", "moravia", "slovakia", "ukraine", "belarus", "lithuania", "ruthenia"]
	},
	"scotland": {
		"name": "Шотландия",
		"neighbors": ["england", "ulster", "isle_of_man", "ireland", "outer_hebrides", "orkney", "shetland"],
		"part_of": ["uk"]
	},
	"slesvig": {
		"name": "Шлезвиг",
		"neighbors": ["denmark", "germany", "frisia"],
		"part_of": ["germany"]
	},
	"ulster": {
		"name": "Ольстер",
		"neighbors": ["ireland", "scotland", "isle_of_man"],
		"part_of": ["uk", "ireland"]
	},
	"wallonia": {
		"name": "Валлония",
		"neighbors": ["luxembourg", "flanders", "france", "germany", "netherlands"],
		"part_of": ["belgium"]
	},
	"novorussia": {
		"name": "Новороссия",
		"neighbors": ["russia", "ukraine"],
		"part_of": ["ukraine"]
	},
	"cornwall": {
		"name": "Корнуолл",
		"neighbors": ["devon", "channel_islands"],
		"part_of": ["uk"]
	},
	"devon": {
		"name": "Девон",
		"neighbors": ["cornwall", "wessex", "channel_islands"],
		"part_of": ["uk"]
	},
	"england": {
		"name": "Англия",
		"neighbors": ["wales", "wessex", "isle_of_wight", "isle_of_man", "yorkshire", "scotland", "france"],
		"part_of": ["uk"]
	},
	"wales": {
		"name": "Уэльс",
		"neighbors": ["england", "ireland", "isle_of_man", "wessex"],
		"part_of": ["uk"]
	},
	"wessex": {
		"name": "Уэссекс",
		"neighbors": ["england", "isle_of_wight", "wales", "devon", "channel_islands"],
		"part_of": ["uk"]
	},
	"isle_of_wight": {
		"name": "Остров Уайт",
		"neighbors": ["england", "wessex", "channel_islands", "normandy"],
		"part_of": ["uk"]
	},
	"yorkshire": {
		"name": "Йоркшир",
		"neighbors": ["england"],
		"part_of": ["uk"]
	},
	"bavaria": {
		"name": "Бавария",
		"neighbors": ["germany", "czech", "austria"],
		"part_of": ["germany"]
	},
	"czech": {
		"name": "Чехия",
		"genetive": "Чехии",
		"neighbors": ["germany", "bavaria", "austria", "moravia", "poland", "silesia"]
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
		"neighbors": ["belarus", "poland", "ruthenia", "romania", "moldavia", "transnistria", "crimea", "novorussia", "russia", "gagauzia"]
	},
	"alsace": {
		"name": "Эльзас",
		"neighbors": ["germany", "france", "switzerland"],
		"part_of": ["france"]
	},
	"austria": {
		"name": "Австрия",
		"genetive": "Австрии",
		"neighbors": ["south_tyrol", "carinthia", "slovenia", "hungary", "slovakia", "moravia", "czech", "bavaria", "germany", "liechtenstein", "switzerland", "friuli-venezia_giulia", "venetia"]
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
		"neighbors": ["england", "normandy", "brittany", "occitania", "savoy", "switzerland", "alsace", "germany", "luxembourg", "wallonia", "flanders", "netherlands"]
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
		"part_of": ["france"]
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
		"part_of": ["spain"]
	},
	"outer_hebrides": {
		"name": "Внешние Гербидские острова",
		"neighbors": ["scotland"],
		"part_of": ["uk"]
	},
	"orkney": {
		"name": "Оркнейские острова",
		"neighbors": ["scotland", "shetland"],
		"part_of": ["uk"]
	},
	"shetland": {
		"name": "Шетландские острова",
		"neighbors": ["scotland", "orkney", "faroe"],
		"part_of": ["uk"]
	},
	"andalusia": {
		"name": "Андалусия",
		"neighbors": ["portugal", "extremadura", "castile", "murcia", "leon"],
		"part_of": ["spain"]
	},
	"andorra": {
		"name": "Андорра",
		"neighbors": ["catalonia", "occitania"],
		"part_of": ["spain"]
	},
	"aragon": {
		"name": "Арагон",
		"neighbors": ["occitania", "basque", "catalonia", "castile", "valencia"],
		"part_of": ["spain"]
	},
	"asturia": {
		"name": "Астурия",
		"neighbors": ["galicia", "leon", "cantabria"],
		"part_of": ["spain"]
	},
	"basque": {
		"name": "Баскония",
		"neighbors": ["occitania", "aragon", "castile", "cantabria"],
		"part_of": ["spain"]
	},
	"cantabria": {
		"name": "Кантабрия",
		"neighbors": ["basque", "castile", "leon", "asturia"],
		"part_of": ["spain"]
	},
	"castile": {
		"name": "Кастилия",
		"neighbors": ["cantabria", "basque", "aragon", "valencia", "murcia", "andalusia", "extremadura", "leon", "balearic_islands"],
		"part_of": ["spain"]
	},
	"catalonia": {
		"name": "Каталония",
		"neighbors": ["occitania", "andorra", "aragon", "valencia", "balearic_islands"],
		"part_of": ["spain"]
	},
	"extremadura": {
		"name": "Эстремадура",
		"neighbors": ["portugal", "leon", "castile", "andalusia"],
		"part_of": ["spain"]
	},
	"galicia": {
		"name": "Галисия",
		"neighbors": ["asturia", "leon", "portugal"],
		"part_of": ["spain"]
	},
	"leon":  {
		"name": "Леон",
		"neighbors": ["galicia", "asturia", "cantabria", "castile", "andalusia", "portugal", "extremadura"],
		"part_of": ["spain"]
	},
	"murcia": {
		"name": "Мурсия",
		"neighbors": ["andalusia", "castile", "valencia"],
		"part_of": ["spain"]
	},
	"portugal": {
		"name": "Португалия",
		"neighbors": ["galicia", "leon", "extremadura", "andalusia"]
	},
	"valencia": {
		"name": "Валенсия",
		"neighbors": ["murcia", "castile", "aragon", "catalonia", "balearic_islands"],
		"part_of": ["spain"]
	},
	"corsica": {
		"name": "Корсика",
		"neighbors": ["liguria", "occitania", "padania", "italy", "sardinia"],
		"part_of": ["france"]
	},
	"friuli-venezia_giulia": {
		"name": "Фриули-Венеция Джулия",
		"neighbors": ["venetia", "carinthia", "austria", "slovenia"],
		"part_of": ["italy"]
	},
	"italy": {
		"name": "Италия",
		"genetive": "Италии",
		"neighbors": ["padania", "corsica", "sardinia", "sicily"]
	},
	"liguria": {
		"name": "Лигурия",
		"neighbors": ["padania", "occitania", "corsica"],
		"part_of": ["italy"]
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
		"part_of": ["italy"]
	},
	"sicily": {
		"name": "Сицилия",
		"neighbors": ["italy", "malta", "sardinia"],
		"part_of": ["italy"]
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
		"neighbors": ["crna_gora", "sandzak", "kosovo", "fyrom", "northern_epirus"]
	},
	"bosnia": {
		"name": "Босния и Герцеговина",
		"neighbors": ["croatia", "vojvodina", "serbia", "crna_gora", "sandzak"]
	},
	"bulgaria": {
		"name": "Болгария",
		"neighbors": ["romania", "greece", "fyrom", "serbia"]
	},
	"crna_gora": {
		"name": "Черногория",
		"genetive": "Черногории",
		"neighbors": ["croatia", "bosnia", "sandzak", "albania"]
	},
	"croatia": {
		"name": "Хорватия",
		"genetive": "Хорватии",
		"neighbors": ["slovenia", "istria", "hungary", "vojvodina", "bosnia", "crna_gora"]
	},
	"cyprus": {
		"name": "Кипр",
		"genetive": "Кипра",
		"neighbors": ["trnc", "greece"]
	},
	"fyrom": {
		"name": "Македония",
		"neighbors": ["kosovo", "serbia", "bulgaria", "greece", "northern_epirus", "albania"]
	},
	"gagauzia": {
		"name": "Гагаузия",
		"neighbors": ["moldavia", "transnistria", "ukraine", "romania"],
		"part_of": ["moldavia"]
	},
	"greece": {
		"name": "Греция",
		"neighbors": ["northern_epirus", "fyrom", "bulgaria", "cyprus"]
	},
	"istria": {
		"name": "Истрия",
		"neighbors": ["slovenia", "croatia"],
		"part_of": ["croatia"]
	},
	"kosovo": {
		"name": "Косово",
		"neighbors": ["sandzak", "serbia", "fyrom", "albania"],
		"part_of": ["serbia"]
	},
	"moldavia": {
		"name": "Молдавия",
		"genetive": "Молдавии",
		"neighbors": ["romania", "ukraine", "transnistria", "gagauzia"]
	},
	"northern_epirus": {
		"name": "Северный Эпир",
		"neighbors": ["albania", "fyrom", "greece"],
		"part_of": ["albania"]
	},
	"romania": {
		"name": "Румыния",
		"genetive": "Румынии",
		"neighbors": ["hungary", "ukraine", "moldavia", "gagauzia", "bulgaria", "serbia", "vojvodina", "ruthenia", "szekely_land"]
	},
	"sandzak": {
		"name": "Санджак",
		"neighbors": ["bosnia", "serbia", "kosovo", "albania", "crna_gora"],
		"part_of": ["serbia", "crna_gora"]
	},
	"serbia": {
		"name": "Сербия",
		"genetive": "Сербии",
		"neighbors": ["vojvodina", "romania", "bulgaria", "fyrom", "kosovo", "sandzak", "bosnia"]
	},
	"slovenia": {
		"name": "Словения",
		"neighbors": ["friuli-venezia_giulia", "carinthia", "austria", "hungary", "croatia", "istria"]
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
		"part_of": ["cyprus"]
	},
	"vojvodina": {
		"name": "Воеводина",
		"neighbors": ["croatia", "hungary", "romania", "serbia", "bosnia"],
		"part_of": ["serbia"]
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
		"genetive": "Великобритании"
	},
	"spain": {
		"name": "Испания",
		"genetive": "Испании"
	},
	"belgium": {
		"name": "Бельгия",
		"genetive": "Бельгии"
	}
};