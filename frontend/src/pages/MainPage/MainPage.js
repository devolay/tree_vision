import MapBoard from "../../components/MapBoard/MapBoard";
import * as Styles from "./MainPage.styles";

const MainPage = () => {
  return (
    <Styles.MainContainer>
      <Styles.LeftContainer elevation={40}>
        <Styles.HeaderContainer>
          <Styles.Header variant="h2">Treevision</Styles.Header>
        </Styles.HeaderContainer>
        <Styles.StyledButton color="primary">
          <Styles.ButtonTypo variant="h2">
            Informacje o projekcie
          </Styles.ButtonTypo>
        </Styles.StyledButton>
      </Styles.LeftContainer>
      <Styles.RightContainer>
        <MapBoard></MapBoard>
      </Styles.RightContainer>
    </Styles.MainContainer>
  );
};

export default MainPage;
