import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import SliderOne from "./components/SliderOne"
import SliderTwo from "./components/SliderTwo"
import Cards from "./components/Cards"
import Faqs from "./components/Faqs"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <Navbar/>
     <HeroSection/>
     <div className="relative float-right w-full bg-black sm:p-0 lg:w-[89%] md:p-0">

     <SliderOne/>
     <SliderTwo/>
     <Cards/>
     <Faqs/>
     <Footer/>

     </div>
    </>
  )
}

export default App
