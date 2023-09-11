function filterProductsByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  // Example usage:
  const products = [
    { name: "Product 1", category: "Electronics" },
    { name: "Product 2", category: "Clothing" },
    { name: "Product 3", category: "Electronics" },
    { name: "Product 4", category: "Furniture" },
  ];
  
  const filterByCategory = filterProductsByCategory(products);
  
  const electronicsProducts = filterByCategory("Electronics");
  console.log(electronicsProducts);
  
  const clothingProducts = filterByCategory("Clothing");
  console.log(clothingProducts);
  