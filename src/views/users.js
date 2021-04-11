import usersComponent from '../javascripts/components/usersComponent';

const usersPage = (users) => {
  $('#main-container').html('<h1 class="main-title">Users</h1>');
  usersComponent(users);
};

export default usersPage;
