import axios from 'axios';

const request = axios.create({
  baseURL: 'https://dog.ceo/api/breeds', // 기본 api 주소
  timeout: 1000, // 요청 타임아웃
});

request.interceptors.request.use(
  config => {
    // 요청이 진행되기 전, 수행될 로직
    return config;
  },
  error => {
    // 요청 에러시 수행되는 로직
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    // 응답이 왔을 때 수행되는 로직
    const res = response.data;
    // 여기서는 response를 response.data로 분해하여 return 하도록 되어있습니다.
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default request;
