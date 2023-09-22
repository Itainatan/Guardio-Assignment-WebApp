import { Pokemon } from "../types"

type Props = {
    items: Pokemon[];
    itemsSize: number;
    fetchMoreData: () => void;
    onClickShowPokemon: (item: Pokemon) => void;
}

export type { Props }