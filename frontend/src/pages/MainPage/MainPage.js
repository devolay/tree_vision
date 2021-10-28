import MapBoard from "../../components/MapBoard/MapBoard";
import * as Styles from "./MainPage.styles";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const MainPage = () => {

  const [isMocked, setIsMocked] = useState(true)

  const handleChange = (event) => {
      setIsMocked(event.target.checked);
  }

  return (
    <Styles.MainContainer>
      <Styles.LeftContainer elevation={0}>
        <Styles.HeaderContainer>
          <Styles.Header variant="h2">Treevision</Styles.Header>
        </Styles.HeaderContainer>
        <Styles.StyledButton color="primary">
          <Styles.ButtonTypo variant="h2">
            Informacje o projekcie
          </Styles.ButtonTypo>
        </Styles.StyledButton>
        <Styles.SwitchContainer>
          <FormControlLabel
            value="Mocked images"
            control={<Switch color="default" />}
            label="Mocked images"
            labelPlacement="start"
            color="white"
            checked={isMocked}
            onChange={handleChange}
          />
        </Styles.SwitchContainer>
      </Styles.LeftContainer>
      <Styles.RightContainer>
        <MapBoard mocked={isMocked}></MapBoard>
      </Styles.RightContainer>
    </Styles.MainContainer>
  );
};

export default MainPage;
