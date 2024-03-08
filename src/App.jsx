import { Nabvar } from "@components/Nabvar/Nabvar";
import { Hero } from "@layouts/Hero/Hero";
import { AboutMe } from "@layouts/AboutMe/AboutMe";
import { Banner } from "@components/Banner/Banner";
import { RecognitionGallery } from "@layouts/RecognitionGallery/RecognitionGallery";
import { Prices } from "@layouts/Prices/Prices";
import { MyServices } from "@layouts/MyServices/MyServices";

function App() {
  return (
    <>
      <Nabvar />
      <main>
        <Hero />
        <AboutMe />
        <Banner />
        <RecognitionGallery />
        <MyServices />
        <Prices />
      </main>
    </>
  );
}

export default App;
