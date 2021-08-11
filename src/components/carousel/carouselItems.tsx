import { BootstrapCarousel } from "./bootstrapCarousel";
import { CarouselItem } from "./carouselItem";
import React from "react";

const CarouselItems: React.FC = ({ children }) => (
  <BootstrapCarousel fade>
    {React.Children.map(children, (child) => {
      return <CarouselItem>{child}</CarouselItem>;
    })}
  </BootstrapCarousel>
);

export default CarouselItems;
