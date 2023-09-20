import { Box, Button, CircularProgress, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import { AppBar, } from "@src/common-components";
import * as styles from "./styles";
import useHome from "./hooks";
import { useContext, useRef } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from "@src/theme";
import { Mode } from "../constants";
import PokemonCard from "../PokemonCard";

export default function Home() {
  const { fetchMoreData, onClickShowPokemon, onClickCloseModal, items, hasMore, pokemon, isModalOpen } = useHome();

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box css={styles.container}>

      <AppBar position="absolute">
        <Toolbar style={{ 'justifyContent': 'space-between' }}>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
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
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === Mode.Dark ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>

      <Box css={styles.card} id="scrollableDiv" style={{ height: "80%", overflowY: "scroll" }}>

        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<CircularProgress color="inherit" />}
          scrollableTarget="scrollableDiv"
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {items.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} onClickShowPokemon={() => onClickShowPokemon(pokemon)} onClickRemove={() => { }} />)}
        </InfiniteScroll>

        {/* <HeroDialog isOpen={isModalOpen} hero={hero} onClose={onClickCloseModal} /> */}
      </Box>
    </Box>
  );
};

