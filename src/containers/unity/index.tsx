import { FC, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Footer from "../../components/footer";
import {
  Container,
  SectionTitle,
} from "../../components/general/generalStyles";
import Navbar from "../../components/header";
import {
  Infos,
  InfosContainer,
  InfosList,
  SliderContainer,
  UnityContainer,
} from "./styles";

import {
  area,
  bed,
  building,
  car,
  shower,
  whats
} from "../../assets/icons";

export interface SliderProps {
  slidesPerView?: number;
  onSlideChange?: Function;
  pagination?: boolean;
  navigation?: boolean;
  classes?: string;
  children?: ReactElement[];
}

const Unity: FC = () => {
  return (
    <>
      <Navbar isMobile={false} />
      <UnityContainer>
        <Container>
          <SliderContainer>
            <Swiper
              slidesPerView={1}
              navigation={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <img src="http://placehold.it/450x600" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="http://placehold.it/450x600" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="http://placehold.it/450x600" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="http://placehold.it/450x600" alt="" />
              </SwiperSlide>
            </Swiper>
          </SliderContainer>
          <InfosContainer>
            <SectionTitle className="-primary">Titulo do imóvel</SectionTitle>
            <Infos>
              <h2>Sobre o Imóvel <small>código: APU009</small></h2>
              <p>
                <strong>Composto por:</strong>
              </p>
              <InfosList>
                <li>
                  Metragem
                  <span>
                    <img src={area} alt="" />
                    50m²
                  </span>
                </li>
                <li>
                  Quartos
                  <span>
                    <img src={bed} alt="" />
                    2
                  </span>
                </li>
                <li>
                  Vagas
                  <span>
                    <img src={car} alt="" />
                    1
                  </span>
                </li>
                <li>
                  Banheiros
                  <span>
                    <img src={shower} alt="" />
                    1
                  </span>
                </li>
                <li>
                  Andar
                  <span>
                    <img src={building} alt="" />
                    17
                  </span>
                </li>
              </InfosList>
              <p>
                <strong>Estrutura do Condomínio:</strong>
              </p>
              <p>
                Porteiro 24h, Piscina, Salão de festas, Churrasqueira, Quadra
                Poliesportiva, Parquinho,
              </p>
              <p>
                1 vaga para carro próximo de amplo comércio e farta condução
              </p>
              <a
                href="https://wa.me/5521986661476?text=mensagem"
                className="whatsLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whats} alt="whatsapp logo" />
                Whastapp
              </a>
            </Infos>
          </InfosContainer>
        </Container>
        <Footer />
      </UnityContainer>
    </>
  );
};

export default Unity;
