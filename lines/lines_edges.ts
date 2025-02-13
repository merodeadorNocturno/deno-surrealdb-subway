import { EDGES, EDGES_MAP, EDGE } from "../types/types_lines.ts";

const line1: EDGE[] = [
  {
    station: "station:Pantitlan_1-station:Zaragoza_1",
    distance: 1_320,
    line: ['1']
  },
  {
    station: "station:Zaragoza_1-station:Gomez_Farias_1",
    distance: 762,
    line: ['1']
  },
  {
    station: "station:Gomez_Farias_1-station:Boulevard_Puerto_Aereo_1",
    distance: 611,
    line: ['1']
  },
  {
    station: "station:Boulevard_Puerto_Aereo_1-station:Balbuena_1",
    distance: 595,
    line: ['1']
  },
  {
    station: "station:Balbuena_1-station:Moctezuma_1",
    distance: 703,
    line: ['1']
  },
  {
    station: "station:Moctezuma_1-station:San_Lazaro_1",
    distance: 478,
    line: ['1']
  },
  {
    station: "station:San_Lazaro_1-station:Candelaria_1",
    distance: 866,
    line: ['1']
  },
  {
    station: "station:Candelaria_1-station:Merced_1",
    distance: 698,
    line: ['1']
  },
  {
    station: "station:Merced_1-station:Pino_Suarez_1",
    distance: 745,
    line: ['1']
  },
  {
    station: "station:Pino_Suarez_1-station:Isabel_la_Catolica_1",
    distance: 382,
    line: ['1']
  },
  {
    station: "station:Isabel_la_Catolica_1-station:Salto_del_Agua_1",
    distance: 445,
    line: ['1']
  },
  {
    station: "station:Salto_del_Agua_1-station:Balderas_1",
    distance: 458,
    line: ['1']
  },
  {
    station: "station:Balderas_1-station:Cuauhtemoc_1",
    distance: 409,
    line: ['1']
  },
  {
    station: "station:Cuauhtemoc_1-station:Insurgentes_1",
    distance: 793,
    line: ['1']
  },
  {
    station: "station:Insurgentes_1-station:Sevilla_1",
    distance: 645,
    line: ['1']
  },
  {
    station: "station:Sevilla_1-station:Chapultepec_1",
    distance: 501,
    line: ['1']
  },
  {
    station: "station:Chapultepec_1-station:Juanacatlan_1",
    distance: 973,
    line: ['1']
  },
  {
    station: "station:Juanacatlan_1-station:Tacubaya_1",
    distance: 1_158,
    line: ['1']
  },
  {
    station: "station:Tacubaya_1-station:Observatorio_1",
    distance: 1_262,
    line: ['1']
  },
];

const line2: EDGE[] = [
  {
    station: "station:Cuatro_Caminos_2-station:Panteones_2",
    distance: 1_639,
    line: ['2']
  },
  {
    station: "station:Panteones_2-station:Tacuba_2",
    distance: 1_416,
    line: ['2']
  },
  {
    station: "station:Tacuba_2-station:Cuitlahuac_2",
    distance: 637,
    line: ['2']
  },
  {
    station: "station:Cuitlahuac_2-station:Popotla_2",
    distance: 620,
    line: ['2']
  },
  {
    station: "station:Popotla_2-station:Colegio_Militar_2",
    distance: 462,
    line: ['2']
  },
  {
    station: "station:Colegio_Militar_2-station:Normal_2",
    distance: 516,
    line: ['2']
  },
  {
    station: "station:Normal_2-station:San_Cosme_2",
    distance: 657,
    line: ['2']
  },
  {
    station: "station:San_Cosme_2-station:Revolucion_2",
    distance: 537,
    line: ['2']
  },
  {
    station: "station:Revolucion_2-station:Hidalgo_2",
    distance: 587,
    line: ['2']
  },
  {
    station: "station:Hidalgo_2-station:Bellas_Artes_2",
    distance: 447,
    line: ['2']
  },
  {
    station: "station:Bellas_Artes_2-station:Allende_2",
    distance: 387,
    line: ['2']
  },
  {
    station: "station:Allende_2-station:Zocalo_2",
    distance: 602,
    line: ['2']
  },
  {
    station: "station:Zocalo_2-station:Pino_Suarez_2",
    distance: 745,
    line: ['2']
  },
  {
    station: "station:Pino_Suarez_2-station:San_Antonio_Abad_2",
    distance: 817,
    line: ['2']
  },
  {
    station: "station:San_Antonio_Abad_2-station:Chabacano_2",
    distance: 642,
    line: ['2']
  },
  {
    station: "station:Chabacano_2-station:Viaducto_2",
    distance: 774,
    line: ['2']
  },
  {
    station: "station:Viaducto_2-station:Xola_2",
    distance: 490,
    line: ['2']
  },
  {
    station: "station:Xola_2-station:Villa_de_Cortes_2",
    distance: 698,
    line: ['2']
  },
  {
    station: "station:Villa_de_Cortes_2-station:Nativitas_2",
    distance: 750,
    line: ['2']
  },
  {
    station: "station:Nativitas_2-station:Portales_2",
    distance: 924,
    line: ['2']
  },
  {
    station: "station:Portales_2-station:Ermita_2",
    distance: 748,
    line: ['2']
  },
  {
    station: "station:Ermita_2-station:General_Anaya_2",
    distance: 838,
    line: ['2']
  },
  {
    station: "station:General_Anaya_2-station:Tasquena_2",
    distance: 1_330,
    line: ['2']
  },
];

const line3: EDGE[] = [
  {
    station: "station:Indios_Verdes_3-station:Deportivo_18_de_Marzo_3",
    distance: 1_166,
    line: ['3']
  },
  {
    station: "station:Deportivo_18_de_Marzo_3-station:Potrero_3",
    distance: 966,
    line: ['3']
  },
  {
    station: "station:Potrero_3-station:La_Raza_3",
    distance: 1_106,
    line: ['3']
  },
  {
    station: "station:La_Raza_3-station:Tlatelolco_3",
    distance: 1_445,
    line: ['3']
  },
  {
    station: "station:Tlatelolco_3-station:Guerrero_3",
    distance: 1_042,
    line: ['3']
  },
  {
    station: "station:Guerrero_3-station:Hidalgo_3",
    distance: 702,
    line: ['3']
  },
  {
    station: "station:Hidalgo_3-station:Juarez_3",
    distance: 251,
    line: ['3']
  },
  {
    station: "station:Juarez_3-station:Balderas_3",
    distance: 659,
    line: ['3']
  },
  {
    station: "station:Balderas_3-station:Ninos_Heroes_3",
    distance: 665,
    line: ['3']
  },
  {
    station: "station:Ninos_Heroes_3-station:Hospital_General_3",
    distance: 559,
    line: ['3']
  },
  {
    station: "station:Hospital_General_3-station:Centro_Medico_3",
    distance: 653,
    line: ['3']
  },
  {
    station:
      "station:Centro_Medico_3-station:Etiopia_Plaza_de_la_Transparencia_3",
    distance: 1_119,
    line: ['3']
  },
  {
    station: "station:Etiopia_Plaza_de_la_Transparencia_3-station:Eugenia_3",
    distance: 950,
    line: ['3']
  },
  {
    station: "station:Eugenia_3-station:Division_del_Norte_3",
    distance: 715,
    line: ['3']
  },
  {
    station: "station:Division_del_Norte_3-station:Zapata_3",
    distance: 794,
    line: ['3']
  },
  {
    station: "station:Zapata_3-station:Coyoacan_3",
    distance: 1_153,
    line: ['3']
  },
  {
    station: "station:Coyoacan_3-station:Viveros_Derechos_Humanos_3",
    distance: 908,
    line: ['3']
  },
  {
    station:
      "station:Viveros_Derechos_Humanos_3-station:Miguel_Angel_de_Quevedo_3",
    distance: 824,
    line: ['3']
  },
  {
    station: "station:Miguel_Angel_de_Quevedo_3-station:Copilco_3",
    distance: 1_295,
    line: ['3']
  },
  {
    station: "station:Copilco_3-station:Universidad_3",
    distance: 1_306,
    line: ['3']
  },
];

const line4: EDGE[] = [
  {
    station: "station:Santa_Anita_4-station:Jamaica_4",
    distance: 758,
    line: ['4']
  },
  {
    station: "station:Jamaica_4-station:Fray_Servando_4",
    distance: 1_033,
    line: ['4']
  },
  {
    station: "station:Fray_Servando_4-station:Candelaria_4",
    distance: 633,
    line: ['4']
  },
  {
    station: "station:Candelaria_4-station:Morelos_4",
    distance: 1_062,
    line: ['4']
  },
  {
    station: "station:Morelos_4-station:Canal_del_Norte_4",
    distance: 910,
    line: ['4']
  },
  {
    station: "station:Canal_del_Norte_4-station:Consulado_4",
    distance: 884,
    line: ['4']
  },
  {
    station: "station:Consulado_4-station:Bondojito_4",
    distance: 645,
    line: ['4']
  },
  {
    station: "station:Bondojito_4-station:Talisman_4",
    distance: 959,
    line: ['4']
  },
  {
    station: "station:Talisman_4-station:Martin_Carrera_4",
    distance: 1_129,
    line: ['4']
  },
];

const line5: EDGE[] = [
  {
    station: "station:Politecnico_5-station:Instituto_del_Petroleo_5",
    distance: 1_188,
    line: ['5']
  },
  {
    station: "station:Instituto_del_Petroleo_5-station:Autobuses_del_Norte_5",
    distance: 1_067,
    line: ['5']
  },
  {
    station: "station:Autobuses_del_Norte_5-station:La_Raza_5",
    distance: 975,
    line: ['5']
  },
  {
    station: "station:La_Raza_5-station:Misterios_5",
    distance: 892,
    line: ['5']
  },
  {
    station: "station:Misterios_5-station:Valle_Gomez_5",
    distance: 969,
    line: ['5']
  },
  {
    station: "station:Valle_Gomez_5-station:Consulado_5",
    distance: 679,
    line: ['5']
  },
  {
    station: "station:Consulado_5-station:Eduardo_Molina_5",
    distance: 815,
    line: ['5']
  },
  {
    station: "station:Eduardo_Molina_5-station:Aragon_5",
    distance: 860,
    line: ['5']
  },
  {
    station: "station:Aragon_5-station:Oceania_5",
    distance: 1_219,
    line: ['5']
  },
  {
    station: "station:Oceania_5-station:Terminal_Aerea_5",
    distance: 1_174,
    line: ['5']
  },
  {
    station: "station:Terminal_Aerea_5-station:Hangares_5",
    distance: 1_153,
    line: ['5']
  },
  {
    station: "station:Hangares_5-station:Pantitlan_5",
    distance: 1_644,
    line: ['5']
  },
];

const line6: EDGE[] = [
  {
    station: "station:El_Rosario_6-station:Tezozomoc_6",
    distance: 1_257,
    line: ['6']
  },
  {
    station: "station:Tezozomoc_6-station:Azcapotzalco_6",
    distance: 973,
    line: ['6']
  },
  {
    station: "station:Azcapotzalco_6-station:Ferreria_6",
    distance: 1_173,
    line: ['6']
  },
  {
    station: "station:Ferreria_6-station:Norte_45_6",
    distance: 1_072,
    line: ['6']
  },
  {
    station: "station:Norte_45_6-station:Vallejo_6",
    distance: 660,
    line: ['6']
  },
  {
    station: "station:Vallejo_6-station:Instituto_del_Petroleo_6",
    distance: 755,
    line: ['6']
  },
  {
    station: "station:Instituto_del_Petroleo_6-station:Lindavista_6",
    distance: 1_258,
    line: ['6']
  },
  {
    station: "station:Lindavista_6-station:Deportivo_18_de_Marzo_6",
    distance: 1_075,
    line: ['6']
  },
  {
    station: "station:Deportivo_18_de_Marzo_6-station:La_Villa_Basilica_6",
    distance: 570,
    line: ['6']
  },
  {
    station: "station:La_Villa_Basilica_6-station:Martin_Carrera_6",
    distance: 1_141,
    line: ['6']
  },
];

const line7: EDGE[] = [
  {
    station: "station:El_Rosario_7-station:Aquiles_Serdan_7",
    distance: 1_615,
    line: ['7']
  },
  {
    station: "station:Aquiles_Serdan_7-station:Camarones_7",
    distance: 1_402,
    line: ['7']
  },
  {
    station: "station:Camarones_7-station:Refineria_7",
    distance: 952,
    line: ['7']
  },
  {
    station: "station:Refineria_7-station:Tacuba_7",
    distance: 1_295,
    line: ['7']
  },
  {
    station: "station:Tacuba_7-station:San_Joaquin_7",
    distance: 1_433,
    line: ['7']
  },
  {
    station: "station:San_Joaquin_7-station:Polanco_7",
    distance: 1_163,
    line: ['7']
  },
  {
    station: "station:Polanco_7-station:Auditorio_7",
    distance: 812,
    line: ['7']
  },
  {
    station: "station:Auditorio_7-station:Constituyentes_7",
    distance: 1_430,
    line: ['7']
  },
  {
    station: "station:Constituyentes_7-station:Tacubaya_7",
    distance: 1_005,
    line: ['7']
  },
  {
    station: "station:Tacubaya_7-station:San_Pedro_de_los_Pinos_7",
    distance: 1_084,
    line: ['7']
  },
  {
    station: "station:San_Pedro_de_los_Pinos_7-station:San_Antonio_7",
    distance: 606,
    line: ['7']
  },
  {
    station: "station:San_Antonio_7-station:Mixcoac_7",
    distance: 788,
    line: ['7']
  },
  {
    station: "station:Mixcoac_7-station:Barranca_del_Muerto_7",
    distance: 1_476,
    line: ['7']
  },
];

const line8: EDGE[] = [
  {
    station: "station:Garibaldi_8-station:Bellas_Artes_8",
    distance: 634,
    line: ['8']
  },
  {
    station: "station:Bellas_Artes_8-station:San_Juan_de_Letran_8",
    distance: 456,
    line: ['8']
  },
  {
    station: "station:San_Juan_de_Letran_8-station:Salto_del_Agua_8",
    distance: 292,
    line: ['8']
  },
  {
    station: "station:Salto_del_Agua_8-station:Doctores_8",
    distance: 564,
    line: ['8']
  },
  {
    station: "station:Doctores_8-station:Obrera_8",
    distance: 761,
    line: ['8']
  },
  {
    station: "station:Obrera_8-station:Chabacano_8",
    distance: 1143,
    line: ['8']
  },
  {
    station: "station:Chabacano_8-station:La_Viga_8",
    distance: 843,
    line: ['8']
  },
  {
    station: "station:La_Viga_8-station:Santa_Anita_8",
    distance: 633,
    line: ['8']
  },
  {
    station: "station:Santa_Anita_8-station:Coyuya_8",
    distance: 968,
    line: ['8']
  },
  {
    station: "station:Coyuya_8-station:Iztacalco_8",
    distance: 993,
    line: ['8']
  },
  {
    station: "station:Iztacalco_8-station:Apatlaco_8",
    distance: 910,
    line: ['8']
  },
  {
    station: "station:Apatlaco_8-station:Aculco_8",
    distance: 534,
    line: ['8']
  },
  {
    station: "station:Aculco_8-station:Escuadron_201_8",
    distance: 789,
    line: ['8']
  },
  {
    station: "station:Escuadron_201_8-station:Atlalilco_8",
    distance: 1738,
    line: ['8']
  },
  {
    station: "station:Atlalilco_8-station:Iztapalapa_8",
    distance: 732,
    line: ['8']
  },
  {
    station: "station:Iztapalapa_8-station:Cerro_de_la_Estrella_8",
    distance: 717,
    line: ['8']
  },
  {
    station: "station:Cerro_de_la_Estrella_8-station:UAM_I_8",
    distance: 1135,
    line: ['8']
  },
  {
    station: "station:UAM_I_8-station:Constitucion_de_1917_8",
    distance: 1137,
    line: ['8']
  },
];

const line9: EDGE[] = [
  {
    station: "station:Pantitlan_9-station:Puebla_9",
    distance: 1380,
    line: ['9']
  },
  {
    station: "station:Puebla_9-station:Ciudad_Deportiva_9",
    distance: 800,
    line: ['9']
  },
  {
    station: "station:Ciudad_Deportiva_9-station:Velodromo_9",
    distance: 1110,
    line: ['9']
  },
  {
    station: "station:Velodromo_9-station:Mixiuhca_9",
    distance: 821,
    line: ['9']
  },
  {
    station: "station:Mixiuhca_9-station:Jamaica_9",
    distance: 942,
    line: ['9']
  },
  {
    station: "station:Jamaica_9-station:Chabacano_9",
    distance: 1031,
    line: ['9']
  },
  {
    station: "station:Chabacano_9-station:Lazaro_Cardenas_9",
    distance: 1000,
    line: ['9']
  },
  {
    station: "station:Lazaro_Cardenas_9-station:Centro_Medico_9",
    distance: 1059,
    line: ['9']
  },
  {
    station: "station:Centro_Medico_9-station:Chilpancingo_9",
    distance: 1152,
    line: ['9']
  },
  {
    station: "station:Chilpancingo_9-station:Patriotismo_9",
    distance: 955,
    line: ['9']
  },
  {
    station: "station:Patriotismo_9-station:Tacubaya_9",
    distance: 1133,
    line: ['9']
  },
];

const lineA: EDGE[] = [
  {
    station: "station:Pantitlan_A-station:Agricola_Oriental_A",
    distance: 1409,
    line: ['A']
  },
  {
    station: "station:Agricola_Oriental_A-station:Canal_de_San_Juan_A",
    distance: 1093,
    line: ['A']
  },
  {
    station: "station:Canal_de_San_Juan_A-station:Tepalcates_A",
    distance: 1456,
    line: ['A']
  },
  {
    station: "station:Tepalcates_A-station:Guelatao_A",
    distance: 1161,
    line: ['A']
  },
  {
    station: "station:Guelatao_A-station:Penon_Viejo_A",
    distance: 2206,
    line: ['A']
  },
  {
    station: "station:Penon_Viejo_A-station:Acatitla_A",
    distance: 1379,
    line: ['A']
  },
  {
    station: "station:Acatitla_A-station:Santa_Marta_A",
    distance: 1100,
    line: ['A']
  },
  {
    station: "station:Santa_Marta_A-station:Los_Reyes_A",
    distance: 1783,
    line: ['A']
  },
  {
    station: "station:Los_Reyes_A-station:La_Paz_A",
    distance: 1956,
    line: ['A']
  },
];

const lineB: EDGE[] = [
  {
    station: "station:Ciudad_Azteca_B-station:Plaza_Aragon_B",
    distance: 574,
    line: ['B']
  },
  {
    station: "station:Plaza_Aragon_B-station:Olimpica_B",
    distance: 709,
    line: ['B']
  },
  {
    station: "station:Olimpica_B-station:Ecatepec_B",
    distance: 596,
    line: ['B']
  },
  {
    station: "station:Ecatepec_B-station:Muzquiz_B",
    distance: 1485,
    line: ['B']
  },
  {
    station: "station:Muzquiz_B-station:Rio_de_los_Remedios_B",
    distance: 1155,
    line: ['B']
  },
  {
    station: "station:Rio_de_los_Remedios_B-station:Impulsora_B",
    distance: 436,
    line: ['B']
  },
  {
    station: "station:Impulsora_B-station:Nezahualcoyotl_B",
    distance: 1393,
    line: ['B']
  },
  {
    station: "station:Nezahualcoyotl_B-station:Villa_de_Aragon_B",
    distance: 1335,
    line: ['B']
  },
  {
    station: "station:Villa_de_Aragon_B-station:Bosques_de_Aragon_B",
    distance: 784,
    line: ['B']
  },
  {
    station: "station:Bosques_de_Aragon_B-station:Deportivo_Oceania_B",
    distance: 1165,
    line: ['B']
  },
  {
    station: "station:Deportivo_Oceania_B-station:Oceania_B",
    distance: 863,
    line: ['B']
  },
  {
    station: "station:Oceania_B-station:Romero_Rubio_B",
    distance: 809,
    line: ['B']
  },
  {
    station: "station:Romero_Rubio_B-station:Ricardo_Flores_Magon_B",
    distance: 908,
    line: ['B']
  },
  {
    station: "station:Ricardo_Flores_Magon_B-station:San_Lazaro_B",
    distance: 907,
    line: ['B']
  },
  {
    station: "station:San_Lazaro_B-station:Morelos_B",
    distance: 1296,
    line: ['B']
  },
  {
    station: "station:Morelos_B-station:Tepito_B",
    distance: 498,
    line: ['B']
  },
  {
    station: "station:Tepito_B-station:Lagunilla_B",
    distance: 611,
    line: ['B']
  },
  {
    station: "station:Lagunilla_B-station:Garibaldi_B",
    distance: 474,
    line: ['B']
  },
  {
    station: "station:Garibaldi_B-station:Guerrero_B",
    distance: 757,
    line: ['B']
  },
  {
    station: "station:Guerrero_B-station:Buenavista_B",
    distance: 521,
    line: ['B']
  },
];

const line12: EDGE[] = [
  {
    station: "station:Tlahuac_12-station:Tlaltenco_12",
    distance: 1298,
    line: ['12']
  },
  {
    station: "station:Tlaltenco_12-station:Zapotitlan_12",
    distance: 1115,
    line: ['12']
  },
  {
    station: "station:Zapotitlan_12-station:Nopalera_12",
    distance: 1276,
    line: ['12']
  },
  {
    station: "station:Nopalera_12-station:Olivos_12",
    distance: 1360,
    line: ['12']
  },
  {
    station: "station:Olivos_12-station:Tezonco_12",
    distance: 490,
    line: ['12']
  },
  {
    station: "station:Tezonco_12-station:Periferico_Oriente_12",
    distance: 1545,
    line: ['12']
  },
  {
    station: "station:Periferico_Oriente_12-station:Calle_11_12",
    distance: 1111,
    line: ['12']
  },
  {
    station: "station:Calle_11_12-station:Lomas_Estrella_12",
    distance: 906,
    line: ['12']
  },
  {
    station: "station:Lomas_Estrella_12-station:San_Andres_Tomatlan_12",
    distance: 1060,
    line: ['12']
  },
  {
    station: "station:San_Andres_Tomatlan_12-station:Culhuacan_12",
    distance: 990,
    line: ['12']
  },
  {
    station: "station:Culhuacan_12-station:Atlalilco_12",
    distance: 1671,
    line: ['12']
  },
  {
    station: "station:Atlalilco_12-station:Mexicaltzingo_12",
    distance: 1922,
    line: ['12']
  },
  {
    station: "station:Mexicaltzingo_12-station:Ermita_12",
    distance: 1805,
    line: ['12']
  },
  {
    station: "station:Ermita_12-station:Eje_Central_12",
    distance: 895,
    line: ['12']
  },
  {
    station: "station:Eje_Central_12-station:Parque_de_los_Venados_12",
    distance: 1280,
    line: ['12']
  },
  {
    station: "station:Parque_de_los_Venados_12-station:Zapata_12",
    distance: 563,
    line: ['12']
  },
  {
    station: "station:Zapata_12-station:Hospital_20_de_Noviembre_12",
    distance: 450,
    line: ['12']
  },
  {
    station: "station:Hospital_20_de_Noviembre_12-station:Insurgentes_Sur_12",
    distance: 725,
    line: ['12']
  },
  {
    station: "station:Insurgentes_Sur_12-station:Mixcoac_12",
    distance: 651,
    line: ['12']
  },
];

const connections: EDGE[] = [
  {
    station: 'station:Pantitlan_1-station:Pantitlan_5',
    distance: 600,
    line: ['1', '5'],
  },
  {
    station: 'station:Pantitlan_1-station:Pantitlan_9',
    distance: 600,
    line: ['1', '9'],
  },
  {
    station: 'station:Pantitlan_1-station:Pantitlan_A',
    distance: 600,
    line: ['1', 'A'],
  },
  {
    station: 'station:Pantitlan_5-station:Pantitlan_9',
    distance: 600,
    line: ['5', '9'],
  },

  {
    station: 'station:Pantitlan_5-station:Pantitlan_A',
    distance: 600,
    line: ['5', 'A'],
  },
  {
    station: 'station:Pantitlan_9-station:Pantitlan_A',
    distance: 600,
    line: ['9', 'A'],
  },
  {
    station: 'station:San_Lazaro_1-station:San_Lazaro_B',
    distance: 600,
    line: ['1', 'B'],
  },
  {
    station: 'station:Candelaria_1-station:Candelaria_4',
    distance: 600,
    line: ['1', '4'],
  },
  {
    station: 'station:Pino_Suarez_1-station:Pino_Suarez_2',
    distance: 600,
    line: ['1', '2'],
  },
  {
    station: 'station:Salto_del_Agua_1-station:Salto_del_Agua_8',
    distance: 600,
    line: ['1', '8'],
  },
  {
    station: 'station:Balderas_1-station:Balderas_3',
    distance: 600,
    line: ['1', '3'],
  },
  {
    station: 'station:Tacubaya_1-station:Tacubaya_7',
    distance: 600,
    line: ['1', '7'],
  },
  {
    station: 'station:Tacubaya_1-station:Tacubaya_9',
    distance: 600,
    line: ['1', '9'],
  },
  {
    station: 'station:Tacubaya_7-station:Tacubaya_9',
    distance: 600,
    line: ['7', '9'],
  },
  {
    station: 'station:Tacuba_2-station:Tacuba_7',
    distance: 600,
    line: ['2', '7'],
  },
  {
    station: 'station:Hidalgo_2-station:Hidalgo_3',
    distance: 600,
    line: ['2', '3'],
  },
  {
    station: 'station:Bellas_Artes_2-station:Bellas_Artes_8',
    distance: 600,
    line: ['2', '8'],
  },
  {
    station: 'station:Chabacano_2-station:Chabacano_9',
    distance: 600,
    line: ['2', '9'],
  },
  {
    station: 'station:Chabacano_2-station:Chabacano_8',
    distance: 600,
    line: ['2', '8'],
  },
  {
    station: 'station:Ermita_2-station:Ermita_12',
    distance: 600,
    line: ['2', '12'],
  },
  {
    station: 'station:Zapata_3-station:Zapata_12',
    distance: 600,
    line: ['3', '12'],
  },
  {
    station: 'station:Centro_Medico_3-station:Centro_Medico_9',
    distance: 600,
    line: ['3', '9'],
  },
  {
    station: 'station:Guerrero_3-station:Guerrero_B',
    distance: 600,
    line: ['3', 'B'],
  },
  {
    station: 'station:La_Raza_3-station:La_Raza_5',
    distance: 600,
    line: ['3', '5'],
  },
  {
    station: 'station:Deportivo_18_de_Marzo_3-station:Deportivo_18_de_Marzo_6',
    distance: 600,
    line: ['3', '6'],
  },
  {
    station: 'station:Martin_Carrera_3-station:Martin_Carrera_6',
    distance: 600,
    line: ['4', '6'],
  },
  {
    station: 'station:Consulado_4-station:Consulado_5',
    distance: 600,
    line: ['4', '5'],
  },
  {
    station: 'station:Morelos_4-station:Morelos_B',
    distance: 600,
    line: ['4', 'B'],
  },
  {
    station: 'station:Jamaica_4-station:Jamaica_9',
    distance: 600,
    line: ['4', 'B'],
  },
  {
    station: 'station:Santa_Anita_4-station:Santa_Anita_8',
    distance: 600,
    line: ['4', '8'],
  },
  {
    station: 'station:Oceania_5-station:Oceania_B',
    distance: 600,
    line: ['5', 'B'],
  },
  {
    station: 'station:Instituto_Del_Petroleo_5-station:Instituto_Del_Petroleo_6',
    distance: 600,
    line: ['5', '6'],
  },
  {
    station: 'station:El_Rosario_6-station:El_Rosario_7',
    distance: 600,
    line: ['6', '7'],
  },
  {
    station: 'station:Atlalilco_8-station:Atlalilco_12',
    distance: 600,
    line: ['8', '12'],
  },
  {
    station: 'station:Chabacano_8-station:Chabacano_9',
    distance: 600,
    line: ['8', '9'],
  },
  {
    station: 'station:Garibaldi_8-station:Garibaldi_B',
    distance: 600,
    line: ['8', 'B'],
  },
  {
    station: 'station:Mixcoac_7-station:Mixcoac_12',
    distance: 150,
    line: ['7', '12'],
  },
];

export const edges_map: EDGES_MAP = new Map();

edges_map.set('line1', line1);
edges_map.set('line2', line2);
edges_map.set('line3', line3);
edges_map.set('line4', line4);
edges_map.set('line5', line5);
edges_map.set('line6', line6);
edges_map.set('line7', line7);
edges_map.set('line8', line8);
edges_map.set('line9', line9);
edges_map.set('line12', line12);
edges_map.set('lineA', lineA);
edges_map.set('lineB', lineB);
edges_map.set('conn', connections);

export const edges: EDGES = {
    line1,
    line2,
    line3,
    line4,
    line5,
    line6,
    line7,
    line8,
    line9,
    line12,
    lineA,
    lineB,
};
