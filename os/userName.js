import { userInfo } from 'os';

const userName = async () => console.log(userInfo().username);

export default userName;
