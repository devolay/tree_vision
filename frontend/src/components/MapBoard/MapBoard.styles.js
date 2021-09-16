import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledTypo = styled(Typography)`
  position: absolute;
  color: black;
  z-index: 10;
  padding: 10px;
`;
