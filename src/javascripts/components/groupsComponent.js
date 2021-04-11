import moment from 'moment';

const groupsComponent = (groups) => {
  $('#main-container').html(`
    <table class="table table-borderless table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Decription</th>
          <th scope="col">Created</th>
        </tr>
      </thead>
      <tbody id="users-list">
      </tbody>
    </table>
  `);

  groups.forEach((group) => {
    $('#users-list').append(`
      <tr id="${group.id}">
        <th scope="row"><img class="user-list-img" src="${group.image}" alt="${group.name}" /></th>
        <td>${group.name}</td>group
        <td class="group-description">${group.description}</td>
        <td>${moment(group.date).from()}</td>
      </tr>
    `);
  });
};

export default groupsComponent;
