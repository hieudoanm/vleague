import { writeFileSync } from 'fs';
import { Options, Parser } from 'json2csv';
import isNil from 'lodash/isNil';

export const jsonToCSV = async (
  data: Readonly<unknown> | readonly unknown[],
  options: Options<unknown> | undefined,
  file?: string
) => {
  try {
    const parser = new Parser(options);
    const csv = parser.parse(data);
    if (!isNil(file)) {
      await writeFileSync(file, csv);
    }
    return csv;
  } catch (err) {
    console.error(err);
  }
};

export default jsonToCSV;
