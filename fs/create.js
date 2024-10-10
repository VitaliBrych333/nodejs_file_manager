import { writeFile } from 'fs/promises';
import { ERRORS } from '../types/types.js';

const create = async (path) => {
  try {
    await writeFile(path, '', { flag: 'wx' }).then(() => console.log('The file was added!'));

  } catch (e) {
    console.error(ERRORS.OPERATION_FAILED);
  }
};

export default create;
