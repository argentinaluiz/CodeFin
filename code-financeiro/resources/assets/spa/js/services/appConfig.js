//import config from '../config';

const LOCATION = window.location;

let localConfig = {
    host: `${LOCATION.protocol}//${LOCATION.hostname}:${LOCATION.port}`
};

localConfig.api_url = localConfig.host + '/api';
const appConfig = Object.assign({}, localConfig);

export default appConfig;