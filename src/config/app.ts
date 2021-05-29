import constants from '@constants';

export default {
  APP_PORT: 8080,
  APP_ORIGIN: constants.IS_PROD ? '.akordhomes.com' : 'http://localhost:3000'
};
