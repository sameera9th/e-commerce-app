import ApiService from './apiservice';

async function login(data) {
  const options = {
    method: 'post',
    url: '/admin/user/login',
    data,
  };
  const res = await ApiService.callAPI(options);
  return res;
}

export default {
  login,
};
