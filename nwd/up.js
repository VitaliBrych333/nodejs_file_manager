import { chdir } from 'process';
import { ERRORS } from '../types/types.js';

const up = async () => {
  try {
    chdir('../');

  } catch (e) {
    console.error(ERRORS.OPERATION_FAILED);
  }
};

export default up;
