import './Products.css'
const Products = () => {
  // Example product data
  const products = [
    { id: 1, image:  "src/assets/pexels-jibarofoto-14526286.jpg", text: "Interactive Panels" },
    { id: 2, image:  "src/assets/pexels-jibarofoto-14526286.jpg", text: "Video Walls" },
    { id: 3, image:  "src/assets/pexels-jibarofoto-14526286.jpg", text: "Digital Signage" },
    { id: 4, image: "src/assets/pexels-jibarofoto-14526286.jpg", text: "PTZ Cameras" },
    { id: 5, image:  "src/assets/pexels-jibarofoto-14526286.jpg", text: "Interactive Displays" },
    { id: 6, image:  "src/assets/pexels-jibarofoto-14526286.jpg", text: "Smart Podiums" },
    { id: 7, image:  "src/assets/pexels-jibarofoto-14526286.jpg", text: "Document Cameras" },
    { id: 8, image:  "src/assets/pexels-jibarofoto-14526286.jpg", text: "Software Solutions" },
  ];

  return (
    <div className="products-container">
      <h1 className="products-heading">Interactive Solutions For Education & Business</h1>
      <div className="underline"></div>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.text} className="product-image" />
            <a href={`#${product.text}`} className="product-text">
              {product.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
