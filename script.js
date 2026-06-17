document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector(".contact2");
  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#city");
  let feedbackInput = document.querySelector("#feedbackk");
  let main = document.querySelector(".customer-review");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let h3 = document.createElement("h3");
    h3.textContent = nameInput.value.trim();

    let h5 = document.createElement("h5");
    h5.textContent = emailInput.value.trim();

    let p = document.createElement("p");
    p.textContent = feedbackInput.value.trim();

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    nameInput.value = "";
    emailInput.value = "";
    feedbackInput.value = "";
  });
});
