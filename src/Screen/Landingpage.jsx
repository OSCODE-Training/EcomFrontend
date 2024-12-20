import Herosection from "../components/Herosection"
import Services from "../components/Services"
import About from "../components/About"
import Products from "../components/Products"
import Reviews from "../components/Reviews"
const Landingpage = () => {
  return (

    <div className="home-container">
        <Herosection/>
        <Services/>
        <About/>
        <Products/>
        <Reviews/>
    </div>

  )
}

export default Landingpage