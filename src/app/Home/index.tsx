import { Box } from "@mui/material";
import { AppBar } from "@src/common-components";
import * as styles from "./styles";
import useHome from "./hooks";
import PokemonDialog from "../PokemonDialog";
import SortAndFilter from "../SortAndFilter";
import { PokemonList } from "../PokemonList";

export default function Home() {
  const { items, itemsSize, pokemon, isModalOpen, fetchMoreData, onClickShowPokemon, onClickCloseModal, handleSort, handleFilter, } = useHome();

  return (
    <Box css={styles.container}>
      <AppBar />
      <Box css={styles.card} id="scrollableDiv" style={{ height: "80%" }}>
        <SortAndFilter onSort={handleSort} onFilter={handleFilter} />
        <PokemonList items={items} itemsSize={itemsSize} fetchMoreData={fetchMoreData} onClickShowPokemon={onClickShowPokemon} />
        <PokemonDialog isOpen={isModalOpen} pokemon={pokemon} onClose={onClickCloseModal} />
      </Box>
    </Box>
  );
};

