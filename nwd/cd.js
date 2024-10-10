import { resolve } from 'path';
import { chdir, cwd } from 'process';
import { ERRORS } from '../types/types.js';

const cd = async (params) => {
  try {
    const path = resolve(cwd(), params);
    chdir(path);

  } catch (e) {
    console.error(ERRORS.OPERATION_FAILED);
  }
};

export default cd;
