import "./App.css";
import Header from "./header/HeaderMenu.js";
import Informations from "./Information/Information.js";
import BreakFastHeader from "./BreakFast/BreakFastHeader.js";
import MainCourseHeader from "./MainCourse/MainCourseHeader.js";
import SandwichHeader from "./Sandwich/SandwichHeader.js";
import AppetizerHeader from "./Appetizer/AppetizerHeader.js";
import SaladHeader from "./Salad/SaladHeader.js";
import PizzaHeader from "./Pizza/PizzaHeader.js";
import HotDrinkHeader from "./HotDrink/HotDrink.js"
import CoffeeBaseHeader from "./CoffeeBase/CoffeeBaseHeader.js"
import MocktailsHeader from "./Mocktails/MocktailsHeader.js"
import SodaBaseHeader from "./SodaBase/SodaBaseHeader.js"
import MilkShakeHeader from "./MilkShake/MilkShakeHeader.js"
import CakesHeader from "./Cakes/CakesHeader.js"
import Footer from "./Footer/fiiter.js"
function App() {

  return (
    <>
      <Header />
      <Informations />
      <BreakFastHeader />
      <MainCourseHeader />
      <SandwichHeader />
      <AppetizerHeader />
      <SaladHeader />
      <PizzaHeader />
      <HotDrinkHeader/>
      <CoffeeBaseHeader/>
      <MocktailsHeader/>
      <SodaBaseHeader/>
      <MilkShakeHeader/>
      <CakesHeader/>
      <Footer/>
    </>
  );
}

export default App;
