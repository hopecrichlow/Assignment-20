function processData(data) {
  return data.map(function(item){
    return `
      <li class="person-list-item" data-person-id="${item.objectId}">
        <img src=${item.photo} height="50px" width="50px">
        <p>${item.name}</p>
      </li>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="container people-list">
      <h1>My Peeps</h1>
      <ul>${processData(data)}</ul>
    </div>
  `;
}
