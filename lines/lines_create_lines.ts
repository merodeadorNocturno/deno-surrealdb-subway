import { STATION, STATIONS_MAP } from "../types/types_lines.ts";

const line1: STATION = [
  "Pantitlán",
  "Zaragoza",
  "Gómez Farías",
  "Boulevard Puerto Aéreo",
  "Balbuena",
  "Moctezuma",
  "San Lázaro",
  "Candelaria",
  "Merced",
  "Pino Suárez",
  "Isabel la Católica",
  "Salto del Agua",
  "Balderas",
  "Cuauhtémoc",
  "Insurgentes",
  "Sevilla",
  "Chapultepec",
  "Juanacatlán",
  "Tacubaya",
  "Observatorio",
];

const line2: STATION = [
  "Cuatro Caminos",
  "Panteones",
  "Tacuba",
  "Cuitláhuac",
  "Popotla",
  "Colegio Militar",
  "Normal",
  "San Cosme",
  "Revolución",
  "Hidalgo",
  "Bellas Artes",
  "Allende",
  "Zócalo",
  "Pino Suárez",
  "San Antonio Abad",
  "Chabacano",
  "Viaducto",
  "Xola",
  "Villa de Cortés",
  "Nativitas",
  "Portales",
  "Ermita",
  "General Anaya",
  "Tasqueña",
];

const line3: STATION = [
  "Indios Verdes",
  "Deportivo 18 de Marzo",
  "Potrero",
  "La Raza",
  "Tlatelolco",
  "Guerrero",
  "Hidalgo",
  "Juárez",
  "Balderas",
  "Niños Héroes",
  "Hospital General",
  "Centro Médico",
  "Etiopía/Plaza de la Transparencia",
  "Eugenia",
  "División del Norte",
  "Zapata",
  "Coyoacán",
  "Viveros/Derechos Humanos",
  "Miguel Ángel de Quevedo",
  "Copilco",
  "Universidad",
];

const line4: STATION = [
  "Santa Anita",
  "Jamaica",
  "Fray Servando",
  "Candelaria",
  "Morelos",
  "Canal del Norte",
  "Consulado",
  "Bondojito",
  "Talismán",
  "Martín Carrera",
];

const line5: STATION = [
  "Politécnico",
  "Instituto del Petróleo",
  "Autobuses del Norte",
  "La Raza",
  "Misterios",
  "Valle Gómez",
  "Consulado",
  "Eduardo Molina",
  "Aragón",
  "Oceanía",
  "Terminal Aérea",
  "Hangares",
  "Pantitlán",
];

const line6: STATION = [
  "El Rosario",
  "Tezozómoc",
  "Azcapotzalco",
  "Ferrería",
  "Norte 45",
  "Vallejo",
  "Instituto del Petróleo",
  "Lindavista",
  "Deportivo 18 de Marzo",
  "La Villa_Basílica",
  "Martín Carrera",
];

const line7: STATION = [
  "El Rosario",
  "Aquíles Serdán",
  "Camarones",
  "Refinería",
  "Tacuba",
  "San Joaquín",
  "Polanco",
  "Auditorio",
  "Constituyentes",
  "Tacubaya",
  "San Pedro de los Pinos",
  "San Antonio",
  "Mixcoac",
  "Barranca del Muerto",
];

const line8: STATION = [
  "Garibaldi",
  "Bellas Artes",
  "San Juan de Letrán",
  "Salto del Agua",
  "Doctores",
  "Obrera",
  "Chabacano",
  "La Viga",
  "Santa Anita",
  "Coyuya",
  "Iztacalco",
  "Apatlaco",
  "Escuadrón 201",
  "Atlalilco",
  "Iztapalapa",
  "Cerro de la Estrella",
  "UAM I",
  "Constitución de 1917",
];

const line9: STATION = [
  "Pantitlán",
  "Puebla",
  "Ciudad Deportiva",
  "Velódromo",
  "Mixiuhca",
  "Jamaica",
  "Chabacano",
  "Lázaro Cárdenas",
  "Centro Médico",
  "Chilpancingo",
  "Patriotismo",
  "Tacubaya",
];

const lineA: STATION = [
  "Pantitlán",
  "Agrícola Oriental",
  "Canal de San Juan",
  "Tepalcates",
  "Guelatao",
  "Peñón Viejo",
  "Acatitla",
  "Santa Marta",
  "Los Reyes",
  "La Paz",
];

const lineB: STATION = [
  "Ciudad Azteca",
  "Plaza Aragón",
  "Olímpica",
  "Ecatepec",
  "Múzquiz",
  "Río de los Remedios",
  "Impulsora",
  "Nezahualcóyotl",
  "Villa de Aragón",
  "Bosques de Aragón",
  "Deportivo Oceanía",
  "Oceanía",
  "Romero Rubio",
  "Ricardo Flores Magón",
  "San Lázaro",
  "Morelos",
  "Tepito",
  "Lagunilla",
  "Garibaldi",
  "Guerrero",
  "Buenavista",
];

const line12 = [
  "Tláhuac",
  "Tlaltenco",
  "Zapotitlán",
  "Nopalera",
  "Olivos",
  "Tezonco",
  "Periférico Oriente",
  "Calle 11",
  "Lomas Estrella",
  "San Andrés Tomatlán",
  "Culhuacán",
  "Atlalilco",
  "Mexicaltzingo",
  "Ermita",
  "Eje Central",
  "Parque de los Venados",
  "Zapata",
  "Hospital 20 de Noviembre",
  "Insurgentes Sur",
  "Mixcoac",
];

export const lines: STATIONS_MAP = new Map();

lines.set("1", line1);
lines.set("2", line2);
lines.set("3", line3);
lines.set("4", line4);
lines.set("5", line5);
lines.set("6", line6);
lines.set("7", line7);
lines.set("8", line8);
lines.set("9", line9);
lines.set("A", lineA);
lines.set("B", lineB);
lines.set("12", line12);
