// TODO: Complete this file

import { getGroups } from './data/groupData';
import getUsers from './data/userData';
import getUserGroups from './data/userGroupsData';

const groupsWithUsers = () => new Promise((resolve, reject) => {
  Promise.all([getUsers(), getGroups(), getUserGroups()])
    .then(([users, groups, userGroupsJoin]) => {
      console.warn(users, userGroupsJoin);
      // // REMEMBER .map() returns an array
      const allGroupInfoArray = groups.map((group) => {
        // filter all the relationships looking in userGroupsJoin for the ones that apply to this specific group
        const userInfoArray = [];
        // Map through all of the relationships and finding the user
        // Use the spread operator to create an object that includes the group info and all the users info
        return { ...group, users: userInfoArray };
      });
      resolve(allGroupInfoArray);
    }).catch((error) => reject(error));
});

export default groupsWithUsers;
