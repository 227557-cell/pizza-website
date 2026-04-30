const pizzas = [
  {
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1601924582971-4e0a2c6c3a25",
    desc: "Cheese, tomato sauce, basil"
  },
  {
    name: "Pepperoni Pizza",
    image: "https://images.unsplash.com/photo-1548365328-9f547fb0956b",
    desc: "Pepperoni, cheese, sauce"
  },
  {
    name: "Chicken Pizza",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
    desc: "Chicken, cheese, vegetables"
  },
  {
    name: "Veggie Pizza",
    image: "https://images.unsplash.com/photo-1604917877934-07d8f1a0d3f1",
    desc: "Fresh vegetables, cheese"
  }
];

const products = document.getElementById("products");

pizzas.forEach(pizza => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${pizza.image}">
    <h3>${pizza.name}</h3>
    <p>${pizza.desc}</p>
  `;

  products.appendChild(card);
});