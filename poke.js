const axios = require('axios');
const moment = require('moment');

// Define the transformation logic
const transformPokemon = (pokemon) => {
	if (pokemon.pokemon_id === 1) {
		pokemon.pokemon_name = 'Bulbasaur';
	}
	if (pokemon.pokemon_id === 2) {
		pokemon.pokemon_name = 'Ivysaur';
	}
	if (pokemon.pokemon_id === 3) {
		pokemon.pokemon_name = 'Venusaur';
	}
	if (pokemon.pokemon_id === 4) {
		pokemon.pokemon_name = 'Charmander';
	}
	if (pokemon.pokemon_id === 5) {
		pokemon.pokemon_name = 'Charmeleon';
	}
	if (pokemon.pokemon_id === 6) {
		pokemon.pokemon_name = 'Charizard';
	}
	if (pokemon.pokemon_id === 7) {
		pokemon.pokemon_name = 'Squirtle';
	}
	if (pokemon.pokemon_id === 8) {
		pokemon.pokemon_name = 'Wartortle';
	}
	if (pokemon.pokemon_id === 9) {
		pokemon.pokemon_name = 'Blastoise';
	}
	if (pokemon.pokemon_id === 10) {
		pokemon.pokemon_name = 'Caterpie';
	}
	if (pokemon.pokemon_id === 11) {
		pokemon.pokemon_name = 'Metapod';
	}
	if (pokemon.pokemon_id === 12) {
		pokemon.pokemon_name = 'Butterfree';
	}
	if (pokemon.pokemon_id === 13) {
		pokemon.pokemon_name = 'Weedle';
	}
	if (pokemon.pokemon_id === 14) {
		pokemon.pokemon_name = 'Kakuna';
	}
	if (pokemon.pokemon_id === 15) {
		pokemon.pokemon_name = 'Beedrill';
	}
	if (pokemon.pokemon_id === 16) {
		pokemon.pokemon_name = 'Pidgey';
	}
	if (pokemon.pokemon_id === 17) {
		pokemon.pokemon_name = 'Pidgeotto';
	}
	if (pokemon.pokemon_id === 18) {
		pokemon.pokemon_name = 'Pidgeot';
	}
	if (pokemon.pokemon_id === 19) {
		pokemon.pokemon_name = 'Rattata';
	}
	if (pokemon.pokemon_id === 20) {
		pokemon.pokemon_name = 'Raticate';
	}
	if (pokemon.pokemon_id === 21) {
		pokemon.pokemon_name = 'Spearow';
	}
	if (pokemon.pokemon_id === 22) {
		pokemon.pokemon_name = 'Fearow';
	}
	if (pokemon.pokemon_id === 23) {
		pokemon.pokemon_name = 'Ekans';
	}
	if (pokemon.pokemon_id === 24) {
		pokemon.pokemon_name = 'Arbok';
	}
	if (pokemon.pokemon_id === 172) {
		pokemon.pokemon_name = 'Pichu';
	}
	if (pokemon.pokemon_id === 25) {
		pokemon.pokemon_name = 'Pikachu';
	}
	if (pokemon.pokemon_id === 26) {
		pokemon.pokemon_name = 'Raichu';
	}
	if (pokemon.pokemon_id === 27) {
		pokemon.pokemon_name = 'Sandshrew';
	}
	if (pokemon.pokemon_id === 28) {
		pokemon.pokemon_name = 'Sandslash';
	}
	if (pokemon.pokemon_id === 29) {
		pokemon.pokemon_name = 'Nidoranâ™€';
	}
	if (pokemon.pokemon_id === 30) {
		pokemon.pokemon_name = 'Nidorina';
	}
	if (pokemon.pokemon_id === 31) {
		pokemon.pokemon_name = 'Nidoqueen';
	}
	if (pokemon.pokemon_id === 32) {
		pokemon.pokemon_name = 'Nidoranâ™‚';
	}
	if (pokemon.pokemon_id === 33) {
		pokemon.pokemon_name = 'Nidorino';
	}
	if (pokemon.pokemon_id === 34) {
		pokemon.pokemon_name = 'Nidoking';
	}
	if (pokemon.pokemon_id === 173) {
		pokemon.pokemon_name = 'Cleffa';
	}
	if (pokemon.pokemon_id === 35) {
		pokemon.pokemon_name = 'Clefairy';
	}
	if (pokemon.pokemon_id === 36) {
		pokemon.pokemon_name = 'Clefable';
	}
	if (pokemon.pokemon_id === 37) {
		pokemon.pokemon_name = 'Vulpix';
	}
	if (pokemon.pokemon_id === 38) {
		pokemon.pokemon_name = 'Ninetales';
	}
	if (pokemon.pokemon_id === 174) {
		pokemon.pokemon_name = 'Igglybuff';
	}
	if (pokemon.pokemon_id === 39) {
		pokemon.pokemon_name = 'Jigglypuff';
	}
	if (pokemon.pokemon_id === 40) {
		pokemon.pokemon_name = 'Wigglytuff';
	}
	if (pokemon.pokemon_id === 41) {
		pokemon.pokemon_name = 'Zubat';
	}
	if (pokemon.pokemon_id === 42) {
		pokemon.pokemon_name = 'Golbat';
	}
	if (pokemon.pokemon_id === 169) {
		pokemon.pokemon_name = 'Crobat';
	}
	if (pokemon.pokemon_id === 43) {
		pokemon.pokemon_name = 'Oddish';
	}
	if (pokemon.pokemon_id === 44) {
		pokemon.pokemon_name = 'Gloom';
	}
	if (pokemon.pokemon_id === 45) {
		pokemon.pokemon_name = 'Vileplume';
	}
	if (pokemon.pokemon_id === 46) {
		pokemon.pokemon_name = 'Paras';
	}
	if (pokemon.pokemon_id === 47) {
		pokemon.pokemon_name = 'Parasect';
	}
	if (pokemon.pokemon_id === 48) {
		pokemon.pokemon_name = 'Venonat';
	}
	if (pokemon.pokemon_id === 49) {
		pokemon.pokemon_name = 'Venomoth';
	}
	if (pokemon.pokemon_id === 50) {
		pokemon.pokemon_name = 'Diglett';
	}
	if (pokemon.pokemon_id === 51) {
		pokemon.pokemon_name = 'Dugtrio';
	}
	if (pokemon.pokemon_id === 52) {
		pokemon.pokemon_name = 'Meowth';
	}
	if (pokemon.pokemon_id === 53) {
		pokemon.pokemon_name = 'Persian';
	}
	if (pokemon.pokemon_id === 54) {
		pokemon.pokemon_name = 'Psyduck';
	}
	if (pokemon.pokemon_id === 55) {
		pokemon.pokemon_name = 'Golduck';
	}
	if (pokemon.pokemon_id === 56) {
		pokemon.pokemon_name = 'Mankey';
	}
	if (pokemon.pokemon_id === 57) {
		pokemon.pokemon_name = 'Primeape';
	}
	if (pokemon.pokemon_id === 58) {
		pokemon.pokemon_name = 'Growlithe';
	}
	if (pokemon.pokemon_id === 59) {
		pokemon.pokemon_name = 'Arcanine';
	}
	if (pokemon.pokemon_id === 60) {
		pokemon.pokemon_name = 'Poliwag';
	}
	if (pokemon.pokemon_id === 61) {
		pokemon.pokemon_name = 'Poliwhirl';
	}
	if (pokemon.pokemon_id === 62) {
		pokemon.pokemon_name = 'Poliwrath';
	}
	if (pokemon.pokemon_id === 63) {
		pokemon.pokemon_name = 'Abra';
	}
	if (pokemon.pokemon_id === 64) {
		pokemon.pokemon_name = 'Kadabra';
	}
	if (pokemon.pokemon_id === 65) {
		pokemon.pokemon_name = 'Alakazam';
	}
	if (pokemon.pokemon_id === 66) {
		pokemon.pokemon_name = 'Machop';
	}
	if (pokemon.pokemon_id === 67) {
		pokemon.pokemon_name = 'Machoke';
	}
	if (pokemon.pokemon_id === 68) {
		pokemon.pokemon_name = 'Machamp';
	}
	if (pokemon.pokemon_id === 69) {
		pokemon.pokemon_name = 'Bellsprout';
	}
	if (pokemon.pokemon_id === 70) {
		pokemon.pokemon_name = 'Weepinbell';
	}
	if (pokemon.pokemon_id === 71) {
		pokemon.pokemon_name = 'Victreebel';
	}
	if (pokemon.pokemon_id === 72) {
		pokemon.pokemon_name = 'Tentacool';
	}
	if (pokemon.pokemon_id === 73) {
		pokemon.pokemon_name = 'Tentacruel';
	}
	if (pokemon.pokemon_id === 74) {
		pokemon.pokemon_name = 'Geodude';
	}
	if (pokemon.pokemon_id === 75) {
		pokemon.pokemon_name = 'Graveler';
	}
	if (pokemon.pokemon_id === 76) {
		pokemon.pokemon_name = 'Golem';
	}
	if (pokemon.pokemon_id === 77) {
		pokemon.pokemon_name = 'Ponyta';
	}
	if (pokemon.pokemon_id === 78) {
		pokemon.pokemon_name = 'Rapidash';
	}
	if (pokemon.pokemon_id === 79) {
		pokemon.pokemon_name = 'Slowpoke';
	}
	if (pokemon.pokemon_id === 80) {
		pokemon.pokemon_name = 'Slowbro';
	}
	if (pokemon.pokemon_id === 81) {
		pokemon.pokemon_name = 'Magnemite';
	}
	if (pokemon.pokemon_id === 82) {
		pokemon.pokemon_name = 'Magneton';
	}
	if (pokemon.pokemon_id === 462) {
		pokemon.pokemon_name = 'Magnezone';
	}
	if (pokemon.pokemon_id === 83) {
		pokemon.pokemon_name = 'Farfetch';
	}
	if (pokemon.pokemon_id === 84) {
		pokemon.pokemon_name = 'Doduo';
	}
	if (pokemon.pokemon_id === 85) {
		pokemon.pokemon_name = 'Dodrio';
	}
	if (pokemon.pokemon_id === 86) {
		pokemon.pokemon_name = 'Seel';
	}
	if (pokemon.pokemon_id === 87) {
		pokemon.pokemon_name = 'Dewgong';
	}
	if (pokemon.pokemon_id === 88) {
		pokemon.pokemon_name = 'Grimer';
	}
	if (pokemon.pokemon_id === 89) {
		pokemon.pokemon_name = 'Muk';
	}
	if (pokemon.pokemon_id === 90) {
		pokemon.pokemon_name = 'Shellder';
	}
	if (pokemon.pokemon_id === 91) {
		pokemon.pokemon_name = 'Cloyster';
	}
	if (pokemon.pokemon_id === 92) {
		pokemon.pokemon_name = 'Gastly';
	}
	if (pokemon.pokemon_id === 93) {
		pokemon.pokemon_name = 'Haunter';
	}
	if (pokemon.pokemon_id === 94) {
		pokemon.pokemon_name = 'Gengar';
	}
	if (pokemon.pokemon_id === 95) {
		pokemon.pokemon_name = 'Onix';
	}
	if (pokemon.pokemon_id === 208) {
		pokemon.pokemon_name = 'Steelix';
	}
	if (pokemon.pokemon_id === 96) {
		pokemon.pokemon_name = 'Drowzee';
	}
	if (pokemon.pokemon_id === 97) {
		pokemon.pokemon_name = 'Hypno';
	}
	if (pokemon.pokemon_id === 98) {
		pokemon.pokemon_name = 'Krabby';
	}
	if (pokemon.pokemon_id === 99) {
		pokemon.pokemon_name = 'Kingler';
	}
	if (pokemon.pokemon_id === 100) {
		pokemon.pokemon_name = 'Voltorb';
	}
	if (pokemon.pokemon_id === 101) {
		pokemon.pokemon_name = 'Electrode';
	}
	if (pokemon.pokemon_id === 102) {
		pokemon.pokemon_name = 'Exeggcute';
	}
	if (pokemon.pokemon_id === 103) {
		pokemon.pokemon_name = 'Exeggutor';
	}
	if (pokemon.pokemon_id === 104) {
		pokemon.pokemon_name = 'Cubone';
	}
	if (pokemon.pokemon_id === 105) {
		pokemon.pokemon_name = 'Marowak';
	}
	if (pokemon.pokemon_id === 236) {
		pokemon.pokemon_name = 'Tyrogue';
	}
	if (pokemon.pokemon_id === 106) {
		pokemon.pokemon_name = 'Hitmonlee';
	}
	if (pokemon.pokemon_id === 107) {
		pokemon.pokemon_name = 'Hitmonchan';
	}
	if (pokemon.pokemon_id === 237) {
		pokemon.pokemon_name = 'Hitmontop';
	}
	if (pokemon.pokemon_id === 134) {
		pokemon.pokemon_name = 'Vaporeon';
	}
	if (pokemon.pokemon_id === 135) {
		pokemon.pokemon_name = 'Jolteon';
	}
	if (pokemon.pokemon_id === 136) {
		pokemon.pokemon_name = 'Flareon';
	}
	if (pokemon.pokemon_id === 196) {
		pokemon.pokemon_name = 'Espeon';
	}
	if (pokemon.pokemon_id === 197) {
		pokemon.pokemon_name = 'Umbreon';
	}
	if (pokemon.pokemon_id === 470) {
		pokemon.pokemon_name = 'Leafeon';
	}
	if (pokemon.pokemon_id === 471) {
		pokemon.pokemon_name = 'Glaceon';
	}
	if (pokemon.pokemon_id === 700) {
		pokemon.pokemon_name = 'Sylveon';
	}
	if (pokemon.pokemon_id === 266) {
		pokemon.pokemon_name = 'Silcoon';
	}
	if (pokemon.pokemon_id === 268) {
		pokemon.pokemon_name = 'Cascoon';
	}
	if (pokemon.pokemon_id === 267) {
		pokemon.pokemon_name = 'Beautifly';
	}
	if (pokemon.pokemon_id === 269) {
		pokemon.pokemon_name = 'Dustox';
	}
	if (pokemon.pokemon_id === 475) {
		pokemon.pokemon_name = 'Gallade';
	}
	if (pokemon.pokemon_id === 282) {
		pokemon.pokemon_name = 'Gardevoir';
	}
	if (pokemon.pokemon_id === 362) {
		pokemon.pokemon_name = 'Glalie';
	}
	if (pokemon.pokemon_id === 478) {
		pokemon.pokemon_name = 'Froslass';
	}
	if (pokemon.pokemon_id === 367) {
		pokemon.pokemon_name = 'Huntail';
	}
	if (pokemon.pokemon_id === 368) {
		pokemon.pokemon_name = 'Gorebyss';
	}
	if (pokemon.pokemon_id === 414) {
		pokemon.pokemon_name = 'Mothim';
	}
	if (pokemon.pokemon_id === 413) {
		pokemon.pokemon_name = 'Wormadam';
	}
	if (pokemon.pokemon_id === 791) {
		pokemon.pokemon_name = 'Solgaleo';
	}
	if (pokemon.pokemon_id === 792) {
		pokemon.pokemon_name = 'Lunala';
	}
	if (pokemon.pokemon_id === 841) {
		pokemon.pokemon_name = 'Flapple';
	}
	if (pokemon.pokemon_id === 842) {
		pokemon.pokemon_name = 'Appletun';
	}
	if (pokemon.pokemon_id === 108) {
		pokemon.pokemon_name = 'Lickitung';
	}
	if (pokemon.pokemon_id === 463) {
		pokemon.pokemon_name = 'Lickilicky';
	}
	if (pokemon.pokemon_id === 109) {
		pokemon.pokemon_name = 'Koffing';
	}
	if (pokemon.pokemon_id === 110) {
		pokemon.pokemon_name = 'Weezing';
	}
	if (pokemon.pokemon_id === 111) {
		pokemon.pokemon_name = 'Rhyhorn';
	}
	if (pokemon.pokemon_id === 112) {
		pokemon.pokemon_name = 'Rhydon';
	}
	if (pokemon.pokemon_id === 464) {
		pokemon.pokemon_name = 'Rhyperior';
	}
	if (pokemon.pokemon_id === 440) {
		pokemon.pokemon_name = 'Happiny';
	}
	if (pokemon.pokemon_id === 113) {
		pokemon.pokemon_name = 'Chansey';
	}
	if (pokemon.pokemon_id === 242) {
		pokemon.pokemon_name = 'Blissey';
	}
	if (pokemon.pokemon_id === 114) {
		pokemon.pokemon_name = 'Tangela';
	}
	if (pokemon.pokemon_id === 465) {
		pokemon.pokemon_name = 'Tangrowth';
	}
	if (pokemon.pokemon_id === 115) {
		pokemon.pokemon_name = 'Kangaskhan';
	}
	if (pokemon.pokemon_id === 116) {
		pokemon.pokemon_name = 'Horsea';
	}
	if (pokemon.pokemon_id === 117) {
		pokemon.pokemon_name = 'Seadra';
	}
	if (pokemon.pokemon_id === 230) {
		pokemon.pokemon_name = 'Kingdra';
	}
	if (pokemon.pokemon_id === 118) {
		pokemon.pokemon_name = 'Goldeen';
	}
	if (pokemon.pokemon_id === 119) {
		pokemon.pokemon_name = 'Seaking';
	}
	if (pokemon.pokemon_id === 120) {
		pokemon.pokemon_name = 'Staryu';
	}
	if (pokemon.pokemon_id === 121) {
		pokemon.pokemon_name = 'Starmie';
	}
	if (pokemon.pokemon_id === 439) {
		pokemon.pokemon_name = 'Mime Jr.';
	}
	if (pokemon.pokemon_id === 122) {
		pokemon.pokemon_name = 'Mr. Mime';
	}
	if (pokemon.pokemon_id === 123) {
		pokemon.pokemon_name = 'Scyther';
	}
	if (pokemon.pokemon_id === 212) {
		pokemon.pokemon_name = 'Scizor';
	}
	if (pokemon.pokemon_id === 238) {
		pokemon.pokemon_name = 'Smoochum';
	}
	if (pokemon.pokemon_id === 124) {
		pokemon.pokemon_name = 'Jynx';
	}
	if (pokemon.pokemon_id === 239) {
		pokemon.pokemon_name = 'Elekid';
	}
	if (pokemon.pokemon_id === 125) {
		pokemon.pokemon_name = 'Electabuzz';
	}
	if (pokemon.pokemon_id === 466) {
		pokemon.pokemon_name = 'Electivire';
	}
	if (pokemon.pokemon_id === 240) {
		pokemon.pokemon_name = 'Magby';
	}
	if (pokemon.pokemon_id === 126) {
		pokemon.pokemon_name = 'Magmar';
	}
	if (pokemon.pokemon_id === 467) {
		pokemon.pokemon_name = 'Magmortar';
	}
	if (pokemon.pokemon_id === 127) {
		pokemon.pokemon_name = 'Pinsir';
	}
	if (pokemon.pokemon_id === 128) {
		pokemon.pokemon_name = 'Tauros';
	}
	if (pokemon.pokemon_id === 129) {
		pokemon.pokemon_name = 'Magikarp';
	}
	if (pokemon.pokemon_id === 130) {
		pokemon.pokemon_name = 'Gyarados';
	}
	if (pokemon.pokemon_id === 131) {
		pokemon.pokemon_name = 'Lapras';
	}
	if (pokemon.pokemon_id === 132) {
		pokemon.pokemon_name = 'Ditto';
	}
	if (pokemon.pokemon_id === 133) {
		pokemon.pokemon_name = 'Eevee';
	}
	if (pokemon.pokemon_id === 134) {
		pokemon.pokemon_name = 'Vaporeon';
	}
	if (pokemon.pokemon_id === 137) {
		pokemon.pokemon_name = 'Porygon';
	}
	if (pokemon.pokemon_id === 233) {
		pokemon.pokemon_name = 'Porygon2';
	}
	if (pokemon.pokemon_id === 474) {
		pokemon.pokemon_name = 'Porygon-Z';
	}
	if (pokemon.pokemon_id === 138) {
		pokemon.pokemon_name = 'Omanyte';
	}
	if (pokemon.pokemon_id === 139) {
		pokemon.pokemon_name = 'Omastar';
	}
	if (pokemon.pokemon_id === 140) {
		pokemon.pokemon_name = 'Kabuto';
	}
	if (pokemon.pokemon_id === 141) {
		pokemon.pokemon_name = 'Kabutops';
	}
	if (pokemon.pokemon_id === 142) {
		pokemon.pokemon_name = 'Aerodactyl';
	}
	if (pokemon.pokemon_id === 446) {
		pokemon.pokemon_name = 'Munchlax';
	}
	if (pokemon.pokemon_id === 143) {
		pokemon.pokemon_name = 'Snorlax';
	}
	if (pokemon.pokemon_id === 144) {
		pokemon.pokemon_name = 'Articuno';
	}
	if (pokemon.pokemon_id === 145) {
		pokemon.pokemon_name = 'Zapdos';
	}
	if (pokemon.pokemon_id === 146) {
		pokemon.pokemon_name = 'Moltres';
	}
	if (pokemon.pokemon_id === 147) {
		pokemon.pokemon_name = 'Dratini';
	}
	if (pokemon.pokemon_id === 148) {
		pokemon.pokemon_name = 'Dragonair';
	}
	if (pokemon.pokemon_id === 149) {
		pokemon.pokemon_name = 'Dragonite';
	}
	if (pokemon.pokemon_id === 150) {
		pokemon.pokemon_name = 'Mewtwo';
	}
	if (pokemon.pokemon_id === 151) {
		pokemon.pokemon_name = 'Mew';
	}
	if (pokemon.pokemon_id === 152) {
		pokemon.pokemon_name = 'Chikorita';
	}
	if (pokemon.pokemon_id === 153) {
		pokemon.pokemon_name = 'Bayleef';
	}
	if (pokemon.pokemon_id === 154) {
		pokemon.pokemon_name = 'Meganium';
	}
	if (pokemon.pokemon_id === 155) {
		pokemon.pokemon_name = 'Cyndaquil';
	}
	if (pokemon.pokemon_id === 156) {
		pokemon.pokemon_name = 'Quilava';
	}
	if (pokemon.pokemon_id === 157) {
		pokemon.pokemon_name = 'Typhlosion';
	}
	if (pokemon.pokemon_id === 158) {
		pokemon.pokemon_name = 'Totodile';
	}
	if (pokemon.pokemon_id === 159) {
		pokemon.pokemon_name = 'Croconaw';
	}
	if (pokemon.pokemon_id === 160) {
		pokemon.pokemon_name = 'Feraligatr';
	}
	if (pokemon.pokemon_id === 161) {
		pokemon.pokemon_name = 'Sentret';
	}
	if (pokemon.pokemon_id === 162) {
		pokemon.pokemon_name = 'Furret';
	}
	if (pokemon.pokemon_id === 163) {
		pokemon.pokemon_name = 'Hoothoot';
	}
	if (pokemon.pokemon_id === 164) {
		pokemon.pokemon_name = 'Noctowl';
	}
	if (pokemon.pokemon_id === 165) {
		pokemon.pokemon_name = 'Ledyba';
	}
	if (pokemon.pokemon_id === 166) {
		pokemon.pokemon_name = 'Ledian';
	}
	if (pokemon.pokemon_id === 167) {
		pokemon.pokemon_name = 'Spinarak';
	}
	if (pokemon.pokemon_id === 168) {
		pokemon.pokemon_name = 'Ariados';
	}
	if (pokemon.pokemon_id === 170) {
		pokemon.pokemon_name = 'Chinchou';
	}
	if (pokemon.pokemon_id === 171) {
		pokemon.pokemon_name = 'Lanturn';
	}
	if (pokemon.pokemon_id === 175) {
		pokemon.pokemon_name = 'Togepi';
	}
	if (pokemon.pokemon_id === 176) {
		pokemon.pokemon_name = 'Togetic';
	}
	if (pokemon.pokemon_id === 468) {
		pokemon.pokemon_name = 'Togekiss';
	}
	if (pokemon.pokemon_id === 177) {
		pokemon.pokemon_name = 'Natu';
	}
	if (pokemon.pokemon_id === 178) {
		pokemon.pokemon_name = 'Xatu';
	}
	if (pokemon.pokemon_id === 179) {
		pokemon.pokemon_name = 'Mareep';
	}
	if (pokemon.pokemon_id === 180) {
		pokemon.pokemon_name = 'Flaaffy';
	}
	if (pokemon.pokemon_id === 181) {
		pokemon.pokemon_name = 'Ampharos';
	}
	if (pokemon.pokemon_id === 298) {
		pokemon.pokemon_name = 'Azurill';
	}
	if (pokemon.pokemon_id === 183) {
		pokemon.pokemon_name = 'Marill';
	}
	if (pokemon.pokemon_id === 184) {
		pokemon.pokemon_name = 'Azumarill';
	}
	if (pokemon.pokemon_id === 438) {
		pokemon.pokemon_name = 'Bonsly';
	}
	if (pokemon.pokemon_id === 185) {
		pokemon.pokemon_name = 'Sudowoodo';
	}
	if (pokemon.pokemon_id === 187) {
		pokemon.pokemon_name = 'Hoppip';
	}
	if (pokemon.pokemon_id === 188) {
		pokemon.pokemon_name = 'Skiploom';
	}
	if (pokemon.pokemon_id === 189) {
		pokemon.pokemon_name = 'Jumpluff';
	}
	if (pokemon.pokemon_id === 190) {
		pokemon.pokemon_name = 'Aipom';
	}
	if (pokemon.pokemon_id === 424) {
		pokemon.pokemon_name = 'Ambipom';
	}
	if (pokemon.pokemon_id === 191) {
		pokemon.pokemon_name = 'Sunkern';
	}
	if (pokemon.pokemon_id === 192) {
		pokemon.pokemon_name = 'Sunflora';
	}
	if (pokemon.pokemon_id === 193) {
		pokemon.pokemon_name = 'Yanma';
	}
	if (pokemon.pokemon_id === 469) {
		pokemon.pokemon_name = 'Yanmega';
	}
	if (pokemon.pokemon_id === 194) {
		pokemon.pokemon_name = 'Wooper';
	}
	if (pokemon.pokemon_id === 195) {
		pokemon.pokemon_name = 'Quagsire';
	}
	if (pokemon.pokemon_id === 198) {
		pokemon.pokemon_name = 'Murkrow';
	}
	if (pokemon.pokemon_id === 430) {
		pokemon.pokemon_name = 'Honchkrow';
	}
	if (pokemon.pokemon_id === 200) {
		pokemon.pokemon_name = 'Misdreavus';
	}
	if (pokemon.pokemon_id === 429) {
		pokemon.pokemon_name = 'Mismagius';
	}
	if (pokemon.pokemon_id === 201) {
		pokemon.pokemon_name = 'Unown';
	}
	if (pokemon.pokemon_id === 360) {
		pokemon.pokemon_name = 'Wynaut';
	}
	if (pokemon.pokemon_id === 202) {
		pokemon.pokemon_name = 'Wobbuffet';
	}
	if (pokemon.pokemon_id === 203) {
		pokemon.pokemon_name = 'Girafarig';
	}
	if (pokemon.pokemon_id === 204) {
		pokemon.pokemon_name = 'Pineco';
	}
	if (pokemon.pokemon_id === 205) {
		pokemon.pokemon_name = 'Forretress';
	}
	if (pokemon.pokemon_id === 206) {
		pokemon.pokemon_name = 'Dunsparce';
	}
	if (pokemon.pokemon_id === 207) {
		pokemon.pokemon_name = 'Gligar';
	}
	if (pokemon.pokemon_id === 472) {
		pokemon.pokemon_name = 'Gliscor';
	}
	if (pokemon.pokemon_id === 209) {
		pokemon.pokemon_name = 'Snubbull';
	}
	if (pokemon.pokemon_id === 210) {
		pokemon.pokemon_name = 'Granbull';
	}
	if (pokemon.pokemon_id === 211) {
		pokemon.pokemon_name = 'Qwilfish';
	}
	if (pokemon.pokemon_id === 213) {
		pokemon.pokemon_name = 'Shuckle';
	}
	if (pokemon.pokemon_id === 214) {
		pokemon.pokemon_name = 'Heracross';
	}
	if (pokemon.pokemon_id === 215) {
		pokemon.pokemon_name = 'Sneasel';
	}
	if (pokemon.pokemon_id === 461) {
		pokemon.pokemon_name = 'Weavile';
	}
	if (pokemon.pokemon_id === 216) {
		pokemon.pokemon_name = 'Teddiursa';
	}
	if (pokemon.pokemon_id === 217) {
		pokemon.pokemon_name = 'Ursaring';
	}
	if (pokemon.pokemon_id === 901) {
		pokemon.pokemon_name = 'Ursaluna';
	}
	if (pokemon.pokemon_id === 218) {
		pokemon.pokemon_name = 'Slugma';
	}
	if (pokemon.pokemon_id === 219) {
		pokemon.pokemon_name = 'Magcargo';
	}
	if (pokemon.pokemon_id === 220) {
		pokemon.pokemon_name = 'Swinub';
	}
	if (pokemon.pokemon_id === 221) {
		pokemon.pokemon_name = 'Piloswine';
	}
	if (pokemon.pokemon_id === 473) {
		pokemon.pokemon_name = 'Mamoswine';
	}
	if (pokemon.pokemon_id === 222) {
		pokemon.pokemon_name = 'Corsola';
	}
	if (pokemon.pokemon_id === 223) {
		pokemon.pokemon_name = 'Remoraid';
	}
	if (pokemon.pokemon_id === 224) {
		pokemon.pokemon_name = 'Octillery';
	}
	if (pokemon.pokemon_id === 225) {
		pokemon.pokemon_name = 'Delibird';
	}
	if (pokemon.pokemon_id === 458) {
		pokemon.pokemon_name = 'Mantyke';
	}
	if (pokemon.pokemon_id === 226) {
		pokemon.pokemon_name = 'Mantine';
	}
	if (pokemon.pokemon_id === 227) {
		pokemon.pokemon_name = 'Skarmory';
	}
	if (pokemon.pokemon_id === 228) {
		pokemon.pokemon_name = 'Houndour';
	}
	if (pokemon.pokemon_id === 229) {
		pokemon.pokemon_name = 'Houndoom';
	}
	if (pokemon.pokemon_id === 231) {
		pokemon.pokemon_name = 'Phanpy';
	}
	if (pokemon.pokemon_id === 232) {
		pokemon.pokemon_name = 'Donphan';
	}
	if (pokemon.pokemon_id === 234) {
		pokemon.pokemon_name = 'Stantler';
	}
	if (pokemon.pokemon_id === 235) {
		pokemon.pokemon_name = 'Smeargle';
	}
	if (pokemon.pokemon_id === 241) {
		pokemon.pokemon_name = 'Miltank';
	}
	if (pokemon.pokemon_id === 243) {
		pokemon.pokemon_name = 'Raikou';
	}
	if (pokemon.pokemon_id === 244) {
		pokemon.pokemon_name = 'Entei';
	}
	if (pokemon.pokemon_id === 245) {
		pokemon.pokemon_name = 'Suicune';
	}
	if (pokemon.pokemon_id === 246) {
		pokemon.pokemon_name = 'Larvitar';
	}
	if (pokemon.pokemon_id === 247) {
		pokemon.pokemon_name = 'Pupitar';
	}
	if (pokemon.pokemon_id === 248) {
		pokemon.pokemon_name = 'Tyranitar';
	}
	if (pokemon.pokemon_id === 249) {
		pokemon.pokemon_name = 'Lugia';
	}
	if (pokemon.pokemon_id === 250) {
		pokemon.pokemon_name = 'Ho-Oh';
	}
	if (pokemon.pokemon_id === 251) {
		pokemon.pokemon_name = 'Celebi';
	}
	if (pokemon.pokemon_id === 252) {
		pokemon.pokemon_name = 'Treecko';
	}
	if (pokemon.pokemon_id === 253) {
		pokemon.pokemon_name = 'Grovyle';
	}
	if (pokemon.pokemon_id === 254) {
		pokemon.pokemon_name = 'Sceptile';
	}
	if (pokemon.pokemon_id === 255) {
		pokemon.pokemon_name = 'Torchic';
	}
	if (pokemon.pokemon_id === 256) {
		pokemon.pokemon_name = 'Combusken';
	}
	if (pokemon.pokemon_id === 257) {
		pokemon.pokemon_name = 'Blaziken';
	}
	if (pokemon.pokemon_id === 258) {
		pokemon.pokemon_name = 'Mudkip';
	}
	if (pokemon.pokemon_id === 259) {
		pokemon.pokemon_name = 'Marshtomp';
	}
	if (pokemon.pokemon_id === 260) {
		pokemon.pokemon_name = 'Swampert';
	}
	if (pokemon.pokemon_id === 261) {
		pokemon.pokemon_name = 'Poochyena';
	}
	if (pokemon.pokemon_id === 262) {
		pokemon.pokemon_name = 'Mightyena';
	}
	if (pokemon.pokemon_id === 263) {
		pokemon.pokemon_name = 'Zigzagoon';
	}
	if (pokemon.pokemon_id === 264) {
		pokemon.pokemon_name = 'Linoone';
	}
	if (pokemon.pokemon_id === 265) {
		pokemon.pokemon_name = 'Wurmple';
	}
	if (pokemon.pokemon_id === 266) {
		pokemon.pokemon_name = 'Silcoon';
	}
	if (pokemon.pokemon_id === 267) {
		pokemon.pokemon_name = 'Beaut     ifly';
	}
	if (pokemon.pokemon_id === 270) {
		pokemon.pokemon_name = 'Lotad';
	}
	if (pokemon.pokemon_id === 271) {
		pokemon.pokemon_name = 'Lombre';
	}
	if (pokemon.pokemon_id === 272) {
		pokemon.pokemon_name = 'Ludicolo';
	}
	if (pokemon.pokemon_id === 273) {
		pokemon.pokemon_name = 'Seedot';
	}
	if (pokemon.pokemon_id === 274) {
		pokemon.pokemon_name = 'Nuzleaf';
	}
	if (pokemon.pokemon_id === 275) {
		pokemon.pokemon_name = 'Sh     iftry';
	}
	if (pokemon.pokemon_id === 276) {
		pokemon.pokemon_name = 'Taillow';
	}
	if (pokemon.pokemon_id === 277) {
		pokemon.pokemon_name = 'Swellow';
	}
	if (pokemon.pokemon_id === 278) {
		pokemon.pokemon_name = 'Wingull';
	}
	if (pokemon.pokemon_id === 279) {
		pokemon.pokemon_name = 'Pelipper';
	}
	if (pokemon.pokemon_id === 280) {
		pokemon.pokemon_name = 'Ralts';
	}
	if (pokemon.pokemon_id === 281) {
		pokemon.pokemon_name = 'Kirlia';
	}
	if (pokemon.pokemon_id === 475) {
		pokemon.pokemon_name = 'Gallade';
	}
	if (pokemon.pokemon_id === 283) {
		pokemon.pokemon_name = 'Surskit';
	}
	if (pokemon.pokemon_id === 284) {
		pokemon.pokemon_name = 'Masquerain';
	}
	if (pokemon.pokemon_id === 285) {
		pokemon.pokemon_name = 'Shroomish';
	}
	if (pokemon.pokemon_id === 286) {
		pokemon.pokemon_name = 'Breloom';
	}
	if (pokemon.pokemon_id === 287) {
		pokemon.pokemon_name = 'Slakoth';
	}
	if (pokemon.pokemon_id === 288) {
		pokemon.pokemon_name = 'Vigoroth';
	}
	if (pokemon.pokemon_id === 289) {
		pokemon.pokemon_name = 'Slaking';
	}
	if (pokemon.pokemon_id === 290) {
		pokemon.pokemon_name = 'Nincada';
	}
	if (pokemon.pokemon_id === 291) {
		pokemon.pokemon_name = 'Ninjask';
	}
	if (pokemon.pokemon_id === 292) {
		pokemon.pokemon_name = 'Shedinja';
	}
	if (pokemon.pokemon_id === 293) {
		pokemon.pokemon_name = 'Whismur';
	}
	if (pokemon.pokemon_id === 294) {
		pokemon.pokemon_name = 'Loudred';
	}
	if (pokemon.pokemon_id === 295) {
		pokemon.pokemon_name = 'Exploud';
	}
	if (pokemon.pokemon_id === 296) {
		pokemon.pokemon_name = 'Makuhita';
	}
	if (pokemon.pokemon_id === 297) {
		pokemon.pokemon_name = 'Hariyama';
	}
	if (pokemon.pokemon_id === 299) {
		pokemon.pokemon_name = 'Nosepass';
	}
	if (pokemon.pokemon_id === 476) {
		pokemon.pokemon_name = 'Probopass';
	}
	if (pokemon.pokemon_id === 300) {
		pokemon.pokemon_name = 'Skitty';
	}
	if (pokemon.pokemon_id === 301) {
		pokemon.pokemon_name = 'Delcatty';
	}
	if (pokemon.pokemon_id === 302) {
		pokemon.pokemon_name = 'Sableye';
	}
	if (pokemon.pokemon_id === 303) {
		pokemon.pokemon_name = 'Mawile';
	}
	if (pokemon.pokemon_id === 304) {
		pokemon.pokemon_name = 'Aron';
	}
	if (pokemon.pokemon_id === 305) {
		pokemon.pokemon_name = 'Lairon';
	}
	if (pokemon.pokemon_id === 306) {
		pokemon.pokemon_name = 'Aggron';
	}
	if (pokemon.pokemon_id === 307) {
		pokemon.pokemon_name = 'Meditite';
	}
	if (pokemon.pokemon_id === 308) {
		pokemon.pokemon_name = 'Medicham';
	}
	if (pokemon.pokemon_id === 309) {
		pokemon.pokemon_name = 'Electrike';
	}
	if (pokemon.pokemon_id === 310) {
		pokemon.pokemon_name = 'Manectric';
	}
	if (pokemon.pokemon_id === 311) {
		pokemon.pokemon_name = 'Plusle';
	}
	if (pokemon.pokemon_id === 312) {
		pokemon.pokemon_name = 'Minun';
	}
	if (pokemon.pokemon_id === 313) {
		pokemon.pokemon_name = 'Volbeat';
	}
	if (pokemon.pokemon_id === 314) {
		pokemon.pokemon_name = 'Illumise';
	}
	if (pokemon.pokemon_id === 406) {
		pokemon.pokemon_name = 'Budew';
	}
	if (pokemon.pokemon_id === 315) {
		pokemon.pokemon_name = 'Roselia';
	}
	if (pokemon.pokemon_id === 407) {
		pokemon.pokemon_name = 'Roserade';
	}
	if (pokemon.pokemon_id === 316) {
		pokemon.pokemon_name = 'Gulpin';
	}
	if (pokemon.pokemon_id === 317) {
		pokemon.pokemon_name = 'Swalot';
	}
	if (pokemon.pokemon_id === 318) {
		pokemon.pokemon_name = 'Carvanha';
	}
	if (pokemon.pokemon_id === 319) {
		pokemon.pokemon_name = 'Sharpedo';
	}
	if (pokemon.pokemon_id === 320) {
		pokemon.pokemon_name = 'Wailmer';
	}
	if (pokemon.pokemon_id === 321) {
		pokemon.pokemon_name = 'Wailord';
	}
	if (pokemon.pokemon_id === 322) {
		pokemon.pokemon_name = 'Numel';
	}
	if (pokemon.pokemon_id === 323) {
		pokemon.pokemon_name = 'Camerupt';
	}
	if (pokemon.pokemon_id === 324) {
		pokemon.pokemon_name = 'Torkoal';
	}
	if (pokemon.pokemon_id === 325) {
		pokemon.pokemon_name = 'Spoink';
	}
	if (pokemon.pokemon_id === 326) {
		pokemon.pokemon_name = 'Grumpig';
	}
	if (pokemon.pokemon_id === 327) {
		pokemon.pokemon_name = 'Spinda';
	}
	if (pokemon.pokemon_id === 328) {
		pokemon.pokemon_name = 'Trapinch';
	}
	if (pokemon.pokemon_id === 329) {
		pokemon.pokemon_name = 'Vibrava';
	}
	if (pokemon.pokemon_id === 330) {
		pokemon.pokemon_name = 'Flygon';
	}
	if (pokemon.pokemon_id === 331) {
		pokemon.pokemon_name = 'Cacnea';
	}
	if (pokemon.pokemon_id === 332) {
		pokemon.pokemon_name = 'Cacturne';
	}
	if (pokemon.pokemon_id === 333) {
		pokemon.pokemon_name = 'Swablu';
	}
	if (pokemon.pokemon_id === 334) {
		pokemon.pokemon_name = 'Altaria';
	}
	if (pokemon.pokemon_id === 335) {
		pokemon.pokemon_name = 'Zangoose';
	}
	if (pokemon.pokemon_id === 336) {
		pokemon.pokemon_name = 'Seviper';
	}
	if (pokemon.pokemon_id === 337) {
		pokemon.pokemon_name = 'Lunatone';
	}
	if (pokemon.pokemon_id === 338) {
		pokemon.pokemon_name = 'Solrock';
	}
	if (pokemon.pokemon_id === 339) {
		pokemon.pokemon_name = 'Barboach';
	}
	if (pokemon.pokemon_id === 340) {
		pokemon.pokemon_name = 'Whiscash';
	}
	if (pokemon.pokemon_id === 341) {
		pokemon.pokemon_name = 'Corphish';
	}
	if (pokemon.pokemon_id === 342) {
		pokemon.pokemon_name = 'Crawdaunt';
	}
	if (pokemon.pokemon_id === 343) {
		pokemon.pokemon_name = 'Baltoy';
	}
	if (pokemon.pokemon_id === 344) {
		pokemon.pokemon_name = 'Claydol';
	}
	if (pokemon.pokemon_id === 345) {
		pokemon.pokemon_name = 'Lileep';
	}
	if (pokemon.pokemon_id === 346) {
		pokemon.pokemon_name = 'Cradily';
	}
	if (pokemon.pokemon_id === 347) {
		pokemon.pokemon_name = 'Anorith';
	}
	if (pokemon.pokemon_id === 348) {
		pokemon.pokemon_name = 'Armaldo';
	}
	if (pokemon.pokemon_id === 349) {
		pokemon.pokemon_name = 'Feebas';
	}
	if (pokemon.pokemon_id === 350) {
		pokemon.pokemon_name = 'Milotic';
	}
	if (pokemon.pokemon_id === 351) {
		pokemon.pokemon_name = 'Castform';
	}
	if (pokemon.pokemon_id === 352) {
		pokemon.pokemon_name = 'Kecleon';
	}
	if (pokemon.pokemon_id === 353) {
		pokemon.pokemon_name = 'Shuppet';
	}
	if (pokemon.pokemon_id === 354) {
		pokemon.pokemon_name = 'Banette';
	}
	if (pokemon.pokemon_id === 355) {
		pokemon.pokemon_name = 'Duskull';
	}
	if (pokemon.pokemon_id === 356) {
		pokemon.pokemon_name = 'Dusclops';
	}
	if (pokemon.pokemon_id === 477) {
		pokemon.pokemon_name = 'Dusknoir';
	}
	if (pokemon.pokemon_id === 357) {
		pokemon.pokemon_name = 'Tropius';
	}
	if (pokemon.pokemon_id === 433) {
		pokemon.pokemon_name = 'Chingling';
	}
	if (pokemon.pokemon_id === 358) {
		pokemon.pokemon_name = 'Chimecho';
	}
	if (pokemon.pokemon_id === 359) {
		pokemon.pokemon_name = 'Absol';
	}
	if (pokemon.pokemon_id === 361) {
		pokemon.pokemon_name = 'Snorunt';
	}
	if (pokemon.pokemon_id === 362) {
		pokemon.pokemon_name = 'Glalie';
	}
	if (pokemon.pokemon_id === 363) {
		pokemon.pokemon_name = 'Spheal';
	}
	if (pokemon.pokemon_id === 364) {
		pokemon.pokemon_name = 'Sealeo';
	}
	if (pokemon.pokemon_id === 365) {
		pokemon.pokemon_name = 'Walrein';
	}
	if (pokemon.pokemon_id === 366) {
		pokemon.pokemon_name = 'Clamperl';
	}
	if (pokemon.pokemon_id === 367) {
		pokemon.pokemon_name = 'Huntail';
	}
	if (pokemon.pokemon_id === 369) {
		pokemon.pokemon_name = 'Relicanth';
	}
	if (pokemon.pokemon_id === 370) {
		pokemon.pokemon_name = 'Luvdisc';
	}
	if (pokemon.pokemon_id === 371) {
		pokemon.pokemon_name = 'Bagon';
	}
	if (pokemon.pokemon_id === 372) {
		pokemon.pokemon_name = 'Shelgon';
	}
	if (pokemon.pokemon_id === 373) {
		pokemon.pokemon_name = 'Salamence';
	}
	if (pokemon.pokemon_id === 374) {
		pokemon.pokemon_name = 'Beldum';
	}
	if (pokemon.pokemon_id === 375) {
		pokemon.pokemon_name = 'Metang';
	}
	if (pokemon.pokemon_id === 376) {
		pokemon.pokemon_name = 'Metagross';
	}
	if (pokemon.pokemon_id === 377) {
		pokemon.pokemon_name = 'Regirock';
	}
	if (pokemon.pokemon_id === 378) {
		pokemon.pokemon_name = 'Regice';
	}
	if (pokemon.pokemon_id === 379) {
		pokemon.pokemon_name = 'Registeel';
	}
	if (pokemon.pokemon_id === 380) {
		pokemon.pokemon_name = 'Latias';
	}
	if (pokemon.pokemon_id === 381) {
		pokemon.pokemon_name = 'Latios';
	}
	if (pokemon.pokemon_id === 382) {
		pokemon.pokemon_name = 'Kyogre';
	}
	if (pokemon.pokemon_id === 383) {
		pokemon.pokemon_name = 'Groudon';
	}
	if (pokemon.pokemon_id === 384) {
		pokemon.pokemon_name = 'Rayquaza';
	}
	if (pokemon.pokemon_id === 385) {
		pokemon.pokemon_name = 'Jirachi';
	}
	if (pokemon.pokemon_id === 386) {
		pokemon.pokemon_name = 'Deoxys';
	}
	if (pokemon.pokemon_id === 387) {
		pokemon.pokemon_name = 'Turtwig';
	}
	if (pokemon.pokemon_id === 388) {
		pokemon.pokemon_name = 'Grotle';
	}
	if (pokemon.pokemon_id === 389) {
		pokemon.pokemon_name = 'Torterra';
	}
	if (pokemon.pokemon_id === 390) {
		pokemon.pokemon_name = 'Chimchar';
	}
	if (pokemon.pokemon_id === 391) {
		pokemon.pokemon_name = 'Monferno';
	}
	if (pokemon.pokemon_id === 392) {
		pokemon.pokemon_name = 'Infernape';
	}
	if (pokemon.pokemon_id === 393) {
		pokemon.pokemon_name = 'Piplup';
	}
	if (pokemon.pokemon_id === 394) {
		pokemon.pokemon_name = 'Prinplup';
	}
	if (pokemon.pokemon_id === 395) {
		pokemon.pokemon_name = 'Empoleon';
	}
	if (pokemon.pokemon_id === 396) {
		pokemon.pokemon_name = 'Starly';
	}
	if (pokemon.pokemon_id === 397) {
		pokemon.pokemon_name = 'Staravia';
	}
	if (pokemon.pokemon_id === 398) {
		pokemon.pokemon_name = 'Staraptor';
	}
	if (pokemon.pokemon_id === 399) {
		pokemon.pokemon_name = 'Bidoof';
	}
	if (pokemon.pokemon_id === 400) {
		pokemon.pokemon_name = 'Bibarel';
	}
	if (pokemon.pokemon_id === 401) {
		pokemon.pokemon_name = 'Kricketot';
	}
	if (pokemon.pokemon_id === 402) {
		pokemon.pokemon_name = 'Kricketune';
	}
	if (pokemon.pokemon_id === 403) {
		pokemon.pokemon_name = 'Shinx';
	}
	if (pokemon.pokemon_id === 404) {
		pokemon.pokemon_name = 'Luxio';
	}
	if (pokemon.pokemon_id === 405) {
		pokemon.pokemon_name = 'Luxray';
	}
	if (pokemon.pokemon_id === 408) {
		pokemon.pokemon_name = 'Cranidos';
	}
	if (pokemon.pokemon_id === 409) {
		pokemon.pokemon_name = 'Rampardos';
	}
	if (pokemon.pokemon_id === 410) {
		pokemon.pokemon_name = 'Shieldon';
	}
	if (pokemon.pokemon_id === 411) {
		pokemon.pokemon_name = 'Bastiodon';
	}
	if (pokemon.pokemon_id === 412) {
		pokemon.pokemon_name = 'Burmy';
	}
	if (pokemon.pokemon_id === 414) {
		pokemon.pokemon_name = 'Mothim';
	}
	if (pokemon.pokemon_id === 415) {
		pokemon.pokemon_name = 'Combee';
	}
	if (pokemon.pokemon_id === 416) {
		pokemon.pokemon_name = 'Vespiquen';
	}
	if (pokemon.pokemon_id === 417) {
		pokemon.pokemon_name = 'Pachirisu';
	}
	if (pokemon.pokemon_id === 418) {
		pokemon.pokemon_name = 'Buizel';
	}
	if (pokemon.pokemon_id === 419) {
		pokemon.pokemon_name = 'Floatzel';
	}
	if (pokemon.pokemon_id === 420) {
		pokemon.pokemon_name = 'Cherubi';
	}
	if (pokemon.pokemon_id === 421) {
		pokemon.pokemon_name = 'Cherrim';
	}
	if (pokemon.pokemon_id === 422) {
		pokemon.pokemon_name = 'Shellos';
	}
	if (pokemon.pokemon_id === 423) {
		pokemon.pokemon_name = 'Gastrodon';
	}
	if (pokemon.pokemon_id === 425) {
		pokemon.pokemon_name = 'Dr     ifloon';
	}
	if (pokemon.pokemon_id === 426) {
		pokemon.pokemon_name = 'Dr     ifblim';
	}
	if (pokemon.pokemon_id === 427) {
		pokemon.pokemon_name = 'Buneary';
	}
	if (pokemon.pokemon_id === 428) {
		pokemon.pokemon_name = 'Lopunny';
	}
	if (pokemon.pokemon_id === 431) {
		pokemon.pokemon_name = 'Glameow';
	}
	if (pokemon.pokemon_id === 432) {
		pokemon.pokemon_name = 'Purugly';
	}
	if (pokemon.pokemon_id === 434) {
		pokemon.pokemon_name = 'Stunky';
	}
	if (pokemon.pokemon_id === 435) {
		pokemon.pokemon_name = 'Skuntank';
	}
	if (pokemon.pokemon_id === 436) {
		pokemon.pokemon_name = 'Bronzor';
	}
	if (pokemon.pokemon_id === 437) {
		pokemon.pokemon_name = 'Bronzong';
	}
	if (pokemon.pokemon_id === 441) {
		pokemon.pokemon_name = 'Chatot';
	}
	if (pokemon.pokemon_id === 442) {
		pokemon.pokemon_name = 'Spiritomb';
	}
	if (pokemon.pokemon_id === 443) {
		pokemon.pokemon_name = 'Gible';
	}
	if (pokemon.pokemon_id === 444) {
		pokemon.pokemon_name = 'Gabite';
	}
	if (pokemon.pokemon_id === 445) {
		pokemon.pokemon_name = 'Garchomp';
	}
	if (pokemon.pokemon_id === 447) {
		pokemon.pokemon_name = 'Riolu';
	}
	if (pokemon.pokemon_id === 448) {
		pokemon.pokemon_name = 'Lucario';
	}
	if (pokemon.pokemon_id === 449) {
		pokemon.pokemon_name = 'Hippopotas';
	}
	if (pokemon.pokemon_id === 450) {
		pokemon.pokemon_name = 'Hippowdon';
	}
	if (pokemon.pokemon_id === 451) {
		pokemon.pokemon_name = 'Skorupi';
	}
	if (pokemon.pokemon_id === 452) {
		pokemon.pokemon_name = 'Drapion';
	}
	if (pokemon.pokemon_id === 453) {
		pokemon.pokemon_name = 'Croagunk';
	}
	if (pokemon.pokemon_id === 454) {
		pokemon.pokemon_name = 'Toxicroak';
	}
	if (pokemon.pokemon_id === 455) {
		pokemon.pokemon_name = 'Carnivine';
	}
	if (pokemon.pokemon_id === 456) {
		pokemon.pokemon_name = 'Finneon';
	}
	if (pokemon.pokemon_id === 457) {
		pokemon.pokemon_name = 'Lumineon';
	}
	if (pokemon.pokemon_id === 459) {
		pokemon.pokemon_name = 'Snover';
	}
	if (pokemon.pokemon_id === 460) {
		pokemon.pokemon_name = 'Abomasnow';
	}
	if (pokemon.pokemon_id === 479) {
		pokemon.pokemon_name = 'Rotom';
	}
	if (pokemon.pokemon_id === 480) {
		pokemon.pokemon_name = 'Uxie';
	}
	if (pokemon.pokemon_id === 481) {
		pokemon.pokemon_name = 'Mesprit';
	}
	if (pokemon.pokemon_id === 482) {
		pokemon.pokemon_name = 'Azelf';
	}
	if (pokemon.pokemon_id === 483) {
		pokemon.pokemon_name = 'Dialga';
	}
	if (pokemon.pokemon_id === 484) {
		pokemon.pokemon_name = 'Palkia';
	}
	if (pokemon.pokemon_id === 485) {
		pokemon.pokemon_name = 'Heatran';
	}
	if (pokemon.pokemon_id === 486) {
		pokemon.pokemon_name = 'Regigigas';
	}
	if (pokemon.pokemon_id === 487) {
		pokemon.pokemon_name = 'Giratina';
	}
	if (pokemon.pokemon_id === 488) {
		pokemon.pokemon_name = 'Cresselia';
	}
	if (pokemon.pokemon_id === 489) {
		pokemon.pokemon_name = 'Phione';
	}
	if (pokemon.pokemon_id === 490) {
		pokemon.pokemon_name = 'Manaphy';
	}
	if (pokemon.pokemon_id === 491) {
		pokemon.pokemon_name = 'Darkrai';
	}
	if (pokemon.pokemon_id === 492) {
		pokemon.pokemon_name = 'Shaymin';
	}
	if (pokemon.pokemon_id === 493) {
		pokemon.pokemon_name = 'Arceus';
	}
	if (pokemon.pokemon_id === 494) {
		pokemon.pokemon_name = 'Victini';
	}
	if (pokemon.pokemon_id === 495) {
		pokemon.pokemon_name = 'Snivy';
	}
	if (pokemon.pokemon_id === 496) {
		pokemon.pokemon_name = 'Servine';
	}
	if (pokemon.pokemon_id === 497) {
		pokemon.pokemon_name = 'Serperior';
	}
	if (pokemon.pokemon_id === 498) {
		pokemon.pokemon_name = 'Tepig';
	}
	if (pokemon.pokemon_id === 499) {
		pokemon.pokemon_name = 'Pignite';
	}
	if (pokemon.pokemon_id === 500) {
		pokemon.pokemon_name = 'Emboar';
	}
	if (pokemon.pokemon_id === 501) {
		pokemon.pokemon_name = 'Oshawott';
	}
	if (pokemon.pokemon_id === 502) {
		pokemon.pokemon_name = 'Dewott';
	}
	if (pokemon.pokemon_id === 503) {
		pokemon.pokemon_name = 'Samurott';
	}
	if (pokemon.pokemon_id === 504) {
		pokemon.pokemon_name = 'Patrat';
	}
	if (pokemon.pokemon_id === 505) {
		pokemon.pokemon_name = 'Watchog';
	}
	if (pokemon.pokemon_id === 506) {
		pokemon.pokemon_name = 'Lillipup';
	}
	if (pokemon.pokemon_id === 507) {
		pokemon.pokemon_name = 'Herdier';
	}
	if (pokemon.pokemon_id === 508) {
		pokemon.pokemon_name = 'Stoutland';
	}
	if (pokemon.pokemon_id === 509) {
		pokemon.pokemon_name = 'Purrloin';
	}
	if (pokemon.pokemon_id === 510) {
		pokemon.pokemon_name = 'Liepard';
	}
	if (pokemon.pokemon_id === 511) {
		pokemon.pokemon_name = 'Pansage';
	}
	if (pokemon.pokemon_id === 512) {
		pokemon.pokemon_name = 'Simisage';
	}
	if (pokemon.pokemon_id === 513) {
		pokemon.pokemon_name = 'Pansear';
	}
	if (pokemon.pokemon_id === 514) {
		pokemon.pokemon_name = 'Simisear';
	}
	if (pokemon.pokemon_id === 515) {
		pokemon.pokemon_name = 'Panpour';
	}
	if (pokemon.pokemon_id === 516) {
		pokemon.pokemon_name = 'Simipour';
	}
	if (pokemon.pokemon_id === 517) {
		pokemon.pokemon_name = 'Munna';
	}
	if (pokemon.pokemon_id === 518) {
		pokemon.pokemon_name = 'Musharna';
	}
	if (pokemon.pokemon_id === 519) {
		pokemon.pokemon_name = 'Pidove';
	}
	if (pokemon.pokemon_id === 520) {
		pokemon.pokemon_name = 'Tranquill';
	}
	if (pokemon.pokemon_id === 521) {
		pokemon.pokemon_name = 'Unfezant';
	}
	if (pokemon.pokemon_id === 522) {
		pokemon.pokemon_name = 'Blitzle';
	}
	if (pokemon.pokemon_id === 523) {
		pokemon.pokemon_name = 'Zebstrika';
	}
	if (pokemon.pokemon_id === 524) {
		pokemon.pokemon_name = 'Roggenrola';
	}
	if (pokemon.pokemon_id === 525) {
		pokemon.pokemon_name = 'Boldore';
	}
	if (pokemon.pokemon_id === 526) {
		pokemon.pokemon_name = 'Gigalith';
	}
	if (pokemon.pokemon_id === 527) {
		pokemon.pokemon_name = 'Woobat';
	}
	if (pokemon.pokemon_id === 528) {
		pokemon.pokemon_name = 'Swoobat';
	}
	if (pokemon.pokemon_id === 529) {
		pokemon.pokemon_name = 'Drilbur';
	}
	if (pokemon.pokemon_id === 530) {
		pokemon.pokemon_name = 'Excadrill';
	}
	if (pokemon.pokemon_id === 531) {
		pokemon.pokemon_name = 'Audino';
	}
	if (pokemon.pokemon_id === 532) {
		pokemon.pokemon_name = 'Timburr';
	}
	if (pokemon.pokemon_id === 533) {
		pokemon.pokemon_name = 'Gurdurr';
	}
	if (pokemon.pokemon_id === 534) {
		pokemon.pokemon_name = 'Conkeldurr';
	}
	if (pokemon.pokemon_id === 535) {
		pokemon.pokemon_name = 'Tympole';
	}
	if (pokemon.pokemon_id === 536) {
		pokemon.pokemon_name = 'Palpitoad';
	}
	if (pokemon.pokemon_id === 537) {
		pokemon.pokemon_name = 'Seismitoad';
	}
	if (pokemon.pokemon_id === 538) {
		pokemon.pokemon_name = 'Throh';
	}
	if (pokemon.pokemon_id === 539) {
		pokemon.pokemon_name = 'Sawk';
	}
	if (pokemon.pokemon_id === 540) {
		pokemon.pokemon_name = 'Sewaddle';
	}
	if (pokemon.pokemon_id === 541) {
		pokemon.pokemon_name = 'Swadloon';
	}
	if (pokemon.pokemon_id === 542) {
		pokemon.pokemon_name = 'Leavanny';
	}
	if (pokemon.pokemon_id === 543) {
		pokemon.pokemon_name = 'Venipede';
	}
	if (pokemon.pokemon_id === 544) {
		pokemon.pokemon_name = 'Whirlipede';
	}
	if (pokemon.pokemon_id === 545) {
		pokemon.pokemon_name = 'Scolipede';
	}
	if (pokemon.pokemon_id === 546) {
		pokemon.pokemon_name = 'Cottonee';
	}
	if (pokemon.pokemon_id === 547) {
		pokemon.pokemon_name = 'Whimsicott';
	}
	if (pokemon.pokemon_id === 548) {
		pokemon.pokemon_name = 'Petilil';
	}
	if (pokemon.pokemon_id === 549) {
		pokemon.pokemon_name = 'Lilligant';
	}
	if (pokemon.pokemon_id === 550) {
		pokemon.pokemon_name = 'Basculin';
	}
	if (pokemon.pokemon_id === 551) {
		pokemon.pokemon_name = 'Sandile';
	}
	if (pokemon.pokemon_id === 552) {
		pokemon.pokemon_name = 'Krokorok';
	}
	if (pokemon.pokemon_id === 553) {
		pokemon.pokemon_name = 'Krookodile';
	}
	if (pokemon.pokemon_id === 554) {
		pokemon.pokemon_name = 'Darumaka';
	}
	if (pokemon.pokemon_id === 555) {
		pokemon.pokemon_name = 'Darmanitan';
	}
	if (pokemon.pokemon_id === 556) {
		pokemon.pokemon_name = 'Maractus';
	}
	if (pokemon.pokemon_id === 557) {
		pokemon.pokemon_name = 'Dwebble';
	}
	if (pokemon.pokemon_id === 558) {
		pokemon.pokemon_name = 'Crustle';
	}
	if (pokemon.pokemon_id === 559) {
		pokemon.pokemon_name = 'Scraggy';
	}
	if (pokemon.pokemon_id === 560) {
		pokemon.pokemon_name = 'Scrafty';
	}
	if (pokemon.pokemon_id === 561) {
		pokemon.pokemon_name = 'Sigilyph';
	}
	if (pokemon.pokemon_id === 562) {
		pokemon.pokemon_name = 'Yamask';
	}
	if (pokemon.pokemon_id === 563) {
		pokemon.pokemon_name = 'Cofagrigus';
	}
	if (pokemon.pokemon_id === 564) {
		pokemon.pokemon_name = 'Tirtouga';
	}
	if (pokemon.pokemon_id === 565) {
		pokemon.pokemon_name = 'Carracosta';
	}
	if (pokemon.pokemon_id === 566) {
		pokemon.pokemon_name = 'Archen';
	}
	if (pokemon.pokemon_id === 567) {
		pokemon.pokemon_name = 'Archeops';
	}
	if (pokemon.pokemon_id === 568) {
		pokemon.pokemon_name = 'Trubbish';
	}
	if (pokemon.pokemon_id === 569) {
		pokemon.pokemon_name = 'Garbodor';
	}
	if (pokemon.pokemon_id === 570) {
		pokemon.pokemon_name = 'Zorua';
	}
	if (pokemon.pokemon_id === 571) {
		pokemon.pokemon_name = 'Zoroark';
	}
	if (pokemon.pokemon_id === 572) {
		pokemon.pokemon_name = 'Minccino';
	}
	if (pokemon.pokemon_id === 573) {
		pokemon.pokemon_name = 'Cinccino';
	}
	if (pokemon.pokemon_id === 574) {
		pokemon.pokemon_name = 'Gothita';
	}
	if (pokemon.pokemon_id === 575) {
		pokemon.pokemon_name = 'Gothorita';
	}
	if (pokemon.pokemon_id === 576) {
		pokemon.pokemon_name = 'Gothitelle';
	}
	if (pokemon.pokemon_id === 577) {
		pokemon.pokemon_name = 'Solosis';
	}
	if (pokemon.pokemon_id === 578) {
		pokemon.pokemon_name = 'Duosion';
	}
	if (pokemon.pokemon_id === 579) {
		pokemon.pokemon_name = 'Reuniclus';
	}
	if (pokemon.pokemon_id === 580) {
		pokemon.pokemon_name = 'Ducklett';
	}
	if (pokemon.pokemon_id === 581) {
		pokemon.pokemon_name = 'Swanna';
	}
	if (pokemon.pokemon_id === 582) {
		pokemon.pokemon_name = 'Vanillite';
	}
	if (pokemon.pokemon_id === 583) {
		pokemon.pokemon_name = 'Vanillish';
	}
	if (pokemon.pokemon_id === 584) {
		pokemon.pokemon_name = 'Vanilluxe';
	}
	if (pokemon.pokemon_id === 585) {
		pokemon.pokemon_name = 'Deerling';
	}
	if (pokemon.pokemon_id === 586) {
		pokemon.pokemon_name = 'Sawsbuck';
	}
	if (pokemon.pokemon_id === 587) {
		pokemon.pokemon_name = 'Emolga';
	}
	if (pokemon.pokemon_id === 588) {
		pokemon.pokemon_name = 'Karrablast';
	}
	if (pokemon.pokemon_id === 589) {
		pokemon.pokemon_name = 'Escavalier';
	}
	if (pokemon.pokemon_id === 590) {
		pokemon.pokemon_name = 'Foongus';
	}
	if (pokemon.pokemon_id === 591) {
		pokemon.pokemon_name = 'Amoonguss';
	}
	if (pokemon.pokemon_id === 592) {
		pokemon.pokemon_name = 'Frillish';
	}
	if (pokemon.pokemon_id === 593) {
		pokemon.pokemon_name = 'Jellicent';
	}
	if (pokemon.pokemon_id === 594) {
		pokemon.pokemon_name = 'Alomomola';
	}
	if (pokemon.pokemon_id === 595) {
		pokemon.pokemon_name = 'Joltik';
	}
	if (pokemon.pokemon_id === 596) {
		pokemon.pokemon_name = 'Galvantula';
	}
	if (pokemon.pokemon_id === 597) {
		pokemon.pokemon_name = 'Ferroseed';
	}
	if (pokemon.pokemon_id === 598) {
		pokemon.pokemon_name = 'Ferrothorn';
	}
	if (pokemon.pokemon_id === 599) {
		pokemon.pokemon_name = 'Klink';
	}
	if (pokemon.pokemon_id === 600) {
		pokemon.pokemon_name = 'Klang';
	}
	if (pokemon.pokemon_id === 601) {
		pokemon.pokemon_name = 'Klinklang';
	}
	if (pokemon.pokemon_id === 602) {
		pokemon.pokemon_name = 'Tynamo';
	}
	if (pokemon.pokemon_id === 603) {
		pokemon.pokemon_name = 'Eelektrik';
	}
	if (pokemon.pokemon_id === 604) {
		pokemon.pokemon_name = 'Eelektross';
	}
	if (pokemon.pokemon_id === 605) {
		pokemon.pokemon_name = 'Elgyem';
	}
	if (pokemon.pokemon_id === 606) {
		pokemon.pokemon_name = 'Beheeyem';
	}
	if (pokemon.pokemon_id === 607) {
		pokemon.pokemon_name = 'Litwick';
	}
	if (pokemon.pokemon_id === 608) {
		pokemon.pokemon_name = 'Lampent';
	}
	if (pokemon.pokemon_id === 609) {
		pokemon.pokemon_name = 'Chandelure';
	}
	if (pokemon.pokemon_id === 610) {
		pokemon.pokemon_name = 'Axew';
	}
	if (pokemon.pokemon_id === 611) {
		pokemon.pokemon_name = 'Fraxure';
	}
	if (pokemon.pokemon_id === 612) {
		pokemon.pokemon_name = 'Haxorus';
	}
	if (pokemon.pokemon_id === 613) {
		pokemon.pokemon_name = 'Cubchoo';
	}
	if (pokemon.pokemon_id === 614) {
		pokemon.pokemon_name = 'Beartic';
	}
	if (pokemon.pokemon_id === 615) {
		pokemon.pokemon_name = 'Cryogonal';
	}
	if (pokemon.pokemon_id === 616) {
		pokemon.pokemon_name = 'Shelmet';
	}
	if (pokemon.pokemon_id === 617) {
		pokemon.pokemon_name = 'Accelgor';
	}
	if (pokemon.pokemon_id === 618) {
		pokemon.pokemon_name = 'Stunfisk';
	}
	if (pokemon.pokemon_id === 619) {
		pokemon.pokemon_name = 'Mienfoo';
	}
	if (pokemon.pokemon_id === 620) {
		pokemon.pokemon_name = 'Mienshao';
	}
	if (pokemon.pokemon_id === 621) {
		pokemon.pokemon_name = 'Druddigon';
	}
	if (pokemon.pokemon_id === 622) {
		pokemon.pokemon_name = 'Golett';
	}
	if (pokemon.pokemon_id === 623) {
		pokemon.pokemon_name = 'Golurk';
	}
	if (pokemon.pokemon_id === 624) {
		pokemon.pokemon_name = 'Pawniard';
	}
	if (pokemon.pokemon_id === 625) {
		pokemon.pokemon_name = 'Bisharp';
	}
	if (pokemon.pokemon_id === 626) {
		pokemon.pokemon_name = 'Bouffalant';
	}
	if (pokemon.pokemon_id === 627) {
		pokemon.pokemon_name = 'Rufflet';
	}
	if (pokemon.pokemon_id === 628) {
		pokemon.pokemon_name = 'Braviary';
	}
	if (pokemon.pokemon_id === 629) {
		pokemon.pokemon_name = 'Vullaby';
	}
	if (pokemon.pokemon_id === 630) {
		pokemon.pokemon_name = 'Mandibuzz';
	}
	if (pokemon.pokemon_id === 631) {
		pokemon.pokemon_name = 'Heatmor';
	}
	if (pokemon.pokemon_id === 632) {
		pokemon.pokemon_name = 'Durant';
	}
	if (pokemon.pokemon_id === 633) {
		pokemon.pokemon_name = 'Deino';
	}
	if (pokemon.pokemon_id === 634) {
		pokemon.pokemon_name = 'Zweilous';
	}
	if (pokemon.pokemon_id === 635) {
		pokemon.pokemon_name = 'Hydreigon';
	}
	if (pokemon.pokemon_id === 636) {
		pokemon.pokemon_name = 'Larvesta';
	}
	if (pokemon.pokemon_id === 637) {
		pokemon.pokemon_name = 'Volcarona';
	}
	if (pokemon.pokemon_id === 638) {
		pokemon.pokemon_name = 'Cobalion';
	}
	if (pokemon.pokemon_id === 639) {
		pokemon.pokemon_name = 'Terrakion';
	}
	if (pokemon.pokemon_id === 640) {
		pokemon.pokemon_name = 'Virizion';
	}
	if (pokemon.pokemon_id === 641) {
		pokemon.pokemon_name = 'Tornadus';
	}
	if (pokemon.pokemon_id === 642) {
		pokemon.pokemon_name = 'Thundurus';
	}
	if (pokemon.pokemon_id === 643) {
		pokemon.pokemon_name = 'Reshiram';
	}
	if (pokemon.pokemon_id === 644) {
		pokemon.pokemon_name = 'Zekrom';
	}
	if (pokemon.pokemon_id === 645) {
		pokemon.pokemon_name = 'Landorus';
	}
	if (pokemon.pokemon_id === 646) {
		pokemon.pokemon_name = 'Kyurem';
	}
	if (pokemon.pokemon_id === 647) {
		pokemon.pokemon_name = 'Keldeo';
	}
	if (pokemon.pokemon_id === 648) {
		pokemon.pokemon_name = 'Meloetta';
	}
	if (pokemon.pokemon_id === 649) {
		pokemon.pokemon_name = 'Genesect';
	}
	if (pokemon.pokemon_id === 650) {
		pokemon.pokemon_name = 'Chespin';
	}
	if (pokemon.pokemon_id === 651) {
		pokemon.pokemon_name = 'Quilladin';
	}
	if (pokemon.pokemon_id === 652) {
		pokemon.pokemon_name = 'Chesnaught';
	}
	if (pokemon.pokemon_id === 653) {
		pokemon.pokemon_name = 'Fennekin';
	}
	if (pokemon.pokemon_id === 654) {
		pokemon.pokemon_name = 'Braixen';
	}
	if (pokemon.pokemon_id === 655) {
		pokemon.pokemon_name = 'Delphox';
	}
	if (pokemon.pokemon_id === 656) {
		pokemon.pokemon_name = 'Froakie';
	}
	if (pokemon.pokemon_id === 657) {
		pokemon.pokemon_name = 'Frogadier';
	}
	if (pokemon.pokemon_id === 658) {
		pokemon.pokemon_name = 'Greninja';
	}
	if (pokemon.pokemon_id === 659) {
		pokemon.pokemon_name = 'Bunnelby';
	}
	if (pokemon.pokemon_id === 660) {
		pokemon.pokemon_name = 'Diggersby';
	}
	if (pokemon.pokemon_id === 661) {
		pokemon.pokemon_name = 'Fletchling';
	}
	if (pokemon.pokemon_id === 662) {
		pokemon.pokemon_name = 'Fletchinder';
	}
	if (pokemon.pokemon_id === 663) {
		pokemon.pokemon_name = 'Talonflame';
	}
	if (pokemon.pokemon_id === 664) {
		pokemon.pokemon_name = 'Scatterbug';
	}
	if (pokemon.pokemon_id === 665) {
		pokemon.pokemon_name = 'Spewpa';
	}
	if (pokemon.pokemon_id === 666) {
		pokemon.pokemon_name = 'Vivillon';
	}
	if (pokemon.pokemon_id === 667) {
		pokemon.pokemon_name = 'Litleo';
	}
	if (pokemon.pokemon_id === 668) {
		pokemon.pokemon_name = 'Pyroar';
	}
	if (pokemon.pokemon_id === 669) {
		pokemon.pokemon_name = 'FlabÃ©bÃ©';
	}
	if (pokemon.pokemon_id === 670) {
		pokemon.pokemon_name = 'Floette';
	}
	if (pokemon.pokemon_id === 671) {
		pokemon.pokemon_name = 'Florges';
	}
	if (pokemon.pokemon_id === 672) {
		pokemon.pokemon_name = 'Skiddo';
	}
	if (pokemon.pokemon_id === 673) {
		pokemon.pokemon_name = 'Gogoat';
	}
	if (pokemon.pokemon_id === 674) {
		pokemon.pokemon_name = 'Pancham';
	}
	if (pokemon.pokemon_id === 675) {
		pokemon.pokemon_name = 'Pangoro';
	}
	if (pokemon.pokemon_id === 676) {
		pokemon.pokemon_name = 'Furfrou';
	}
	if (pokemon.pokemon_id === 677) {
		pokemon.pokemon_name = 'Espurr';
	}
	if (pokemon.pokemon_id === 678) {
		pokemon.pokemon_name = 'Meowstic';
	}
	if (pokemon.pokemon_id === 679) {
		pokemon.pokemon_name = 'Honedge';
	}
	if (pokemon.pokemon_id === 680) {
		pokemon.pokemon_name = 'Doublade';
	}
	if (pokemon.pokemon_id === 681) {
		pokemon.pokemon_name = 'Aegislash';
	}
	if (pokemon.pokemon_id === 682) {
		pokemon.pokemon_name = 'Spritzee';
	}
	if (pokemon.pokemon_id === 683) {
		pokemon.pokemon_name = 'Aromatisse';
	}
	if (pokemon.pokemon_id === 684) {
		pokemon.pokemon_name = 'Swirlix';
	}
	if (pokemon.pokemon_id === 685) {
		pokemon.pokemon_name = 'Slurpuff';
	}
	if (pokemon.pokemon_id === 686) {
		pokemon.pokemon_name = 'Inkay';
	}
	if (pokemon.pokemon_id === 687) {
		pokemon.pokemon_name = 'Malamar';
	}
	if (pokemon.pokemon_id === 688) {
		pokemon.pokemon_name = 'Binacle';
	}
	if (pokemon.pokemon_id === 689) {
		pokemon.pokemon_name = 'Barbaracle';
	}
	if (pokemon.pokemon_id === 690) {
		pokemon.pokemon_name = 'Skrelp';
	}
	if (pokemon.pokemon_id === 691) {
		pokemon.pokemon_name = 'Dragalge';
	}
	if (pokemon.pokemon_id === 692) {
		pokemon.pokemon_name = 'Clauncher';
	}
	if (pokemon.pokemon_id === 693) {
		pokemon.pokemon_name = 'Clawitzer';
	}
	if (pokemon.pokemon_id === 694) {
		pokemon.pokemon_name = 'Helioptile';
	}
	if (pokemon.pokemon_id === 695) {
		pokemon.pokemon_name = 'Heliolisk';
	}
	if (pokemon.pokemon_id === 696) {
		pokemon.pokemon_name = 'Tyrunt';
	}
	if (pokemon.pokemon_id === 697) {
		pokemon.pokemon_name = 'Tyrantrum';
	}
	if (pokemon.pokemon_id === 698) {
		pokemon.pokemon_name = 'Amaura';
	}
	if (pokemon.pokemon_id === 699) {
		pokemon.pokemon_name = 'Aurorus';
	}
	if (pokemon.pokemon_id === 701) {
		pokemon.pokemon_name = 'Hawlucha';
	}
	if (pokemon.pokemon_id === 702) {
		pokemon.pokemon_name = 'Dedenne';
	}
	if (pokemon.pokemon_id === 703) {
		pokemon.pokemon_name = 'Carbink';
	}
	if (pokemon.pokemon_id === 704) {
		pokemon.pokemon_name = 'Goomy';
	}
	if (pokemon.pokemon_id === 705) {
		pokemon.pokemon_name = 'Sliggoo';
	}
	if (pokemon.pokemon_id === 706) {
		pokemon.pokemon_name = 'Goodra';
	}
	if (pokemon.pokemon_id === 707) {
		pokemon.pokemon_name = 'Klefki';
	}
	if (pokemon.pokemon_id === 708) {
		pokemon.pokemon_name = 'Phantump';
	}
	if (pokemon.pokemon_id === 709) {
		pokemon.pokemon_name = 'Trevenant';
	}
	if (pokemon.pokemon_id === 710) {
		pokemon.pokemon_name = 'Pumpkaboo';
	}
	if (pokemon.pokemon_id === 711) {
		pokemon.pokemon_name = 'Gourgeist';
	}
	if (pokemon.pokemon_id === 712) {
		pokemon.pokemon_name = 'Bergmite';
	}
	if (pokemon.pokemon_id === 713) {
		pokemon.pokemon_name = 'Avalugg';
	}
	if (pokemon.pokemon_id === 714) {
		pokemon.pokemon_name = 'Noibat';
	}
	if (pokemon.pokemon_id === 715) {
		pokemon.pokemon_name = 'Noivern';
	}
	if (pokemon.pokemon_id === 716) {
		pokemon.pokemon_name = 'Xerneas';
	}
	if (pokemon.pokemon_id === 717) {
		pokemon.pokemon_name = 'Yveltal';
	}
	if (pokemon.pokemon_id === 718) {
		pokemon.pokemon_name = 'Zygarde';
	}
	if (pokemon.pokemon_id === 719) {
		pokemon.pokemon_name = 'Diancie';
	}
	if (pokemon.pokemon_id === 720) {
		pokemon.pokemon_name = 'Hoopa';
	}
	if (pokemon.pokemon_id === 721) {
		pokemon.pokemon_name = 'Volcanion';
	}
	if (pokemon.pokemon_id === 722) {
		pokemon.pokemon_name = 'Rowlet';
	}
	if (pokemon.pokemon_id === 723) {
		pokemon.pokemon_name = 'Dartrix';
	}
	if (pokemon.pokemon_id === 724) {
		pokemon.pokemon_name = 'Decidueye';
	}
	if (pokemon.pokemon_id === 725) {
		pokemon.pokemon_name = 'Litten';
	}
	if (pokemon.pokemon_id === 726) {
		pokemon.pokemon_name = 'Torracat';
	}
	if (pokemon.pokemon_id === 727) {
		pokemon.pokemon_name = 'Incineroar';
	}
	if (pokemon.pokemon_id === 728) {
		pokemon.pokemon_name = 'Popplio';
	}
	if (pokemon.pokemon_id === 729) {
		pokemon.pokemon_name = 'Brionne';
	}
	if (pokemon.pokemon_id === 730) {
		pokemon.pokemon_name = 'Primarina';
	}
	if (pokemon.pokemon_id === 731) {
		pokemon.pokemon_name = 'Pikipek';
	}
	if (pokemon.pokemon_id === 732) {
		pokemon.pokemon_name = 'Trumbeak';
	}
	if (pokemon.pokemon_id === 733) {
		pokemon.pokemon_name = 'Toucannon';
	}
	if (pokemon.pokemon_id === 734) {
		pokemon.pokemon_name = 'Yungoos';
	}
	if (pokemon.pokemon_id === 735) {
		pokemon.pokemon_name = 'Gumshoos';
	}
	if (pokemon.pokemon_id === 736) {
		pokemon.pokemon_name = 'Grubbin';
	}
	if (pokemon.pokemon_id === 737) {
		pokemon.pokemon_name = 'Charjabug';
	}
	if (pokemon.pokemon_id === 738) {
		pokemon.pokemon_name = 'Vikavolt';
	}
	if (pokemon.pokemon_id === 739) {
		pokemon.pokemon_name = 'Crabrawler';
	}
	if (pokemon.pokemon_id === 740) {
		pokemon.pokemon_name = 'Crabominable';
	}
	if (pokemon.pokemon_id === 741) {
		pokemon.pokemon_name = 'Oricorio';
	}
	if (pokemon.pokemon_id === 742) {
		pokemon.pokemon_name = 'Cutiefly';
	}
	if (pokemon.pokemon_id === 743) {
		pokemon.pokemon_name = 'Ribombee';
	}
	if (pokemon.pokemon_id === 744) {
		pokemon.pokemon_name = 'Rockruff';
	}
	if (pokemon.pokemon_id === 745) {
		pokemon.pokemon_name = 'Lycanroc';
	}
	if (pokemon.pokemon_id === 746) {
		pokemon.pokemon_name = 'Wishiwashi';
	}
	if (pokemon.pokemon_id === 747) {
		pokemon.pokemon_name = 'Mareanie';
	}
	if (pokemon.pokemon_id === 748) {
		pokemon.pokemon_name = 'Toxapex';
	}
	if (pokemon.pokemon_id === 749) {
		pokemon.pokemon_name = 'Mudbray';
	}
	if (pokemon.pokemon_id === 750) {
		pokemon.pokemon_name = 'Mudsdale';
	}
	if (pokemon.pokemon_id === 751) {
		pokemon.pokemon_name = 'Dewpider';
	}
	if (pokemon.pokemon_id === 752) {
		pokemon.pokemon_name = 'Araquanid';
	}
	if (pokemon.pokemon_id === 753) {
		pokemon.pokemon_name = 'Fomantis';
	}
	if (pokemon.pokemon_id === 754) {
		pokemon.pokemon_name = 'Lurantis';
	}
	if (pokemon.pokemon_id === 755) {
		pokemon.pokemon_name = 'Morelull';
	}
	if (pokemon.pokemon_id === 756) {
		pokemon.pokemon_name = 'Shiinotic';
	}
	if (pokemon.pokemon_id === 757) {
		pokemon.pokemon_name = 'Salandit';
	}
	if (pokemon.pokemon_id === 758) {
		pokemon.pokemon_name = 'Salazzle';
	}
	if (pokemon.pokemon_id === 759) {
		pokemon.pokemon_name = 'Stufful';
	}
	if (pokemon.pokemon_id === 760) {
		pokemon.pokemon_name = 'Bewear';
	}
	if (pokemon.pokemon_id === 761) {
		pokemon.pokemon_name = 'Bounsweet';
	}
	if (pokemon.pokemon_id === 762) {
		pokemon.pokemon_name = 'Steenee';
	}
	if (pokemon.pokemon_id === 763) {
		pokemon.pokemon_name = 'Tsareena';
	}
	if (pokemon.pokemon_id === 764) {
		pokemon.pokemon_name = 'Comfey';
	}
	if (pokemon.pokemon_id === 765) {
		pokemon.pokemon_name = 'Oranguru';
	}
	if (pokemon.pokemon_id === 766) {
		pokemon.pokemon_name = 'Passimian';
	}
	if (pokemon.pokemon_id === 767) {
		pokemon.pokemon_name = 'Wimpod';
	}
	if (pokemon.pokemon_id === 768) {
		pokemon.pokemon_name = 'Golisopod';
	}
	if (pokemon.pokemon_id === 769) {
		pokemon.pokemon_name = 'Sandygast';
	}
	if (pokemon.pokemon_id === 770) {
		pokemon.pokemon_name = 'Palossand';
	}
	if (pokemon.pokemon_id === 771) {
		pokemon.pokemon_name = 'Pyukumuku';
	}
	if (pokemon.pokemon_id === 772) {
		pokemon.pokemon_name = 'Type';
	}
	if (pokemon.pokemon_id === 773) {
		pokemon.pokemon_name = 'Silvally';
	}
	if (pokemon.pokemon_id === 774) {
		pokemon.pokemon_name = 'Minior';
	}
	if (pokemon.pokemon_id === 775) {
		pokemon.pokemon_name = 'Komala';
	}
	if (pokemon.pokemon_id === 776) {
		pokemon.pokemon_name = 'Turtonator';
	}
	if (pokemon.pokemon_id === 777) {
		pokemon.pokemon_name = 'Togedemaru';
	}
	if (pokemon.pokemon_id === 778) {
		pokemon.pokemon_name = 'Mimikyu';
	}
	if (pokemon.pokemon_id === 779) {
		pokemon.pokemon_name = 'Bruxish';
	}
	if (pokemon.pokemon_id === 780) {
		pokemon.pokemon_name = 'Drampa';
	}
	if (pokemon.pokemon_id === 781) {
		pokemon.pokemon_name = 'Dhelmise';
	}
	if (pokemon.pokemon_id === 782) {
		pokemon.pokemon_name = 'Jangmo-o';
	}
	if (pokemon.pokemon_id === 783) {
		pokemon.pokemon_name = 'Hakamo-o';
	}
	if (pokemon.pokemon_id === 784) {
		pokemon.pokemon_name = 'Kommo-o';
	}
	if (pokemon.pokemon_id === 785) {
		pokemon.pokemon_name = 'Tapu Koko';
	}
	if (pokemon.pokemon_id === 786) {
		pokemon.pokemon_name = 'Tapu Lele';
	}
	if (pokemon.pokemon_id === 787) {
		pokemon.pokemon_name = 'Tapu Bulu';
	}
	if (pokemon.pokemon_id === 788) {
		pokemon.pokemon_name = 'Tapu Fini';
	}
	if (pokemon.pokemon_id === 789) {
		pokemon.pokemon_name = 'Cosmog';
	}
	if (pokemon.pokemon_id === 790) {
		pokemon.pokemon_name = 'Cosmoem';
	}
	if (pokemon.pokemon_id === 791) {
		pokemon.pokemon_name = 'Solgaleo';
	}
	if (pokemon.pokemon_id === 793) {
		pokemon.pokemon_name = 'Nihilego';
	}
	if (pokemon.pokemon_id === 794) {
		pokemon.pokemon_name = 'Buzzwole';
	}
	if (pokemon.pokemon_id === 795) {
		pokemon.pokemon_name = 'Pheromosa';
	}
	if (pokemon.pokemon_id === 796) {
		pokemon.pokemon_name = 'Xurkitree';
	}
	if (pokemon.pokemon_id === 797) {
		pokemon.pokemon_name = 'Celesteela';
	}
	if (pokemon.pokemon_id === 798) {
		pokemon.pokemon_name = 'Kartana';
	}
	if (pokemon.pokemon_id === 799) {
		pokemon.pokemon_name = 'Guzzlord';
	}
	if (pokemon.pokemon_id === 800) {
		pokemon.pokemon_name = 'Necrozma';
	}
	if (pokemon.pokemon_id === 801) {
		pokemon.pokemon_name = 'Magearna';
	}
	if (pokemon.pokemon_id === 802) {
		pokemon.pokemon_name = 'Marshadow';
	}
	if (pokemon.pokemon_id === 803) {
		pokemon.pokemon_name = 'Poipole';
	}
	if (pokemon.pokemon_id === 804) {
		pokemon.pokemon_name = 'Naganadel';
	}
	if (pokemon.pokemon_id === 805) {
		pokemon.pokemon_name = 'Stakataka';
	}
	if (pokemon.pokemon_id === 806) {
		pokemon.pokemon_name = 'Blacephalon';
	}
	if (pokemon.pokemon_id === 807) {
		pokemon.pokemon_name = 'Zeraora';
	}
	if (pokemon.pokemon_id === 808) {
		pokemon.pokemon_name = 'Meltan';
	}
	if (pokemon.pokemon_id === 809) {
		pokemon.pokemon_name = 'Melmetal';
	}
	if (pokemon.pokemon_id === 810) {
		pokemon.pokemon_name = 'Grookey';
	}
	if (pokemon.pokemon_id === 811) {
		pokemon.pokemon_name = 'Thwackey';
	}
	if (pokemon.pokemon_id === 812) {
		pokemon.pokemon_name = 'Rillaboom';
	}
	if (pokemon.pokemon_id === 813) {
		pokemon.pokemon_name = 'Scorbunny';
	}
	if (pokemon.pokemon_id === 814) {
		pokemon.pokemon_name = 'Raboot';
	}
	if (pokemon.pokemon_id === 815) {
		pokemon.pokemon_name = 'Cinderace';
	}
	if (pokemon.pokemon_id === 816) {
		pokemon.pokemon_name = 'Sobble';
	}
	if (pokemon.pokemon_id === 817) {
		pokemon.pokemon_name = 'Drizzile';
	}
	if (pokemon.pokemon_id === 818) {
		pokemon.pokemon_name = 'Inteleon';
	}
	if (pokemon.pokemon_id === 819) {
		pokemon.pokemon_name = 'Skwovet';
	}
	if (pokemon.pokemon_id === 820) {
		pokemon.pokemon_name = 'Greedent';
	}
	if (pokemon.pokemon_id === 821) {
		pokemon.pokemon_name = 'Rookidee';
	}
	if (pokemon.pokemon_id === 822) {
		pokemon.pokemon_name = 'Corvisquire';
	}
	if (pokemon.pokemon_id === 823) {
		pokemon.pokemon_name = 'Corviknight';
	}
	if (pokemon.pokemon_id === 824) {
		pokemon.pokemon_name = 'Blipbug';
	}
	if (pokemon.pokemon_id === 825) {
		pokemon.pokemon_name = 'Dottler';
	}
	if (pokemon.pokemon_id === 826) {
		pokemon.pokemon_name = 'Orbeetle';
	}
	if (pokemon.pokemon_id === 827) {
		pokemon.pokemon_name = 'Nickit';
	}
	if (pokemon.pokemon_id === 828) {
		pokemon.pokemon_name = 'Thievul';
	}
	if (pokemon.pokemon_id === 829) {
		pokemon.pokemon_name = 'Goss     ifleur';
	}
	if (pokemon.pokemon_id === 830) {
		pokemon.pokemon_name = 'Eldegoss';
	}
	if (pokemon.pokemon_id === 831) {
		pokemon.pokemon_name = 'Wooloo';
	}
	if (pokemon.pokemon_id === 832) {
		pokemon.pokemon_name = 'Dubwool';
	}
	if (pokemon.pokemon_id === 833) {
		pokemon.pokemon_name = 'Chewtle';
	}
	if (pokemon.pokemon_id === 834) {
		pokemon.pokemon_name = 'Drednaw';
	}
	if (pokemon.pokemon_id === 835) {
		pokemon.pokemon_name = 'Yamper';
	}
	if (pokemon.pokemon_id === 836) {
		pokemon.pokemon_name = 'Boltund';
	}
	if (pokemon.pokemon_id === 837) {
		pokemon.pokemon_name = 'Rolycoly';
	}
	if (pokemon.pokemon_id === 838) {
		pokemon.pokemon_name = 'Carkol';
	}
	if (pokemon.pokemon_id === 839) {
		pokemon.pokemon_name = 'Coalossal';
	}
	if (pokemon.pokemon_id === 840) {
		pokemon.pokemon_name = 'Applin';
	}
	if (pokemon.pokemon_id === 841) {
		pokemon.pokemon_name = 'Flapple';
	}
	if (pokemon.pokemon_id === 843) {
		pokemon.pokemon_name = 'Silicobra';
	}
	if (pokemon.pokemon_id === 844) {
		pokemon.pokemon_name = 'Sandaconda';
	}
	if (pokemon.pokemon_id === 845) {
		pokemon.pokemon_name = 'Cramorant';
	}
	if (pokemon.pokemon_id === 846) {
		pokemon.pokemon_name = 'Arrokuda';
	}
	if (pokemon.pokemon_id === 847) {
		pokemon.pokemon_name = 'Barraskewda';
	}
	if (pokemon.pokemon_id === 848) {
		pokemon.pokemon_name = 'Toxel';
	}
	if (pokemon.pokemon_id === 849) {
		pokemon.pokemon_name = 'Toxtricity';
	}
	if (pokemon.pokemon_id === 850) {
		pokemon.pokemon_name = 'Sizzlipede';
	}
	if (pokemon.pokemon_id === 851) {
		pokemon.pokemon_name = 'Centiskorch';
	}
	if (pokemon.pokemon_id === 852) {
		pokemon.pokemon_name = 'Clobbopus';
	}
	if (pokemon.pokemon_id === 853) {
		pokemon.pokemon_name = 'Grapploct';
	}
	if (pokemon.pokemon_id === 854) {
		pokemon.pokemon_name = 'Sinistea';
	}
	if (pokemon.pokemon_id === 855) {
		pokemon.pokemon_name = 'Polteageist';
	}
	if (pokemon.pokemon_id === 856) {
		pokemon.pokemon_name = 'Hatenna';
	}
	if (pokemon.pokemon_id === 857) {
		pokemon.pokemon_name = 'Hattrem';
	}
	if (pokemon.pokemon_id === 858) {
		pokemon.pokemon_name = 'Hatterene';
	}
	if (pokemon.pokemon_id === 859) {
		pokemon.pokemon_name = 'Impidimp';
	}
	if (pokemon.pokemon_id === 860) {
		pokemon.pokemon_name = 'Morgrem';
	}
	if (pokemon.pokemon_id === 861) {
		pokemon.pokemon_name = 'Grimmsnarl';
	}
	if (pokemon.pokemon_id === 862) {
		pokemon.pokemon_name = 'Obstagoon';
	}
	if (pokemon.pokemon_id === 863) {
		pokemon.pokemon_name = 'Perrserker';
	}
	if (pokemon.pokemon_id === 864) {
		pokemon.pokemon_name = 'Cursola';
	}
	if (pokemon.pokemon_id === 865) {
		pokemon.pokemon_name = 'Sirfetch';
	}
	if (pokemon.pokemon_id === 866) {
		pokemon.pokemon_name = 'Mr. Rime';
	}
	if (pokemon.pokemon_id === 867) {
		pokemon.pokemon_name = 'Runerigus';
	}
	if (pokemon.pokemon_id === 868) {
		pokemon.pokemon_name = 'Milcery';
	}
	if (pokemon.pokemon_id === 869) {
		pokemon.pokemon_name = 'Alcremie';
	}
	if (pokemon.pokemon_id === 870) {
		pokemon.pokemon_name = 'Falinks';
	}
	if (pokemon.pokemon_id === 871) {
		pokemon.pokemon_name = 'Pincurchin';
	}
	if (pokemon.pokemon_id === 872) {
		pokemon.pokemon_name = 'Snom';
	}
	if (pokemon.pokemon_id === 873) {
		pokemon.pokemon_name = 'Frosmoth';
	}
	if (pokemon.pokemon_id === 874) {
		pokemon.pokemon_name = 'Stonjourner';
	}
	if (pokemon.pokemon_id === 875) {
		pokemon.pokemon_name = 'Eiscue';
	}
	if (pokemon.pokemon_id === 876) {
		pokemon.pokemon_name = 'Indeedee';
	}
	if (pokemon.pokemon_id === 877) {
		pokemon.pokemon_name = 'Morpeko';
	}
	if (pokemon.pokemon_id === 878) {
		pokemon.pokemon_name = 'Cufant';
	}
	if (pokemon.pokemon_id === 879) {
		pokemon.pokemon_name = 'Copperajah';
	}
	if (pokemon.pokemon_id === 880) {
		pokemon.pokemon_name = 'Dracozolt';
	}
	if (pokemon.pokemon_id === 881) {
		pokemon.pokemon_name = 'Arctozolt';
	}
	if (pokemon.pokemon_id === 882) {
		pokemon.pokemon_name = 'Dracovish';
	}
	if (pokemon.pokemon_id === 883) {
		pokemon.pokemon_name = 'Arctovish';
	}
	if (pokemon.pokemon_id === 884) {
		pokemon.pokemon_name = 'Duraludon';
	}
	if (pokemon.pokemon_id === 885) {
		pokemon.pokemon_name = 'Dreepy';
	}
	if (pokemon.pokemon_id === 886) {
		pokemon.pokemon_name = 'Drakloak';
	}
	if (pokemon.pokemon_id === 887) {
		pokemon.pokemon_name = 'Dragapult';
	}
	if (pokemon.pokemon_id === 888) {
		pokemon.pokemon_name = 'Zacian';
	}
	if (pokemon.pokemon_id === 889) {
		pokemon.pokemon_name = 'Zamazenta';
	}
	if (pokemon.pokemon_id === 890) {
		pokemon.pokemon_name = 'Eternatus';
	}
	if (pokemon.pokemon_id === 891) {
		pokemon.pokemon_name = 'Kubfu';
	}
	if (pokemon.pokemon_id === 892) {
		pokemon.pokemon_name = 'Urshifu';
	}
	if (pokemon.pokemon_id === 893) {
		pokemon.pokemon_name = 'Zarude';
	}
	if (pokemon.pokemon_id === 894) {
		pokemon.pokemon_name = 'Regieleki';
	}
	if (pokemon.pokemon_id === 895) {
		pokemon.pokemon_name = 'Regidrago';
	}
	if (pokemon.pokemon_id === 896) {
		pokemon.pokemon_name = 'Glastrier';
	}
	if (pokemon.pokemon_id === 897) {
		pokemon.pokemon_name = 'Spectrier';
	}
	if (pokemon.pokemon_id === 898) {
		pokemon.pokemon_name = 'Calyrex';
	}
	if (pokemon.pokemon_id === 900) {
		pokemon.pokemon_name = 'Kleavor';
	}
	if (pokemon.pokemon_id === 215) {
		pokemon.pokemon_name = 'Sneasel';
	}
	if (pokemon.pokemon_id === 903) {
		pokemon.pokemon_name = 'Sneasler';
	}
	if (pokemon.pokemon_id === 211) {
		pokemon.pokemon_name = 'Qwilfish';
	}
	if (pokemon.pokemon_id === 904) {
		pokemon.pokemon_name = 'Overqwil';
	}
	if (pokemon.pokemon_id === 999) {
		pokemon.pokemon_name = 'Gimmighoul';
	}
	if (pokemon.pokemon_id === 1000) {
		pokemon.pokemon_name = 'Gholdengo';
	}


	pokemon.location = `${pokemon.lat},${pokemon.lng}`;

	// Return only pokemon_name, location, and cp as a string
	return `${pokemon.pokemon_name} ${pokemon.location} cp: ${pokemon.cp}`;
};

// Get the current timestamp in milliseconds and the "since" timestamp 10 seconds earlier
const CURRENT_TIME = moment().valueOf();
const SINCE = Math.floor(CURRENT_TIME / 1000) - 10;

// Define the URL with the updated timestamps
const url = `https://nycpokemap.com/query2.php?mons=1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C172%2C25%2C26%2C27%2C28%2C29%2C30%2C31%2C32%2C33%2C34%2C173%2C35%2C36%2C37%2C38%2C174%2C39%2C40%2C41%2C42%2C169%2C43%2C44%2C45%2C46%2C47%2C48%2C49%2C50%2C51%2C52%2C53%2C54%2C55%2C56%2C57%2C58%2C59%2C60%2C61%2C62%2C63%2C64%2C65%2C66%2C67%2C68%2C69%2C70%2C71%2C72%2C73%2C74%2C75%2C76%2C77%2C78%2C79%2C80%2C81%2C82%2C462%2C83%2C84%2C85%2C86%2C87%2C88%2C89%2C90%2C91%2C92%2C93%2C94%2C95%2C208%2C96%2C97%2C98%2C99%2C100%2C101%2C102%2C103%2C104%2C105%2C236%2C106%2C106%2C107%2C237%2C134%2C135%2C136%2C196%2C197%2C470%2C471%2C700%2C266%2C268%2C267%2C269%2C475%2C282%2C362%2C478%2C367%2C368%2C414%2C413%2C791%2C792%2C841%2C842%2C108%2C463%2C109%2C110%2C111%2C112%2C464%2C440%2C113%2C242%2C114%2C465%2C115%2C116%2C117%2C230%2C118%2C119%2C120%2C121%2C439%2C122%2C123%2C212%2C238%2C124%2C239%2C125%2C466%2C240%2C126%2C467%2C127%2C128%2C129%2C130%2C131%2C132%2C133%2C134%2C137%2C233%2C474%2C138%2C139%2C140%2C141%2C142%2C446%2C143%2C144%2C145%2C146%2C147%2C148%2C149%2C150%2C151%2C152%2C153%2C154%2C155%2C156%2C157%2C158%2C159%2C160%2C161%2C162%2C163%2C164%2C165%2C166%2C167%2C168%2C170%2C171%2C175%2C176%2C468%2C177%2C178%2C179%2C180%2C181%2C298%2C183%2C184%2C438%2C185%2C187%2C188%2C189%2C190%2C424%2C191%2C192%2C193%2C469%2C194%2C195%2C198%2C430%2C200%2C429%2C201%2C360%2C202%2C203%2C204%2C205%2C206%2C207%2C472%2C209%2C210%2C211%2C213%2C214%2C215%2C461%2C216%2C217%2C901%2C218%2C219%2C220%2C221%2C473%2C222%2C223%2C224%2C225%2C458%2C226%2C227%2C228%2C229%2C231%2C232%2C234%2C235%2C241%2C243%2C244%2C245%2C246%2C247%2C248%2C249%2C250%2C251%2C252%2C253%2C254%2C255%2C256%2C257%2C258%2C259%2C260%2C261%2C262%2C263%2C264%2C265%2C266%2C267%2C270%2C271%2C272%2C273%2C274%2C275%2C276%2C277%2C278%2C279%2C280%2C281%2C475%2C283%2C284%2C285%2C286%2C287%2C288%2C289%2C290%2C291%2C292%2C293%2C294%2C295%2C296%2C297%2C299%2C476%2C300%2C301%2C302%2C303%2C304%2C305%2C306%2C307%2C308%2C309%2C310%2C311%2C312%2C313%2C314%2C406%2C315%2C407%2C316%2C317%2C318%2C319%2C320%2C321%2C322%2C323%2C324%2C325%2C326%2C327%2C328%2C329%2C330%2C331%2C332%2C333%2C334%2C335%2C336%2C337%2C338%2C339%2C340%2C341%2C342%2C343%2C344%2C345%2C346%2C347%2C348%2C349%2C350%2C351%2C352%2C353%2C354%2C355%2C356%2C477%2C357%2C433%2C358%2C359%2C361%2C362%2C363%2C364%2C365%2C366%2C367%2C369%2C370%2C371%2C372%2C373%2C374%2C375%2C376%2C377%2C378%2C379%2C380%2C381%2C382%2C383%2C384%2C385%2C386%2C387%2C388%2C389%2C390%2C391%2C392%2C393%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C402%2C403%2C404%2C405%2C408%2C409%2C410%2C411%2C412%2C414%2C415%2C416%2C417%2C418%2C419%2C420%2C421%2C422%2C423%2C425%2C426%2C427%2C428%2C431%2C432%2C434%2C435%2C436%2C437%2C441%2C442%2C443%2C444%2C445%2C447%2C448%2C449%2C450%2C451%2C452%2C453%2C454%2C455%2C456%2C457%2C459%2C460%2C479%2C480%2C481%2C482%2C483%2C484%2C485%2C486%2C487%2C488%2C489%2C490%2C491%2C492%2C493%2C494%2C495%2C496%2C497%2C498%2C499%2C500%2C501%2C502%2C503%2C504%2C505%2C506%2C507%2C508%2C509%2C510%2C511%2C512%2C513%2C514%2C515%2C516%2C517%2C518%2C519%2C520%2C521%2C522%2C523%2C524%2C525%2C526%2C527%2C528%2C529%2C530%2C531%2C532%2C533%2C534%2C535%2C536%2C537%2C538%2C539%2C540%2C541%2C542%2C543%2C544%2C545%2C546%2C547%2C548%2C549%2C550%2C551%2C552%2C553%2C554%2C555%2C556%2C557%2C558%2C559%2C560%2C561%2C562%2C563%2C564%2C565%2C566%2C567%2C568%2C569%2C570%2C571%2C572%2C573%2C574%2C575%2C576%2C577%2C578%2C579%2C580%2C581%2C582%2C583%2C584%2C585%2C586%2C587%2C588%2C589%2C590%2C591%2C592%2C593%2C594%2C595%2C596%2C597%2C598%2C599%2C600%2C601%2C602%2C603%2C604%2C605%2C606%2C607%2C608%2C609%2C610%2C611%2C612%2C613%2C614%2C615%2C616%2C617%2C618%2C619%2C620%2C621%2C622%2C623%2C624%2C625%2C626%2C627%2C628%2C629%2C630%2C631%2C632%2C633%2C634%2C635%2C636%2C637%2C638%2C639%2C640%2C641%2C642%2C643%2C644%2C645%2C646%2C647%2C648%2C649%2C650%2C651%2C652%2C653%2C654%2C655%2C656%2C657%2C658%2C659%2C660%2C661%2C662%2C663%2C664%2C665%2C666%2C667%2C668%2C669%2C670%2C671%2C672%2C673%2C674%2C675%2C676%2C677%2C678%2C679%2C680%2C681%2C682%2C683%2C684%2C685%2C686%2C687%2C688%2C689%2C690%2C691%2C692%2C693%2C694%2C695%2C696%2C697%2C698%2C699%2C701%2C702%2C703%2C704%2C705%2C706%2C707%2C708%2C709%2C710%2C711%2C712%2C713%2C714%2C715%2C716%2C717%2C718%2C719%2C720%2C721%2C722%2C723%2C724%2C725%2C726%2C727%2C728%2C729%2C730%2C731%2C732%2C733%2C734%2C735%2C736%2C737%2C738%2C739%2C740%2C741%2C742%2C743%2C744%2C745%2C746%2C747%2C748%2C749%2C750%2C751%2C752%2C753%2C754%2C755%2C756%2C757%2C758%2C759%2C760%2C761%2C762%2C763%2C764%2C765%2C766%2C767%2C768%2C769%2C770%2C771%2C772%2C773%2C774%2C775%2C776%2C777%2C778%2C779%2C780%2C781%2C782%2C783%2C784%2C785%2C786%2C787%2C788%2C789%2C790%2C791%2C793%2C794%2C795%2C796%2C797%2C798%2C799%2C800%2C801%2C802%2C803%2C804%2C805%2C806%2C807%2C808%2C809%2C810%2C811%2C812%2C813%2C814%2C815%2C816%2C817%2C818%2C819%2C820%2C821%2C822%2C823%2C824%2C825%2C826%2C827%2C828%2C829%2C830%2C831%2C832%2C833%2C834%2C835%2C836%2C837%2C838%2C839%2C840%2C841%2C843%2C844%2C845%2C846%2C847%2C848%2C849%2C850%2C851%2C852%2C853%2C854%2C855%2C856%2C857%2C858%2C859%2C860%2C861%2C862%2C863%2C864%2C865%2C866%2C867%2C868%2C869%2C870%2C871%2C872%2C873%2C874%2C875%2C876%2C877%2C878%2C879%2C880%2C881%2C882%2C883%2C884%2C885%2C886%2C887%2C888%2C889%2C890%2C891%2C892%2C893%2C894%2C895%2C896%2C897%2C898%2C900%2C215%2C903%2C211%2C904%2C999%2C1000&time=${CURRENT_TIME}&since=${SINCE}`;

// Define the headers
const headers = {
	'accept': '*/*',
	'accept-language': 'en-US,en;q=0.9,id;q=0.8',
	'cookie': '_ga=GA1.2.1159380812.1720497630; _gid=GA1.2.1917483944.1720497630; _ga_PFPLCXRQQM=GS1.2.1720497793.1.0.1720497793.0.0.0; _ga_4HY83JE707=GS1.2.1720497630.1.1.1720497848.0.0.0',
	'priority': 'u=1, i',
	'referer': 'https://nycpokemap.com/index.html',
	'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
	'sec-ch-ua-mobile': '?0',
	'sec-ch-ua-platform': '"Windows"',
	'sec-fetch-dest': 'empty',
	'sec-fetch-mode': 'cors',
	'sec-fetch-site': 'same-origin',
	'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
	'x-requested-with': 'XMLHttpRequest'
};

// Make the GET request
axios.get(url, {
		headers
	})
	.then(response => {
		const data = response.data;
		if (data.pokemons && data.pokemons.length > 0) {
			const transformedPokemons = data.pokemons.map(transformPokemon);
			transformedPokemons.forEach(pokemonText => {
				console.log(pokemonText);
			});
		} else {
			console.log("");
		}
	})
	.catch(error => {
		console.error('', error);
	});
