import axios from 'axios';

const getMethodApiCall = url => {
  return axios
    .get(url, {
      headers: {
        Authorization: `Bearer `,
      },
    })
    .then(response => response)
    .catch(error => {
      console.log(error, 'api error');
    });
};

export {getMethodApiCall};
