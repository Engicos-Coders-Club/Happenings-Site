import Hero from "./components/HeroSection";
import Schedule from "./components/Schedule";
import Sponsor from './components/Sponsor'
import About from "./components/About";
import { Suspense, lazy } from "react";
import EventCarouselSection from "./components/EventCarouselSection";
import { SpinnerRoundOutlined } from "spinners-react";

const Footer = lazy(() => import("./components/Footer"));
const Venue = lazy(() => import("./components/Venue"));

function Layout(props) {
  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            width: "100wh",
            backgroundColor: "black",
            display: "grid",
            placeItems: "center",
          }}
        >
          <SpinnerRoundOutlined
            size={80}
            thickness={50}
            speed={100}
            color="rgba(172, 57, 59, 1)"
          />
        </div>
      }
    >
      <div>
        <Hero />
        <About s={""} animation={"section-2"} />
        <EventCarouselSection />
        <Schedule />
        <Sponsor />
        <Venue />
        <Footer />
      </div>
    </Suspense>
  );
}

export default Layout;
