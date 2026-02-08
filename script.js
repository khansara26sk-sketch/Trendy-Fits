// ================================
// PRODUCT DATA (ADD MORE HERE ONLY)
// ================================
const products = [
  {
    title: "Men Casual Shirt",
    category: "men",
    image: "images/41tGbsN3b8L._AC_UL480_FMwebp_QL65_.webp",
    link: "https://amzn.to/4knCAlR"
  },
  {
    title: "Women Summer Dress",
    category: "women",
    image: "images/616eGfn0phL._AC_UL480_FMwebp_QL65_.webp",
    link: "https://amzn.to/3O0o8UV"
  },
  {
    title: "Kids Party Wear Dress",
    category: "kids",
    image: "images/61JkRcWSSEL._AC_UL480_FMwebp_QL65_.webp",
    link: "https://amzn.to/4qsMMep"
  },

  // 🔽 ADD MORE PRODUCTS BELOW 🔽
  {
    title: "Men Stylish T-Shirt",
    category: "men",
    image: "images/51h-BVWjULL._SY879_.jpg",
    link: "https://amzn.to/4r3QoEV"
  },
  {
    title: "Women Short Kurti",
    category: "women",
    image: "images/51w0bq8clpL._SY879_.jpg",
    link: "https://amzn.to/3LZG1CN"
  },
  {
    title: "Kids Fashion",
    category: "kids",
    image: "images/61+rr2cf65L._SX679_.jpg",
    link: "https://amzn.to/4a1Ppiq"
  },
  {
    title: "Men's Flip Pocket Jeans",
    category: "men",
    image: "images/61oCP4fqCDL._SY879_.jpg",
    link: "https://amzn.to/4ko9H96"
  },
  {
    title: "Women Kurta and Pants Set",
    category: "women",
    image: "images/71I53evweVL._SY741_.jpg",
    link: "https://amzn.to/4r4sEQO"
  },
  {
    title: "Boy's Cotton Printed T-shirt with Denim Shorts",
    category: "kids",
    image: "images/51Qy6ffb9IL.jpg",
    link: "https://amzn.to/4afBOml"
  },
  {
    title: "T-shirt and Short Set for Baby Boys & Baby Girls",
    category: "kids",
    image: "images/51jjgc9i0AL._SX679_.jpg",
    link: "https://amzn.to/46pCCUC"
  },
   {
    title: "Mens Regular Fit Strachable Jeans",
    category: "men",
    image: "images/61dFcpPdJkL._SY741_.jpg",
    link: "https://amzn.to/3NZiwdH"
  }
];

// ================================
// DISPLAY PRODUCTS
// ================================
const productContainer = document.getElementById("products");

function displayProducts(filter = "all") {
  productContainer.innerHTML = "";

  const filteredProducts = filter === "all"
    ? products
    : products.filter(product => product.category === filter);

  if (filteredProducts.length === 0) {
    productContainer.innerHTML = "<p>No products found.</p>";
    return;
  }

  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <a href="${product.link}" target="_blank" rel="nofollow noopener">
        Shop Now
      </a>
    `;

    productContainer.appendChild(productCard);
  });
}

// ================================
// FILTER BUTTON FUNCTION
// ================================
function filterProducts(category) {
  displayProducts(category);
}

// ================================
// LOAD ALL PRODUCTS ON PAGE LOAD
// ================================
displayProducts();
