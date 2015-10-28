export default function(data) {
  return `
    <div class="container person">
      <div class="view">
        <button class="back-button" data-to="people">
          <i class="fa fa-arrow-left"></i>
        </button>
      </div>
      <h1>${data.name}</h1>
      <li><i class="fa fa-user"></i>${data.name}</li>
      <li><i class="fa fa-envelope"></i>${data.email}</li>
      <li><i class="fa fa-mobile"></i>${data.number}</li>
      <li><i class="fa fa-globe"></i>${data.location}</li>
    </div>
  `;
}