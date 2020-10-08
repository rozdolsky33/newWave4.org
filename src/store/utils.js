import Cookies from 'universal-cookie';
export const host = 'http://162.212.158.14:8080';

export const getParams = (methodType, useAuth) => {
  const params = {
    method: methodType,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Method': methodType,
      'Access-Control-Request-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    },
  };
  const cookies = new Cookies();
  const token = cookies.get("token");
  if (!!token && !!useAuth) {
    params.headers.Authorization = token;
  } else {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('rights');
    localStorage.removeItem('userId');
  }
  return params;
};