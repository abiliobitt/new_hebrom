import { FC } from "react";

import Footer from "../../components/footer";
import {
  Container,
  SectionTitle,
} from "../../components/general/generalStyles";
import Navbar from "../../components/header";
import { useContent } from "../../contexts/content";
import { ContentPageContainer } from "./styles";

const ContentPage: FC = () => {
  const { content } = useContent()
  return (
    <>
      <Navbar isMobile={false} />
      <ContentPageContainer>
        <SectionTitle className="-secondary">{content?.title}</SectionTitle>
        <Container>
          <div className="floatedImage">

            <img src={content?.imageUrl} alt="Banner" />
            {
              content?.text.map(p => <p>{p}</p>)
            }
          </div>
        </Container>
        <Footer />
      </ContentPageContainer>
    </>
  );
};

export default ContentPage;
