import { rm } from 'fs/promises';
import { ERRORS } from '../types/types.js';

const remove = async (path) => {
  try {
    await rm(path);

  } catch (e) {
    console.error(ERRORS.OPERATION_FAILED);
  }
};

export default remove;
