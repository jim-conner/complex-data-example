import axios from 'axios';

const dbUrl = 'https://complex-data-2a255-default-rtdb.firebaseio.com/';

const getUserGroups = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/user_groups.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getUserGroups;
