import { GqlModuleOptions } from '@nestjs/graphql';

import AppConfig from '@config/app';
import constants from '@constants';

export default {
  debug: !constants.IS_PROD,
  playground: !constants.IS_PROD,
  autoSchemaFile: true,
  cors: {
    origin: AppConfig.APP_ORIGIN,
    credentials: true
  },
  context: ({ req, res }) => ({ req, res })
} as GqlModuleOptions;
