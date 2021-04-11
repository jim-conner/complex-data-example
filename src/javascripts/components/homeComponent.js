const homeComponent = (groupsWithUsersArray) => {
  $('#main-content').append(`
    <div class="card" style="width: 18rem;">
      <img src="${groupsWithUsersArray.image}" class="card-img-top" alt="${groupsWithUsersArray.name}">
      <div class="card-body">
        <h5 class="card-title">${groupsWithUsersArray.name}</h5>
        <p class="card-text">${groupsWithUsersArray.description}</p>
      </div>
      <ul id="groups-users" class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  `);

  groupsWithUsersArray.users.forEach((user) => {
    $('#groups-users').append(`<li class="list-group-item">${user.first_name} ${user.last_name}</li>`);
  });
};

export default homeComponent;
