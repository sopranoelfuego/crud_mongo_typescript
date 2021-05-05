const dotenv = require('dotenv');

dotenv.config();

const SERVER_PORT = process.env.PORT;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
const config = { server: SERVER };
export default config;
