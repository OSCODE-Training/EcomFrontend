import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  // Example product data
  const products = [
    { id: 1, image: "src/assets/flatpanel.png", text: "Interactive Panels", linkto: "/interactive-panels" },
    { id: 2, image: "src/assets/vidwall.png", text: "Video Walls", linkto: "/video-walls" },
    { id: 3, image: "src/assets/camera.png", text: "PTZ Cameras", linkto: "/ptz-cameras" },
    { id: 4, image: "src/assets/podium.png", text: "Digital Podium", linkto: "/digital-podium" },
    { id: 5, image: "src/assets/singages.png", text: "Digital Signages", linkto: "/digital-signages" },
    { id: 6, image: "src/assets/audio.png", text: "Audio Conferencing System", linkto: "/audio-conferencing" },
    { id: 7, image: "src/assets/presentation.png", text: "Wireless Presentation Device", linkto: "/wireless-presentation" },
    { id: 8, image: "src/assets/doccam.png", text: "Document Camera", linkto: "/document-camera" },
  ];

  return (
    <div className="products-container">
      <h1 className="products-heading">Interactive Solutions For Education & Business</h1>
      <div className="underline"></div>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.text} className="product-image" />
            <Link to={product.linkto} className="product-text">
              {product.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
