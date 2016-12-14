import config from '../config';

const LOCATION = window.location;

let localConfig = {
    host: `${LOCATION.protocol}//${LOCATION.hostname}:${LOCATION.port}`
};

const appConfig = Object.assign({},config, localConfig);

export default appConfig;