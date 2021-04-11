const homeComponent = (groupsWithUsersObj) => {
  $('#main-container').append('<div id="group-cards"></div>');
  $('#group-cards').append(`
    <div class="card" style="width: 18rem;">
      <img src="${groupsWithUsersObj.image}" class="card-img-top" alt="${groupsWithUsersObj.name}">
      <div class="card-body">
        <h5 class="card-title">${groupsWithUsersObj.name}</h5>
        <p class="card-text">
        <h6>Description:</h6>
          ${groupsWithUsersObj.description}
        </p>
      </div>
      <ul id="groups-users-${groupsWithUsersObj.id}" class="list-group list-group-flush">
        <li class="list-group-item"><b>Group Members</b></li>
      </ul>
      <!-- <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div> -->
    </div>
  `);

  groupsWithUsersObj.users.forEach((user) => {
    $(`#groups-users-${groupsWithUsersObj.id}`).append(`<li class="list-group-item">${user.first_name} ${user.last_name}</li>`);
  });
};

export default homeComponent;
