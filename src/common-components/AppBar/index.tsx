import { useContext } from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from "@src/theme";
import { Mode } from "../../app/constants";

const Header = styled(MuiAppBar, {})<MuiAppBarProps>(() => ({
  backgroundColor: "#7e26f1",
}));

export default function AppBar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Header position="absolute">
      <Toolbar style={{ 'justifyContent': 'space-between' }}>
        <Typography component="h1" variant="h6" noWrap>
          Guardio - Pokemon App
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 3,
          }}
        >
          {theme.palette.mode} mode
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === Mode.Dark ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

      </Toolbar>
    </Header>
  )
}