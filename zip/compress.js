import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createBrotliCompress } from 'zlib';
import { ERRORS } from '../types/types.js';

const compress = async (pathFileName, pathArchiveName) => {
  const brotliZip = createBrotliCompress();
  const source = createReadStream(pathFileName);
  const destination = createWriteStream(pathArchiveName);

  pipeline(source, brotliZip, destination, (error) =>
    error
      ? console.error(ERRORS.OPERATION_FAILED)
      : console.log('Archive was created!')
  );
};

export default compress;
