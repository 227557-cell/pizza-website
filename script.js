fetch("https://dummyjson.com/recipes")
  .then(res => res.json())
  .then(data => {
    const products = document.getElementById("products");

    data.recipes.slice(0, 10).forEach(recipe => {

      if (recipe.name.toLowerCase().includes("pizza")) {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${recipe.image}">
          <h3>${recipe.name}</h3>
          <p>${recipe.ingredients.slice(0,3).join(", ")}</p>
        `;

        products.appendChild(card);
      }
    });
  });