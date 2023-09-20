import { css } from "@emotion/react";

export const container = css`
  color: #000;
  font-family: Roboto, sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  direction: ltr;
  overflow: auto;
`;

export const card = css`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  padding: 50px;
  width: 100%;
  align-items: center;
`;
