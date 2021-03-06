import PopularItems from "../../layouts/Popular Items";
import CarouselBanner from "../../shared-components/CarouselBanner";
import Banner from "../../shared-components/Banner";
import FeaturedProducts from "../../layouts/Featured";
import Benefits from "../../shared-components/Benefits";
import { useAppContext } from "../../../context/state";

const Homepage = () => {
  const state = useAppContext();
  return (
    <div>
      <CarouselBanner />
      <PopularItems sliceValue={state.size < 720 ? 8 : 8} />
      <Banner />
      <FeaturedProducts />
      <Benefits />
    </div>
  );
};

export default Homepage;
