import up from '../nwd/up.js';
import showTable from '../nwd/ls.js';
import cd from '../nwd/cd.js';

import read from '../fs/read.js';
import create from '../fs/create.js';
import rename from '../fs/rename.js';
import copy from '../fs/copy.js';
import move from '../fs/move.js';
import remove from '../fs/remove.js';

import runOs from '../os/os.js';
import architecture from '../os/architecture.js';
import cpusInfo from '../os/cpusInfo.js';
import eol from '../os/eol.js';
import homedirInfo from '../os/homedirInfo.js';
import userName from '../os/userName.js';

import calculateHash from '../hash/calculateHash.js';

import compress from '../zip/compress.js';
import decompress from '../zip/decompress.js';

export const PARAMETERS_OS = {
  architecture: '--architecture',
  cpus: '--cpus',
  eol: '--EOL',
  homedir: '--homedir',
  username: '--username'
};

export const OPERATION_HANDLERS_OS = {
  architecture: () => architecture(),
  cpus: () => cpusInfo(),
  eol: () => eol(),
  homedir: () => homedirInfo(),
  username: () => userName()
};

export const OPERATION_HANDLERS = {
  up: {
    handler: () => up(),
    countRequiredParams: 0
  },
  cd: {
    handler: (params) => cd(...params),
    countRequiredParams: 1
  },
  ls: {
    handler: () => showTable(),
    countRequiredParams: 0
  },
  cat: {
    handler: (params) => read(...params),
    countRequiredParams: 1
  },
  add: {
    handler: (params) => create(...params),
    countRequiredParams: 1
  },
  rn: {
    handler: (params) => rename(...params),
    countRequiredParams: 2
  },
  cp: {
    handler: (params) => copy(...params),
    countRequiredParams: 2
  },
  mv: {
    handler: (params) => move(...params),
    countRequiredParams: 2
  },
  rm: {
    handler: (params) => remove(...params),
    countRequiredParams: 1
  },
  os: {
    handler: (params) => runOs(...params),
    countRequiredParams: 1
  },
  hash: {
    handler: (params) => calculateHash(...params),
    countRequiredParams: 1
  },
  compress: {
    handler: (params) => compress(...params),
    countRequiredParams: 2
  },
  decompress: {
    handler: (params) => decompress(...params),
    countRequiredParams: 2
  }
};

export const ERRORS = {
  INVALID_INPUT: 'Invalid input',
  OPERATION_FAILED: 'Operation failed'
};
