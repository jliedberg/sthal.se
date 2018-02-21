function initMap() {
    console.log('asd');
    // Map options
    var options = {
            // How zoomed in you want the map to start at (always required)
            zoom: 4,
            // The latitude and longitude to center the map (always required)
            center: {
                lat: 57.5260,
                lng: 15.2551
            }, // Sweden
            styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            }, {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            }, {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }]
        }
        // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Add marker
    // var marker = new google.maps.Marker({
    //     position: {
    //         lat: 55.596911,
    //         lng: 12.999766
    //     },
    //     map: map,
    //     icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    // });

    // // Add Info
    // var infoWindow = new google.maps.InfoWindow({
    //     content: '<h3>Glimma</h3><p>Östra Rönneholmsvägen 5<br>211 47 Malmö</p>'
    // });
    // marker.addListener('click', function() {
    //     infoWindow.open(map, marker);
    // });
    // Array of markers
    var markers = [{
    //  SWEDISH RETAILERS STARTS HERE  //
        coords: {
            lat: 62.482542,
            lng: 13.972961
        },
        content: '<h3>Skalets Inredning & Kläder</h3><p>Nya Landsvägen 40 F<br>840 92 Vemdalen</p>'
    }, {
        coords: {
            lat: 57.055458,
            lng: 12.299237
        },
        content: '<h3>Studio Pompone</h3><p>Nätvägen 9<br> 432 74 Varberg</p>'
    }, {
        coords: {
            lat: 56.877557,
            lng: 14.806740
        },
        content: '<h3>Tillis</h3><p>Sandgärdsgatan 15<br>352 30 Växjö</p>'
    }, {
        coords: {
            lat: 59.857315,
            lng: 17.628098
        },
        content: '<h3>Euforica</h3><p>Övre Slottsgatan 14C<br> 753 10 Uppsala</p>'
    }, {
        coords: {
            lat: 59.726655,
            lng: 17.792436
        },
        content: '<h3>Skattkammaren</h3><p>Apoteksvägen 13<br> 741 42 Knivsta</p>'
    }, {
        coords: {
            lat: 63.848028,
            lng: 20.311602
        },
        content: '<h3>Victoria&apos;s Home</h3><p>Björnvägen 11<br> 906 40 Umeå</p>'
    }, {
        coords: {
            lat: 55.413631,
            lng: 13.082013
        },
        content: '<h3>Slättarps Gård</h3><p>Slättarps Gård<br>231 93 Skegrie</p>'
    }, {
        coords: {
            lat: 59.376683,
            lng: 17.028456
        },
        content: '<h3>Aubergine Tyg &amp; Attityd AB</h3><p>Gyllenhjelmsgatan 18<br> 645 30 Strängnäs</p>'
    }, {
        coords: {
            lat: 59.339955,
            lng: 18.038472
        },
        content: '<h3>Spiti</h3><p>Sankt Eriksplan 2<br> 113 20 Stockholm</p>'
    }, {
        coords: {
            lat: 59.338873,
            lng: 18.060026
        },
        content: '<h3>Posh Living</h3><p>Sveavägen 41<br>111 34 Stockholm</p>'
    }, {
        coords: {
            lat: 59.333017,
            lng: 18.068222
        },
        content: '<h3>NK Classic Home</h3><p>Regeringsgatan, 111 47 Stockholm</p>'
    }, {
        coords: {
            lat: 59.393069,
            lng: 18.009688
        },
        content: '<h3>Slottsträdgården Ulriksdal</h3><p>Slottsträdgårdsvägen 8<br>170 79 Solna</p>'
    }, {
        coords: {
            lat: 59.312152,
            lng: 18.078173
        },
        content: '<h3>Rusty Rose Lifestyle</h3><p>Skånegatan 53<br>116 37 Stockholm</p>'
    }, {
        coords: {
            lat: 58.070191,
            lng: 11.819563
        },
        content: '<h3>Presenthörnan</h3><p>Strandvägen 10<br> 444 31 Stenungsund</p>'
    }, {
        coords: {
            lat: 55.439008,
            lng: 13.548750
        },
        content: '<h3>Butik Torsvik</h3><p>Torsvik<br>274 54 Skurup</p>'
    }, {
        coords: {
            lat: 64.751046,
            lng: 20.948287
        },
        content: '<h3>Spets & Ting</h3><p>Nygatan 33<br>931 32 Skellefteå</p>'
    }, {
        coords: {
            lat: 55.713509,
            lng: 13.779167
        },
        content: '<h3>Thuleslund Möbler & Inredning</h3><p>Alestadsvägen 408-24<br>275 68 Vollsjö</p>'
    }, {
        coords: {
            lat: 61.179665,
            lng: 12.989990
        },
        content: '<h3>Mindful Living</h3><p>Tandådalen köpcentrum<br>780 67 Sälen</p>'
    }, {
        coords: {
            lat: 59.219055,
            lng: 14.897343
        },
        content: '<h3>Hidingebro Handelsträdgård</h3><p>716 92 Fjugesta</p>'
    }, {
        coords: {
            lat: 58.918343,
            lng: 17.939799
        },
        content: '<h3>Bjuris Glas</h3><p>Sandtorpsvägen 10<br>149 45 Nynäshamn</p>'
    }, {
        coords: {
            lat: 55.603917,
            lng: 13.004480
        },
        content: '<h3>Charlotte Trend</h3><p>Djäknegatan 33<br>211 35 Malmö</p>'
    }, {
        coords: {
            lat: 55.550798,
            lng: 13.003688
        },
        content: '<h3>Katrinetorp</h3><p>Katrinetorps allé 1<br>215 74 Malmö</p>'
    }, {
        coords: {
            lat: 55.701473,
            lng: 13.194050
        },
        content: '<h3>Tehuset Java</h3><p>Västra Mårtensgatan 8A<br>223 51 Lund</p>'
    }, {
        coords: {
            lat: 55.714254,
            lng: 13.155349
        },
        content: '<h3>Miljögården</h3><p>Avtalsvägen 2<br>227 61 Lund</p>'
    }, {
        coords: {
            lat: 58.222862,
            lng: 11.919694
        },
        content: '<h3>Sprudla</h3><p>Vällebergsvägen 9B<br>459 30 Ljungskile</p>'
    }, {
        coords: {
            lat: 58.404937,
            lng: 15.643624
        },
        content: '<h3>Tannefors Blommor i Linköping</h3><p>Nya Tanneforsvägen 66<br>582 42 Linköping</p>'
    }, {
        coords: {
            lat: 58.508330,
            lng: 13.147322
        },
        content: '<h3>Gardinateljé Lui / Lidköpings Inredning</h3><p>Läckögatan 11<br>531 54 Lidköping</p>'
    }, {
        coords: {
            lat: 59.364741,
            lng: 18.129708
        },
        content: '<h3>Royal Design Lidingö</h3><p>Stockholmsvägen 40A<br>181 32 Lidingö</p>'
    }, {
        coords: {
            lat: 59.365065,
            lng: 18.140767
        },
        content: '<h3>Countrystyle</h3><p>Sagavägen 8<br>181 42 Lidingö</p>'
    }, {
        coords: {
            lat: 55.867140,
            lng: 12.830791
        },
        content: '<h3>Skumpa & Spaljé</h3><p>Österleden 10<br>261 51 Landskrona</p>'
    }, {
        coords: {
            lat: 57.317522,
            lng: 12.175915
        },
        content: '<h3>Hav & Sand</h3><p>Torstensviksvägen 2<br>439 62 Frillesås</p>'
    }, {
        coords: {
            lat: 57.511895,
            lng: 11.950489
        },
        content: '<h3>Inspirera Blommor, Keramik & Inredning</h3><p>Annelundsvägen 1<br>429 42 Särö</p>'
    }, {
        coords: {
            lat: 59.380943,
            lng: 13.509919
        },
        content: '<h3>Odds And Ends</h3><p>Kungsgatan 2A<br>652 24 Karlstad</p>'
    }, {
        coords: {
            lat: 59.381987,
            lng: 13.502013
        },
        content: '<h3>Värmlands Hemslöjd</h3><p>Västra Torggatan 18<br>652 24 Karlstad</p>'
    }, {
        coords: {
            lat: 56.161693,
            lng: 15.588905
        },
        content: '<h3>Smedjegatan Två</h3><p>Norra Smedjegatan 2<br>371 33 Karlskrona</p>'
    }, {
        coords: {
            lat: 55.998915,
            lng: 13.087408
        },
        content: '<h3>Madame Plantier</h3><p>Böketoftavägen 3<br>268 76 Kågeröd</p>'
    }, {
        coords: {
            lat: 57.498036,
            lng: 14.147894
        },
        content: '<h3>Jennys Inredning</h3><p>Viktoriagatan 6<br>567 30 Vaggeryd</p>'
    }, {
        coords: {
            lat: 57.710246,
            lng: 14.321303
        },
        content: '<h3>Butiken för Sakletare & Klädsugna i Tenhult</h3><p>Centrumvägen 13<br>560 29 Tenhult</p>'
    }, {
        coords: {
            lat: 65.856322,
            lng: 23.138291
        },
        content: '<h3>Handplockat</h3><p>Köpmannagatan 14<br>952 34 Kalix</p>'
    }, {
        coords: {
            lat: 66.605845,
            lng: 19.818228
        },
        content: '<h3>Kvikk Hem & Företagsdesign Jokkmokk</h3><p>Skogsgatan 11<br>962 33 Jokkmokk</p>'
    }, {
        coords: {
            lat: 56.089859,
            lng: 12.747730
        },
        content: '<h3>Royal Design Helsingborg</h3><p>Ekslingan 7E<br>254 67 Helsingborg</p>'
    }, {
        coords: {
            lat: 56.083207,
            lng: 12.685798
        },
        content: '<h3>Butik Linnea</h3><p>Mariehällsvägen 100<br>254 51 Helsingborg</p>'
    }, {
        coords: {
            lat: 57.674562,
            lng: 11.880333
        },
        content: '<h3>Blommorna i Hagen</h3><p>Långedragsvägen 102<br>426 74 Västra Frölunda</p>'
    }, {
        coords: {
            lat: 57.585212,
            lng: 12.099780
        },
        content: '<h3>Lilla Spinneriet</h3><p>Spinnmästarevägen 2<br>437 34 Lindome</p>'
    }, {
        coords: {
            lat: 57.658278,
            lng: 12.115099
        },
        content: '<h3>Vendemoda Tyg & Inredning</h3><p>Biblioteksgatan 11<br>435 30 Mölnlycke</p>'
    }, {
        coords: {
            lat: 57.731752,
            lng: 12.068729
        },
        content: '<h3>Chateau Ott</h3><p>Göteborgsvägen 54<br>433 63 Sävedalen</p>'
    }, {
        coords: {
            lat: 57.697582,
            lng: 11.999691
        },
        content: '<h3>Fiori Blommor & Inredning</h3><p>Olof Skötkonungsgatan 2<br>412 66 Göteborg</p>'
    }, {
        coords: {
            lat: 56.870449,
            lng: 14.645591
        },
        content: '<h3>Gemla Station Inredning & Café</h3><p>Svarta vägen 1<br>360 32 Gemla</p>'
    }, {
        coords: {
            lat: 57.819388,
            lng: 12.417280
        },
        content: '<h3>Brique Design och Inredning</h3><p>Spinnerivägen 1<br>448 50 Tollered</p>'
    }, {
        coords: {
            lat: 57.711282,
            lng: 11.785489
        },
        content: '<h3>treshome</h3><p>Webshop Lageradress<br>Flygfältsgatan 22<br>423 37 Torslanda</p>'
    }, {
        coords: {
            lat: 59.444089,
            lng: 16.446774
        },
        content: '<h3>Wäsby Magasin</h3><p>Rosells väg 10<br>644 36 Torshälla</p>'
    }, {
        coords: {
            lat: 55.390511,
            lng: 12.830041
        },
        content: '<h3>Holken</h3><p>Fyrvägen 1<br>239 40 Falsterbo</p>'
    }, {
        coords: {
            lat: 56.431084,
            lng: 12.843179
        },
        content: '<h3>Kisek</h3><p>Agardhsgatan 43<br>269 33 Båstad</p>'
    }, {
        coords: {
            lat: 58.867565,
            lng: 15.000941
        },
        content: '<h3>Björkviksgården</h3><p>Askersundvägen 11<br>696 75 Åmmeberg</p>'
    }, {
        coords: {
            lat: 63.290806,
            lng: 18.717556
        },
        content: '<h3>Signerat M</h3><p>Nygatan 18 D<br>891 33 Örnsköldsvik</p>'
    }, {
        coords: {
            lat: 59.654741,
            lng: 12.591462
        },
        content: '<h3>Marimej</h3><p>Storgatan 30<br>671 31 Arvika</p>'
    }, {
        coords: {
            lat: 65.579518,
            lng: 19.206895
        },
        content: '<h3>Frostab</h3><p>Järnvägsgatan 118<br>933 34 Arvidsjaur</p>'
    }, {
        coords: {
            lat: 65.673407,
            lng: 21.009213
        },
        content: '<h3>Handplockat</h3><p>Storgatan 17<br>942 31 Älvsbyn</p>'
    }, {
        coords: {
            lat: 57.930626,
            lng: 12.536852
        },
        content: '<h3>Kök och Rum</h3><p>Nygatan 5<br>441 30 Alingsås</p>'
    }, {
        coords: {
            lat: 58.448123,
            lng: 14.891038
        },
        content: '<h3>Tre Systrar i Vadstena</h3><p>Storgatan 22<br>592 30 Vadstena</p>'
    }, {
        coords: {
            lat: 59.429512,
            lng: 18.091493
        },
        content: '<h3>Sköna Rum</h3><p>Kryssarvägen 1<br>183 58 Täby</p>'
    }, {
        coords: {
            lat: 55.408920,
            lng: 12.842769
        },
        content: '<h3>NYDAHL Present och Inredning</h3><p>Triangeln 2<br>239 34 Skanör</p>'
    }, {
        coords: {
            lat: 55.506828,
            lng: 13.325759
        },
        content: '<h3>Fine & Dandy</h3><p>Börringe stationsväg 14<br>233 91 Svedala</p>'
    }, {
        coords: {
            lat: 62.391171,
            lng: 17.304980
        },
        content: '<h3>Smaksak</h3><p>Thulegatan 5<br>852 32 Sundsvall</p>'
    }, {
        coords: {
            lat: 59.259340,
            lng: 17.221167
        },
        content: '<h3>Gripsholms Vävarestuga</h3><p>Storgatan 15<br>647 30 Mariefred</p>'
    }, {
        coords: {
            lat: 58.410144,
            lng: 15.621541
        },
        content: '<h3>ESQ</h3><p>Bokhållaregatan 2B<br>582 24 Linköping</p>'
    }, {
        coords: {
            lat: 56.030163,
            lng: 14.155161
        },
        content: '<h3>Home & Clothing</h3><p>Västra Storgatan 28<br>291 31 Kristianstad</p>'
    }, {
        coords: {
            lat: 56.047085,
            lng: 12.715060
        },
        content: '<h3>Mias Trädgårdsbutik</h3><p>Skånegatan 41<br>252 52 Helsingborg</p>'
    }, {
        coords: {
            lat: 57.667821,
            lng: 14.970480
        },
        content: '<h3>Annkis glas porslin & inredning</h3><p>Norra Storgatan 17<br>575 32 Eksjö</p>'
    }, {
        coords: {
            lat: 59.524177,
            lng: 16.264504
        },
        content: '<h3>Slottsboden</h3><p>Slottsvägen 20<br>734 94 Strömsholm</p>'
    }, {
        coords: {
            lat: 56.870449,
            lng: 14.645591
        },
        content: '<h3>Mathilde & Co – Only Webshop</h3><p>http://matildeco.se/</p>'
    }, {   
        coords: {
            lat: 58.450742,
            lng: 12.320552
        },
        content: '<h3>JM Hem & Inredning – Only Webshop</h3><p>https://www.angsheminrederi.se/</p>'
    }, {
        coords: {
            lat: 55.411841,
            lng: 12.844971
        },
        content: '<h3>Presenthörnan i Stenungsund AB</h3><p>Strandvägen 10<br>444 31 Stenungsund</p>'
    }, {
        coords: {
            lat: 59.790048,
            lng: 18.989373
        },
        content: '<h3>Linneas Lada</h3><br><p>Edsgarnsvägen 49<br>760 21 Vätö</p>'
    }, {
        coords: {
            lat: 59.593363,
            lng: 15.226826
        },
        content: '<h3>Grace Interiör</h3><br><p>Skolgatan 14<br>711 30 Lindesberg</p>'
    }, {
        coords: {
            lat: 58.248567,
            lng: 11.459807
        },
        content: '<h3>Ida Jonssons Eftr.</h3><br><p>Kaptensgatan 22<br>450 34 Fiskebäckskil</p>'
    }, {
        coords: {
            lat: 63.290810,
            lng: 18.717527
        },
        content: '<h3>Signerat M</h3><br><p>Nygatan 18 D<br>891 33 Örnsköldsvik</p>'
    },
    {
        coords: {
            lat: 62.427195,
            lng: 17.418122
        },
        content: '<h3>Knopp Florist Alnö</h3><br><p>Färjevägen 29<br>865 31 Alnö</p>'
    },
    {
      coords:{lat:59.285194,lng:18.275363},
      content:'<h3>Cap-A-Pie, Saltsjöbaden Centrum</h3><p>Torggatan 8<br>133 31 Saltsjöbaden</p>'
      },

    {
      coords:{lat:57.770145,lng:12.269292},
      content:'<h3>Inred i Lerum, Solkatten Köpcentrum</h3><p>Bagges Torg 1B<br>443 30 Lerum</p>'
      },
      {
      coords:{lat:59.272418,lng:15.216533},
      content:'<h3>CE Inne - Ute</h3><p>Engelsbrektsgatan 12<br>702 12 Örebro</p>'
      },
      {
      coords:{lat:59.272418,lng:15.216533},
      content:'<h3>CE Inne - Ute</h3><p>Engelsbrektsgatan 12<br>702 12 Örebro</p>'
      },
      {
      coords:{lat:59.611407,lng:16.567659},
      content:'<h3>Öbergs Rum</h3><p>Retortgatan 3<br>721 30 Västerås</p>'
      },
      {
      coords:{lat:57.758191,lng:16.635829},
      content:'<h3>Formbar</h3><p>Storgatan 26<br>593 33 Västervik</p>'
      },
      {
      coords:{lat:58.343861,lng:11.701882},
      content:'<h3>2 Fröknar Inredningsbutik</h3><p>SVÄLTE 232<br>451 98 Uddevalla</p>'
      },
      {
      coords:{lat:60.134424,lng:13.005324},
      content:'<h3>Hotell Örnen</h3><p>Östmarksvägen 4<br>685 33 Torsby</p>'
      },
      {
      coords:{lat:59.337211,lng:18.070492},
      content:'<h3>Oscar & Clothilde</h3><p>Birger Jarlsgatan 27<br>114 54 Stockholm</p>'
      },
      {
      coords:{lat:59.289178,lng:18.284254},
      content:'<h3>Estica Home</h3><p>Sturevägen 4 A<br>133 38 Saltsjöbaden</p>'
      },
      {
      coords:{lat:58.587090,lng:16.189648},
      content:'<h3>Alexandras Blommor</h3><p>Hantverkaregatan 20<br>602 32 Norrköping</p>'
      },
      {
      coords:{lat:55.708965,lng:13.189011},
      content:'<h3>Tiny Lumberjack</h3><p>Karl XI gatan 7<br>222 20 Lund</p>'
      },
      {
      coords:{lat:55.674051,lng:14.265851},
      content:'<h3>Kiviks Musteri</h3><p>Karakåsvägen 45<br>277 35 Kivik</p>'
      },
      {
      coords:{lat:59.294465,lng:18.106477},
      content:'<h3>Lolaflores</h3><p>Ulricehamnsvägen 10<br>121 39 Johanneshov</p>'
      },
      {
      coords:{lat:55.937836,lng:13.550052},
      content:'<h3>Korgcenter</h3><p>Friluftsvägen 14<br>243 30 Höör</p>'
      },
      {
      coords:{lat:56.048653,lng:12.692390},
      content:'<h3>Avoi</h3><p>Kullagatan 30<br>252 20 Helsingborg</p>'
      },
      {
      coords:{lat:56.083221,lng:12.685777},
      content:'<h3>Butik Linnea</h3><p>Mariehällsvägen 100<br>254 51 Helsingborg</p>'
      },
      {
      coords:{lat:57.689885,lng:11.919213},
      content:'<h3>The Bourbon Rose</h3><p>Seglaregatan 16<br>414 57 Göteborg</p>'
      },
      {
      coords:{lat:57.689885,lng:11.919213},
      content:'<h3>Perstorps Gård 101 OBS KORDINATER</h3><p>Stora Berg Perstorp 101<br>305 76 Getinge</p>'
      },
      {
      coords:{lat:57.689885,lng:11.919213},
      content:'<h3>Trolltrumman</h3><p>Rörosvägen 8<br>840 95 Funäsdalen</p>'
      },
      {
      coords:{lat:57.689885,lng:11.919213},
      content:'<h3>Trolltrumman</h3><p>Rörosvägen 8<br>840 95 Funäsdalen</p>'
      },
      {
      coords:{lat:57.317535,lng:12.175931},
      content:'<h3>Hav och Sand</h3><p>Torstensviksvägen 2<br>439 62 Frillesås</p>'
      },
      {
      coords:{lat:59.219067,lng:14.897362},
      content:'<h3>Hidingebro Handelsträdgård</h3><p>716 92 Fjugesta</p>'
      },
      {
      coords:{lat:55.390515,lng:12.830039},
      content:'<h3>Holken i Falsterbo</h3><p>Fyrvägen 1<br>239 40 Falsterbo</p>'
      },
      {
      coords:{lat:57.667829,lng:14.970437},
      content:'<h3>Annkis</h3><p>Norra Storgatan 17<br>575 32 Eksjö</p>'
      },
      {
      coords:{lat:59.393034,lng:18.027106},
      content:'<h3>Stinas Skåp</h3><p>Kevinge gård<br>182 57 Danderyd</p>'
      },
      {
      coords:{lat:56.431110,lng:12.843146},
      content:'<h3>Kisek</h3><p>Agardhsgatan 43<br>269 33 Båstad</p>'
      },
      {
      coords:{lat:56.431110,lng:12.843146},
      content:'<h3>Kisek</h3><p>Agardhsgatan 43<br>269 33 Båstad</p>'
      },
      {
      coords:{lat:55.724154,lng:13.098362},
      content:'<h3>Solnäs Gård</h3><p>Fjelievägen 112<br>237 91 Bjärred</p>'
      },
      {
      coords:{lat:58.450753,lng:12.320552},
      content:'<h3>Ängshems Inrerderi – Only Webshop</h3><p><a href="https://www.angsheminrederi.se/kok/porslin-keramik/">Webshop</a></p>'
      },
      {
      coords:{lat:59.349476,lng:18.100831},
      content:'<h3>Kökets Favoriter – Only Webshop</h3><p><a href="https://www.koketsfavoriter.se/servering-dukning/sthal">Webshop</a></p>'
      },
      {
      coords:{lat:55.411199,lng:12.842299},
      content:'<h3>Designbutiken.com – Only Webshop</h3><p><a href="http://www.designbutiken.com/se/">Webshop</a></p>'
      },




      
    // SWEDISH RETAILERS STOPS HERE //
    // EUROPEAN RETAILERS STARTS HERE //
      {
      coords:{lat:55.313422,lng:11.985255},
      content:'<h3>Munkhus</h3><p>Moltkesvej 61<br>4690 Haslev</p>'
      },
      {
      coords:{lat:55.313422,lng:11.985255},
      content:'<h3>Malling Interieur</h3><p>Lille Strandstræde 24<br>1254 København K</p>'
      },
      {
      coords:{lat:60.159303,lng:24.954143},
      content:'<h3>Winkel Shop</h3><p>Fabriksgatan 22<br>00140 Helsingfors</p>'
      },
      {
      coords:{lat:51.797802,lng:-1.629825},
      content:'<h3>Burford Garden Company</h3><p>Shilton Road<br>OX18 4PA Burford Oxfordshire</p>'
      },
      {
      coords:{lat:54.939329,lng:-3.931386},
      content:'<h3>Designs Gallery & Cafe</h3><p>179 Kings Street<br>Castle Douglas DG7 1DZ</p>'
      },
      {
      coords:{lat:53.077678,lng:-2.577229},
      content:'<h3>Workshop no.1</h3><p>Brindley Farm Burland, Nantwich<br>CW58NA Cheshire</p>'
      },
      {
      coords:{lat:51.643216,lng:0.078936},
      content:'<h3>Maison & More</h3><p>Crate 11, Crate Loughton<br>15 Oakwood Hill Industrial Estate, Loughton IG10 3TZ</p>'
      },
      {
      coords:{lat:51.474319,lng:-0.243703},
      content:'<h3>The Lost Corner</h3><p>77 Church Road<br>Barnes SW13 7HH</p>'
      },
      {
      coords:{lat:51.509265,lng:-0.134606},
      content:'<h3>Osprey London</h3><p>27 Regent Street<br>St. James London</p>'
      },
      {
      coords:{lat:51.427098,lng:-0.332193},
      content:'<h3>Mitzi B</h3><p>30 High St<br>Teddington TW11 8EW</p>'
      },
      {
      coords:{lat:51.477406,lng:-0.286246},
      content:'<h3>Mia Wood</h3><p>9 Station Parade<br>Richmond TW9 3PS</p>'
      },
      {
      coords:{lat:50.949074,lng:-2.516443},
      content:'<h3>The Circus</h3><p>33 Cheap Street<br>DT93PU Sherborne</p>'
      },
      {
      coords:{lat:49.457444,lng:-2.535884},
      content:'<h3>Indica Interiors</h3><p>39 Le Pollet<br>GY11WQ St. Peter Port</p>'
      },
      {
      coords:{lat:51.062480,lng:-1.317152},
      content:'<h3>Jane McIntyre Design</h3><p>11 Southgate St.<br>SO239DZ Winchester</p>'
      },
      {
      coords:{lat:60.701993,lng:8.938898},
      content:'<h3>Husfliden Hallingdal</h3><p>Sentrumsvegen 120<br>3550 Gol</p>'
      },
      {
      coords:{lat:60.719787,lng:11.006176},
      content:'<h3>Skafferiet på Hovinsholm</h3><p>Helgøyavegen 850<br>2350 Nes på Hedmark</p>'
      },
      {
      coords:{lat:59.920079,lng:10.636472},
      content:'<h3>Grønn</h3><p>Lilleakerveien 31<br>0283 Oslo</p>'
      },
      {
      coords:{lat:58.975727,lng:9.959608},
      content:'<h3>Anvik Gårdshandel</h3><p>Anvik, 3294 Stavern</p>'
      },
      {
      coords:{lat:63.794721,lng:11.484091},
      content:'<h3>Cartofflene</h3><p>Jernbanegata 25<br>7650 Verdal</p>'
      },
      {
      coords:{lat:40.431751,lng:-3.682353},
      content:'<h3>Teklassic</h3><p>Nunez de Balboa 81<br>28006 Madrid</p>'
      },
      // EUROPEAN RETAILERS STOP //
    ];

    var infowindows = []

    // Loop through markers
    for (var i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props) {
        var image = {
            url: 'pointer.png',
            size: new google.maps.Size(183,  296),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(7.75, 25),
            scaledSize: new google.maps.Size(15.5, 25)
        };
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: image,
        });
        //Check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content,
                pixelOffset: new google.maps.Size(-85, 0)
            });
            infowindows.push(infoWindow);
            marker.addListener('click', function() {
                for (var i = 0; i < infowindows.length; i++) {
                    infowindows[i].close()
                }
                infoWindow.open(map, marker);
            });
        }
    }
    // var input = document.getElementById('searchmap');
    // var searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // searchBox.addListener('places_changed', function() {
    //     var places = searchBox.getPlaces();
    //     if (places.length == 0) {
    //         return;
    //     }

    //     var bounds = new google.maps.LatLngBounds();
    //     places.forEach(function(place) {

    //         if (place.geometry.viewport) {
    //             // Only geocodes have viewport.
    //             bounds.union(place.geometry.viewport);
    //         } else {
    //             bounds.extend(place.geometry.location);
    //         }
    //     });
    //     map.fitBounds(bounds);
    // });
}
