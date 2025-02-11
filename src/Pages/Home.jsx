import AboutSection from "../Components/AboutSection"
import HeroSection from "../Components/HeroSection"
import ServicesSection from "../Components/ServicesSection"
import GallerySection from "../Components/GallerySection"
import CategoriesSection from "../Components/CategoriesSection"

const Home=()=> {
  return (
    <div><HeroSection/>
    <CategoriesSection/>
    <ServicesSection/>
    <AboutSection/>
    <GallerySection/>
    </div>
  )
}

export default Home