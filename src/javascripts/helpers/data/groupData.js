import axios from 'axios';

const dbUrl = 'https://complex-data-2a255-default-rtdb.firebaseio.com/';

const getGroups = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/groups.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Get groups and count up all the users in each group
// RESOLVE the group info and the user counts

export default getGroups;
