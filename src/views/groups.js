import groupsComponent from '../javascripts/components/groupsComponent';

const groupsPage = (groups) => {
  $('#main-container').html('<h1 class="main-title">Groups</h1>');
  groupsComponent(groups);
};

export default groupsPage;
