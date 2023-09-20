import { Box, CircularProgress } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import { AppBar } from "@src/common-components";
import * as styles from "./styles";
import useHome from "./hooks";
import PokemonCard from "../PokemonCard";
import PokemonDialog from "../PokemonDialog";

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
            <div>Yay! You have seen it all</div>
          }
        >
          {items.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} onClickShowPokemon={() => onClickShowPokemon(pokemon)} onClickRemove={() => { }} />)}
        </InfiniteScroll>

        <PokemonDialog isOpen={isModalOpen} pokemon={pokemon} onClose={onClickCloseModal} />
      </Box>
    </Box>
  );
};

