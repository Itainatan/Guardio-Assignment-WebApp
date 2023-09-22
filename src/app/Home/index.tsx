import { Box } from "@mui/material";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import { AppBar } from "@src/common-components";
import * as styles from "./styles";
import useHome from "./hooks";
import PokemonCard from "../PokemonCard";
import PokemonDialog from "../PokemonDialog";
import SortButtons from "../SortButtons";

export default function Home() {
  const { fetchMoreData, onClickShowPokemon, onClickCloseModal, items, itemsSize, pokemon, isModalOpen, handleSort, sortOrder } = useHome();

  return (
    <Box css={styles.container}>
      <AppBar />
      <Box css={styles.card} id="scrollableDiv" style={{ height: "80%" }}>
        <SortButtons onSort={handleSort} order={sortOrder} />

        <AutoSizer>
          {
            ({ height, width }) => <InfiniteLoader
              isItemLoaded={index => !!items[index]}
              itemCount={itemsSize}
              loadMoreItems={fetchMoreData}
            >
              {({ onItemsRendered, ref }) => (
                <List
                  className="List"
                  height={height}
                  itemCount={itemsSize}
                  itemSize={300}
                  onItemsRendered={onItemsRendered}
                  ref={ref}
                  width={width}
                >
                  {({ index, style }) =>
                    <div style={style}>
                      <PokemonCard key={index} pokemon={items[index]} onClickShowPokemon={() => onClickShowPokemon(items[index])} onClickRemove={() => { }} />
                    </div>
                  }
                </List>
              )}
            </InfiniteLoader>
          }
        </AutoSizer>

        <PokemonDialog isOpen={isModalOpen} pokemon={pokemon} onClose={onClickCloseModal} />
      </Box>
    </Box>
  );
};

