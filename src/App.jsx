import { NabvarMenu } from '@components/NabvarMenu/NabvarMenu';
import { Hero } from '@layouts/Hero/Hero';
import { BannerMessage } from '@components/BannerMessage/BannerMessage';
import { MissionAndVision } from '@layouts/MissionAndVision/MissionAndVision';
import { AboutMe } from '@layouts/AboutMe/AboutMe';
import { Banner } from '@components/Banner/Banner';
import { RecognitionGallery } from '@layouts/RecognitionGallery/RecognitionGallery';
import { Promotions } from '@layouts/Promotions/Promotions';
import { Prices } from '@layouts/Prices/Prices';
import { MyServices } from '@layouts/MyServices/MyServices';
import { FooterContact } from '@layouts/FooterContact/FooterContact';

function App() {
  return (
    <>
      <header>
        <NabvarMenu />
      </header>
      <main>
        <Hero />
        <BannerMessage />
        <MissionAndVision />
        <AboutMe />
        <Banner />
        <RecognitionGallery />
        <Promotions />
        <MyServices />
        <Prices />
        <FooterContact />
      </main>
    </>
  );
}

export default App;
