import { CarouselContainer } from "../container/carousel/carouselContainer";
import CarouselItems from "./carouselItems";
import { Image } from "./image";

export const Carousel: React.FC = () => (
  <CarouselContainer>
    <CarouselItems>
      <Image src="frente4.jpg" alt="shop photos" />
      <Image src="estante.jpg" alt="shop photos" />
      <Image src="estante2.jpg" alt="shop photos" />
      <Image src="estante3.jpg" alt="shop photos" />
      <Image src="estante4.jpg" alt="shop photos" />
      <Image src="frente3.jpg" alt="shop photos" />
      <Image src="estante5.jpg" alt="shop photos" />
      <Image src="estante6.jpg" alt="shop photos" />
      <Image src="estante7.jpg" alt="shop photos" />
    </CarouselItems>
  </CarouselContainer>
);
