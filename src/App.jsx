import { NabvarMenu } from "@components/NabvarMenu/NabvarMenu";
import { Hero } from "@layouts/Hero/Hero";
import { BannerMessage } from "@components/BannerMessage/BannerMessage";
import { MissionAndVision } from "@layouts/MissionAndVision/MissionAndVision";
import { AboutMe } from "@layouts/AboutMe/AboutMe";
import { Banner } from "@components/Banner/Banner";
import { Promotions } from "@layouts/Promotions/Promotions";
import { Prices } from "@layouts/Prices/Prices";
import { MyServices } from "@layouts/MyServices/MyServices";
import { FooterContact } from "@layouts/FooterContact/FooterContact";

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
        <Promotions />
        <MyServices />
        <Prices />
        <FooterContact />
      </main>
    </>
  );
}

export default App;
