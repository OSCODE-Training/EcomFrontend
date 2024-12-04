import React, {useState} from "react";
import Navbar from "../EcomFrontend/src/components/Navbar"
import Menupage from "./components/Menubar";
import Sidebar from "./components/sidebar";
import Imagebar from "./components/imagebar";
import Productintro from "./components/Productintro";
import Rating from "./components/rating";
import Price from "./components/price";
import BuyNow from "./components/BuyNow";
import Model1 from "./components/Model1";
import Iteminfo from "./components/Iteminfo";
import Aboutitem from "./components/Aboutitem";
import Comment from "./components/comment";
import Footer from "../EcomFrontend/src/components/Footer"
import Model2 from "./components/Model2";
// import Footer from "./components/Footer"
// import "./App.css"



function App() {
  const [showImageInSidebar, setShowImageInSidebar] = useState(true);

  const handleMoveImage = (props2) => {
    if (condition) {
      
    }
    setShowImageInSidebar((prev) => !prev);
  };

  return (
    <>
      <Navbar/>
      <Menupage/>
      <Sidebar moveImage={handleMoveImage} showImage={showImageInSidebar}/>
      <Imagebar showImage={!showImageInSidebar}/>
      <Productintro/>
      <Rating/>
      <Price/>
      <BuyNow/>
      <Model1/>
      <Model2/>
      <Iteminfo/>
      <Aboutitem/>
      <Comment/>
      <Footer/>

      

    </>
  )
}

export default App
