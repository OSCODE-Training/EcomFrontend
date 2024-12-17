import React, {useState} from 'react'
import Navbar from '../components/Navbar.jsx';
import Menubar from '../components/Menubar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Imagebar from '../components/Imagebar.jsx';
import Productintro from "../components/Productintro.jsx";
import Rating from "../components/rating.jsx";
import Price from "../components/price.jsx";
import BuyNow from "../components/BuyNow.jsx";
import Model1 from "../components/Model1.jsx";
import Iteminfo from "../components/Iteminfo.jsx";
import Aboutitem from "../components/Aboutitem.jsx";
import Comment from "../components/comment.jsx";
import Model2 from "../components/Model2.jsx";
import Footer from "../components/Footer.jsx";
import Addcart from "../components/Addcart.jsx";



const Menupagemain = () => {
    const [showImageInSidebar, setShowImageInSidebar] = useState(true);

  const handleMoveImage = (props2) => {
    if (props2 ) {
      
    }
    setShowImageInSidebar((prev) => !prev);
  };
  return (
    <>
     <Navbar/>
      <Menubar/>
      <Sidebar moveImage={handleMoveImage} showImage={showImageInSidebar}/>
      <Imagebar showImage={!showImageInSidebar}/>
      <Productintro/>
      <Rating/>
      <Price/>
      <BuyNow/>
      <Addcart/>
      <Model1/>
      <Model2/>
      <Iteminfo/>
      <Aboutitem/>
      <Comment/>
      <Footer/>
      </>
  )
}

export default Menupagemain