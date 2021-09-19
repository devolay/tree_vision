import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { InfoWindow } from "@react-google-maps/api";

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

export const InfoContainer = styled.div`
  background-color: #839788;
  color: white;
  padding: 1em;
  text-align: center;
  font-size: 1.1rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.6);
  border: 1px solid #666;
`;
