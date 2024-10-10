import { createReadStream, createWriteStream } from 'fs';
import { join, basename } from 'path';
import { ERRORS } from '../types/types.js';

const copy = async (source, destination) => {
  const readStream = createReadStream(source);
  const writeStream = createWriteStream(join(destination, basename(source)));

  readStream.pipe(writeStream);
  readStream.on('error', () => console.log(ERRORS.OPERATION_FAILED));
  writeStream.on('error', () => console.log(ERRORS.OPERATION_FAILED));
};

export default copy;
