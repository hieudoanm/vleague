import csv from 'csvtojson';

export const csvToJSON = async <T>(filePath: string): Promise<Array<T>> => {
  try {
    const array = await csv({
      checkType: true,
      ignoreEmpty: true,
      nullObject: true,
    }).fromFile(filePath);
    return array;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default csvToJSON;
