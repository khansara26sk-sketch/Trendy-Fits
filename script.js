const products = [
  {
    title: "Men Casual Shirt",
    category: "men",
    image: "images/41tGbsN3b8L._AC_UL480_FMwebp_QL65_.webp",
    link: "https://amzn.to/YOUR-AFFILIATE-LINK"
  },
  {
    title: "Women Summer Dress",
    category: "women",
    image: "images/616eGfn0phL._AC_UL480_FMwebp_QL65_.webp",
    link: "https://amzn.to/YOUR-AFFILIATE-LINK"
  },
  {
    title: "Kids Party Wear",
    category: "kids",
    image: "images/61JkRcWSSEL._AC_UL480_FMwebp_QL65_.webp",
    link: "https://amzn.to/YOUR-AFFILIATE-LINK"
  }
];

const productContainer = document.getElementById("products");

function displayProducts(filter) {
  productContainer.innerHTML = "";

  products
    .filter(p => filter === "all" || p.category === filter)
    .forEach(product => {
      productContainer.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <a href="${product.link}" target="_blank">Shop Now</a>
        </div>
      `;
    });
}

function filterProducts(category) {
  displayProducts(category);
}

displayProducts("all");
