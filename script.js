var url = document.querySelector(".search");

const btn = document.querySelector(".search-btn");

var card = document.querySelector(".card");

btn.addEventListener("click", () => {
  card.innerHTML = `<span class="loader"></span>`;
  fetch(`https://jsonlink.io/api/extract?url=${url.value}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      card.innerHTML = `
      <div class="card--img">
          <img src="${response.images[0]}" alt="" />
        </div>
        <div class="card--body">
          <h2>${response.title}</h2>
          <p>${response.description}</p>
        </div>
      `;
    })
    .catch((err) => {
      card.innerHTML = `
      <div class="card--body">
        <h2>Enter a valid URL</h2>
        <p>https://www.example.com</p>
      </div>`;
      console.log("pp", err);
    });
});
