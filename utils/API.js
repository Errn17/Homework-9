const axios = require("axios");

const api = {
  getUser(username) {
    return axios
      .get(`https://api.github.com/users/${username}/events/public`)
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = api;
