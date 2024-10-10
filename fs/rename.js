import { access, rename as fsRename } from 'fs/promises';
import { ERRORS } from '../types/types.js';

const isFileExists = async (pathFile) => {
  try {
    await access(pathFile);
    return true;

  } catch (e) {
    return false;
  }
};

const rename = async (prevPath, newPath) => {
  try {
    const isExist = await isFileExists(newPath);

    if (isExist) {
      console.error('File already exists');
    }

    await fsRename(prevPath, newPath).then(() => console.log('The file has been renamed!'));

  } catch (e) {
    console.error(ERRORS.OPERATION_FAILED);
  }
};

export default rename;
