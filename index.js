import { homedir } from 'os';
import { Transform, pipeline } from 'stream';
import { argv, chdir, cwd, stdin, stdout, exit } from 'process';
import { isValid, parseChunk } from './helper/validation.js';
import { OPERATION_HANDLERS, ERRORS } from './types/types.js';

const handleCommand = (chunk) => {
  try {
    const [command, params] = parseChunk(chunk);

    if (command === '.exit') {
      exit();
    }

    if (!isValid(command, params)) {
      console.error(ERRORS.INVALID_INPUT);
      return;
    }

    if (OPERATION_HANDLERS[command]) {
      OPERATION_HANDLERS[command].handler(params);
    }

    console.log(`You are currently in ${cwd()}`);

  } catch (e) {
    console.error(e);
  }
};

const runTransform = async () => {
  pipeline(
    stdin,
    new Transform({
      transform(chunk, encoding, callback) {
        callback(null, handleCommand(chunk.toString().trim()));
      }
    }),
    stdout,
    (error) => error && console.error('error')
  );
};

let userName;

const runFileManager = async () => {
  try {
    const args = argv.slice(2);
    const name = String(args).split('=')[1];
    userName = name ? name : 'anonymous';

    chdir(homedir());

    console.log(`Welcome to the File Manager, ${userName}!`);
    console.log(`You are currently in ${cwd()}`);

    await runTransform();

  } catch (e) {
    console.error(ERRORS.OPERATION_FAILED);
  }
};

await runFileManager();

process
  .on('SIGINT', () => exit())
  .on('exit', () => console.log(`Thank you for using File Manager, ${userName}, goodbye!`));