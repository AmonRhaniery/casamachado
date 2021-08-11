import React from "react";
import { Carousel } from "./components/carousel/carousel";
import { HomeContainer } from "./components/container/home/homeContainer";
import Header from "./components/header/header";
import { Subtitle } from "./components/header/subtitle";
import { Logo } from "./components/logo/logo";

function App() {
  return (
    <HomeContainer>
      <Header>
        <Logo />
        <Subtitle>ELÉTRICA • HIDRÁULICA • FERRAGENS • UTILIDADES</Subtitle>
      </Header>
      <Carousel />
    </HomeContainer>
  );
}

export default App;
