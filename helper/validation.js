import { OPERATION_HANDLERS, PARAMETERS_OS } from '../types/types.js';

const commandIsExist = (command) => Object.keys(OPERATION_HANDLERS).includes(command);

const validateCountParams = (command, params) => {
  if (params.length != OPERATION_HANDLERS[command].countRequiredParams) {
    console.log('The number of parameters does not match the required number!');
  }

  return params.length === OPERATION_HANDLERS[command].countRequiredParams;
}

export const isValidOsParam = (param) => Object.values(PARAMETERS_OS).includes(param);

export const isValid = (command, params) => commandIsExist(command) && validateCountParams(command, params);

export const parseChunk = (lineString) => {
  const [command, ...params] = lineString.split(' '); // may be some problems if path has space in folder or file name ex. C:\Users\user\OneDrive\Рабочий стол\w 

  return [command, params.filter(val => val)];
};
