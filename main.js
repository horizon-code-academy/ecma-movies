const template = (movie) => `
    <div class="col-2">
        <div class="card">
        ${
          movie.Poster
            ? `<img class="card-img-top" src="${movie.Poster}" />`
            : `<div class="card-img-top w282 bg-light text-center">No image</div>`
        }
        <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">
            Year: ${movie.Year}
            <br />
            Runtime: ${movie.Runtime}
            </p>
        </div>
        </div>
    </div>
`;

async function getDataFromAPI() {
  return await fetch(
    "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
  )
    .then((response) => response.json())
    .then((data) => data);
}

function templateData(movies) {
  return movies.map((movie) => template(movie));
}

async function showData() {
  const data = await getDataFromAPI();
  const templates = templateData(data);
  const row = document.querySelector(".row");
  if (templates.length === 0) {
    row.innerHTML = `<div class="col-12 text-center pt-5">No movies available...</div>`;
  }
  for (let i = 0; i < templates.length; i += 1) {
    row.innerHTML += templates[i];
  }
}

showData();
