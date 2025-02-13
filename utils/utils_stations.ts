const translate = (char: string): string => {
  const translation_table: { [key: string]: string } = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    ñ: "n",
    Á: "A",
  };

  const translate_regex = /[áéíóúñÁ]/g;
  return char.replace(translate_regex, (match) => {
    // console.log(match);
    return translation_table[match] as string;
  });
};

export const generate_station_id = (station: string, line_id: string, id: boolean = true): string => {
    return translate(`${id ? 'station:' : ''}${station.replace(/\s|\//g, '_')}_${line_id}`);
};

