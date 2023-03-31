import { FC } from "react";

import Footer from "../../components/footer";
import {
  Container,
  SectionTitle,
} from "../../components/general/generalStyles";
import Navbar from "../../components/header";
import { ContentPageContainer } from "./styles";

const ContentPage: FC = () => {
  return (
    <>
      <Navbar isMobile={false} />
      <ContentPageContainer>
        <SectionTitle className="-secondary">Titulo do imóvel</SectionTitle>
        <Container>
          <div className="floatedImage">

            <img src="http://placehold.it/1200x400" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            consectetur cupiditate cum assumenda deserunt quia similique
            delectus quo rerum? Voluptate harum totam doloremque vitae corrupti
            deserunt sequi magni nostrum eveniet nobis dolor, eius pariatur.
            Pariatur nostrum quisquam perspiciatis labore sed in alias ullam quo
            asperiores beatae, dolorum facere odio nemo cum vel quas esse optio
            officiis! Dignissimos animi laborum magnam sequi dolorum
            exercitationem odio deserunt libero commodi! Nam mollitia labore
            voluptatibus pariatur optio enim, repellendus consequatur nisi
            facilis explicabo nemo sunt, recusandae non libero exercitationem
            magnam sint officia tempore? Saepe voluptatem aperiam eum. Fuga
            aliquid assumenda voluptatibus, in quis reiciendis.
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, nisi
            dolore consectetur error nostrum voluptas eum voluptatum esse
            repudiandae sint quaerat unde pariatur magni vero perferendis saepe
            delectus soluta ipsa ex eaque culpa tempore? Alias deserunt labore
            hic laborum quas quibusdam suscipit libero tempora iure ipsa neque
            pariatur, optio veniam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            obcaecati vitae amet omnis excepturi quis ducimus impedit laboriosam
            tenetur natus fugit eum, illum, magnam debitis architecto? Iste
            beatae molestias veritatis similique nobis. Ab quasi alias aut
            laboriosam reiciendis architecto consequatur, excepturi esse
            molestias id cupiditate explicabo adipisci ex ipsa eveniet vitae
            obcaecati quod quibusdam aliquid, iste facere, illum natus. Ipsum
            quasi perspiciatis possimus nemo quisquam laborum hic alias, culpa
            unde, sit error quis dolore sunt provident placeat, cumque
            laudantium ad corporis perferendis commodi! Porro deserunt nesciunt
            explicabo pariatur vitae quo odio. Commodi nam vel earum dignissimos
            rerum rem, vitae modi libero eum delectus non quidem pariatur
            reprehenderit quasi laborum numquam cum? Eaque qui vel expedita
            laborum? Iusto quis ut praesentium.
          </p>
          </div>
        </Container>
        <Footer />
      </ContentPageContainer>
    </>
  );
};

export default ContentPage;
