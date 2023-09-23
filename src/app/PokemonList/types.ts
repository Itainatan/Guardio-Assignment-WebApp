import { FixedSizeList } from "react-window";
import { Pokemon } from "../types"
import { RefObject } from "react";

type Props = {
    items: Pokemon[];
    itemsSize: number;
    fetchMoreData: () => void;
    onClickShowPokemon: (item: Pokemon) => void;
    listRef: RefObject<FixedSizeList>;
}

export type { Props }