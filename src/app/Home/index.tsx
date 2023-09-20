import { Box, Button, CircularProgress, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { AppBar, } from "@src/common-components";
import * as styles from "./styles";
import useHome from "./hooks";
import { useContext } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from "@src/theme";
import { Mode } from "../constants";

export default function Home() {
  const { onSubmit, isLoading, register, history, onRemoveHero, onClickShowHero, onClickCloseModal, hero, isModalOpen } = useHome();

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <div css={styles.container}>

      <AppBar position="absolute">
        <Toolbar style={{ 'justifyContent': 'space-between' }}>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Octup - SuperHero App
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
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === Mode.Dark ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>

      <div css={styles.card}>

        {/* {isLoading ? (
          <CircularProgress color="inherit" />
        ) : (
          <Button type="submit" variant="contained" css={styles.submitButton} onClick={onSubmit}>
            Search
          </Button>
        )}

        {history.map((hero: Hero) => <HeroCard key={hero.id} hero={hero} onClickShowHero={() => onClickShowHero(hero)} onClickRemove={() => onRemoveHero(hero.id)} />)} */}

      </div>
    </div>
  );
};

