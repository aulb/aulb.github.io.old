const Toronto = {
    lat: 43.6532,
    lng: -79.3832,
};

const foodmoji = {
    "newcanadian": "🇨🇦",
    "coffee": "☕️",
    "tex-mex": "🌮",
    "vegan": "🥗",
    "chinese": "🇨🇳",
    "breakfast_brunch": "🍳",
    "hotdog": "🌭",
    "creperies": "🍰",
    "indonesian": "🇮🇩",
    "desserts": "🍨",
    "bakeries": "🍰",
    "thai": "🇹🇭",
    "dimsum": "🍥",
    "japanese": "🇯🇵",
    "burgers": "🍔",
    "sushi": "🍣",
    "breweries": "🍺",
    "ramen": "🍜",
    "sandwiches": "🍞",
    "hotdogs": "🌭",
    "vietnamese": "🇻🇳",
    "asianfusion": "🍥",
    "german": "🇩🇪",
    "indpak": "🌶",
    "pizza": "🍕",
    "mexican": "🌮",
    "tradamerican": "🥓",
    "icecream": "🍦",
    "korean": "🇰🇷",
    "seafood": "🍤",
    "gourmet": "🍽",
    "tea": "🍵",
    "pubs": "🍻",
    "wine_bars": "🍷",
    "caribbean": "🇯🇲",
    "venues": "🍡",
    "chickenshop": "🍗",
    "chocolate": "🍫",
    "donuts": "🍩",
    "cafes": "🥖",
    "mideastern": "🥙",
    "chicken_wings": "🍗",
    "bars": "🍻",
    "noodles": "🍜",
    "laotian": "🇱🇦",
    "tapasmallplates": "🥙",
    "buffets": "🍽",
    "bbq": "🍔",
    "foodtrucks": "🚚",
    "himalayan": "🍢",
    "mediterranean": "🥗",
    "bubbletea": "🍵",
    "venezuelan": "🇻🇪"
};


const places = [
    {
        "categories": [
            {
                "alias": "newcanadian",
                "title": "Canadian (New)"
            },
            {
                "alias": "poutineries",
                "title": "Poutineries"
            },
            {
                "alias": "comfortfood",
                "title": "Comfort Food"
            }
        ],
        "coordinates": {
            "latitude": 43.6395,
            "longitude": -79.42128
        },
        "id": "smokes-poutinerie-liberty-village-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/oaew8g6SeDdOUPveZF8WNQ/o.jpg",
        "is_closed": "smokes-poutinerie-liberty-village-toronto",
        "location": {
            "address1": "116 Atlantic Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "116 Atlantic Avenue",
                "Toronto, ON M6K 1X9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 1X9"
        },
        "name": "Smoke's Poutinerie Liberty Village",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            }
        ],
        "coordinates": {
            "latitude": 43.6546253,
            "longitude": -79.4013491
        },
        "id": "jimmys-coffee-toronto-2",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/oS5Nze2IvHo2CqzvzmJDqA/o.jpg",
        "is_closed": "jimmys-coffee-toronto-2",
        "location": {
            "address1": "Kensington Market",
            "address2": "191 Baldwin Street",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "Kensington Market",
                "191 Baldwin Street",
                "Toronto, ON M5T 1L8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1L8"
        },
        "name": "Jimmy's Coffee",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "tex-mex",
                "title": "Tex-Mex"
            },
            {
                "alias": "mexican",
                "title": "Mexican"
            }
        ],
        "coordinates": {
            "latitude": 43.64697,
            "longitude": -79.40423
        },
        "id": "tacorrito-toronto-5",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/b0pnbvoLl60KwvnVzsimHg/o.jpg",
        "is_closed": "tacorrito-toronto-5",
        "location": {
            "address1": "657 Queen Street W",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "657 Queen Street W",
                "Toronto, ON M6J 1E6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6J 1E6"
        },
        "name": "Tacorrito",
        "price": "$$",
        "rating": 2.5
    },
    {
        "categories": [
            {
                "alias": "vegan",
                "title": "Vegan"
            },
            {
                "alias": "vegetarian",
                "title": "Vegetarian"
            }
        ],
        "coordinates": {
            "latitude": 43.6416147519335,
            "longitude": -79.4311379050361
        },
        "id": "doomies-toronto-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/97WH4xqPP3y5Kfd8CNlYTA/o.jpg",
        "is_closed": "doomies-toronto-toronto",
        "location": {
            "address1": "1263 Queen Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "1263 Queen Street W",
                "Toronto, ON M6K 1L4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 1L4"
        },
        "name": "Doomie's Toronto",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "chinese",
                "title": "Chinese"
            }
        ],
        "coordinates": {
            "latitude": 43.65378,
            "longitude": -79.3987
        },
        "id": "dumpling-house-restaurant-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/4198n8OxC2nmtXmLTovJuQ/o.jpg",
        "is_closed": "dumpling-house-restaurant-toronto",
        "location": {
            "address1": "328 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "328 Spadina Avenue",
                "Toronto, ON M5T 2E7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2E7"
        },
        "name": "Dumpling House Restaurant",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "newcanadian",
                "title": "Canadian (New)"
            },
            {
                "alias": "vegetarian",
                "title": "Vegetarian"
            }
        ],
        "coordinates": {
            "latitude": 43.6399108749312,
            "longitude": -79.4204235076904
        },
        "id": "mildreds-temple-kitchen-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/o-wTtD3Fmm5q_Vxa2TaIDA/o.jpg",
        "is_closed": "mildreds-temple-kitchen-toronto",
        "location": {
            "address1": "85 Hanna Avenue",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "85 Hanna Avenue",
                "Toronto, ON M6K 3S3",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 3S3"
        },
        "name": "Mildred's Temple Kitchen",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "hotdog",
                "title": "Hot Dogs"
            },
            {
                "alias": "burgers",
                "title": "Burgers"
            },
            {
                "alias": "poutineries",
                "title": "Poutineries"
            }
        ],
        "coordinates": {
            "latitude": 43.65767,
            "longitude": -79.40268
        },
        "id": "fancy-franks-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/zcPjBY8FA5JrFVSqfJzaRQ/o.jpg",
        "is_closed": "fancy-franks-toronto",
        "location": {
            "address1": "326 College Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "326 College Street",
                "Toronto, ON M5T 1S3",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1S3"
        },
        "name": "Fancy Franks",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "creperies",
                "title": "Creperies"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            }
        ],
        "coordinates": {
            "latitude": 43.77605,
            "longitude": -79.41424
        },
        "id": "pastel-creperies-and-dessert-house-north-york",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/DR050TyV4z9M3b9Hcm7DSQ/o.jpg",
        "is_closed": "pastel-creperies-and-dessert-house-north-york",
        "location": {
            "address1": "5417 Yonge Street",
            "address2": null,
            "address3": "",
            "city": "North York",
            "country": "CA",
            "display_address": [
                "5417 Yonge Street",
                "North York, ON M2N 5R6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5R6"
        },
        "name": "Pastel Creperies & Dessert House",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "indonesian",
                "title": "Indonesian"
            }
        ],
        "coordinates": {
            "latitude": 43.7668728,
            "longitude": -79.4119567
        },
        "id": "satay-sate-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/cdGPHlBr-aYfToySxcQlgQ/o.jpg",
        "is_closed": "satay-sate-toronto",
        "location": {
            "address1": "5025 Yonge Street",
            "address2": null,
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "5025 Yonge Street",
                "Toronto, ON M2N 5P2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5P2"
        },
        "name": "Satay Sate",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "bakeries",
                "title": "Bakeries"
            }
        ],
        "coordinates": {
            "latitude": 43.6483455546718,
            "longitude": -79.3977569284545
        },
        "id": "butter-avenue-toronto-5",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/gee_YWjc1KtXln6lmQNVRw/o.jpg",
        "is_closed": "butter-avenue-toronto-5",
        "location": {
            "address1": "477 Queen Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "477 Queen Street W",
                "Toronto, ON M5V 2A9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5V 2A9"
        },
        "name": "Butter Avenue",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "bakeries",
                "title": "Bakeries"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "macarons",
                "title": "Macarons"
            }
        ],
        "coordinates": {
            "latitude": 43.6458059426276,
            "longitude": -79.4114097682563
        },
        "id": "nadege-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/fCPRtsq9pmsag48LY-QV4Q/o.jpg",
        "is_closed": "nadege-toronto",
        "location": {
            "address1": "780 Queen Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "780 Queen Street W",
                "Toronto, ON M6J 1G2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6J 1G2"
        },
        "name": "Nadege",
        "price": "$$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "thai",
                "title": "Thai"
            }
        ],
        "coordinates": {
            "latitude": 43.6485607,
            "longitude": -79.3745641
        },
        "id": "sukho-thai-toronto-2",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/x7aVC2KsDXPocnTUXFT6Cw/o.jpg",
        "is_closed": "sukho-thai-toronto-2",
        "location": {
            "address1": "52 Wellington Street E",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "52 Wellington Street E",
                "Toronto, ON M5E 1C9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5E 1C9"
        },
        "name": "Sukho Thai",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "thai",
                "title": "Thai"
            }
        ],
        "coordinates": {
            "latitude": 43.6387,
            "longitude": -79.417724
        },
        "id": "thai-room-liberty-village-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/lNg4qbdsE-6rdbvDlVAJzQ/o.jpg",
        "is_closed": "thai-room-liberty-village-toronto",
        "location": {
            "address1": "171 E Liberty Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "171 E Liberty Street",
                "Toronto, ON M6K 3P6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 3P6"
        },
        "name": "Thai Room Liberty Village",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "dimsum",
                "title": "Dim Sum"
            }
        ],
        "coordinates": {
            "latitude": 43.6543527996563,
            "longitude": -79.3983133882284
        },
        "id": "rol-san-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/9S8Vyv8shx2I4sFd5LIouw/o.jpg",
        "is_closed": "rol-san-toronto",
        "location": {
            "address1": "323 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "323 Spadina Avenue",
                "Toronto, ON M5T 2E9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2E9"
        },
        "name": "Rol San",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "cafes",
                "title": "Cafes"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "coordinates": {
            "latitude": 43.67971,
            "longitude": -79.33964
        },
        "id": "sakawa-coffee-and-japanese-restaurant-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/exjNc8hWYxFiOVhtMXRAcg/o.jpg",
        "is_closed": "sakawa-coffee-and-japanese-restaurant-toronto",
        "location": {
            "address1": "867 Danforth Ave",
            "address2": "",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "867 Danforth Ave",
                "Toronto, ON M4J 1L8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M4J 1L8"
        },
        "name": "Sakawa Coffee & Japanese Restaurant",
        "price": "$$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "dimsum",
                "title": "Dim Sum"
            }
        ],
        "coordinates": {
            "latitude": 43.653324,
            "longitude": -79.395372
        },
        "id": "dim-sum-king-seafood-restaurant-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/sY39xKj12g2blmxHK5zG4A/o.jpg",
        "is_closed": "dim-sum-king-seafood-restaurant-toronto",
        "location": {
            "address1": "421 Dundas St W",
            "address2": "3rd Fl",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "421 Dundas St W",
                "3rd Fl",
                "Toronto, ON M5T 1G6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1G6"
        },
        "name": "Dim Sum King Seafood Restaurant",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "creperies",
                "title": "Creperies"
            },
            {
                "alias": "cafes",
                "title": "Cafes"
            }
        ],
        "coordinates": {
            "latitude": 43.6564001432905,
            "longitude": -79.3991507040124
        },
        "id": "spot-crepes-and-tea-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/FDuJPO1pZkNf2XypCvAHdQ/o.jpg",
        "is_closed": "spot-crepes-and-tea-toronto",
        "location": {
            "address1": "385 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "385 Spadina Avenue",
                "Toronto, ON M5T 2G6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2G6"
        },
        "name": "Spot Crepes & Tea",
        "price": "$$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "burgers",
                "title": "Burgers"
            }
        ],
        "coordinates": {
            "latitude": 43.75271,
            "longitude": -79.35918
        },
        "id": "big-smoke-burger-toronto-13",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/aish8KsYFdKpscpT7BxTQA/o.jpg",
        "is_closed": "big-smoke-burger-toronto-13",
        "location": {
            "address1": "799 York Mills Road",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "799 York Mills Road",
                "Toronto, ON M3B 1X6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M3B 1X6"
        },
        "name": "Big Smoke Burger",
        "price": "$$",
        "rating": 2.5
    },
    {
        "categories": [
            {
                "alias": "chinese",
                "title": "Chinese"
            }
        ],
        "coordinates": {
            "latitude": 43.736035996923,
            "longitude": -79.34712042201
        },
        "id": "congee-queen-north-york",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DEJIp7qRV7cxPvLl_lI33w/o.jpg",
        "is_closed": "congee-queen-north-york",
        "location": {
            "address1": "895 Lawrence Avenue E",
            "address2": "",
            "address3": "",
            "city": "North York",
            "country": "CA",
            "display_address": [
                "895 Lawrence Avenue E",
                "North York, ON M3C 3L2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M3C 3L2"
        },
        "name": "Congee Queen",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            }
        ],
        "coordinates": {
            "latitude": 43.77643,
            "longitude": -79.41507
        },
        "id": "my-sushi-north-york",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/sZbyjRkcbG84WW_Q1uWAuw/o.jpg",
        "is_closed": "my-sushi-north-york",
        "location": {
            "address1": "5440 Yonge St",
            "address2": "",
            "address3": "",
            "city": "North York",
            "country": "CA",
            "display_address": [
                "5440 Yonge St",
                "North York, ON M2N 5R8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5R8"
        },
        "name": "My Sushi",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "newcanadian",
                "title": "Canadian (New)"
            },
            {
                "alias": "comfortfood",
                "title": "Comfort Food"
            },
            {
                "alias": "bars",
                "title": "Bars"
            }
        ],
        "coordinates": {
            "latitude": 43.6389515596819,
            "longitude": -79.4175598994501
        },
        "id": "williams-landing-bar-grill-hub-restaurant-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/4zAg4uO-aVK_-00kM1YcEA/o.jpg",
        "is_closed": "williams-landing-bar-grill-hub-restaurant-toronto",
        "location": {
            "address1": "120 Lynn Williams St",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "120 Lynn Williams St",
                "Toronto, ON M6K 3P6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 3P6"
        },
        "name": "Williams Landing Bar Grill Hub Restaurant",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "breweries",
                "title": "Breweries"
            },
            {
                "alias": "pubs",
                "title": "Pubs"
            }
        ],
        "coordinates": {
            "latitude": 43.8472391901732,
            "longitude": -79.375839209037
        },
        "id": "the-3-brewers-richmond-hill",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/VCLJd_-V6t5mIVTwXLrR9w/o.jpg",
        "is_closed": "the-3-brewers-richmond-hill",
        "location": {
            "address1": "125-135 York Blvd",
            "address2": "",
            "address3": "",
            "city": "Richmond Hill",
            "country": "CA",
            "display_address": [
                "125-135 York Blvd",
                "Richmond Hill, ON L4B 3J6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L4B 3J6"
        },
        "name": "The 3 Brewers",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            },
            {
                "alias": "noodles",
                "title": "Noodles"
            }
        ],
        "coordinates": {
            "latitude": 43.65634,
            "longitude": -79.40689
        },
        "id": "ramen-isshin-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/1fRssiE9841Zu1iW-sDKlg/o.jpg",
        "is_closed": "ramen-isshin-toronto",
        "location": {
            "address1": "421 College Street",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "421 College Street",
                "Toronto, ON M5T 1T1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1T1"
        },
        "name": "Ramen Isshin",
        "price": "$$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            },
            {
                "alias": "noodles",
                "title": "Noodles"
            }
        ],
        "coordinates": {
            "latitude": 43.656321731393,
            "longitude": -79.377499580039
        },
        "id": "hokkaido-ramen-santouka-toronto-2",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/qE-iZmXsPN2-5z09F_dOoA/o.jpg",
        "is_closed": "hokkaido-ramen-santouka-toronto-2",
        "location": {
            "address1": "91 Dundas Street E",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "91 Dundas Street E",
                "Toronto, ON M5B 2C8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5B 2C8"
        },
        "name": "Hokkaido Ramen Santouka",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            },
            {
                "alias": "noodles",
                "title": "Noodles"
            }
        ],
        "coordinates": {
            "latitude": 43.66484,
            "longitude": -79.38607
        },
        "id": "raijin-ramen-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/dLKtr9ObzhUDo4MpKpsh2g/o.jpg",
        "is_closed": "raijin-ramen-toronto",
        "location": {
            "address1": "24 Wellesley Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "24 Wellesley Street W",
                "Toronto, ON M4Y 2X6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M4Y 2X6"
        },
        "name": "Raijin Ramen",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "bakeries",
                "title": "Bakeries"
            },
            {
                "alias": "vietnamese",
                "title": "Vietnamese"
            }
        ],
        "coordinates": {
            "latitude": 43.65365,
            "longitude": -79.3987
        },
        "id": "nguyen-huong-food-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/zbdFOCU2UG-wElhrX-4HXg/o.jpg",
        "is_closed": "nguyen-huong-food-toronto",
        "location": {
            "address1": "322 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "322 Spadina Avenue",
                "Toronto, ON M5T 2G2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2G2"
        },
        "name": "Nguyen Huong Food",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "coordinates": {
            "latitude": 43.64884,
            "longitude": -79.39695
        },
        "id": "banh-mi-boys-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/_zdzcPeErl-ihfY7H2wY4A/o.jpg",
        "is_closed": "banh-mi-boys-toronto",
        "location": {
            "address1": "392 Queen Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "392 Queen Street W",
                "Toronto, ON M5V 2A9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5V 2A9"
        },
        "name": "Banh Mi Boys",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.65129,
            "longitude": -79.3892599
        },
        "id": "ematei-japanese-restaurant-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/3XSceUy85si8yIJRNgWlvA/o.jpg",
        "is_closed": "ematei-japanese-restaurant-toronto",
        "location": {
            "address1": "30 St Patrick Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "30 St Patrick Street",
                "Toronto, ON M5T 3A3",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 3A3"
        },
        "name": "Ematei Japanese Restaurant",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "hotdogs",
                "title": "Fast Food"
            },
            {
                "alias": "poutineries",
                "title": "Poutineries"
            }
        ],
        "coordinates": {
            "latitude": 43.6434971052899,
            "longitude": -79.4232010023203
        },
        "id": "poutinis-house-of-poutine-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/eTnrHQlndTbMFwmcZgTSBA/o.jpg",
        "is_closed": "poutinis-house-of-poutine-toronto",
        "location": {
            "address1": "1112 Queen Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "1112 Queen Street W",
                "Toronto, ON M6J 1H9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6J 1H9"
        },
        "name": "Poutini's House of Poutine",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "newcanadian",
                "title": "Canadian (New)"
            },
            {
                "alias": "sportsbars",
                "title": "Sports Bars"
            },
            {
                "alias": "burgers",
                "title": "Burgers"
            }
        ],
        "coordinates": {
            "latitude": 43.64876,
            "longitude": -79.39028
        },
        "id": "jack-astors-bar-and-grill-toronto-2",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/oqoNC57x54v-ByiIr298ag/o.jpg",
        "is_closed": "jack-astors-bar-and-grill-toronto-2",
        "location": {
            "address1": "133 John Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "133 John Street",
                "Toronto, ON M5V 2E4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5V 2E4"
        },
        "name": "Jack Astor's Bar & Grill",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.831795517967,
            "longitude": -79.2663108184934
        },
        "id": "matsuda-japanese-cuisine-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/NzJIxLGwHq0jjQgVPZQo-w/o.jpg",
        "is_closed": "matsuda-japanese-cuisine-toronto",
        "location": {
            "address1": "5651 Steeles Avenue E",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "5651 Steeles Avenue E",
                "Toronto, ON M1W 2B4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M1W 2B4"
        },
        "name": "Matsuda Japanese Cuisine",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "vietnamese",
                "title": "Vietnamese"
            }
        ],
        "coordinates": {
            "latitude": 43.6691214,
            "longitude": -79.3861799
        },
        "id": "ginger-toronto-11",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/FDomrHF-_GIexFNGPwRTYA/o.jpg",
        "is_closed": "ginger-toronto-11",
        "location": {
            "address1": "695 Yonge Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "695 Yonge Street",
                "Toronto, ON M4Y 2B2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M4Y 2B2"
        },
        "name": "Ginger",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "asianfusion",
                "title": "Asian Fusion"
            }
        ],
        "coordinates": {
            "latitude": 43.6554583,
            "longitude": -79.3991664
        },
        "id": "stay-cafeteria-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/HqWRwaWnGludy0Cu0FczYA/o.jpg",
        "is_closed": "stay-cafeteria-toronto",
        "location": {
            "address1": "388 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "388 Spadina Avenue",
                "Toronto, ON M5T 2G5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2G5"
        },
        "name": "STAY Cafeteria",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.7792132602969,
            "longitude": -79.4170891866088
        },
        "id": "mr-chu-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/8-ZYD--NRAF9RY59XpXlFQ/o.jpg",
        "is_closed": "mr-chu-toronto",
        "location": {
            "address1": "15 Finch Avenue W",
            "address2": "",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "15 Finch Avenue W",
                "Toronto, ON M2N 7K4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 7K4"
        },
        "name": "Mr Chu",
        "price": "$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "hotdogs",
                "title": "Fast Food"
            },
            {
                "alias": "hawaiian",
                "title": "Hawaiian"
            }
        ],
        "coordinates": {
            "latitude": 43.65808,
            "longitude": -79.38191
        },
        "id": "poke-wrap-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/GwJSIQh6O6-7Na7bAIUtNA/o.jpg",
        "is_closed": "poke-wrap-toronto",
        "location": {
            "address1": "354 Yonge Street",
            "address2": "",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "354 Yonge Street",
                "Toronto, ON M5B 1S5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5B 1S5"
        },
        "name": "Poke Wrap",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "german",
                "title": "German"
            },
            {
                "alias": "bars",
                "title": "Bars"
            }
        ],
        "coordinates": {
            "latitude": 43.64418555054,
            "longitude": -79.401014855291
        },
        "id": "wvrst-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/MVA2wA4_x58IAnfmR7f3Kw/o.jpg",
        "is_closed": "wvrst-toronto",
        "location": {
            "address1": "609 King Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "609 King Street W",
                "Toronto, ON M5V 1M5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5V 1M5"
        },
        "name": "Wvrst",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "coordinates": {
            "latitude": 43.6548,
            "longitude": -79.38735
        },
        "id": "fugo-desserts-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/aCMz1cMzZ7qJdeHxBfX3ow/o.jpg",
        "is_closed": "fugo-desserts-toronto",
        "location": {
            "address1": "205 Dundas Street W",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "205 Dundas Street W",
                "Toronto, ON M5G 1C8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5G 1C8"
        },
        "name": "Fugo Desserts",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "chinese",
                "title": "Chinese"
            },
            {
                "alias": "cafes",
                "title": "Cafes"
            }
        ],
        "coordinates": {
            "latitude": 43.65348,
            "longitude": -79.39686
        },
        "id": "hong-kong-bistro-cafe-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/MXACXAoL8kXk8-6vNXR1UA/o.jpg",
        "is_closed": "hong-kong-bistro-cafe-toronto",
        "location": {
            "address1": "472 Dundas Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "472 Dundas Street W",
                "Toronto, ON M5T 1G8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1G8"
        },
        "name": "Hong Kong Bistro Cafe",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "bakeries",
                "title": "Bakeries"
            }
        ],
        "coordinates": {
            "latitude": 43.65584,
            "longitude": -79.38403
        },
        "id": "uncle-tetsus-japanese-cheesecake-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/HY6crsiVxLVC_6Kmhmck0Q/o.jpg",
        "is_closed": "uncle-tetsus-japanese-cheesecake-toronto",
        "location": {
            "address1": "598 Bay Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "598 Bay Street",
                "Toronto, ON M5G 1M5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5G 1M5"
        },
        "name": "Uncle Tetsu's Japanese Cheesecake",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "bakeries",
                "title": "Bakeries"
            }
        ],
        "coordinates": {
            "latitude": 43.65584,
            "longitude": -79.38403
        },
        "id": "uncle-tetsus-japanese-cheesecake-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/HY6crsiVxLVC_6Kmhmck0Q/o.jpg",
        "is_closed": "uncle-tetsus-japanese-cheesecake-toronto",
        "location": {
            "address1": "598 Bay Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "598 Bay Street",
                "Toronto, ON M5G 1M5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5G 1M5"
        },
        "name": "Uncle Tetsu's Japanese Cheesecake",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "cafes",
                "title": "Cafes"
            }
        ],
        "coordinates": {
            "latitude": 43.65576,
            "longitude": -79.38433
        },
        "id": "pablo-cheesetart-canada-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/TM4iidWNQqQgRGI8yJL1tw/o.jpg",
        "is_closed": "pablo-cheesetart-canada-toronto",
        "location": {
            "address1": "114 Dundas St W",
            "address2": "",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "114 Dundas St W",
                "Toronto, ON M5G 1C3",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5G 1C3"
        },
        "name": "Pablo Cheesetart Canada",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "indpak",
                "title": "Indian"
            },
            {
                "alias": "halal",
                "title": "Halal"
            },
            {
                "alias": "bangladeshi",
                "title": "Bangladeshi"
            }
        ],
        "coordinates": {
            "latitude": 43.65497,
            "longitude": -79.38648
        },
        "id": "indian-biriyani-house-toronto-2",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/eVJ-ENARgSOpHcJc0yj1zQ/o.jpg",
        "is_closed": "indian-biriyani-house-toronto-2",
        "location": {
            "address1": "181 Dundas St W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "181 Dundas St W",
                "Toronto, ON M5G 1C7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5G 1C7"
        },
        "name": "Indian Biriyani House",
        "price": "$",
        "rating": 2.5
    },
    {
        "categories": [
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "vegan",
                "title": "Vegan"
            },
            {
                "alias": "gluten_free",
                "title": "Gluten-Free"
            }
        ],
        "coordinates": {
            "latitude": 43.6697687,
            "longitude": -79.382838
        },
        "id": "lolas-kitchen-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/JDD-XF0keV_Z_Kp-ceAG3g/o.jpg",
        "is_closed": "lolas-kitchen-toronto",
        "location": {
            "address1": "634 Church Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "634 Church Street",
                "Toronto, ON M4Y 2G3",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M4Y 2G3"
        },
        "name": "Lola's Kitchen",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            },
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "coordinates": {
            "latitude": 43.6546402,
            "longitude": -79.4009323
        },
        "id": "mare-pizzeria-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/0hfyRyMqv9WbVPykC-61dA/o.jpg",
        "is_closed": "mare-pizzeria-toronto",
        "location": {
            "address1": "185 Baldwin Street",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "185 Baldwin Street",
                "Toronto, ON M5T 1L8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1L8"
        },
        "name": "Mare Pizzeria",
        "price": "$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            }
        ],
        "coordinates": {
            "latitude": 43.65808,
            "longitude": -79.38191
        },
        "id": "infuse-cafe-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/g9sKZL-18_B8XtOKBtEfTA/o.jpg",
        "is_closed": "infuse-cafe-toronto",
        "location": {
            "address1": "354 Yonge St",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "354 Yonge St",
                "Toronto, ON M5B 1S5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5B 1S5"
        },
        "name": "Infuse Cafe",
        "price": "$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "cafes",
                "title": "Cafes"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "coordinates": {
            "latitude": 43.66579167602,
            "longitude": -79.4075957401665
        },
        "id": "future-bistro-toronto-2",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/r2d9ASqOj6cz_XlE561FCg/o.jpg",
        "is_closed": "future-bistro-toronto-2",
        "location": {
            "address1": "483 Bloor Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "483 Bloor Street W",
                "Toronto, ON M5S 1Y2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S 1Y2"
        },
        "name": "Future Bistro",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "mexican",
                "title": "Mexican"
            },
            {
                "alias": "hotdogs",
                "title": "Fast Food"
            }
        ],
        "coordinates": {
            "latitude": 43.6397591,
            "longitude": -79.4213791
        },
        "id": "fat-bastard-burrito-toronto-2",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Z00tyzwAm_zn0ERWElF5ig/o.jpg",
        "is_closed": "fat-bastard-burrito-toronto-2",
        "location": {
            "address1": "126 Atlantic Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "126 Atlantic Avenue",
                "Toronto, ON M6K 1Y2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 1Y2"
        },
        "name": "Fat Bastard Burrito",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "tradamerican",
                "title": "American (Traditional)"
            },
            {
                "alias": "gastropubs",
                "title": "Gastropubs"
            },
            {
                "alias": "pubs",
                "title": "Pubs"
            }
        ],
        "coordinates": {
            "latitude": 43.66599,
            "longitude": -79.40798
        },
        "id": "el-furniture-warehouse-toronto-2",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/D9DgosHMtt4d20YzHRMbrg/o.jpg",
        "is_closed": "el-furniture-warehouse-toronto-2",
        "location": {
            "address1": "410 Bloor Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "410 Bloor Street W",
                "Toronto, ON M5S",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S"
        },
        "name": "El Furniture Warehouse",
        "price": "$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            },
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.66561,
            "longitude": -79.4078
        },
        "id": "new-generation-sushi-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/f482BqHxx6bvpHN6ZWc77w/o.jpg",
        "is_closed": "new-generation-sushi-toronto",
        "location": {
            "address1": "493 Bloor St W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "493 Bloor St W",
                "Toronto, ON M5S 1Y2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S 1Y2"
        },
        "name": "New Generation Sushi",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "coordinates": {
            "latitude": 43.66531,
            "longitude": -79.40928
        },
        "id": "yogurtys-froyo-toronto-2",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/T6ncEhzvp8SPmgyciucJQw/o.jpg",
        "is_closed": "yogurtys-froyo-toronto-2",
        "location": {
            "address1": "527 Bloor Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "527 Bloor Street W",
                "Toronto, ON M5S 1Y5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S 1Y5"
        },
        "name": "Yogurty's Froyo",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "taiwanese",
                "title": "Taiwanese"
            }
        ],
        "coordinates": {
            "latitude": 43.7774719503833,
            "longitude": -79.4147657042992
        },
        "id": "mabu-station-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/7ahIh2h2SgyA-iwIsyiY9g/o.jpg",
        "is_closed": "mabu-station-toronto",
        "location": {
            "address1": "5455-5457 Yonge Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "5455-5457 Yonge Street",
                "Toronto, ON M2N 5S1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5S1"
        },
        "name": "Mabu Station",
        "price": "$$",
        "rating": 2.5
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.7792767,
            "longitude": -79.4171614
        },
        "id": "huh-ga-ne-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/N68MRNVf3NyYo9V9IvPBPA/o.jpg",
        "is_closed": "huh-ga-ne-toronto",
        "location": {
            "address1": "19 Finch Avenue W",
            "address2": "Unit A",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "19 Finch Avenue W",
                "Unit A",
                "Toronto, ON M2N 7K4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 7K4"
        },
        "name": "Huh Ga Ne",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "vietnamese",
                "title": "Vietnamese"
            }
        ],
        "coordinates": {
            "latitude": 43.7943799,
            "longitude": -79.35392
        },
        "id": "pho-vietnamese-delight-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/rPNq2gMLdbZ3iNoiW18h5w/o.jpg",
        "is_closed": "pho-vietnamese-delight-toronto",
        "location": {
            "address1": "3555 Don Mills Rd",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "3555 Don Mills Rd",
                "Toronto, ON M2J",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2J"
        },
        "name": "Pho Vietnamese Delight",
        "price": "$",
        "rating": 2.5
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.77659,
            "longitude": -79.4138
        },
        "id": "naniwa-taro-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/y6TA0vvYMk77qnqx34wnfA/o.jpg",
        "is_closed": "naniwa-taro-toronto",
        "location": {
            "address1": "7 Byng Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "7 Byng Avenue",
                "Toronto, ON M2N 5R6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5R6"
        },
        "name": "Naniwa-Taro",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.8035475090951,
            "longitude": -79.420559251304
        },
        "id": "sushi-bong-markham",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/CUcr1b7ZFCeY5h3Cw6GaFQ/o.jpg",
        "is_closed": "sushi-bong-markham",
        "location": {
            "address1": "7181 Yonge Street",
            "address2": "Unit 27",
            "address3": "",
            "city": "Markham",
            "country": "CA",
            "display_address": [
                "7181 Yonge Street",
                "Unit 27",
                "Markham, ON L3T 2B2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L3T 2B2"
        },
        "name": "Sushi Bong",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            }
        ],
        "coordinates": {
            "latitude": 43.77963,
            "longitude": -79.41518
        },
        "id": "menya-fuji-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/PbKdT_BzcJ8Ky6vX0uvfWw/o.jpg",
        "is_closed": "menya-fuji-toronto",
        "location": {
            "address1": "3 Finch Avenue E",
            "address2": "",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "3 Finch Avenue E",
                "Toronto, ON M2N",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N"
        },
        "name": "Menya Fuji",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "thai",
                "title": "Thai"
            }
        ],
        "coordinates": {
            "latitude": 43.64766,
            "longitude": -79.39213
        },
        "id": "khao-san-road-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/e8jr8Y3FRqUJTmwQ4qebrg/o.jpg",
        "is_closed": "khao-san-road-toronto",
        "location": {
            "address1": "326 Adelaide St W",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "326 Adelaide St W",
                "Toronto, ON M6J 1G1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6J 1G1"
        },
        "name": "Khao San Road",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            },
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "coordinates": {
            "latitude": 43.83674,
            "longitude": -79.50526
        },
        "id": "tosto-quickfire-pizza-pasta-vaughan-2",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/XIBc5YOPjz5x8bFVbxPJ-w/o.jpg",
        "is_closed": "tosto-quickfire-pizza-pasta-vaughan-2",
        "location": {
            "address1": "11 Jacob Keffer Parkway",
            "address2": "",
            "address3": null,
            "city": "Vaughan",
            "country": "CA",
            "display_address": [
                "11 Jacob Keffer Parkway",
                "Vaughan, ON L4K 5N8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L4K 5N8"
        },
        "name": "Tosto Quickfire Pizza Pasta",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "seafood",
                "title": "Seafood"
            },
            {
                "alias": "fishnchips",
                "title": "Fish & Chips"
            }
        ],
        "coordinates": {
            "latitude": 43.66207,
            "longitude": -79.40639
        },
        "id": "harbord-fish-and-chips-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Ggy8DKNPENQN8hcUssBYVQ/o.jpg",
        "is_closed": "harbord-fish-and-chips-toronto",
        "location": {
            "address1": "147 Harbord Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "147 Harbord Street",
                "Toronto, ON M5S 1H1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S 1H1"
        },
        "name": "Harbord Fish & Chips",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "vietnamese",
                "title": "Vietnamese"
            },
            {
                "alias": "asianfusion",
                "title": "Asian Fusion"
            }
        ],
        "coordinates": {
            "latitude": 43.65634,
            "longitude": -79.39896
        },
        "id": "anh-dao-restaurant-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/MHqzazejUPGDFqmOgl_lpg/o.jpg",
        "is_closed": "anh-dao-restaurant-toronto",
        "location": {
            "address1": "383 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "383 Spadina Avenue",
                "Toronto, ON M5T 2G6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2G6"
        },
        "name": "Anh Dao Restaurant",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            }
        ],
        "coordinates": {
            "latitude": 43.65252,
            "longitude": -79.39854
        },
        "id": "sugar-marmalade-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/T-LoDhJunaWL7_EfA035Gw/o.jpg",
        "is_closed": "sugar-marmalade-toronto",
        "location": {
            "address1": "280 Spadina Avenue",
            "address2": "Unit P",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "280 Spadina Avenue",
                "Unit P",
                "Toronto, ON M5T 2E7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2E7"
        },
        "name": "Sugar Marmalade",
        "price": "$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "gourmet",
                "title": "Specialty Food"
            }
        ],
        "coordinates": {
            "latitude": 43.6549,
            "longitude": -79.39943
        },
        "id": "toronto-popcorn-company-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/sEG0DZnN3XXKaooOJ1FOlw/o.jpg",
        "is_closed": "toronto-popcorn-company-toronto",
        "location": {
            "address1": "147 Baldwin Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "147 Baldwin Street",
                "Toronto, ON M5T 3K7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 3K7"
        },
        "name": "Toronto Popcorn Company",
        "price": "$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "tea",
                "title": "Tea Rooms"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            }
        ],
        "coordinates": {
            "latitude": 43.65683,
            "longitude": -79.39923
        },
        "id": "matcha-tea-and-dessert-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/35iQlR1ITP55Br94Pd1otA/o.jpg",
        "is_closed": "matcha-tea-and-dessert-toronto",
        "location": {
            "address1": "407 Spadina Avenue",
            "address2": "",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "407 Spadina Avenue",
                "Toronto, ON M5T 2G6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2G6"
        },
        "name": "Matcha Tea & Dessert",
        "price": "$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            }
        ],
        "coordinates": {
            "latitude": 43.6535844,
            "longitude": -79.4004303
        },
        "id": "fika-toronto-2",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Xl0GEp1jJEkxI-E7635xoA/o.jpg",
        "is_closed": "fika-toronto-2",
        "location": {
            "address1": "28 Kensington Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "28 Kensington Avenue",
                "Toronto, ON M5T 2J9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2J9"
        },
        "name": "FIKA",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            },
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            }
        ],
        "coordinates": {
            "latitude": 43.6474197040014,
            "longitude": -79.3902875133136
        },
        "id": "sweet-jesus-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/14SAlSjqR7N7cz2Bo2nb4Q/o.jpg",
        "is_closed": "sweet-jesus-toronto",
        "location": {
            "address1": "106 John Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "106 John Street",
                "Toronto, ON M5H 1X9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5H 1X9"
        },
        "name": "Sweet Jesus",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            },
            {
                "alias": "bakeries",
                "title": "Bakeries"
            }
        ],
        "coordinates": {
            "latitude": 43.60214,
            "longitude": -79.50028
        },
        "id": "sweet-olenkas-etobicoke",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/rkibO97j7SmcTLaQM6j-0g/o.jpg",
        "is_closed": "sweet-olenkas-etobicoke",
        "location": {
            "address1": "2790 Lakeshore Boulevard W",
            "address2": "",
            "address3": "",
            "city": "Etobicoke",
            "country": "CA",
            "display_address": [
                "2790 Lakeshore Boulevard W",
                "Etobicoke, ON M8V 1H5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M8V 1H5"
        },
        "name": "Sweet Olenka's",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            }
        ],
        "coordinates": {
            "latitude": 43.66332,
            "longitude": -79.40257
        },
        "id": "cora-pizza-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/aIUEk-0DiCjxsqmGye_aHQ/o.jpg",
        "is_closed": "cora-pizza-toronto",
        "location": {
            "address1": "656A Spadina Ave",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "656A Spadina Ave",
                "Toronto, ON M5S 2H7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S 2H7"
        },
        "name": "Cora Pizza",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "pubs",
                "title": "Pubs"
            }
        ],
        "coordinates": {
            "latitude": 43.66496,
            "longitude": -79.38304
        },
        "id": "fox-and-fiddle-toronto-5",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/C_Ng4UoLhvrxRhTgIL5HCw/o.jpg",
        "is_closed": "fox-and-fiddle-toronto-5",
        "location": {
            "address1": "27 Wellesley Street East",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "27 Wellesley Street East",
                "Toronto, ON M4Y 1Z2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M4Y 1Z2"
        },
        "name": "Fox and Fiddle",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "pubs",
                "title": "Pubs"
            }
        ],
        "coordinates": {
            "latitude": 43.65813,
            "longitude": -79.39747
        },
        "id": "einstein-cafe-and-pub-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/HDr_9m9y01PDc7mWZnxtxQ/o.jpg",
        "is_closed": "einstein-cafe-and-pub-toronto",
        "location": {
            "address1": "229 College Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "229 College Street",
                "Toronto, ON M5T 1R4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1R4"
        },
        "name": "Einstein Cafe & Pub",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "pubs",
                "title": "Pubs"
            }
        ],
        "coordinates": {
            "latitude": 43.7889140387731,
            "longitude": -79.4183313846588
        },
        "id": "the-fry-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/naPat37M-vBCt2CorkoZ8A/o.jpg",
        "is_closed": "the-fry-toronto",
        "location": {
            "address1": "6012 Yonge Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "6012 Yonge Street",
                "Toronto, ON M2M 3V9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2M 3V9"
        },
        "name": "The Fry",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "bbq",
                "title": "Barbeque"
            }
        ],
        "coordinates": {
            "latitude": 43.8421215251943,
            "longitude": -79.387192504463
        },
        "id": "korean-grill-house-thornhill",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/TtN21m8wKjg8IlS_oqAqzQ/o.jpg",
        "is_closed": "korean-grill-house-thornhill",
        "location": {
            "address1": "505 Highway 7 E",
            "address2": "",
            "address3": "",
            "city": "Thornhill",
            "country": "CA",
            "display_address": [
                "505 Highway 7 E",
                "Thornhill, ON L3T 7T1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L3T 7T1"
        },
        "name": "Korean Grill House",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "newcanadian",
                "title": "Canadian (New)"
            },
            {
                "alias": "comfortfood",
                "title": "Comfort Food"
            },
            {
                "alias": "bars",
                "title": "Bars"
            }
        ],
        "coordinates": {
            "latitude": 43.62319,
            "longitude": -79.51522
        },
        "id": "milestones-restaurants-etobicoke",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/g9id1bUAHwT1cXQvS-r6HA/o.jpg",
        "is_closed": "milestones-restaurants-etobicoke",
        "location": {
            "address1": "1001 The Queensway",
            "address2": "",
            "address3": "",
            "city": "Etobicoke",
            "country": "CA",
            "display_address": [
                "1001 The Queensway",
                "Etobicoke, ON M8Z 6C7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M8Z 6C7"
        },
        "name": "Milestones Restaurants",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.7725547,
            "longitude": -79.4136499
        },
        "id": "owl-of-minerva-north-york",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/VmiEKs_lAIkGB_3rhLe9fw/o.jpg",
        "is_closed": "owl-of-minerva-north-york",
        "location": {
            "address1": "5324 Yonge Street",
            "address2": "",
            "address3": "",
            "city": "North York",
            "country": "CA",
            "display_address": [
                "5324 Yonge Street",
                "North York, ON M2N 5P9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5P9"
        },
        "name": "Owl of Minerva",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "wine_bars",
                "title": "Wine Bars"
            },
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "beer_and_wine",
                "title": "Beer, Wine & Spirits"
            }
        ],
        "coordinates": {
            "latitude": 43.6592789,
            "longitude": -79.3824692
        },
        "id": "scaddabush-italian-kitchen-and-bar-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/JWgYp4QjTrbQn_KXiIB6Pg/o.jpg",
        "is_closed": "scaddabush-italian-kitchen-and-bar-toronto",
        "location": {
            "address1": "382 Yonge Street",
            "address2": "Unit #7",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "382 Yonge Street",
                "Unit #7",
                "Toronto, ON M5B 1S8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5B 1S8"
        },
        "name": "SCADDABUSH Italian Kitchen & Bar",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "bakeries",
                "title": "Bakeries"
            },
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.66438,
            "longitude": -79.41557
        },
        "id": "hodo-kwaja-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UfwEgv58jUeb9vRDoMIoaw/o.jpg",
        "is_closed": "hodo-kwaja-toronto",
        "location": {
            "address1": "656 Bloor Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "656 Bloor Street W",
                "Toronto, ON M6G 1K9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6G 1K9"
        },
        "name": "Hodo Kwaja",
        "price": "$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.66401,
            "longitude": -79.41561
        },
        "id": "sunrise-house-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/KiX5dute3FD1NVEsn29WUQ/o.jpg",
        "is_closed": "sunrise-house-toronto",
        "location": {
            "address1": "661 Bloor Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "661 Bloor Street W",
                "Toronto, ON M6G 1L1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6G 1L1"
        },
        "name": "Sunrise House",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.7770435193004,
            "longitude": -79.4145441055298
        },
        "id": "buk-chang-dong-soon-tofu-north-york-2",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Th8LymTA3gr7qIQtipk97w/o.jpg",
        "is_closed": "buk-chang-dong-soon-tofu-north-york-2",
        "location": {
            "address1": "5445 Yonge Street",
            "address2": "",
            "address3": "",
            "city": "North York",
            "country": "CA",
            "display_address": [
                "5445 Yonge Street",
                "North York, ON M2N 5S1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5S1"
        },
        "name": "Buk Chang Dong Soon Tofu",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "bbq",
                "title": "Barbeque"
            }
        ],
        "coordinates": {
            "latitude": 43.6659965515137,
            "longitude": -79.4068450927734
        },
        "id": "little-piggys-toronto-4",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/R67Nl4nG2KVpOC3gY2tkUA/o.jpg",
        "is_closed": "little-piggys-toronto-4",
        "location": {
            "address1": null,
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "Toronto, ON M5S 1X9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S 1X9"
        },
        "name": "Little Piggy's",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "tea",
                "title": "Tea Rooms"
            }
        ],
        "coordinates": {
            "latitude": 43.8426522,
            "longitude": -79.3868698
        },
        "id": "chatime-thornhill-2",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/rpQWmxFDUeGmkWzOWQ9LXA/o.jpg",
        "is_closed": "chatime-thornhill-2",
        "location": {
            "address1": "505 Highway 7 E",
            "address2": "Unit 22",
            "address3": "",
            "city": "Thornhill",
            "country": "CA",
            "display_address": [
                "505 Highway 7 E",
                "Unit 22",
                "Thornhill, ON L3T 7W6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L3T 7W6"
        },
        "name": "Chatime",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.6689362,
            "longitude": -79.3862171
        },
        "id": "miss-korea-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/onwfVrWx3cbQWAkD8zXyTQ/o.jpg",
        "is_closed": "miss-korea-toronto",
        "location": {
            "address1": "687 Yonge Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "687 Yonge Street",
                "Toronto, ON M4Y 2B2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M4Y 2B2"
        },
        "name": "Miss Korea",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "caribbean",
                "title": "Caribbean"
            }
        ],
        "coordinates": {
            "latitude": 43.63927,
            "longitude": -79.42688
        },
        "id": "island-foods-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/7ig_9RcCTn852-IipWBARQ/o.jpg",
        "is_closed": "island-foods-toronto",
        "location": {
            "address1": "1182 King Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "1182 King Street W",
                "Toronto, ON M6K 1E6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 1E6"
        },
        "name": "Island Foods",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "caribbean",
                "title": "Caribbean"
            },
            {
                "alias": "comfortfood",
                "title": "Comfort Food"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "coordinates": {
            "latitude": 43.6674228,
            "longitude": -79.3694556
        },
        "id": "under-the-table-restaurant-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/CmBkcrgODxt10nZ9qx_H_g/o.jpg",
        "is_closed": "under-the-table-restaurant-toronto",
        "location": {
            "address1": "568 Parliament Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "568 Parliament Street",
                "Toronto, ON M4X 1P8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M4X 1P8"
        },
        "name": "Under The Table Restaurant",
        "price": "$$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "venues",
                "title": "Venues & Event Spaces"
            },
            {
                "alias": "coffeeroasteries",
                "title": "Coffee Roasteries"
            }
        ],
        "coordinates": {
            "latitude": 43.6497526002864,
            "longitude": -79.3591352606472
        },
        "id": "balzacs-coffee-roastery-toronto-3",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/exeXLAOV-Juubd49Z4J0Sg/o.jpg",
        "is_closed": "balzacs-coffee-roastery-toronto-3",
        "location": {
            "address1": "55 Mill Street",
            "address2": "Building 60",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "55 Mill Street",
                "Building 60",
                "Toronto, ON M5A 3C4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5A 3C4"
        },
        "name": "Balzac's Coffee Roastery",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "chinese",
                "title": "Chinese"
            }
        ],
        "coordinates": {
            "latitude": 43.65378,
            "longitude": -79.3987
        },
        "id": "dumpling-house-restaurant-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/4198n8OxC2nmtXmLTovJuQ/o.jpg",
        "is_closed": "dumpling-house-restaurant-toronto",
        "location": {
            "address1": "328 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "328 Spadina Avenue",
                "Toronto, ON M5T 2E7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2E7"
        },
        "name": "Dumpling House Restaurant",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            }
        ],
        "coordinates": {
            "latitude": 43.6558179534514,
            "longitude": -79.3937566503882
        },
        "id": "sushi-tanoshii-toronto-3",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/fxUWHDvCxSU8DIbBy4itVA/o.jpg",
        "is_closed": "sushi-tanoshii-toronto-3",
        "location": {
            "address1": "45 Baldwin Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "45 Baldwin Street",
                "Toronto, ON M5T 1L1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1L1"
        },
        "name": "Sushi Tanoshii",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "chickenshop",
                "title": "Chicken Shop"
            },
            {
                "alias": "waffles",
                "title": "Waffles"
            },
            {
                "alias": "burgers",
                "title": "Burgers"
            }
        ],
        "coordinates": {
            "latitude": 43.65475,
            "longitude": -79.40037
        },
        "id": "the-dirty-bird-chicken-waffles-toronto-3",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/eZ_d5xUN3aQztgD_uTLOdw/o.jpg",
        "is_closed": "the-dirty-bird-chicken-waffles-toronto-3",
        "location": {
            "address1": "79 Kensington Avenue",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "79 Kensington Avenue",
                "Toronto, ON M5T 2K2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2K2"
        },
        "name": "The Dirty Bird Chicken + Waffles",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "chinese",
                "title": "Chinese"
            },
            {
                "alias": "seafood",
                "title": "Seafood"
            }
        ],
        "coordinates": {
            "latitude": 43.81167,
            "longitude": -79.4544
        },
        "id": "hua-sang-seafood-restaurant-vaughan",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/7Ny9dY4flvsXLv_F3azGMA/o.jpg",
        "is_closed": "hua-sang-seafood-restaurant-vaughan",
        "location": {
            "address1": "30 Disera Drive",
            "address2": "Unit 100",
            "address3": "",
            "city": "Vaughan",
            "country": "CA",
            "display_address": [
                "30 Disera Drive",
                "Unit 100",
                "Vaughan, ON L4J 0A7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L4J 0A7"
        },
        "name": "Hua Sang Seafood Restaurant",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "chocolate",
                "title": "Chocolatiers & Shops"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            }
        ],
        "coordinates": {
            "latitude": 43.64514,
            "longitude": -79.39573
        },
        "id": "soma-chocolatemaker-toronto-2",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/E3bCn67V_DUEwNQCz0O9EQ/o.jpg",
        "is_closed": "soma-chocolatemaker-toronto-2",
        "location": {
            "address1": "443 King Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "443 King Street W",
                "Toronto, ON M5V 1K4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5V 1K4"
        },
        "name": "Soma Chocolatemaker",
        "price": "$$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "donuts",
                "title": "Donuts"
            },
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            }
        ],
        "coordinates": {
            "latitude": 43.6558643159132,
            "longitude": -79.3994606114868
        },
        "id": "krispy-kreme-cafe-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/R7EMFTkn3l5ke2N6S4pr6w/o.jpg",
        "is_closed": "krispy-kreme-cafe-toronto",
        "location": {
            "address1": "400 Spadina Avenue",
            "address2": "",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "400 Spadina Avenue",
                "Toronto, ON M5T 2G7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2G7"
        },
        "name": "Krispy Kreme Cafe",
        "price": "$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "chinese",
                "title": "Chinese"
            },
            {
                "alias": "hotpot",
                "title": "Hot Pot"
            }
        ],
        "coordinates": {
            "latitude": 43.6545068365465,
            "longitude": -79.3984092772007
        },
        "id": "chine-hot-pot-and-noodles-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ZcW4kznO9lD27UEAOLLyyA/o.jpg",
        "is_closed": "chine-hot-pot-and-noodles-toronto",
        "location": {
            "address1": "327 Spadina Avenue",
            "address2": "Unit A",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "327 Spadina Avenue",
                "Unit A",
                "Toronto, ON M5T 2E9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2E9"
        },
        "name": "Chine Hot Pot & Noodles",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "chinese",
                "title": "Chinese"
            },
            {
                "alias": "noodles",
                "title": "Noodles"
            },
            {
                "alias": "ramen",
                "title": "Ramen"
            }
        ],
        "coordinates": {
            "latitude": 43.65241,
            "longitude": -79.39739
        },
        "id": "homemade-ramen-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/luS7RoOqs5S0c-ukglVsnA/o.jpg",
        "is_closed": "homemade-ramen-toronto",
        "location": {
            "address1": "263 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "263 Spadina Avenue",
                "Toronto, ON M5T 2E3",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2E3"
        },
        "name": "Homemade Ramen",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.65447,
            "longitude": -79.39933
        },
        "id": "ka-chi-toronto-2",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ou5ppJ0qwNgYzVmNeErfdg/o.jpg",
        "is_closed": "ka-chi-toronto-2",
        "location": {
            "address1": "8 Saint Andrews Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "8 Saint Andrews Street",
                "Toronto, ON M5T 1K6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1K6"
        },
        "name": "Ka Chi",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.65557,
            "longitude": -79.3986
        },
        "id": "seor-ak-san-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/PDMlFjoMD7QvZamrY6Ijbw/o.jpg",
        "is_closed": "seor-ak-san-toronto",
        "location": {
            "address1": "357 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "357 Spadina Avenue",
                "Toronto, ON M5T",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T"
        },
        "name": "Seor Ak San",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "seafood",
                "title": "Seafood"
            }
        ],
        "coordinates": {
            "latitude": 43.65295,
            "longitude": -79.39909
        },
        "id": "sang-ho-seafood-restaurant-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/QCT46LWza5F_N6V-EJCuGw/o.jpg",
        "is_closed": "sang-ho-seafood-restaurant-toronto",
        "location": {
            "address1": "536 Dundas St W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "536 Dundas St W",
                "Toronto, ON M5T 1H3",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1H3"
        },
        "name": "Sang-Ho Seafood Restaurant",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "chinese",
                "title": "Chinese"
            }
        ],
        "coordinates": {
            "latitude": 43.65711,
            "longitude": -79.39934
        },
        "id": "mothers-dumplings-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/E5usRX5SaOx5ri-VNGUR2g/o.jpg",
        "is_closed": "mothers-dumplings-toronto",
        "location": {
            "address1": "421 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "421 Spadina Avenue",
                "Toronto, ON M5T 2A8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2A8"
        },
        "name": "Mother's Dumplings",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "coordinates": {
            "latitude": 43.6513875,
            "longitude": -79.3970586
        },
        "id": "cutiepie-cupcakes-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/LKo01ikygOG15foalhfjfA/o.jpg",
        "is_closed": "cutiepie-cupcakes-toronto",
        "location": {
            "address1": "235 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "235 Spadina Avenue",
                "Toronto, ON M5T 2E2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2E2"
        },
        "name": "CutiePie Cupcakes",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "coordinates": {
            "latitude": 43.8495887223284,
            "longitude": -79.4601712842068
        },
        "id": "menchies-frozen-yogurt-maple",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/M7pXogIAn2bz4Dn3JlyPhg/o.jpg",
        "is_closed": "menchies-frozen-yogurt-maple",
        "location": {
            "address1": "9360 Bathurst Street",
            "address2": "",
            "address3": "",
            "city": "Maple",
            "country": "CA",
            "display_address": [
                "9360 Bathurst Street",
                "Maple, ON L6A 4N9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L6A 4N9"
        },
        "name": "Menchies Frozen Yogurt",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "cafes",
                "title": "Cafes"
            },
            {
                "alias": "tea",
                "title": "Tea Rooms"
            }
        ],
        "coordinates": {
            "latitude": 43.7772999,
            "longitude": -79.41451
        },
        "id": "gong-cha-tea-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/dySvItqaRPT0w19ygfdPmg/o.jpg",
        "is_closed": "gong-cha-tea-toronto",
        "location": {
            "address1": "5449 Yonge Street",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "5449 Yonge Street",
                "Toronto, ON M2N 5S1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5S1"
        },
        "name": "Gong Cha Tea",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "chinese",
                "title": "Chinese"
            },
            {
                "alias": "nightlife",
                "title": "Nightlife"
            }
        ],
        "coordinates": {
            "latitude": 43.84575,
            "longitude": -79.37694
        },
        "id": "tea-shop-168-richmond-hill",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/4fc9T4NmWPWwbLuurD1p3w/o.jpg",
        "is_closed": "tea-shop-168-richmond-hill",
        "location": {
            "address1": "505 Highway 7 E",
            "address2": "",
            "address3": "",
            "city": "Richmond Hill",
            "country": "CA",
            "display_address": [
                "505 Highway 7 E",
                "Richmond Hill, ON L3T 7T1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L3T 7T1"
        },
        "name": "Tea Shop 168",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "bakeries",
                "title": "Bakeries"
            }
        ],
        "coordinates": {
            "latitude": 43.65523,
            "longitude": -79.39852
        },
        "id": "mashion-bakery-toronto-2",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/RmykRTR1LLIgSEFElmsquw/o.jpg",
        "is_closed": "mashion-bakery-toronto-2",
        "location": {
            "address1": "345 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "345 Spadina Avenue",
                "Toronto, ON M5T 2C2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2C2"
        },
        "name": "Mashion Bakery",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "bakeries",
                "title": "Bakeries"
            },
            {
                "alias": "chinese",
                "title": "Chinese"
            }
        ],
        "coordinates": {
            "latitude": 43.65443,
            "longitude": -79.39836
        },
        "id": "ding-dong-pastries-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/xaBpok5ceypA7PCKm1JY5Q/o.jpg",
        "is_closed": "ding-dong-pastries-toronto",
        "location": {
            "address1": "321 Spadina Ave",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "321 Spadina Ave",
                "Toronto, ON M5T 2E9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2E9"
        },
        "name": "Ding Dong Pastries",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "coordinates": {
            "latitude": 43.6582889,
            "longitude": -79.3998991
        },
        "id": "clubhouse-sandwich-shop-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/oVTqf6OCTvggbAaicX20Aw/o.jpg",
        "is_closed": "clubhouse-sandwich-shop-toronto",
        "location": {
            "address1": "455 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "455 Spadina Avenue",
                "Toronto, ON M5S 2G7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S 2G7"
        },
        "name": "Clubhouse Sandwich Shop",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "coordinates": {
            "latitude": 43.65597,
            "longitude": -79.39264
        },
        "id": "kekou-gelato-house-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/TVzeF7wwa0Ko-fYBCFcQkw/o.jpg",
        "is_closed": "kekou-gelato-house-toronto",
        "location": {
            "address1": "13 Baldwin Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "13 Baldwin Street",
                "Toronto, ON M5T 1L1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1L1"
        },
        "name": "Kekou Gelato House",
        "price": "$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "burgers",
                "title": "Burgers"
            }
        ],
        "coordinates": {
            "latitude": 43.6556342,
            "longitude": -79.4024449
        },
        "id": "the-burgernator-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/EOC5i55wv9T07PFP29Cb1Q/o.jpg",
        "is_closed": "the-burgernator-toronto",
        "location": {
            "address1": "269 Augusta Avenue",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "269 Augusta Avenue",
                "Toronto, ON M5T 1M5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1M5"
        },
        "name": "The Burgernator",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "caribbean",
                "title": "Caribbean"
            }
        ],
        "coordinates": {
            "latitude": 43.6654396,
            "longitude": -79.4108124
        },
        "id": "jerk-king-toronto-2",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/fkA33Deu2NV767fVtR_m9Q/o.jpg",
        "is_closed": "jerk-king-toronto-2",
        "location": {
            "address1": "522 Bloor Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "522 Bloor Street W",
                "Toronto, ON M6G 1K1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6G 1K1"
        },
        "name": "Jerk King",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.6664314,
            "longitude": -79.405632
        },
        "id": "maido-japanese-restaurant-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ku2TT_blu5iy1GUsIYFBAg/o.jpg",
        "is_closed": "maido-japanese-restaurant-toronto",
        "location": {
            "address1": "364 Bloor Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "364 Bloor Street W",
                "Toronto, ON M5S 1X2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S 1X2"
        },
        "name": "Maido Japanese Restaurant",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            }
        ],
        "coordinates": {
            "latitude": 43.65687,
            "longitude": -79.39924
        },
        "id": "simon-sushi-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/suxo6XTUbKAPEpPL7rOGjQ/o.jpg",
        "is_closed": "simon-sushi-toronto",
        "location": {
            "address1": "409 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "409 Spadina Avenue",
                "Toronto, ON M5T 2G6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2G6"
        },
        "name": "Simon Sushi",
        "price": "$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            }
        ],
        "coordinates": {
            "latitude": 43.65739,
            "longitude": -79.39933
        },
        "id": "one-hour-cafeteria-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/NOT7e0LKIj70sJogRxi-nw/o.jpg",
        "is_closed": "one-hour-cafeteria-toronto",
        "location": {
            "address1": "435 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "435 Spadina Avenue",
                "Toronto, ON M5T 2G6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2G6"
        },
        "name": "One Hour Cafeteria",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            }
        ],
        "coordinates": {
            "latitude": 43.65386,
            "longitude": -79.3988
        },
        "id": "ajisen-ramen-toronto-2",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ykyrT7qUEWu29zs5VNLlDQ/o.jpg",
        "is_closed": "ajisen-ramen-toronto-2",
        "location": {
            "address1": "332 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "332 Spadina Avenue",
                "Toronto, ON M5T 2G2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2G2"
        },
        "name": "Ajisen Ramen",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.6483599,
            "longitude": -79.3974099
        },
        "id": "aji-sai-japanese-restaurant-toronto-3",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/2tSdYJqGvbwVUU0ItRSoqw/o.jpg",
        "is_closed": "aji-sai-japanese-restaurant-toronto-3",
        "location": {
            "address1": "467 Queen Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "467 Queen Street W",
                "Toronto, ON M5V",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5V"
        },
        "name": "Aji Sai Japanese Restaurant",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            }
        ],
        "coordinates": {
            "latitude": 43.7933499,
            "longitude": -79.41915
        },
        "id": "kenzo-north-york-2",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/QoFlBcSlA6F8SemXD5syQw/o.jpg",
        "is_closed": "kenzo-north-york-2",
        "location": {
            "address1": "6180 Yonge Street",
            "address2": "",
            "address3": "",
            "city": "North York",
            "country": "CA",
            "display_address": [
                "6180 Yonge Street",
                "North York, ON M2M 3X1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2M 3X1"
        },
        "name": "Kenzo",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "mideastern",
                "title": "Middle Eastern"
            }
        ],
        "coordinates": {
            "latitude": 43.6389542,
            "longitude": -79.4279631
        },
        "id": "habibi-shawarma-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/nFCxdtZAad3hO4cDQwy8pA/o.jpg",
        "is_closed": "habibi-shawarma-toronto",
        "location": {
            "address1": "1214 King Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "1214 King Street W",
                "Toronto, ON M6K 1G4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 1G4"
        },
        "name": "Habibi Shawarma",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "chicken_wings",
                "title": "Chicken Wings"
            },
            {
                "alias": "taiwanese",
                "title": "Taiwanese"
            },
            {
                "alias": "hotdogs",
                "title": "Fast Food"
            }
        ],
        "coordinates": {
            "latitude": 43.65878,
            "longitude": -79.38217
        },
        "id": "hot-star-toronto-2",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/K8S-L4mY2Pj4ZKFYAa4jdg/o.jpg",
        "is_closed": "hot-star-toronto-2",
        "location": {
            "address1": "374A Yonge Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "374A Yonge Street",
                "Toronto, ON M5B 1S6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5B 1S6"
        },
        "name": "Hot-Star",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "coordinates": {
            "latitude": 43.7866979304264,
            "longitude": -79.4685595723555
        },
        "id": "coras-breakfast-and-lunch-north-york",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/boyIuEDkuWgStY8M4_iAjQ/o.jpg",
        "is_closed": "coras-breakfast-and-lunch-north-york",
        "location": {
            "address1": "1881 Steeles Ave W",
            "address2": "",
            "address3": "",
            "city": "North York",
            "country": "CA",
            "display_address": [
                "1881 Steeles Ave W",
                "North York, ON M3H 5Y4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M3H 5Y4"
        },
        "name": "Cora's Breakfast & Lunch",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "bars",
                "title": "Bars"
            },
            {
                "alias": "cafes",
                "title": "Cafes"
            },
            {
                "alias": "tabletopgames",
                "title": "Tabletop Games"
            }
        ],
        "coordinates": {
            "latitude": 43.6558599,
            "longitude": -79.40919
        },
        "id": "snakes-and-lattes-college-toronto-4",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/qwDEcaKbynsKMowrDanz9A/o.jpg",
        "is_closed": "snakes-and-lattes-college-toronto-4",
        "location": {
            "address1": "489 College Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "489 College Street",
                "Toronto, ON M6G 1A5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6G 1A5"
        },
        "name": "Snakes & Lattes College",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "cafes",
                "title": "Cafes"
            },
            {
                "alias": "hobbyshops",
                "title": "Hobby Shops"
            },
            {
                "alias": "toys",
                "title": "Toy Stores"
            }
        ],
        "coordinates": {
            "latitude": 43.72871,
            "longitude": -79.403146
        },
        "id": "for-the-win-board-game-cafe-toronto-5",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/0ykRW_v0UQxcqvD8D32LeQ/o.jpg",
        "is_closed": "for-the-win-board-game-cafe-toronto-5",
        "location": {
            "address1": "3216 Yonge Street",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "3216 Yonge Street",
                "Toronto, ON M4N 2L2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M4N 2L2"
        },
        "name": "For The Win Board Game Cafe",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "bakeries",
                "title": "Bakeries"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "coordinates": {
            "latitude": 43.64772,
            "longitude": -79.4025599
        },
        "id": "death-in-venice-gelato-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/NWaWxxxPIyq7W_Ur_0mESw/o.jpg",
        "is_closed": "death-in-venice-gelato-toronto",
        "location": {
            "address1": "536 Queen Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "536 Queen Street W",
                "Toronto, ON M5V 2B5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5V 2B5"
        },
        "name": "Death in Venice Gelato",
        "price": "$$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "thai",
                "title": "Thai"
            }
        ],
        "coordinates": {
            "latitude": 43.6561499,
            "longitude": -79.39968
        },
        "id": "thai-country-kitchen-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Nfs-9K5xYongMyK1sJbePw/o.jpg",
        "is_closed": "thai-country-kitchen-toronto",
        "location": {
            "address1": "412 Spadina Ave",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "412 Spadina Ave",
                "Toronto, ON M5T",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T"
        },
        "name": "Thai Country Kitchen",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "noodles",
                "title": "Noodles"
            }
        ],
        "coordinates": {
            "latitude": 43.77741,
            "longitude": -79.41454
        },
        "id": "magic-noodle-north-york",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/9_MYAI3F44wPPLpMRdI4tg/o.jpg",
        "is_closed": "magic-noodle-north-york",
        "location": {
            "address1": "5453 Yonge Street",
            "address2": "",
            "address3": null,
            "city": "North York",
            "country": "CA",
            "display_address": [
                "5453 Yonge Street",
                "North York, ON M2N 5S1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5S1"
        },
        "name": "Magic Noodle",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            }
        ],
        "coordinates": {
            "latitude": 43.66332,
            "longitude": -79.40257
        },
        "id": "cora-pizza-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/aIUEk-0DiCjxsqmGye_aHQ/o.jpg",
        "is_closed": "cora-pizza-toronto",
        "location": {
            "address1": "656A Spadina Ave",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "656A Spadina Ave",
                "Toronto, ON M5S 2H7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S 2H7"
        },
        "name": "Cora Pizza",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            }
        ],
        "coordinates": {
            "latitude": 43.66327,
            "longitude": -79.40255
        },
        "id": "papa-ceo-king-slice-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ynBUgEfx0qVxf4Y0l-UoZw/o.jpg",
        "is_closed": "papa-ceo-king-slice-toronto",
        "location": {
            "address1": "654 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "654 Spadina Avenue",
                "Toronto, ON M5S 2H7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S 2H7"
        },
        "name": "Papa CEO King Slice",
        "price": "$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            }
        ],
        "coordinates": {
            "latitude": 43.7793326,
            "longitude": -79.4156332
        },
        "id": "cafe-princess-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/GZTd-HgxDrmpDZyvyvy-3Q/o.jpg",
        "is_closed": "cafe-princess-toronto",
        "location": {
            "address1": "5590 Yonge Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "5590 Yonge Street",
                "Toronto, ON M2N 5S2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5S2"
        },
        "name": "Cafe Princess",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "foodstands",
                "title": "Food Stands"
            },
            {
                "alias": "hotdogs",
                "title": "Fast Food"
            }
        ],
        "coordinates": {
            "latitude": 43.7791003,
            "longitude": -79.4156315
        },
        "id": "pojangmacha-food-toronto-4",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/gdyrhV9RA5M_U3hFK9uXew/o.jpg",
        "is_closed": "pojangmacha-food-toronto-4",
        "location": {
            "address1": "5576 Yonge Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "5576 Yonge Street",
                "Toronto, ON M2N 5S2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5S2"
        },
        "name": "Pojangmacha Food",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "bubbletea",
                "title": "Bubble Tea"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "coordinates": {
            "latitude": 43.77552,
            "longitude": -79.41521
        },
        "id": "the-cups-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/xyzuC6yJBVCvZkNfxcHipA/o.jpg",
        "is_closed": "the-cups-toronto",
        "location": {
            "address1": "5418 Yonge Street",
            "address2": "Suite 12",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "5418 Yonge Street",
                "Suite 12",
                "Toronto, ON M2N 6X4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 6X4"
        },
        "name": "The Cups",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "asianfusion",
                "title": "Asian Fusion"
            },
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "chinese",
                "title": "Chinese"
            }
        ],
        "coordinates": {
            "latitude": 43.7905798489871,
            "longitude": -79.3660936696034
        },
        "id": "petit-potato-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/FuJBabA6rcvuwhgcasnVwA/o.jpg",
        "is_closed": "petit-potato-toronto",
        "location": {
            "address1": "10 Ravel Road",
            "address2": "Unit 1-2",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "10 Ravel Road",
                "Unit 1-2",
                "Toronto, ON M2H 1S8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2H 1S8"
        },
        "name": "Petit Potato",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "juicebars",
                "title": "Juice Bars & Smoothies"
            }
        ],
        "coordinates": {
            "latitude": 43.66679,
            "longitude": -79.3854999
        },
        "id": "coco-fresh-juice-and-tea-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/L8lnKoKLDh8KhYevSiGxkg/o.jpg",
        "is_closed": "coco-fresh-juice-and-tea-toronto",
        "location": {
            "address1": "648 Yonge Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "648 Yonge Street",
                "Toronto, ON M4Y 2A6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M4Y 2A6"
        },
        "name": "CoCo Fresh Juice & Tea",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.65497,
            "longitude": -79.38638
        },
        "id": "gyugyuya-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/3sIpcK5TG5SwozbdGZIuqQ/o.jpg",
        "is_closed": "gyugyuya-toronto",
        "location": {
            "address1": "177 Dundas Street W",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "177 Dundas Street W",
                "Toronto, ON M5G 1C7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5G 1C7"
        },
        "name": "Gyugyuya",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.6549701577243,
            "longitude": -79.3865743651986
        },
        "id": "ken-oh-toronto-2",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/yLWkBJWlzsYWVWOpwDgJNw/o.jpg",
        "is_closed": "ken-oh-toronto-2",
        "location": {
            "address1": "183 Dundas Street W",
            "address2": "",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "183 Dundas Street W",
                "Toronto, ON M5G 1C7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5G 1C7"
        },
        "name": "Ken Oh",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            }
        ],
        "coordinates": {
            "latitude": 43.66618,
            "longitude": -79.40718
        },
        "id": "sakura-japanese-cuisine-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/17M05kPJQZoYgyrjKWw0iA/o.jpg",
        "is_closed": "sakura-japanese-cuisine-toronto",
        "location": {
            "address1": "394 Bloor Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "394 Bloor Street W",
                "Toronto, ON M5S 1Y2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S 1Y2"
        },
        "name": "Sakura Japanese Cuisine",
        "price": "$$",
        "rating": 2.5
    },
    {
        "categories": [
            {
                "alias": "vietnamese",
                "title": "Vietnamese"
            }
        ],
        "coordinates": {
            "latitude": 43.65169,
            "longitude": -79.39796
        },
        "id": "xe-lua-restaurant-toronto-3",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/cNtkjlsgCX8T044i_b05tw/o.jpg",
        "is_closed": "xe-lua-restaurant-toronto-3",
        "location": {
            "address1": "254 Spadina Avenue",
            "address2": "2nd Floor",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "254 Spadina Avenue",
                "2nd Floor",
                "Toronto, ON M5T 2C2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2C2"
        },
        "name": "Xe Lua Restaurant",
        "price": "$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "tea",
                "title": "Tea Rooms"
            },
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "bubbletea",
                "title": "Bubble Tea"
            }
        ],
        "coordinates": {
            "latitude": 43.648526,
            "longitude": -79.397498
        },
        "id": "nohohon-tea-queen-west-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/FTKc6YI7b5owOdLFPDv4oQ/o.jpg",
        "is_closed": "nohohon-tea-queen-west-toronto",
        "location": {
            "address1": "467 Queen Street W",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "467 Queen Street W",
                "Toronto, ON M5V 2A9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5V 2A9"
        },
        "name": "Nohohon Tea - Queen West",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "vietnamese",
                "title": "Vietnamese"
            }
        ],
        "coordinates": {
            "latitude": 43.65444,
            "longitude": -79.39899
        },
        "id": "pho-hung-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/GQACtXlaPO_wrgaIzlSqxQ/o.jpg",
        "is_closed": "pho-hung-toronto",
        "location": {
            "address1": "350 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "350 Spadina Avenue",
                "Toronto, ON M5T 2G4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2G4"
        },
        "name": "Pho Hung",
        "price": "$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "laotian",
                "title": "Laotian"
            },
            {
                "alias": "thai",
                "title": "Thai"
            },
            {
                "alias": "vegan",
                "title": "Vegan"
            }
        ],
        "coordinates": {
            "latitude": 43.6704534404129,
            "longitude": -79.3847215948792
        },
        "id": "sabai-sabai-kitchen-and-bar-toronto-2",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/wZqrnV9PbE-8bRJEWtmkwg/o.jpg",
        "is_closed": "sabai-sabai-kitchen-and-bar-toronto-2",
        "location": {
            "address1": "81 Bloor Street E",
            "address2": null,
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "81 Bloor Street E",
                "Toronto, ON M4W 1A9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M4W 1A9"
        },
        "name": "Sabai Sabai Kitchen and Bar",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "asianfusion",
                "title": "Asian Fusion"
            }
        ],
        "coordinates": {
            "latitude": 43.65931,
            "longitude": -79.38256
        },
        "id": "kaiju-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/WQvsAGnWJcjUQQH3DMw8gA/o.jpg",
        "is_closed": "kaiju-toronto",
        "location": {
            "address1": "384 Yonge Street",
            "address2": "Unit 51",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "384 Yonge Street",
                "Unit 51",
                "Toronto, ON M5B",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5B"
        },
        "name": "Kaiju",
        "price": "$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "thai",
                "title": "Thai"
            }
        ],
        "coordinates": {
            "latitude": 43.65766,
            "longitude": -79.38164
        },
        "id": "salad-king-restaurant-toronto-2",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Gl6dR4hhvNq3tKBJFO_wnw/o.jpg",
        "is_closed": "salad-king-restaurant-toronto-2",
        "location": {
            "address1": "340 Yonge Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "340 Yonge Street",
                "Toronto, ON M5B 1R8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5B 1R8"
        },
        "name": "Salad King Restaurant",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            },
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.64847,
            "longitude": -79.38834
        },
        "id": "yuzu-no-hana-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DXz1bhXI_bpf0bz9zia7wg/o.jpg",
        "is_closed": "yuzu-no-hana-toronto",
        "location": {
            "address1": "236 Adelaide Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "236 Adelaide Street W",
                "Toronto, ON M5H 1W7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5H 1W7"
        },
        "name": "Yuzu No Hana",
        "price": "$$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.668311069021,
            "longitude": -79.387133746804
        },
        "id": "okonomi-house-restaurant-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/hzD9TAaBNMNEbVM45dMuTw/o.jpg",
        "is_closed": "okonomi-house-restaurant-toronto",
        "location": {
            "address1": "23 Charles Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "23 Charles Street W",
                "Toronto, ON M4Y 2R4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M4Y 2R4"
        },
        "name": "Okonomi House Restaurant",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            }
        ],
        "coordinates": {
            "latitude": 43.66178,
            "longitude": -79.37889
        },
        "id": "jinya-ramen-bar-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ZpFL1kIur1eM5InuzB50sA/o.jpg",
        "is_closed": "jinya-ramen-bar-toronto",
        "location": {
            "address1": "399 Church Street",
            "address2": "Suite 100",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "399 Church Street",
                "Suite 100",
                "Toronto, ON M5B 2A1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5B 2A1"
        },
        "name": "JINYA Ramen Bar",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "tapasmallplates",
                "title": "Tapas/Small Plates"
            },
            {
                "alias": "ramen",
                "title": "Ramen"
            }
        ],
        "coordinates": {
            "latitude": 43.6659094059725,
            "longitude": -79.3682817020335
        },
        "id": "kingyo-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/5XyxxeW-l2wRlJTiSAJa1g/o.jpg",
        "is_closed": "kingyo-toronto",
        "location": {
            "address1": "51B Winchester Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "51B Winchester Street",
                "Toronto, ON M4X 1R7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M4X 1R7"
        },
        "name": "Kingyo",
        "price": "$$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "tea",
                "title": "Tea Rooms"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            }
        ],
        "coordinates": {
            "latitude": 43.6616211,
            "longitude": -79.3815308
        },
        "id": "jule-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/74sCUYQvNmhn5nX7VWt1gg/o.jpg",
        "is_closed": "jule-toronto",
        "location": {
            "address1": "20 Carlton Street",
            "address2": null,
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "20 Carlton Street",
                "Toronto, ON M5B 2H5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5B 2H5"
        },
        "name": "Jule",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "chinese",
                "title": "Chinese"
            },
            {
                "alias": "vegetarian",
                "title": "Vegetarian"
            }
        ],
        "coordinates": {
            "latitude": 43.65421,
            "longitude": -79.4021099
        },
        "id": "kings-caf\u00e9-toronto-2",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/K_k_Jxwl9RZ2x-yb5PUGMw/o.jpg",
        "is_closed": "kings-caf\u00e9-toronto-2",
        "location": {
            "address1": "192 Augusta Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "192 Augusta Avenue",
                "Toronto, ON M5T 2L6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2L6"
        },
        "name": "King's Caf\u00e9",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "buffets",
                "title": "Buffets"
            },
            {
                "alias": "asianfusion",
                "title": "Asian Fusion"
            },
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            }
        ],
        "coordinates": {
            "latitude": 43.78738,
            "longitude": -79.471494
        },
        "id": "168-sushi-asian-buffet-vaughan",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/M7du5uhbRjFtAntztO5_Zw/o.jpg",
        "is_closed": "168-sushi-asian-buffet-vaughan",
        "location": {
            "address1": "1520 Steeles Avenue W",
            "address2": "Unit 103",
            "address3": "",
            "city": "Vaughan",
            "country": "CA",
            "display_address": [
                "1520 Steeles Avenue W",
                "Unit 103",
                "Vaughan, ON L4K 3B9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L4K 3B9"
        },
        "name": "168 Sushi Asian Buffet",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.798408145864,
            "longitude": -79.422262644077
        },
        "id": "songcooks-vaughan",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ATxRbuPZFt4LPIrmaLbi1g/o.jpg",
        "is_closed": "songcooks-vaughan",
        "location": {
            "address1": "72 Steeles Avenue W",
            "address2": "Unit 6",
            "address3": "",
            "city": "Vaughan",
            "country": "CA",
            "display_address": [
                "72 Steeles Avenue W",
                "Unit 6",
                "Vaughan, ON L4J 1V7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L4J 1V7"
        },
        "name": "SongCook's",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "pubs",
                "title": "Pubs"
            },
            {
                "alias": "chicken_wings",
                "title": "Chicken Wings"
            },
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.647938,
            "longitude": -79.401254
        },
        "id": "chimac-pub-and-fried-chicken-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Tw7n5GGvcPb3Yr_zeEdyJw/o.jpg",
        "is_closed": "chimac-pub-and-fried-chicken-toronto",
        "location": {
            "address1": "500 Queen Street W",
            "address2": "",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "500 Queen Street W",
                "Toronto, ON M5V 2B6",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5V 2B6"
        },
        "name": "Chimac Pub & Fried Chicken",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "bbq",
                "title": "Barbeque"
            },
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.7971653718952,
            "longitude": -79.4246841967106
        },
        "id": "kobi-korean-bbq-vaughan",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/jbnKgaLGiavXbCoHW354Iw/o.jpg",
        "is_closed": "kobi-korean-bbq-vaughan",
        "location": {
            "address1": "100 Steeles Avenue",
            "address2": "",
            "address3": "",
            "city": "Vaughan",
            "country": "CA",
            "display_address": [
                "100 Steeles Avenue",
                "Vaughan, ON L4J 7Y1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L4J 7Y1"
        },
        "name": "Kobi Korean BBQ",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            }
        ],
        "coordinates": {
            "latitude": 43.7735426409794,
            "longitude": -79.4137958829601
        },
        "id": "hakata-shoryuken-toronto-2",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/0fkt64BKFex9YPwSJ6cfug/o.jpg",
        "is_closed": "hakata-shoryuken-toronto-2",
        "location": {
            "address1": "5321 Yonge Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "5321 Yonge Street",
                "Toronto, ON M2N 5R4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5R4"
        },
        "name": "Hakata Shoryuken",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "chinese",
                "title": "Chinese"
            }
        ],
        "coordinates": {
            "latitude": 43.65628,
            "longitude": -79.39974
        },
        "id": "canton-chilli-restaurant-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/uoVo21tPyz6Mg_b2RbXhDw/o.jpg",
        "is_closed": "canton-chilli-restaurant-toronto",
        "location": {
            "address1": "418 Spadina Ave",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "418 Spadina Ave",
                "Toronto, ON M5T 1N8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1N8"
        },
        "name": "Canton Chilli Restaurant",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.66541,
            "longitude": -79.41074
        },
        "id": "mr-tonkatsu-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/9Gyb9pSTxwK5QaWpu3BvMg/o.jpg",
        "is_closed": "mr-tonkatsu-toronto",
        "location": {
            "address1": "520 Bloor Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "520 Bloor Street W",
                "Toronto, ON M5S 1Y3",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5S 1Y3"
        },
        "name": "Mr.Tonkatsu",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "creperies",
                "title": "Creperies"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.6549488110679,
            "longitude": -79.3996712565422
        },
        "id": "millie-creperie-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/oyIQfPMDCpXCQCUsJ3H0QA/o.jpg",
        "is_closed": "millie-creperie-toronto",
        "location": {
            "address1": "161 Baldwin Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "161 Baldwin Street",
                "Toronto, ON M5T 1L8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1L8"
        },
        "name": "Millie Creperie",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "coordinates": {
            "latitude": 43.6559732437016,
            "longitude": -79.3930182046491
        },
        "id": "arctic-bites-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/BR3-Krn9toeHruR43QUzFw/o.jpg",
        "is_closed": "arctic-bites-toronto",
        "location": {
            "address1": "21 Baldwin Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "21 Baldwin Street",
                "Toronto, ON M5T 1L1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1L1"
        },
        "name": "Arctic Bites",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "chinese",
                "title": "Chinese"
            },
            {
                "alias": "noodles",
                "title": "Noodles"
            }
        ],
        "coordinates": {
            "latitude": 43.6537999,
            "longitude": -79.39598
        },
        "id": "yummy-yummy-dumplings-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/uavjmfSINdXZY628QqkLOA/o.jpg",
        "is_closed": "yummy-yummy-dumplings-toronto",
        "location": {
            "address1": "79 Huron Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "79 Huron Street",
                "Toronto, ON M5T 2A8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2A8"
        },
        "name": "Yummy Yummy Dumplings",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "ramen",
                "title": "Ramen"
            },
            {
                "alias": "asianfusion",
                "title": "Asian Fusion"
            }
        ],
        "coordinates": {
            "latitude": 43.65611,
            "longitude": -79.39228
        },
        "id": "mo-ramyun-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/6vCtKPLrdO57Aw0UtQJASw/o.jpg",
        "is_closed": "mo-ramyun-toronto",
        "location": {
            "address1": "1 Baldwin Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "1 Baldwin Street",
                "Toronto, ON M5T 1L1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1L1"
        },
        "name": "Mo' Ramyun",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "taiwanese",
                "title": "Taiwanese"
            },
            {
                "alias": "tea",
                "title": "Tea Rooms"
            }
        ],
        "coordinates": {
            "latitude": 43.65592,
            "longitude": -79.39315
        },
        "id": "charidise-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/0dbGnJV88C_8TCW99VGD3w/o.jpg",
        "is_closed": "charidise-toronto",
        "location": {
            "address1": "27 Baldwin Street",
            "address2": "",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "27 Baldwin Street",
                "Toronto, ON M5T 1L1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1L1"
        },
        "name": "Charidise",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            }
        ],
        "coordinates": {
            "latitude": 43.6640864,
            "longitude": -79.4163258
        },
        "id": "kinton-ramen-toronto-13",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/3E6vfFY8e07I2wknA0jbAw/o.jpg",
        "is_closed": "kinton-ramen-toronto-13",
        "location": {
            "address1": "668 Bloor St W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "668 Bloor St W",
                "Toronto, ON M6G 1L2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6G 1L2"
        },
        "name": "KINTON RAMEN",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "foodtrucks",
                "title": "Food Trucks"
            }
        ],
        "coordinates": {
            "latitude": 43.65473,
            "longitude": -79.40231
        },
        "id": "panchos-bakery-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/26FijwNNlmgYkRVS1dQXTA/o.jpg",
        "is_closed": "panchos-bakery-toronto",
        "location": {
            "address1": "214 Augusta Ave",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "214 Augusta Ave",
                "Toronto, ON M5T",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T"
        },
        "name": "Pancho's Bakery",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            }
        ],
        "coordinates": {
            "latitude": 43.6396681733591,
            "longitude": -79.4212111734425
        },
        "id": "koja-restaurant-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/B6eW5fwkuTJc8HxDY8vPZg/o.jpg",
        "is_closed": "koja-restaurant-toronto",
        "location": {
            "address1": "120 Atlantic Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "120 Atlantic Avenue",
                "Toronto, ON M6K 1X9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 1X9"
        },
        "name": "KoJa Restaurant",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            },
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "coordinates": {
            "latitude": 43.6397312,
            "longitude": -79.4212973
        },
        "id": "injapan-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Wl8RTUHRCGM5c1d0brkFDA/o.jpg",
        "is_closed": "injapan-toronto",
        "location": {
            "address1": "124 Atlantic Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "124 Atlantic Avenue",
                "Toronto, ON M6K 1X9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 1X9"
        },
        "name": "Injapan",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "tea",
                "title": "Tea Rooms"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            }
        ],
        "coordinates": {
            "latitude": 43.6552918174341,
            "longitude": -79.3853147814892
        },
        "id": "tsujiri-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/x8wuTH-WsXa7Bbwa9sCxfQ/o.jpg",
        "is_closed": "tsujiri-toronto",
        "location": {
            "address1": "147 Dundas Street",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "147 Dundas Street",
                "Toronto, ON M5G 1P5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5G 1P5"
        },
        "name": "Tsujiri",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "coordinates": {
            "latitude": 43.7793859,
            "longitude": -79.4156465
        },
        "id": "nak-won-north-york",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/6rW0OK6F8XC-ApEgG37WOQ/o.jpg",
        "is_closed": "nak-won-north-york",
        "location": {
            "address1": "5594 Yonge Street",
            "address2": "",
            "address3": null,
            "city": "North York",
            "country": "CA",
            "display_address": [
                "5594 Yonge Street",
                "North York, ON M2N 5S4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5S4"
        },
        "name": "Nak Won",
        "price": "$$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "noodles",
                "title": "Noodles"
            }
        ],
        "coordinates": {
            "latitude": 43.65406,
            "longitude": -79.39101
        },
        "id": "manpuku-japanese-eatery-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/619cfh4WOiafGaHzoXgsHQ/o.jpg",
        "is_closed": "manpuku-japanese-eatery-toronto",
        "location": {
            "address1": "105 McCaul Street",
            "address2": "Unit 29-31",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "105 McCaul Street",
                "Unit 29-31",
                "Toronto, ON M5T 2X4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2X4"
        },
        "name": "Manpuku Japanese Eatery",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            },
            {
                "alias": "noodles",
                "title": "Noodles"
            }
        ],
        "coordinates": {
            "latitude": 43.7767470779372,
            "longitude": -79.4138871717552
        },
        "id": "sansotei-ramen-north-york",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/25Vc_2FD1OpbUbiJLM3emg/o.jpg",
        "is_closed": "sansotei-ramen-north-york",
        "location": {
            "address1": "13 Byng Avenue",
            "address2": "",
            "address3": null,
            "city": "North York",
            "country": "CA",
            "display_address": [
                "13 Byng Avenue",
                "North York, ON M2N 5R7",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M2N 5R7"
        },
        "name": "Sansotei Ramen",
        "price": "$$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "cafes",
                "title": "Cafes"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "coordinates": {
            "latitude": 43.66391,
            "longitude": -79.41767
        },
        "id": "poop-cafe-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/IhPWDdKIt0OBi9lnYa2ZfQ/o.jpg",
        "is_closed": "poop-cafe-toronto",
        "location": {
            "address1": "706 Bloor Street W",
            "address2": "",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "706 Bloor Street W",
                "Toronto, ON M6G 1L4",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6G 1L4"
        },
        "name": "Poop Cafe",
        "price": "$$",
        "rating": 2.5
    },
    {
        "categories": [
            {
                "alias": "pubs",
                "title": "Pubs"
            },
            {
                "alias": "newcanadian",
                "title": "Canadian (New)"
            }
        ],
        "coordinates": {
            "latitude": 43.65706,
            "longitude": -79.40011
        },
        "id": "the-red-room-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/zencECUWY6ARWTVpvtMJEA/o.jpg",
        "is_closed": "the-red-room-toronto",
        "location": {
            "address1": "444 Spadina Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "444 Spadina Avenue",
                "Toronto, ON M5T 2G8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2G8"
        },
        "name": "The Red Room",
        "price": "$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "coordinates": {
            "latitude": 43.65861,
            "longitude": -79.39509
        },
        "id": "steak-and-cheese-and-quick-pita-restaurant-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/X1eJSU-2b0HEm995B1LxfA/o.jpg",
        "is_closed": "steak-and-cheese-and-quick-pita-restaurant-toronto",
        "location": {
            "address1": "199 College St",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "199 College St",
                "Toronto, ON M5T 1P9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1P9"
        },
        "name": "Steak & Cheese & Quick Pita Restaurant",
        "price": "$",
        "rating": 2.5
    },
    {
        "categories": [
            {
                "alias": "himalayan",
                "title": "Himalayan/Nepalese"
            }
        ],
        "coordinates": {
            "latitude": 43.64053,
            "longitude": -79.43597
        },
        "id": "logas-corner-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/d8OZSkCojGAIAcPrcfiMBg/o.jpg",
        "is_closed": "logas-corner-toronto",
        "location": {
            "address1": "216C Close Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "216C Close Avenue",
                "Toronto, ON M6K 2V5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 2V5"
        },
        "name": "Loga's Corner",
        "price": "$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },
            {
                "alias": "mideastern",
                "title": "Middle Eastern"
            }
        ],
        "coordinates": {
            "latitude": 43.5682830810547,
            "longitude": -79.5676803588867
        },
        "id": "osmows-mississauga",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/vW35q8oTPWonKPF8ZZeNdQ/o.jpg",
        "is_closed": "osmows-mississauga",
        "location": {
            "address1": "600 Lakeshore East",
            "address2": "Unit 1",
            "address3": "",
            "city": "Mississauga",
            "country": "CA",
            "display_address": [
                "600 Lakeshore East",
                "Unit 1",
                "Mississauga, ON L5G 1J3",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L5G 1J3"
        },
        "name": "Osmow's",
        "price": "$",
        "rating": 3.0
    },
    {
        "categories": [
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "coordinates": {
            "latitude": 43.64525,
            "longitude": -79.41242
        },
        "id": "ihalo-krunch-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Q-HqF_FafkXzdAkg0cmb3A/o.jpg",
        "is_closed": "ihalo-krunch-toronto",
        "location": {
            "address1": "915 Queen Street W",
            "address2": "",
            "address3": null,
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "915 Queen Street W",
                "Toronto, ON M6J 1G5",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6J 1G5"
        },
        "name": "ihalo Krunch",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "asianfusion",
                "title": "Asian Fusion"
            },
            {
                "alias": "hawaiian",
                "title": "Hawaiian"
            },
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            }
        ],
        "coordinates": {
            "latitude": 43.63962,
            "longitude": -79.41575
        },
        "id": "ono-pok\u00e9-bar-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/FaBLLjlwpy-ZENekK6zVhQ/o.jpg",
        "is_closed": "ono-pok\u00e9-bar-toronto",
        "location": {
            "address1": "100 Western Battery Road",
            "address2": "Unit 2",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "100 Western Battery Road",
                "Unit 2",
                "Toronto, ON M6K 3S2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 3S2"
        },
        "name": "'ONO Pok\u00e9 Bar",
        "price": "$$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "bubbletea",
                "title": "Bubble Tea"
            },
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            }
        ],
        "coordinates": {
            "latitude": 43.8258200636421,
            "longitude": -79.3063458055258
        },
        "id": "happy-lemon-markham",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/eItg3ny5ZtcPIParmU19Vw/o.jpg",
        "is_closed": "happy-lemon-markham",
        "location": {
            "address1": "B25 4300 Steeles Avenue E",
            "address2": "",
            "address3": null,
            "city": "Markham",
            "country": "CA",
            "display_address": [
                "B25 4300 Steeles Avenue E",
                "Markham, ON L3R 0N8",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "L3R 0N8"
        },
        "name": "Happy Lemon",
        "price": "$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            }
        ],
        "coordinates": {
            "latitude": 43.6389799,
            "longitude": -79.42842
        },
        "id": "kotta-toronto",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/G8f6Q-u3WNUsYHFw1LXuAA/o.jpg",
        "is_closed": "kotta-toronto",
        "location": {
            "address1": "1226 King St W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "1226 King St W",
                "Toronto, ON M6K 1G2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M6K 1G2"
        },
        "name": "Kotta",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "caribbean",
                "title": "Caribbean"
            }
        ],
        "coordinates": {
            "latitude": 43.6542328627147,
            "longitude": -79.4004420356637
        },
        "id": "rasta-pasta-toronto-2",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/qGwPQW4rpsquKCxpvTMOyg/o.jpg",
        "is_closed": "rasta-pasta-toronto-2",
        "location": {
            "address1": "61 Kensington Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "61 Kensington Avenue",
                "Toronto, ON M5T",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T"
        },
        "name": "Rasta Pasta",
        "price": "$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "mexican",
                "title": "Mexican"
            }
        ],
        "coordinates": {
            "latitude": 43.6543411559068,
            "longitude": -79.4004796072841
        },
        "id": "seven-lives-tacos-y-mariscos-toronto",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/lJJZY-BooaPpaUCrkG0Q3Q/o.jpg",
        "is_closed": "seven-lives-tacos-y-mariscos-toronto",
        "location": {
            "address1": "69 Kensington Avenue",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "69 Kensington Avenue",
                "Toronto, ON M5T 2K2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 2K2"
        },
        "name": "Seven Lives Tacos Y Mariscos",
        "price": "$",
        "rating": 4.5
    },
    {
        "categories": [
            {
                "alias": "cafes",
                "title": "Cafes"
            }
        ],
        "coordinates": {
            "latitude": 43.65594,
            "longitude": -79.393
        },
        "id": "light-cafe-toronto",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Cbi25oVLNiclkniYkLHEGw/o.jpg",
        "is_closed": "light-cafe-toronto",
        "location": {
            "address1": "23 Baldwin Street",
            "address2": "Ground Unit",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "23 Baldwin Street",
                "Ground Unit",
                "Toronto, ON M5T 1L1",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5T 1L1"
        },
        "name": "Light Cafe",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "cafes",
                "title": "Cafes"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "coordinates": {
            "latitude": 43.64818,
            "longitude": -79.39796
        },
        "id": "cacao-70-toronto-3",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/iPh1LCiLtJYvDot2djvi_g/o.jpg",
        "is_closed": "cacao-70-toronto-3",
        "location": {
            "address1": "485 Queen St W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "485 Queen St W",
                "Toronto, ON M5V 2A9",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5V 2A9"
        },
        "name": "Cacao 70",
        "price": "$$",
        "rating": 3.5
    },
    {
        "categories": [
            {
                "alias": "venezuelan",
                "title": "Venezuelan"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "salad",
                "title": "Salad"
            }
        ],
        "coordinates": {
            "latitude": 43.6479538470928,
            "longitude": -79.4008710352267
        },
        "id": "arepa-caf\u00e9-toronto-2",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/RiZiIvaKMnqbXJRndh6bwQ/o.jpg",
        "is_closed": "arepa-caf\u00e9-toronto-2",
        "location": {
            "address1": "490 Queen Street W",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "490 Queen Street W",
                "Toronto, ON M5V 2B3",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5V 2B3"
        },
        "name": "Arepa Caf\u00e9",
        "price": "$$",
        "rating": 4.0
    },
    {
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "pubs",
                "title": "Pubs"
            }
        ],
        "coordinates": {
            "latitude": 43.6604,
            "longitude": -79.37896
        },
        "id": "kinka-izakaya-original-toronto",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/nHFVveLBqeiCGy12R2CnRA/o.jpg",
        "is_closed": "kinka-izakaya-original-toronto",
        "location": {
            "address1": "398 Church St",
            "address2": "",
            "address3": "",
            "city": "Toronto",
            "country": "CA",
            "display_address": [
                "398 Church St",
                "Toronto, ON M5B 2A2",
                "Canada"
            ],
            "state": "ON",
            "zip_code": "M5B 2A2"
        },
        "name": "KINKA IZAKAYA ORIGINAL",
        "price": "$$",
        "rating": 4.0
    }
];

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
];
