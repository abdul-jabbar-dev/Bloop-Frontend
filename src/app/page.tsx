import Store from "../components/home/Store"
import Testimonial from "../components/home/Testimonial"
import WhyChose from "../components/home/WhyChose"
import HeroSection from "../components/ui/herosection/HeroSection"


const HomePage = () => (
  <>
    <div className="bg-white">
    
      <HeroSection/>
      <Store/>
      <WhyChose/> 
    </div>
  </>
)

export default HomePage
