const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const errorLine = document.querySelector("#error");
const list = document.querySelector("#list");
const form = document.querySelector("#product-form");

const products = [];

/**
 * Reads the name and price from the inputs.
 */
export function readForm() {
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  return { name, price };
}

/**
 * Empties both input boxes.
 */
export function clearForm() {
  nameInput.value = "";
  priceInput.value = "";
}

/**
 * Draws the products on the page.
 */
export function renderList(items) {
  list.textContent = "";

  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceTag = document.createElement("p");
    priceTag.classList.add("price");
    priceTag.textContent = `${item.price} EGP`;

    card.append(heading, priceTag);
    list.append(card);
  }
}

/**
 * Connects the form to the product list.
 */
export function wireForm() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const item = readForm();

    if (!item.name) {
      errorLine.textContent = "Give the product a name.";
      return;
    }

    if (!priceInput.value || Number.isNaN(item.price) || item.price <= 0) {
      errorLine.textContent = "Give the product a price.";
      return;
    }

    errorLine.textContent = "";

    products.push(item);

    renderList(products);
    clearForm();
  });
}