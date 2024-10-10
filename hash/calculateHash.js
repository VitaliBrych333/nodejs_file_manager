import { readFile } from 'fs/promises';
const { createHash } = await import('crypto');
import { ERRORS } from '../types/types.js';

const calculateHash = async (path) => {
  try {
    const data = await readFile(path, { encoding: 'utf8' });
    const hash = createHash('sha256')
                  .update(data)
                  .digest('hex');

    console.log(hash);

  } catch (e) {
    console.error(ERRORS.OPERATION_FAILED);
  }
};

export default calculateHash;
