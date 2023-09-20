import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export const container = (theme: Theme) => css`
  min-width: 100%;
  min-height: 100vh;
  height: 100vh;
  text-align: start;
  flex-flow: column;
  display: flex;
  background-color: ${theme.palette.mode === 'dark' ? '#A9A9A9' : '#fff'}
`;
