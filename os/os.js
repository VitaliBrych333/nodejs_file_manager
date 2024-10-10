import { OPERATION_HANDLERS_OS, PARAMETERS_OS, ERRORS } from '../types/types.js';
import { isValidOsParam } from '../helper/validation.js';

const runOs = (paramOs) => {

  try {
    if (!isValidOsParam(paramOs)) {
      console.error(ERRORS.INVALID_INPUT);
      return;
    }

    const operation = Object.keys(PARAMETERS_OS).find(key => PARAMETERS_OS[key] === paramOs);

    if (operation) {
      OPERATION_HANDLERS_OS[operation]();
    }

  } catch (e) {
    console.error(ERRORS.OPERATION_FAILED);
  }
};

export default runOs;
