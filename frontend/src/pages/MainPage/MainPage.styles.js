import styled from "styled-components";
import { Typography, Paper, Button } from "@material-ui/core";

export const LeftContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  width: 25%;
  border-radius: 0px;
  background-color: #839788;
  height:100%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 100px;
  padding-left: 40px;
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content:flex-end;
  align-items: flex-end;
  padding-right: 20px;
  width:100%
`;

export const Header = styled(Typography)`
  color: white;
  font-size: 40px;
`;

export const ButtonTypo = styled(Typography)`
  color: white;
  font-size: 20px;
  font-weight: 0px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  justify-content: left;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 40px;
  height: 60px;
`;
