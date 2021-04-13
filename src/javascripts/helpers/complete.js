// TODO: Complete this file

import { getGroups } from './data/groupData';
import getUsers from './data/userData';
import getUserGroups from './data/userGroupsData';

// 1ST EXAMPLE
// const groupsWithUsers = () => new Promise((resolve, reject) => {
//   Promise.all([getUsers(), getGroups(), getUserGroups()])
//     .then(([users, groups, userGroupsJoin]) => {
//       console.warn('users', users);
//       const allGroupInfoArray = [];

//       groups.forEach((group) => {
//         const groupRelationshipsArray = [];
//         const userInfoArray = [];
//         // push all the relationships that apply to this group
//         // use the spread to not have an array of arrays
//         // instead we want an array of objects

//         groupRelationshipsArray.push(...userGroupsJoin.filter((ug) => ug.group_id === group.id));
//         console.warn('group Relationships', groupRelationshipsArray);

//         // loop thru relationships, for each one, find the user that matches the groupRelationships id
//         groupRelationshipsArray.forEach((groupRelationships) => {
//           userInfoArray.push(users.find((user) => user.id === groupRelationships.user_id));
//         });
//         console.warn(userInfoArray);

//         allGroupInfoArray.push({ ...group, users: userInfoArray });
//       });

//       console.warn(allGroupInfoArray);
//       resolve(allGroupInfoArray);
//     }).catch((error) => reject(error));
// });

// 2ND EXAMPLE
const groupsWithUsers = () => new Promise((resolve, reject) => {
  Promise.all([getUsers(), getGroups(), getUserGroups()])
    .then(([users, groups, userGroupsJoin]) => {
      const allGroupInfoArray = groups.map((group) => {
        const groupRelationshipsArray = userGroupsJoin.filter((ug) => ug.group_id === group.id);

        const userInfoArray = groupRelationshipsArray.map((groupRelationship) => users.find((user) => user.id === groupRelationship.user_id));

        return { ...group, users: userInfoArray };
      });
      resolve(allGroupInfoArray);
    }).catch((error) => reject(error));
});

export default groupsWithUsers;
