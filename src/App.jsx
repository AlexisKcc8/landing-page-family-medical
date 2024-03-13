import { Nabvar } from "@components/Nabvar/Nabvar";
import { Hero } from "@layouts/Hero/Hero";
import { MissionAndVision } from "@layouts/MissionAndVision/MissionAndVision";
import { AboutMe } from "@layouts/AboutMe/AboutMe";
import { Banner } from "@components/Banner/Banner";
import { RecognitionGallery } from "@layouts/RecognitionGallery/RecognitionGallery";
import { Prices } from "@layouts/Prices/Prices";
import { MyServices } from "@layouts/MyServices/MyServices";

function App() {
  return (
    <>
      <header>
        <Nabvar />
      </header>
      <main>
        <Hero />
        <MissionAndVision />
        <AboutMe />
        <Banner />
        <RecognitionGallery />
        <MyServices />
        <Prices />
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
