import groupsPage from '../../views/groups';
import homePage from '../../views/home';
import searchPage from '../../views/search';
import usersPage from '../../views/users';
import getGroups from '../helpers/data/groupData';
import getUsers from '../helpers/data/userData';

const navigationEvents = () => {
  // I am using JQuery below for less typing.
  // $('#users') === document.querySelector('#users')

  $('#users').on('click', () => {
    getUsers().then((users) => usersPage(users));
  });

  $('#groups').on('click', () => {
    getGroups().then((groups) => groupsPage(groups));
  });

  $('#groups_users').on('click', () => {
    homePage();
  });

  $('#search').on('click', () => {
    const userInput = $('#search-input').val();
    console.warn(userInput);
    searchPage();

    // clear out the search input
    $('#search-input').val('');
  });
};

export default navigationEvents;
