import AboutSection from "../Components/AboutSection"
import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import ServicesSection from "../Components/ServicesSection"
import GallerySection from "../Components/GallerySection"

const Home=()=> {
  return (
    <div><HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <GallerySection/>
    <Footer/>
    </div>
  )
}

export default Home