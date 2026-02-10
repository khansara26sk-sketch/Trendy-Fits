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

  // ================================
  // MEN
  // ================================
  {
    title: "Men Stylish T-Shirt",
    category: "men",
    image: "images/51h-BVWjULL._SY879_.jpg",
    link: "https://amzn.to/4r3QoEV"
  },
  {
    title: "Men's Flip Pocket Jeans",
    category: "men",
    image: "images/61oCP4fqCDL._SY879_.jpg",
    link: "https://amzn.to/4ko9H96"
  },
  {
    title: "Mens Regular Fit Stretchable Jeans",
    category: "men",
    image: "images/61dFcpPdJkL._SY741_.jpg",
    link: "https://amzn.to/3NZiwdH"
  },
  {
    title: "Mens Ice Blue Baggy Jeans",
    category: "men",
    image: "images/51OhPnDngwL._SY741_.jpg",
    link: "https://amzn.to/4r5jK5J"
  },

  // ================================
  // WOMEN
  // ================================
  {
    title: "Women Short Kurti",
    category: "women",
    image: "images/51w0bq8clpL._SY879_.jpg",
    link: "https://amzn.to/3LZG1CN"
  },
  {
    title: "Women Kurta and Pants Set",
    category: "women",
    image: "images/71I53evweVL._SY741_.jpg",
    link: "https://amzn.to/4r4sEQO"
  },
  {
    title: "London Hills Women’s Ribbed T-Shirt",
    category: "women",
    image: "images/510ZaGeYBOL._SY741_.jpg",
    link: "https://amzn.to/4rFTtuK"
  },
  {
    title: "TAGAS Women’s Knit Top",
    category: "women",
    image: "images/61P4FUN4tkL._SX679_.jpg",
    link: "https://amzn.to/3M06SPb"
  },

  // ================================
  // KIDS
  // ================================
  {
    title: "Boy's Cotton Printed T-Shirt with Denim Shorts",
    category: "kids",
    image: "images/51Qy6ffb9IL.jpg",
    link: "https://amzn.to/4afBOml"
  },
  {
    title: "T-Shirt & Short Set for Baby Boys & Girls",
    category: "kids",
    image: "images/51jjgc9i0AL._SX679_.jpg",
    link: "https://amzn.to/46pCCUC"
  },
  {
    title: "Kids Fashion Wear",
    category: "kids",
    image: "images/61+rr2cf65L._SX679_.jpg",
    link: "https://amzn.to/4a1Ppiq"
  },

  // ================================
  // HOME DECOR
  // ================================
  {
    title: "Modern Wall Clock for Home Decor",
    category: "home",
    image: "images/71UEUuUwwRL._SX679_.jpg",
    link: "https://amzn.to/4apPw6a"
  },
  {
    title: "LED Decorative Table Lamp",
    category: "home",
    image: "images/51bTrIelgmL._SY300_SX300_QL70_FMwebp_.webp",
    link: "https://amzn.to/4ttQ8QU"
  },
{
    title: "3D Galaxy Crystal Ball Night Light",
    category: "home",
    image: "images/51qykdJQ1HL._SX342_SY445_QL70_FMwebp_.webp",
    link: "https://amzn.to/4614H4t"
  },
  {
    title: "SMARTRO Digital Alarm Clock",
    category: "home",
    image: "images/410esH8+PAL._SY300_SX300_QL70_FMwebp_.webp",
    link: "https://amzn.to/4rcGuAO"
  },
  // ================================
  // ELECTRONIC GADGETS
  // ================================
  {
    title: "Wireless Bluetooth Earbuds",
    category: "electronics",
    image: "images/41wumNTZvAL._SY300_SX300_QL70_FMwebp_.webp",
    link: "https://amzn.to/4rso9A1"
  },
  {
    title: "Smart Fitness Band",
    category: "electronics",
    image: "images/31lc-pKZ5ML._SY300_SX300_QL70_FMwebp_.webp",
    link: "https://amzn.to/4atRnqP"
  },
  {
    title: "Amazon Echo Dot (5th Gen)",
    category: "electronics",
    image: "images/81lGxS2ZisL._SL1500_.jpg",
    link: "https://amzn.to/45Z7jQs"
  },
  {
    title: "Honeywell Air Purifier for Home & Office",
    category: "electronics",
    image: "images/71ipnrfS-1L._SL1500_.jpg",
    link: "https://amzn.to/4atRnqP"
  },
  {
    title: "Headphones with Dual-Chip",
    category: "electronics",
    image: "images/31zcH09r48L._SY300_SX300_QL70_FMwebp_.webp",
    link: "https://amzn.to/4rzKlHY"
  },
   {
    title: "GOBOULT Mustang Thunder Bluetooth Headphones",
    category: "electronics",
    image: "images/71A0roq73EL._SX522_.jpg",
    link: "https://amzn.to/4aqenaf"
  },
  {
    title: "OnePlus Bullets Wireless Z3 in-Ear Neckband",
    category: "electronics",
    image: "images/51vT4GzBObL._SL1500_.jpg",
    link: "https://amzn.to/4rLmxkA"
  }
];

// ================================
// DISPLAY PRODUCTS
// ================================
const productContainer = document.getElementById("products");

function displayProducts(filter = "all") {
  productContainer.innerHTML = "";

  const filteredProducts =
    filter === "all"
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
