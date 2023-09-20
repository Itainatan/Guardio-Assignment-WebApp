import { Box, CircularProgress } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import { AppBar } from "@src/common-components";
import * as styles from "./styles";
import useHome from "./hooks";

import PokemonCard from "../PokemonCard";

export default function Home() {
  const { fetchMoreData, onClickShowPokemon, onClickCloseModal, items, hasMore, pokemon, isModalOpen } = useHome();

  return (
    <Box css={styles.container}>
      <AppBar />
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

