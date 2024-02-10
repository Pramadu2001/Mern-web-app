
import Slider from "../components/Slider"
import Navbar from "../components/Navbar"

 import Categories from "../components/Categories"
  import Listings from "../components/Listings"
 import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <>
      <Navbar/>
    <Slider />
    <Categories />
     <Listings/>
      <Footer/>
    </>
  )
}

export default HomePage