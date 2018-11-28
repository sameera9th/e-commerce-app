const dev = {
  BASE_URL: 'http://localhost:3333/api/v1',
};

const prod = {
  BASE_URL: 'http://localhost:3333/api/v1',
};

// Default to dev if not set
// const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;
const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
