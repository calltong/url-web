import docker from './config/config.docker';
import develop from './config/config.develop';
import production from './config/config.production';

const env = process.env.NODE_ENV || 'docker';

const setupConfig = (env) => {
  switch (env) {
    case 'production':
      return production;
    case 'develop':
      return develop;
    default:
      return docker;
  }
};

export const config = setupConfig(env);
