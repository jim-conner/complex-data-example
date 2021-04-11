// TODO: Complete this file

import axios from 'axios';

const dbUrl = 'https://complex-data-2a255-default-rtdb.firebaseio.com/';

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Get users and count up all the groups they belong to
// RESOLVE the use info and the group count

export default getUsers;
