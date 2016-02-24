var data = {
	"russia": {
		"name": "Россия",
		"genetive": "России",
		"neighbors": ["karelia", "ingria", "estonia", "latgalia", "belarus", "ukraine", "novorussia", "crimea"],
		"secessionists": ["sapmi", "crimea", "karelia", "ingria", "prussia"],
		"capital": {
			"name": "Москва",
			"coords": [2618, 928]
		}
	},
	"finland": {
		"name": "Финляндия",
		"genetive": "Финляндии",
		"neighbors": ["karelia", "ingria", "sapmi", "aland", "bornholm", "estonia"],
		"secessionists": ["sapmi", "aland"],
		"capital": {
			"name": "Хельсинки",
			"position": "bottom-right",
			"coords": [2035, 781]
		}
	},
	"sapmi": {
		"name": "Лапландия",
		"description": "Саамы, являющиеся коренным населением Лапландии, на текущий момент составляют не более 5% населения региона. В Норвегии, Швеции и Финляндии присутствуют саамские парламенты, вместе с непризнанным властью РФ <a href=\"https://ru.wikipedia.org/wiki/Саамский_парламент_Кольского_полуострова\" target=\"_blank\">Саамским парламентом Кольского полуострова</a> они образуют <a href=\"https://ru.wikipedia.org/wiki/Союз_Саамов\" target=\"_blank\">Союз Саамов</a>.",
		"neighbors": ["karelia", "finland", "norway", "sweden"],
		"part_of": ["norway", "sweden", "finland", "russia"],
		"offset": [-50, -50],
		"capital": {
			"name": "Мурманск",
			"type": "largest_city",
			"coords": [2096, 137]
		}
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
			"position": "top-left",
			"coords": [1822, 872]
		}
	},
	"iceland": {
		"name": "Исландия",
		"neighbors": ["faroe"],
		"offset": [0, 40],
		"capital": {
			"name": "Рейкьявик",
			"coords": [646, 340]
		}
	},
	"ingria": {
		"name": "Ингерманландия",
		"description": 'Исторически территория Ингерманландии была постоянным предметом споров между Швецией и Россией до тех пор, пока она не была окончательно завоёвана во время Северной войны. Коренное население региона представляет множество финно-угорских народов: ингерманландские финны, ижора, вепсы, водь, которых сейчас исчезающее меньшинство. В регионе действует движение <a href="https://vk.com/free_ingria" target="_blank">Свободная Ингрия</a>.',
		"neighbors": ["karelia", "finland", "russia", "estonia"],
		"part_of": ["russia"],
		"capital": {
			"name": "Санкт-Петербург",
			"position": "bottom-right",
			"type": "largest_city",
			"coords": [2221, 749]
		}
	},
	"karelia": {
		"name": "Карелия",
		"description": 'На территории Карелии проживает родственный финнам народ карелов. На сегодняшний день на территории республики они находятся в меньшинстве. Регионалистское движение <a href="http://www.free-karelia.org/NorthWord.aspx" target="_blank">Свободная Карелия</a> нацелено на повышение самоуправления, а также сохранение и развитие культурно-экономического потенциала региона.',
		"neighbors": ["finland", "sapmi", "russia", "ingria"],
		"part_of": ["russia"],
		"capital": {
			"name": "Петрозаводск",
			"position": "top-left",
			"coords": [2304, 581]
		}
	},
	"aland": {
		"name": "Аландские острова",
		"description": 'На Аландских островах, принадлежащих Финляндии, проживают шведы. В результате <a href="https://ru.wikipedia.org/wiki/Аландский_кризис" target="_blank">Аландского кризиса</a> острова получили высокую степень автономии в составе Финляндии. Сейчас за независимость островов борется партия <a href="https://ru.wikipedia.org/wiki/Будущее_Аландов" target="_blank">Будущее Аландов</a>.',
		"neighbors": ["finland", "sweden", "skaneland"],
		"part_of": ["finland"],
		"capital": {
			"name": "Мариехамн",
			"type": "admin_center",
			"coords": [1877, 812]
		}
	},
	"bornholm": {
		"name": "Борнхольм",
		"description": 'Культурно и исторически Борнхольм является частью Скании, которая после Сконской войны вошла в состав Швеции, таким образом, оказавшись по разные стороны границ. Автономии в составе Дании ищет партия <a href="https://en.wikipedia.org/wiki/Bornholm\'s_Self-Government_Party" target="_blank">Bornholm\'s Self-Government Party</a>.',
		"neighbors": ["finland", "sweden", "skaneland", "denmark"],
		"part_of": ["denmark"],
		"capital": {
			"name": "Рённе",
			"position": "bottom-right",
			"type": "largest_city",
			"coords": [1723, 1167]
		}
	},
	"estonia": {
		"name": "Эстония",
		"neighbors": ["ingria", "finland", "russia", "sweden", "latgalia", "latvia"],
		"capital": {
			"name": "Таллин",
			"position": "bottom-right",
			"coords": [2046, 827]
		}
	},
	"faroe": {
		"name": "Фарерские острова",
		"description": 'Фарерские острова входят в состав Датского королевства, но обладают высоким уровнем автономии. Фарерские острова уже провозглашали независимость в результате <a href="https://en.wikipedia.org/wiki/Faroese_independence_referendum,_1946" target="_blank">референдума</a>, которая, однако, была аннулирована со стороны Дании. Сейчас независимости Фарер добивается несколько партий, из них крупнейшие &mdash; парламентские <a href="https://en.wikipedia.org/wiki/People\'s_Party_%28Faroe_Islands%29" target="_blank">People\'s Party</a> и <a href="https://en.wikipedia.org/wiki/Republic_%28Faroe_Islands%29" target="_blank">Republic</a>.',
		"neighbors": ["iceland", "shetland"],
		"part_of": ["denmark"],
		"capital": {
			"name": "Торсхавн",
			"coords": [1011, 644]
		}
	},
	"latgalia": {
		"name": "Латгалия",
		"description": 'На территории Латгалии проживают латгальцы, родственный латышам народ, однако, исповедующий преимущественно католицизм и говорящий на латгальском диалекте. Наряду с латгальцами, в регионе проживает множество русских. В регионе действовала регионалистская партия <a href="https://ru.wikipedia.org/wiki/Латгалес_Гайсма" target="_blank">Latgales Gaisma</a>, ныне не существующая. На сегодняшний день Латгалия <a href="https://euobserver.com/regions/125739"target="_blank" >упоминается</a> в СМИ, как возможный объект для аннексии России из-за проживающего русского населения.',
		"neighbors": ["estonia", "latvia", "russia", "belarus"],
		"part_of": ["latvia"],
		"offset": [10, 20],
		"capital": {
			"name": "Даугавпилс",
			"type": "largest_city",
			"coords": [2163, 1045]
		}
	},
	"latvia": {
		"name": "Латвия",
		"genetive": "Латвии",
		"neighbors": ["estonia", "latgalia", "belarus", "samogitia", "lithuania"],
		"secessionists": ["latgalia"],
		"offset": [-20, 30],
		"capital": {
			"name": "Рига",
			"position": "bottom-right",
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
			"position": "top-left",
			"coords": [2136, 1140]
		}
	},
	"prussia": {
		"name": "Пруссия",
		"description": 'Восточная Пруссия была завоёвана СССР по итогам Второй мировой войны и включена в её состав. Всё немецкое население было депортировано с этой территории, сейчас абсолютное большинство населения представлено русскими.',
		"neighbors": ["samogitia", "lithuania", "poland"],
		"part_of": ["russia"],
		"offset": [10, 0],
		"capital": {
			"name": "Кёнигсберг",
			"type": "admin_center",
			"coords": [1949, 1170]
		}
	},
	"samogitia": {
		"name": "Жемайтия",
		"description": 'В регионе проживают жемайты, субэтнос литовцев, говорящие на жемайтском наречии литовского языка. <a href="https://en.wikipedia.org/wiki/Samogitian_Party"target="_blank" >Žemaičių partija</a> добивается создания автономии в регионе.',
		"neighbors": ["lithuania", "latvia", "prussia"],
		"part_of": ["lithuania"],
		"capital": {
			"name": "Тельшяй",
			"type": "largest_city",
			"coords": [2003, 1078]
		}
	},
	"skaneland": {
		"name": "Скания",
		"description": "До Сконской войны в XVII веке Скания была частью Датского королевства. Современная Скания в составе Швеции образует культурно и лингвистически обособленный регион. Партия <a href=\"https://en.wikipedia.org/wiki/Scania_Party\" target=\"_blank\">Skånepartiet</a> ставит своей целью сецессию из состава Швеции.",
		"neighbors": ["sweden", "denmark", "bornholm", "aland"],
		"part_of": ["sweden"],
		"offset": [-5, 20],
		"capital": {
			"name": "Мальмё",
			"type": "admin_center",
			"coords": [1659, 1134]
		}
	},
	"belarus": {
		"name": "Беларусь",
		"neighbors": ["russia", "lithuania", "latgalia", "ukraine", "latvia", "poland"],
		"offset": [0, 10],
		"capital": {
			"name": "Минск",
			"coords": [2236, 1174]
		}
	},
	"denmark": {
		"name": "Дания",
		"genetive": "Дании",
		"neighbors": ["bornholm", "slesvig", "skaneland", "norway"],
		"secessionists": ["bornholm", "faroe"],
		"offset": [-40, 0],
		"capital": {
			"name": "Копенгаген",
			"position": "bottom-left",
			"coords": [1642, 1131]
		}
	},
	"flanders": {
		"name": "Фландрия",
		"description": "В отличие от франкоязычной Валлонии, во Фландрии проживает нидерландоязычный народ &mdash; фламандцы. Интересы Фландрии в Европарламенте представляет <a href=\"https://ru.wikipedia.org/wiki/Новый_фламандский_альянс\" target=\"_blank\">Новый фламандский альянс</a>.",
		"neighbors": ["netherlands", "wallonia", "france"],
		"part_of": ["belgium"],
		"capital": {
			"name": "Брюссель",
			"coords": [1300, 1453]
		}
	},
	"frisia": {
		"name": "Фризия",
		"description": 'Территория Фризии разделена между двумя государствами &mdash; Германией и Нидерландами. В Германии действует партия <a href="https://en.wikipedia.org/wiki/Die_Friesen" target="_blank">Die Friesen</a>, добивающаяся расширения прав фризского меньшинства. В Нидерландах действует <a href="https://en.wikipedia.org/wiki/Frisian_National_Party" target="_blank">Фризская национальная партия</a>, которая добивается федерализации государства.',
		"neighbors": ["germany", "slesvig", "netherlands"],
		"part_of": ["germany", "netherlands"],
		"offset": [-15, 3],
	},
	"germany": {
		"name": "Германия",
		"genetive": "Германии",
		"neighbors": ["poland", "netherlands", "frisia", "wallonia", "luxembourg", "france", "alsace", "bavaria", "switzerland", "czech", "slesvig", "austria"],
		"secessionists": ["frisia", "bavaria", "slesvig"],
		"capital": {
			"name": "Берлин",
			"coords": [1681, 1344]
		}
	},
	"ireland": {
		"name": "Ирландия",
		"genetive": "Ирландии",
		"neighbors": ["ulster", "scotland", "wales", "isle_of_man"],
		"secessionists": ["ulster"],
		"capital": {
			"name": "Дублин",
			"position": "bottom-left",
			"coords": [889, 1218]
		}
	},
	"luxembourg": {
		"name": "Люксембург",
		"neighbors": ["wallonia", "france", "germany"],
		"capital": {
			"name": "Люксембург",
			"coords": [1370, 1544]
		}
	},
	"isle_of_man": {
		"name": "Остров Мэн",
		"description": "Остров Мэн не входит в состав Великобритании, а является её самоуправляемой зависимой территорией. Партия <a href=\"https://en.wikipedia.org/wiki/Mec_Vannin\" target=\"_blank\">Mec Vannin</a> ставит целью полную независимость острова Мэн от Великобритании.",
		"neighbors": ["ulster", "ireland", "scotland", "england", "wales"],
		"part_of": ["uk"],
		"capital": {
			"name": "Дуглас",
			"url": "Дуглас_(остров_Мэн)",
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
			"position": "bottom-right",
			"coords": [1337, 1354]
		}
	},
	"poland": {
		"name": "Польша",
		"genetive": "Польши",
		"neighbors": ["prussia", "germany", "czech", "silesia", "moravia", "slovakia", "ukraine", "belarus", "lithuania"],
		"secessionists": ["silesia"],
		"capital": {
			"name": "Варшава",
			"coords": [1997, 1329]
		}
	},
	"scotland": {
		"name": "Шотландия",
		"description": "Шотландия была независимым от Англии государством вплоть до образования Великобритании в 1707 году. На текущий момент Шотландия имеет самую широкую автономию в Соединённом Королевстве. За шотландскую независимость выступает <a href=\"https://ru.wikipedia.org/wiki/Шотландская_национальная_партия\" target=\"_blank\">Шотландская национальная партия</a>.",
		"neighbors": ["england", "ulster", "isle_of_man", "ireland", "outer_hebrides", "orkney", "shetland"],
		"part_of": ["uk"],
		"offset": [20, 10],
		"capital": {
			"name": "Эдинбург",
			"coords": [1023, 1057]
		}
	},
	"slesvig": {
		"name": "Шлезвиг",
		"description": 'Шлезвиг является пограничной территорией между Данией и Германией, на каждой из сторон которой присутствуют этнические меньшинства. В Германии Шлезвиг представлен федеральной землёй Шлезвиг-Гольштейн, в Дании же такой административной единицы не существует. В Германии интересы датского меньшинства представляет партия <a href="https://ru.wikipedia.org/wiki/Союз_южношлезвигских_избирателей" target="_blank">Союз южношлезвигских избирателей</a>.',
		"neighbors": ["denmark", "germany", "frisia"],
		"part_of": ["germany"],
		"offset": [3, -10],
		"capital": {
			"name": "Киль",
			"coords": [1536, 1218]
		}
	},
	"ulster": {
		"name": "Ольстер",
		"description": "В отличие от католической республики Ирландия, в Северной Ирландии большинство является протестантами. Некоторые ольстерские националисты предполагают создание независимого государства Ольстер: такие взгляды, например, продвигала партия <a href=\"https://en.wikipedia.org/wiki/Ulster_Third_Way\" target=\"_blank\">Ulster Third Way</a>. Иные же нацелены на объединение Ольстера с республикой Ирландия, одной из партий, представляющих такие взгляды, является <a href=\"https://ru.wikipedia.org/wiki/Шинн_Фейн\" target=\"_blank\">Шинн Фейн</a>.",
		"neighbors": ["ireland", "scotland", "isle_of_man"],
		"part_of": ["uk", "ireland"],
		"capital": {
			"name": "Белфаст",
			"position": "bottom-left",
			"coords": [921, 1135]
		}
	},
	"wallonia": {
		"name": "Валлония",
		"description": "Отделение Валлонии от Бельгии никто явно не продвигает, но возможная сецессия Фландрии фактически разделит Бельгию на два государства, одним из которых будет Валлония. Тем не менее, существует ирредентистская партия <a href=\"https://en.wikipedia.org/wiki/Rassemblement_Wallonie_France\" target=\"_blank\">Rassemblement Wallonie France</a>, которая нацелена на объединение Валлонии с Францией.",
		"neighbors": ["luxembourg", "flanders", "france", "germany", "netherlands"],
		"part_of": ["belgium"],
		"offset": [10, -10],
		"capital": {
			"name": "Намюр",
			"coords": [1316, 1479]
		}
	},
	"novorussia": {
		"name": "Новороссия",
		"description": 'В регионе проживает значительная доля русскоязычного населения. С апреля 2014 года на территории ведётся вооружённый конфликт за независимость от Украины. На территории Новороссии объявили о своей независимости два непризнанных государства &mdash; Донецкая Народная Республика и Луганская Народная Республика, обе контролирующие лишь часть территории, на которую претендуют.',
		"neighbors": ["russia", "ukraine"],
		"part_of": ["ukraine"],
		"capital": {
			"name": "Донецк",
			"type": "largest_city",
			"coords": [2772, 1424]
		}
	},
	"cornwall": {
		"name": "Корнуолл",
		"description": "В Корнуолле проживает кельтские народ &mdash; корнцы. Партия <a href=\"https://ru.wikipedia.org/wiki/Сыны_Корнуолла\" target=\"_blank\">Mebyon Kernow</a> нацелена на более широкую автономию Корнуолла в составе Великобритании.",
		"neighbors": ["wessex", "channel_islands"],
		"part_of": ["uk"],
		"capital": {
			"name": "Труро",
			"type": "admin_center",
			"coords": [894, 1435]
		}
	},
	"england": {
		"name": "Англия",
		"description": "Англия является единственной страной в Соединённом Королевстве, которое не имеет собственного парламента. <a href=\"https://en.wikipedia.org/wiki/Campaign_for_an_English_Parliament\" target=\"_blank\">Campaign for an English Parliament</a> добивается его создания. Также существуют партии, которые ставят целью полную независимость Англии от Великобритании, например, <a href=\"https://en.wikipedia.org/wiki/English_Democrats\" target=\"_blank\">English Democrats</a>.",
		"neighbors": ["wales", "wessex", "isle_of_wight", "isle_of_man", "yorkshire", "scotland", "france"],
		"part_of": ["uk"],
		"offset": [0, 10],
		"capital": {
			"name": "Лондон",
			"coords": [1115, 1389]
		}
	},
	"wales": {
		"name": "Уэльс",
		"description": "В Уэльсе проживает один из немногочисленных кельтских народов &mdash; валлийцы. За независимость от Великобритании выступает <a href=\"https://ru.wikipedia.org/wiki/Партия_Уэльса\" target=\"_blank\">Plaid Cymru</a>.",
		"neighbors": ["england", "ireland", "isle_of_man", "wessex"],
		"part_of": ["uk"],
		"offset": [0, 20],
		"capital": {
			"name": "Кардифф",
			"position": "top-left",
			"coords": [988, 1372]
		}
	},
	"wessex": {
		"name": "Уэссекс",
		"description": "<a href=\"https://en.wikipedia.org/wiki/Wessex_Regionalist_Party\" target=\"_blank\">Регионалистская патия Уэссекса</a> нацелена на создание уэссекской культурной идентичности и создание автономии.",
		"neighbors": ["england", "isle_of_wight", "wales", "wessex", "channel_islands", "cornwall"],
		"part_of": ["uk"],
		"offset": [0, 15],
		"capital": {
			"name": "Бристоль",
			"position": "bottom-right",
			"type": "largest_city",
			"coords": [1012, 1369]
		}
	},
	"isle_of_wight": {
		"name": "Остров Уайт",
		"neighbors": ["england", "wessex", "channel_islands", "normandy"],
		"part_of": ["uk"],
		"capital": {
			"name": "Ньюпорт",
			"url": "Ньюпорт_(остров_Уайт)",
			"position": "bottom-right",
			"coords": [1058, 1435]
		}
	},
	"yorkshire": {
		"name": "Йоркшир",
		"description": "Регионалистская партия <a href=\"https://en.wikipedia.org/wiki/Yorkshire_First\" target=\"_blank\">Yorkshire First</a> нацелена на создание йоркширской автономии.",
		"neighbors": ["england"],
		"part_of": ["uk"],
		"offset": [0, 10],
		"capital": {
			"name": "Йорк",
			"type": "admin_center",
			"coords": [1100, 1215]
		}
	},
	"bavaria": {
		"name": "Бавария",
		"description": 'Германия является федеративным государством, и Бавария в её составе уже является одной из федеральных земель. В отличие от протестантской Германии, жители Баварии преимущественно являются католиками, и говорят на диалекте, близком австрийскому. Отделения от Германии добивается <a href="https://en.wikipedia.org/wiki/Bavaria_Party" target="_blank">партия Баварии</a>.',
		"neighbors": ["germany", "czech", "austria"],
		"part_of": ["germany"],
		"capital": {
			"name": "Мюнхен",
			"coords": [1612, 1646]
		}
	},
	"czech": {
		"name": "Чехия",
		"genetive": "Чехии",
		"neighbors": ["germany", "bavaria", "austria", "moravia", "poland", "silesia"],
		"secessionists": ["moravia", "silesia"],
		"offset": [0, 10],
		"capital": {
			"name": "Прага",
			"coords": [1736, 1512]
		}
	},
	"crimea": {
		"name": "Крым",
		"description": 'До завоевания Российской империей на полуострове на протяжении пяти веков проживали крымские татары, чья доля среди населения со временем сокращалась. Сейчас крымские татары являются национальным меньшинством полуострова. После включения Крыма в состав России, статус полуострова стал предметом международных споров. Крымскотатарской автономии в регионе на текущий момент не существует.',
		"neighbors": ["ukraine", "russia"],
		"part_of": ["ukraine", "russia"],
		"capital": {
			"name": "Симферополь",
			"coords": [2677, 1677]
		}
	},
	"hungary": {
		"name": "Венгрия",
		"neighbors": ["slovakia", "austria", "ukraine", "romania", "slovenia", "croatia", "vojvodina"],
		"capital": {
			"name": "Будапешт",
			"coords": [1956, 1665]
		}
	},
	"moravia": {
		"name": "Моравия",
		"description": 'В раннем средневековье на территории современных Чехии и Словакии существовало государство Великая Моравия. Современные моравцы являются субэтносом чехов, которые говорят на моравском диалекте. Партия <a href="https://en.wikipedia.org/wiki/Moravan%C3%A9" target="_blank">Moravané</a> добивается независимости региона от Чехии.',
		"neighbors": ["slovakia", "silesia", "czech", "austria", "poland"],
		"part_of": ["czech"],
		"offset": [5, 5],
		"capital": {
			"name": "Брно",
			"type": "admin_center",
			"coords": [1838, 1566]
		}
	},
	"silesia": {
		"name": "Верхняя Силезия",
		"description": 'В Силезии проживает родственный полякам народ &mdash; силезцы. <a href="https://en.wikipedia.org/wiki/Silesian_Autonomy_Movement" target="_blank">Движение за автономию Силезии</a> стремится добиться автономии региона. Также существуют более радикальные сепаратистские организации.',
		"neighbors": ["poland", "czech", "moravia", "slovakia"],
		"part_of": ["poland", "czech"],
		"capital": {
			"name": "Катовице",
			"type": "largest_city",
			"coords": [1928, 1475]
		}
	},
	"slovakia": {
		"name": "Словакия",
		"neighbors": ["poland", "silesia", "moravia", "austria", "hungary", "ukraine"],
		"capital": {
			"name": "Братислава",
			"coords": [1868, 1633]
		}
	},
	"ukraine": {
		"name": "Украина",
		"genetive": "Украины",
		"neighbors": ["belarus", "poland", "slovakia", "hungary", "romania", "moldavia", "transnistria", "crimea", "novorussia", "russia"],
		"secessionists": ["crimea", "novorussia"],
		"capital": {
			"name": "Киев",
			"coords": [2423, 1367]
		}
	},
	"alsace": {
		"name": "Эльзас",
		"description": "Эльзас, как пограничная территория для Франции и Германии, с течением времени образовала независимую от обеих государств культурную идентичность. Интересы Эльзаса представляет <a href=\"https://en.wikipedia.org/wiki/Alsace_independence_movement\" target=\"_blank\">Движение за независимость Эльзаса</a>, а также партия <a href=\"https://en.wikipedia.org/wiki/Unser_Land\" target=\"_blank\">Unser Land</a>.",
		"neighbors": ["germany", "france", "switzerland"],
		"part_of": ["france"],
		"capital": {
			"name": "Страсбург",
			"type": "admin_center",
			"coords": [1439, 1614]
		}
	},
	"austria": {
		"name": "Австрия",
		"genetive": "Австрии",
		"neighbors": ["south_tyrol", "slovenia", "hungary", "slovakia", "moravia", "czech", "bavaria", "germany", "liechtenstein", "switzerland", "friuli-venezia_giulia", "venetia"],
		"offset": [40, 20],
		"capital": {
			"name": "Вена",
			"position": "top-left",
			"coords": [1833, 1629]
		}
	},
	"brittany": {
		"name": "Бретань",
		"description": "В регионе проживает кельтский народ &mdash; бретонцы. Борьбу за автономию ведёт партия <a href=\"https://ru.wikipedia.org/wiki/Демократический_бретонский_союз\">Демократический бретонский союз</a>.",
		"neighbors": ["france", "channel_islands", "normandy"],
		"part_of": ["france"],
		"offset": [5, -10],
		"capital": {
			"name": "Ренн",
			"type": "admin_center",
			"coords": [1012, 1604]
		}
	},
	"channel_islands": {
		"name": "Нормандские острова",
		"neighbors": ["normandy", "brittany", "wessex", "cornwall", "isle_of_wight"],
		"part_of": ["uk"]
	},
	"france": {
		"name": "Франция",
		"genetive": "Франции",
		"neighbors": ["england", "normandy", "brittany", "occitania", "savoy", "switzerland", "alsace", "germany", "luxembourg", "wallonia", "flanders", "netherlands"],
		"secessionists": ["alsace", "brittany", "normandy", "occitania", "savoy", "corsica", "basque"],
		"capital": {
			"name": "Париж",
			"coords": [1192, 1578]
		}
	},
	"liechtenstein": {
		"name": "Лихтенштейн",
		"neighbors": ["switzerland", "austria"],
		"capital": {
			"name": "Вадуц"
		}
	},
	"normandy": {
		"name": "Нормандия",
		"description": "В регионе действует регионалистская организация <a href=\"https://en.wikipedia.org/wiki/Mouvement_Normand\">Mouvement Normand</a>, которая добивается более широкой автономии Нормандии и сохранения её культурного наследия.",
		"neighbors": ["isle_of_wight", "channel_islands", "brittany", "france"],
		"part_of": ["france"],
		"capital": {
			"name": "Руан",
			"coords": [1144, 1528]
		}
	},
	"occitania": {
		"name": "Окситания",
		"description": "Из-за своих исторических и культурных особенностей, жители Окситании добиваются более широкой автономии вплоть до отделения. Интересы представляет <a href=\"https://ru.wikipedia.org/wiki/Окситанская_партия\" target=\"_blank\">Окситанская партия</a>.",
		"neighbors": ["france", "savoy", "padania", "liguria", "andorra", "aragon", "basque", "catalonia", "corsica"],
		"part_of": ["france"],
		"capital": {
			"name": "Марсель",
			"type": "largest_city",
			"coords": [1312, 1970]
		}
	},
	"savoy": {
		"name": "Савойя",
		"description": "Савойя, бывшая частью Сардинского королевства, была передана во владение Франции в 1860 году. На текущий момент Савойя в составе Франции не имеет даже собственного региона. За образование соответствующего региона, предоставление ему автономии и за широкое использование франкопровансальского языка в нём выступает партия <a href=\"https://ru.wikipedia.org/wiki/Движение_Савойского_региона\" target=\"_blank\">Движение Савойского региона</a>.",
		"neighbors": ["france", "occitania", "switzerland", "padania"],
		"part_of": ["france"],
		"offset": [0, -10],
		"capital": {
			"name": "Шамбери",
			"type": "largest_city",
			"coords": [1354, 1815]
		}
	},
	"switzerland": {
		"name": "Швейцария",
		"neighbors": ["alsace", "france", "savoy", "austria", "liechtenstein", "germany", "padania", "south_tyrol"],
		"offset": [0, 5],
		"capital": {
			"name": "Берн",
			"coords": [1420, 1722]
		}
	},
	"balearic_islands": {
		"name": "Балеарские острова",
		"description": "Исторически Балеарские острова являлись частью Арагонской короны. В настоящее время каталанские националисты претендуют на включение в состав Каталонии также Балеарских островов из-за проживания там каталонцев. Одной из партий, представляющей подобные интересы со стороны жителей островов, является <a href=\"https://en.wikipedia.org/wiki/Socialist_Party_of_Majorca\" target=\"_blank\">Социалистическая партия Майорки</a>.",
		"neighbors": ["catalonia", "sardinia", "castile", "valencia"],
		"part_of": ["spain"],
		"offset": [0, 20],
		"capital": {
			"name": "Пальма",
			"url": "Пальма_(город)",
			"coords": [1158, 2208]
		}
	},
	"outer_hebrides": {
		"name": "Внешние Гербидские острова",
		"description": 'Намереваются добиться независимости от Шотландии в случае выхода последней из состава Великобритании. См. также Шетландские острова и Оркнейские острова.',
		"neighbors": ["scotland"],
		"part_of": ["uk"],
		"capital": {
			"name": "Сторновей",
			"type": "admin_center",
			"url": "Сторновей_(Шотландия)",
			"coords": [963, 897]
		}
	},
	"orkney": {
		"name": "Оркнейские острова",
		"description": 'Намереваются добиться независимости от Шотландии в случае выхода последней из состава Великобритании. См. также Шетландские острова и Внешние Гербидские острова.',
		"neighbors": ["scotland", "shetland"],
		"part_of": ["uk"],
		"capital": {
			"name": "Керкуолл",
			"type": "admin_center",
			"coords": [1089, 870]
		}
	},
	"shetland": {
		"name": "Шетландские острова",
		"description": "Ранее всего Шетландские острова были колонизированы викингами и впоследствии переданы Шотландии. Современные шетландцы являются потомками викингов, но говорят преимущественно но шотландском языке. Намереваются добиться независимости от Шотландии в случае выхода последней из состава Великобритании. См. также Оркнейские и Внешние Гербидские острова.",
		"neighbors": ["scotland", "orkney", "faroe"],
		"part_of": ["uk"],
		"capital": {
			"name": "Леруик",
			"type": "admin_center",
			"coords": [1164, 802]
		}
	},
	"andalusia": {
		"name": "Андалусия",
		"description": "В Андалусии присутствуют националистические движения, направленные на признание государственного статуса региона.",
		"neighbors": ["portugal", "extremadura", "castile", "murcia", "leon"],
		"part_of": ["spain"],
		"offset": [0, 20],
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
		"description": "Арагонские регионалисты добиваются более широкой автономии региона в связи с его уникальным культурным и лингвистическим статусом. За автономию выступает партия <a href=\"https://en.wikipedia.org/wiki/Chunta_Aragonesista\" target=\"_blank\">Chunta Aragonesista</a>.",
		"neighbors": ["occitania", "basque", "catalonia", "castile", "valencia"],
		"part_of": ["spain"],
		"capital": {
			"name": "Сарагоса",
			"coords": [986, 2044]
		}
	},
	"asturia": {
		"name": "Астурия",
		"description": "Жители Астурии говорят на астурском языке, который и является символом их национальной идентичности. Крупнейшей регионалистской (не националистической) партией региона является <a href=\"https://en.wikipedia.org/wiki/Asturias_Forum\" target=\"_blank\">Foro Asturias</a>.",
		"neighbors": ["galicia", "leon", "cantabria"],
		"part_of": ["spain"],
		"offset": [0, 5],
		"capital": {
			"name": "Овьедо",
			"coords": [765, 1880]
		}
	},
	"basque": {
		"name": "Страна Басков",
		"description": "В стране Басков проживают баски &mdash; народ, чей уникальный язык не относится ни к одной известной языковой группе. Наиболее активно за сепаратизм борется радикальная организация <a href=\"https://ru.wikipedia.org/wiki/%D0%AD%D0%A2%D0%90\" target=\"_blank\">ЭТА</a>. Во Франции интересы басков представляет партия <a href=\"https://en.wikipedia.org/wiki/Abertzaleen_Batasuna\" target=\"_blank\">Abertzaleen Batasuna</a>.",
		"neighbors": ["occitania", "aragon", "castile", "cantabria"],
		"part_of": ["spain", "france"],
		"capital": {
			"name": "Витория-Гастейс",
			"coords": [906, 1949]
		}
	},
	"cantabria": {
		"name": "Кантабрия",
		"description": "В Кантабрии действует <a href=\"https://en.wikipedia.org/wiki/Regionalist_Party_of_Cantabria\" target=\"_blank\">Регионалистская партия Кантабрии</a>, которая добивается более широкой автономии.",
		"neighbors": ["basque", "castile", "leon", "asturia"],
		"part_of": ["spain"],
		"offset": [0, -10],
		"capital": {
			"name": "Сантандер",
			"coords": [867, 1904]
		}
	},
	"castile": {
		"name": "Кастилия",
		"description": "Кастильские националисты добиваются объединения в составе Испании Кастилии, которая сейчас разделена на пять автономных сообществ, или, реже &mdash; полной независимости от Испании. Одной из партий, которая представляла данные интересы, являлась <a href=\"https://en.wikipedia.org/wiki/Tierra_Comunera\" target=\"_blank\">Tierra Comunera</a>.",
		"neighbors": ["cantabria", "basque", "aragon", "valencia", "murcia", "andalusia", "extremadura", "leon", "balearic_islands"],
		"part_of": ["spain"],
		"offset": [0, -20],
		"capital": {
			"name": "Мадрид",
			"coords": [838, 2105]
		}
	},
	"catalonia": {
		"name": "Каталония",
		"description": "Каталония была одним из центральных княжеств Арагонской короны вплоть до её полного исчезновения в войне за испанское наследство. Сейчас Каталония является одним из самых известных европейских регионов, добивающихся независимости от Испании. За независимость региона борется множество партий, одной из центральных в движении является <a href=\"https://ru.wikipedia.org/wiki/Левая_республиканская_партия_Каталонии\" target=\"_blank\">Левая республиканская партия Каталонии</a>. Некоторые каталонцы также претендуют на включение в состав страны Валенсии и Балеарских островов.",
		"neighbors": ["occitania", "andorra", "aragon", "valencia", "balearic_islands"],
		"part_of": ["spain"],
		"capital": {
			"name": "Барселона",
			"position": "bottom-right",
			"coords": [1139, 2080]
		}
	},
	"extremadura": {
		"name": "Эстремадура",
		"description": "Эстремадура является одним из автономных сообществ Испании, но с довольно бедно представленными регионалистскими движениями.",
		"neighbors": ["portugal", "leon", "castile", "andalusia"],
		"part_of": ["spain"],
		"capital": {
			"name": "Мерида",
			"url": "Мерида_(Испания)",
			"coords": [686, 2174]
		}
	},
	"galicia": {
		"name": "Галисия",
		"description": "Галисийцы образуют отдельную от кастильцев этническую группу, более близкую португальцам, чем испанцам. Разные группы галисийцев стремятся как к автономии, так и к полному отделению. Одним из крупнейших политических блоков, представляющих интересы галисийцев, является <a href=\"https://en.wikipedia.org/wiki/Galician_Nationalist_Bloc\" target=\"_blank\">Galician Nationalist Bloc</a>.",
		"neighbors": ["asturia", "leon", "portugal"],
		"part_of": ["spain"],
		"offset": [0, 10],
		"capital": {
			"name": "Сантьяго-де-Компостела",
			"position": "bottom-right",
			"coords": [627, 1893]
		}
	},
	"leon":  {
		"name": "Леон",
		"description": "В прошлом Леон являлся одним из образующих королевств Кастильской короны. Однако, на сегодняшний день Леон не имеет своего административного образования в составе Испании. Партия <a href=\"https://en.wikipedia.org/wiki/Leonese_People%27s_Union\" target=\"_blank\">Leonese People's Union</a> выступает за создание автономного сообщества Леон в составе Испании.",
		"neighbors": ["galicia", "asturia", "cantabria", "castile", "andalusia", "portugal", "extremadura"],
		"part_of": ["spain"],
		"capital": {
			"name": "Леон",
			"url": "Леон_(Испания)",
			"type": "admin_center",
			"coords": [765, 1947]
		}
	},
	"murcia": {
		"name": "Мурсия",
		"neighbors": ["andalusia", "castile", "valencia"],
		"part_of": ["spain"],
		"offset": [0, 10],
		"capital": {
			"name": "Мурсия",
			"position": "top-left",
			"coords": [947, 2281]
		}
	},
	"portugal": {
		"name": "Португалия",
		"neighbors": ["galicia", "leon", "extremadura", "andalusia"],
		"offset": [-10, -10],
		"capital": {
			"name": "Лиссабон",
			"coords": [544, 2144]
		}
	},
	"valencia": {
		"name": "Валенсия",
		"description": "Наряду с Каталонией, Валенсия являлась одним из королевств, входящих в состав Арагонской короны. На сегодняшний день часть националистов Валенсии претендуют на её включение в состав Каталонии, иные же добиваются полной независимости. Валенсийский национализм представляет партия <a href=\"https://en.wikipedia.org/wiki/Coalici%C3%B3_Comprom%C3%ADs\" target=\"_blank\">Coalició Compromís</a>.",
		"neighbors": ["murcia", "castile", "aragon", "catalonia", "balearic_islands"],
		"part_of": ["spain"],
		"offset": [-5, 45],
		"capital": {
			"name": "Валенсия",
			"position": "bottom-right",
			"coords": [1000, 2188]
		}
	},
	"corsica": {
		"name": "Корсика",
		"description": "Корсика была завоёвана Францией у Генуи в 1859 году. Сейчас на острове проживают корсиканцы, являющиеся близкородственным итальянцам народом. За более широкую автономию Корсики выступает регионалистская партия <a href=\"https://en.wikipedia.org/wiki/Party_of_the_Corsican_Nation\" target=\"_blank\">Party of the Corsican Nation</a>.",
		"neighbors": ["liguria", "occitania", "padania", "italy", "sardinia"],
		"part_of": ["france"],
		"capital": {
			"name": "Аяччо",
			"position": "top-left",
			"coords": [1480, 2069]
		}
	},
	"friuli-venezia_giulia": {
		"name": "Фриули-Венеция Джулия",
		"description": 'Исторически регион на протяжении долгого времени принадлежал Австрии и поэтому романоязычное население говорят на отдельном от итальянского, фриульском языке, который является диалектом ретороманского. Также в регионе присутствует словенское меньшинство. Действует регионалистская партия <a href="https://en.wikipedia.org/wiki/Lega_Nord_Friuli-Venezia_Giulia" target="_blank">Lega Nord Friuli-Venezia Giulia</a>.',
		"neighbors": ["venetia", "austria", "slovenia"],
		"part_of": ["italy"],
		"capital": {
			"name": "Триест",
			"type": "largest_city",
			"coords": [1724, 1810]
		}
	},
	"italy": {
		"name": "Италия",
		"genetive": "Италии",
		"neighbors": ["padania", "corsica", "sardinia", "sicily"],
		"offset": [0, -40],
		"secessionists": ["padania", "venetia", "liguria", "south_tyrol", "friuli-venezia_giulia", "sicily", "sardinia"],
		"capital": {
			"name": "Рим",
			"coords": [1677, 2066]
		}
	},
	"liguria": {
		"name": "Лигурия",
		"description": 'Лигурия являлась ядром Генуэзской республики вплоть до её включения в состав Сардинского королевства после Наполеоновских войн, а затем &mdash; в состав Италии. Партия <a href="https://en.wikipedia.org/wiki/Ligurian_Independence_Movement" target="_blank">Movimento Indipendentista Ligure</a> считают незаконной аннексию Лигурии и требуют немедленной независимости региона.',
		"neighbors": ["padania", "occitania", "corsica"],
		"part_of": ["italy"],
		"offset": [0, 13],
		"capital": {
			"name": "Генуя",
			"type": "admin_center",
			"coords": [1485, 1900]
		}
	},
	"malta": {
		"name": "Мальта",
		"neighbors": ["sicily"],
		"capital": {
			"name": "Валлетта",
			"coords": [1792, 2471]
		}
	},
	"padania": {
		"name": "Падания",
		"description": 'Падания, объединённая с Южной Италией в ходе Рисорджименто, является более экономически развитым регионом. <a href="https://ru.wikipedia.org/wiki/Лига_Севера" target="_blank">Лига Севера</a> добивается федерализации унитарной Италии.',
		"neighbors": ["switzerland", "savoy", "occitania", "liguria", "corsica", "sardinia", "italy", "venetia", "south_tyrol"],
		"part_of": ["italy"],
		"offset": [10, 10],
		"capital": {
			"name": "Милан",
			"type": "largest_city",
			"coords": [1500, 1836]
		}
	},
	"sardinia": {
		"name": "Сардиния",
		"description": 'Сардинцы образуют отдельный от итальянцев этнос, говорящий на сардинском языке, несущим черты как итальянского, так и испанского. На острове действуют различные не особо крупные регионалистские партии, крупнейшая из них &mdash; <a href="https://en.wikipedia.org/wiki/Sardinian_Reformers" target="_blank">Сардинские реформаторы</a>.',
		"neighbors": ["corsica", "sicily", "balearic_islands", "italy", "padania"],
		"part_of": ["italy"],
		"capital": {
			"name": "Кальяри",
			"position": "bottom-right",
			"type": "admin_center",
			"coords": [1496, 2251]
		}
	},
	"sicily": {
		"name": "Сицилия",
		"description": 'За время своего независимого от Италии существования Сицилия образовала свою культуру, традиции и язык. <a href="https://en.wikipedia.org/wiki/Sicilian_nationalism" target="_blank">Различные регионалистские партии</a> добиваются расширения автономии.',
		"neighbors": ["italy", "malta", "sardinia"],
		"part_of": ["italy"],
		"capital": {
			"name": "Палермо",
			"type": "admin_center",
			"coords": [1727, 2321]
		}
	},
	"south_tyrol": {
		"name": "Южный Тироль",
		"description": 'Южный Тироль был включен в состав Италии по итогам Первой мировой войны. До сих пор большинство населения региона составляют австрийцы. Партия <a href="https://en.wikipedia.org/wiki/South_Tyrolean_Freedom" target="_blank">Süd-Tiroler Freiheit</a> добивается независимости Южного Тироля и объединения территории с Австрией.',
		"neighbors": ["austria", "switzerland", "padania", "venetia"],
		"part_of": ["italy"],
		"capital": {
			"name": "Больцано",
			"type": "admin_center",
			"coords": [1606, 1759]
		}
	},
	"venetia": {
		"name": "Венеция",
		"description": 'По итогам наполеоновских войн Венецианская республика была включена в состав Австрийской империи, а затем, в ходе Рисорджименто, оказалась в составе объединённой Италии. Венетские националисты добиваются более широкой автономии региона. Эти идеи пользуются широкой популярностью, так, <a href="https://en.wikipedia.org/wiki/Liga_Veneta" target="_blank">Liga Veneta</a> занимает почти 50% мест в региональном парламенте Венеции.',
		"neighbors": ["south_tyrol", "padania", "friuli-venezia_giulia", "austria"],
		"part_of": ["italy"],
		"capital": {
			"name": "Венеция",
			"position": "top-left",
			"coords": [1654, 1823]
		}
	},
	"albania": {
		"name": "Албания",
		"genetive": "Албании",
		"neighbors": ["crna_gora", "sandzak", "kosovo", "fyrom", "northern_epirus"],
		"secessionists": ["northern_epirus"],
		"offset": [0, 20],
		"capital": {
			"name": "Тирана",
			"coords": [2039, 2073]
		}
	},
	"bosnia": {
		"name": "Босния и Герцеговина",
		"neighbors": ["croatia", "vojvodina", "serbia", "crna_gora", "sandzak"],
		"offset": [0, -20],
		"capital": {
			"name": "Сараево",
			"coords": [1946, 1920]
		}
	},
	"bulgaria": {
		"name": "Болгария",
		"neighbors": ["romania", "greece", "fyrom", "serbia"],
		"capital": {
			"name": "София",
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
		"offset": [20, -60],
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
	"greece": {
		"name": "Греция",
		"neighbors": ["northern_epirus", "fyrom", "bulgaria", "cyprus"],
		"offset": [-120, 0],
		"capital": {
			"name": "Афины",
			"coords": [2274, 2269]
		}
	},
	"istria": {
		"name": "Истрия",
		"description": 'На протяжении всего времени существования Венецианской республике принадлежала Истрия. Полуостров оказался окончательно оторванным от Италии после Второй мировой, войдя в состав Югославии. На сегодняшний день на полуострове в качестве национального меньшинства проживают истрийцы &mdash; романоязычноый народ, родственный итальянцам. Партия <a href="https://ru.wikipedia.org/wiki/Демократическая_ассамблея_Истрии">Демократическая ассамблея Истрии</a> добивается равного статуса для хорватов и истрийцев на территории полуострова.',
		"neighbors": ["slovenia", "croatia"],
		"part_of": ["croatia"],
		"capital": {
			"name": "Пула",
			"position": "bottom-right",
			"type": "largest_city",
			"coords": [1727, 1866]
		}
	},
	"kosovo": {
		"name": "Косово",
		"description": 'Эта территория, преимущественно населённая албанцами, оказалась в составе Сербии ещё в начале XX века. В ходе Косовской войны для поддержания стабильности в этот регион вступил миротворческий контингент ООН, фактически отстранивший власти Сербии от управления. Впоследствии парламент Косова в одностороннем порядке объявил о независимости государства от Сербии. Косово имеет частичное международное признание.',
		"neighbors": ["sandzak", "serbia", "fyrom", "albania"],
		"part_of": ["serbia"],
		"offset": [0, 10],
		"capital": {
			"name": "Приштина",
			"coords": [2088, 1978]
		}
	},
	"moldavia": {
		"name": "Молдавия",
		"genetive": "Молдавии",
		"neighbors": ["romania", "ukraine", "transnistria"],
		"secessionists": ["transnistria"],
		"offset": [0, -30],
		"capital": {
			"name": "Кишинёв",
			"position": "top-left",
			"coords": [2409, 1615]
		}
	},
	"northern_epirus": {
		"name": "Северный Эпир",
		"description": 'В Северном Эпире проживают греческое меньшинство. Права греческого меньшинства отстаивает организация <a href="https://en.wikipedia.org/wiki/Omonoia_(organization)" target="_blank">Omonoia</a>.',
		"neighbors": ["albania", "fyrom", "greece"],
		"part_of": ["albania"],
		"capital": {
			"name": "Корча",
			"type": "largest_city",
			"coords": [2099, 2113]
		}
	},
	"romania": {
		"name": "Румыния",
		"genetive": "Румынии",
		"neighbors": ["hungary", "ukraine", "moldavia", "bulgaria", "serbia", "vojvodina", "szekely_land"],
		"secessionists": ["szekely_land"],
		"offset": [0, 40],
		"capital": {
			"name": "Бухарест",
			"coords": [2322, 1811]
		}
	},
	"sandzak": {
		"name": "Санджак",
		"description": 'Санджак наследует своё название от Новипазарского санджака, административной единицы Османской империи. Сейчас на территории Санджака проживает значительное количество босняков. Автономии Санджака ищет организация <a href="https://en.wikipedia.org/wiki/Bosniac_National_Council" target="_blank">Национальный союз босняков</a>.',
		"neighbors": ["bosnia", "serbia", "kosovo", "albania", "crna_gora"],
		"part_of": ["serbia", "crna_gora"],
		"capital": {
			"name": "Нови-Пазар",
			"position": "top-left",
			"url": "Нови-Пазар_(город,_Сербия)",
			"type": "largest_city",
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
			"position": "bottom-right",
			"coords": [2044, 1841]
		}
	},
	"slovenia": {
		"name": "Словения",
		"neighbors": ["friuli-venezia_giulia", "austria", "hungary", "croatia", "istria"],
		"offset": [0, -7],
		"capital": {
			"name": "Любляна",
			"coords": [1753, 1782]
		}
	},
	"szekely_land": {
		"name": "Секейский край",
		"description": 'В регионе проживают секеи &mdash; субэтнос венгров, исторически сложившийся на территории Румынии. <a href="https://ru.wikipedia.org/wiki/Демократический_союз_венгров_Румынии" target="_blank">Демократический союз венгров Румынии</a> и несколько других организаций пытаются добиться создания венгерской автономии в Секейском краю.',
		"neighbors": ["romania"],
		"part_of": ["romania"],
		"capital": {
			"name": "Тыргу-Муреш",
			"type": "admin_center",
			"coords": [2221, 1689]
		}
	},
	"transnistria": {
		"name": "Приднестровье",
		"description": 'В отличие от более однородной Молдавии, в Приднестровье присутствует значительное русскоязычное население. Приднестровье провозгласило независимость от Молдавии в начале 90-х, политическая стабильность региона поддерживается российским военным присутствием. ПМР до сих пор не признана ни одним государством-членом ООН.',
		"neighbors": ["ukraine", "moldavia"],
		"part_of": ["moldavia"],
		"capital": {
			"name": "Тирасполь",
			"coords": [2446, 1618]
		}
	},
	"trnc": {
		"name": "Турецкая Республика Северного Кипра",
		"description": 'На острове Кипр проживают два народа &mdash; греки и турки. В результате военного вмешательства Турции была образована Турецкая Республика Северного Кипра, имеющая международное признание лишь со стороны Турции. Кризис по-прежнему не разрешён, и остров являются разделённым на две части.',
		"neighbors": ["cyprus"],
		"part_of": ["cyprus"],
		"capital": {
			"name": "Никосия"
		}
	},
	"vojvodina": {
		"name": "Воеводина",
		"description": 'Современная Воеводина является провинцией Сербии со значительным уровнем автономии. Различные члены <a href="https://en.wikipedia.org/wiki/Vojvodina_Autonomist_Movement" target="_blank">Движения за автономию Воеводины</a>, из которых наиболее популярной является партия <a href="https://en.wikipedia.org/wiki/League_of_Social_Democrats_of_Vojvodina" target="_blank">Лига социал-демократов Воеводины</a>, выступают за ещё большее расширение автономии региона.',
		"neighbors": ["croatia", "hungary", "romania", "serbia", "bosnia"],
		"part_of": ["serbia"],
		"capital": {
			"name": "Нови-Сад",
			"type": "admin_center",
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
		"secessionists": ["scotland", "england", "wales", "ulster", "cornwall", "isle_of_wight", "isle_of_man", "wessex", "yorkshire", "channel_islands", "outer_hebrides", "orkney", "shetland"]
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