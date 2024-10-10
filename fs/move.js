import copy from './copy.js';
import remove from './remove.js';
import { ERRORS } from '../types/types.js';

const move = async (source, destination) => {
  try {
    await copy(source, destination);
    await remove(source);

  } catch (e) {
    console.error(ERRORS.OPERATION_FAILED);
  }
};

export default move;
