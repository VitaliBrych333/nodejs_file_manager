import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createBrotliDecompress } from 'zlib';
import { ERRORS } from '../types/types.js';

const decompress = async (pathArchiveName, pathFileName) => {
  const brotliUnZip = createBrotliDecompress();
  const source = createReadStream(pathArchiveName);
  const destination = createWriteStream(pathFileName);

  pipeline(source, brotliUnZip, destination, (error) => 
    error
      ? console.error(ERRORS.OPERATION_FAILED)
      : console.log('Archive was decompressesed!')
  );
};

export default decompress;
