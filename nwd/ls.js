import { cwd } from 'process';
import { readdir } from 'fs/promises';
import { ERRORS } from '../types/types.js';

const showTable = async () => {
  try {
    const files = await readdir(cwd(), { withFileTypes: true });
    const data = files
                  .map(file => ({ Name: file.name, Type: file.isFile() ? 'file' : 'directory' }))
                  .sort((a, b) => ((b.Type < a.Type) - (a.Type < b.Type) || (b.Name < a.Name) - (a.Name < b.Name)));
    console.table(data);

  } catch (e) {
    console.error(ERRORS.OPERATION_FAILED);
  }
};

export default showTable;
