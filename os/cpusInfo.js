import { cpus } from 'os';

const cpusInfo = async () => {
  const infoCpus = cpus().map(({ model, speed }) => {
    speed = `${speed / 1000} GHz`;
    return { model, speed };
  });

  console.log(infoCpus);
};

export default cpusInfo;
