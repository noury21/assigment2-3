
import { items } from "./items.js";

export function renderItems(list) {
  const container = document.querySelector("#list");

  container.innerHTML = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("stock-line");
    li.textContent = item.name;
    container.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.inStock === true);
}

export function start() {
  renderItems(items);

  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}


