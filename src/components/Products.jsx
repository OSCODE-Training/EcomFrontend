import './Products.css'
const Products = () => {
  // Example product data
  const products = [
    { id: 1, image:  "src/assets/flatpanel.png", text: "Interactive Panels" },
    { id: 2, image:  "src/assets/vidwall.png", text: "Video Walls" },
    { id: 3, image: "src/assets/camera.png", text: "PTZ Cameras" },
    { id: 4, image:  "src/assets/podium.png", text: "Digital Podium" },
    { id: 5, image:  "src/assets/singages.png", text: "Digital Singages" },
    { id: 6, image:  "src/assets/audio.png", text: "Audio Conferencing System" },
    { id: 7, image:  "src/assets/presentation.png", text: "Wireless Presentation Device " },
    { id: 8, image:  "src/assets/doccam.png", text: "Document Camera" },
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
