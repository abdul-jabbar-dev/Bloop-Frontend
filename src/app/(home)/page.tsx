
import AvailableEmployee from "../../components/home/AvailableEmployee";
import BecomeASpecialist from "../../components/home/BecomeASpecialist";
import LetUs from "../../components/home/LetUs";
import Store from "../../components/home/Store";
import WhyChose from "../../components/home/WhyChose";
import HeroSection from "../../components/ui/herosection/HeroSection";

const HomePage = () => {
  return (
    <>
      <div className="bg-white">
        <HeroSection />
        <Store />
        <AvailableEmployee />
        <WhyChose />
        <BecomeASpecialist />
        <LetUs />
      </div>
    </>
  )
};

export default HomePage;
