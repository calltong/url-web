const config = {
  env: 'docker',
  web: {
    url: 'https://store.scg.dev',
    key: '',
    maintenance: false,
  },
  api: {
    cms: 'http://cms-api:3002/api',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiZ3Vlc3QiLCJyb2xlIjoiZ3Vlc3QiLCJleHAiOjE1MjcxMzcxMTI3NjZ9.EHgDAKKv6JRYf6lw71zBLnEDs_9CcCeHHgb4ZxP3z4o',
  },
};

module.exports = config;
