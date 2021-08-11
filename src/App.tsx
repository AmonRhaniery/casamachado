import React from "react";
import { Carousel } from "./components/carousel/carousel";
import { WppContainer } from "./components/container/footer/wppContainer";
import { HomeContainer } from "./components/container/home/homeContainer";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { Subtitle } from "./components/header/subtitle";
import { WppImg } from "./components/image/whatsapp/wppImg";
import { FooterLogo } from "./components/logo/footerLogo";
import { Logo } from "./components/logo/logo";
import { FooterText } from "./components/text/footerText";

function App() {
  return (
    <HomeContainer>
      <Header>
        <Logo />
        <Subtitle>ELÉTRICA • HIDRÁULICA • FERRAGENS • UTILIDADES</Subtitle>
      </Header>
      <Carousel />
      <Footer>
        <FooterText>
          QUADRA 03 NORTE LOTE 01 LOJA 01 <br /> BRAZLÂNDIA - DF
        </FooterText>
        <FooterLogo />
        <WppContainer>
          <a href="http://wa.me/+5561999542605">
            <WppImg src="wpp.png" alt="wpp" />{" "}
          </a>
          <FooterText>(61) 9 9954-2605</FooterText>
        </WppContainer>
      </Footer>
    </HomeContainer>
  );
}

export default App;
