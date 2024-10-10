import { createReadStream } from 'fs';
import { stdout } from 'process';
import { ERRORS } from '../types/types.js';

const read = async (path) => {
  const stream = createReadStream(path, { encoding: 'utf8' });
  stream
    .on('data', (chunk) => stdout.write(chunk + '\n'))
    .on('error', () => console.log(ERRORS.OPERATION_FAILED));
};

export default read;
