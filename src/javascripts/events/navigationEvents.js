import groupsPage from '../../views/groups';
import usersPage from '../../views/users';
import getGroups from '../helpers/data/groupData';
import getUsers from '../helpers/data/userData';

const navigationEvents = () => {
  $('#users').on('click', () => {
    getUsers().then((users) => usersPage(users));
  });

  $('#groups').on('click', () => {
    getGroups().then((groups) => groupsPage(groups));
  });
};

export default navigationEvents;
