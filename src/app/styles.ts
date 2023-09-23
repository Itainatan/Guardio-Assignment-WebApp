import { css } from "@emotion/react";
import { Theme } from "@mui/material";
import { Mode } from "./constants";

export const container = (theme: Theme) => css`
  min-width: 100%;
  min-height: 100vh;
  height: 100vh;
  text-align: start;
  flex-flow: column;
  display: flex;
  background-color: ${theme.palette.mode === Mode.Dark ? '#A9A9A9' : '#fff'}
`;
