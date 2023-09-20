import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

export const AppBar = styled(MuiAppBar, {})<MuiAppBarProps>(() => ({
  zIndex: 1,
  backgroundColor: "#6A806C",
}));


