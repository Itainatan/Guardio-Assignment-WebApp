import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import PokemonCard from "../PokemonCard";
import { Props } from "./types";

export function PokemonList({ items, itemsSize, fetchMoreData, onClickShowPokemon }: Props) {
    return (
        <AutoSizer>
            {
                ({ height, width }) =>
                    <InfiniteLoader
                        isItemLoaded={index => !!items[index]}
                        itemCount={itemsSize}
                        loadMoreItems={fetchMoreData}
                    >
                        {({ onItemsRendered, ref }) => (
                            <List
                                className="List"
                                height={height}
                                itemCount={itemsSize}
                                itemSize={240}
                                onItemsRendered={onItemsRendered}
                                ref={ref}
                                width={width}
                            >
                                {({ index, style }) =>
                                    <div style={style}>
                                        <PokemonCard key={index} pokemon={items[index]} onClickShowPokemon={() => onClickShowPokemon(items[index])} />
                                    </div>
                                }
                            </List>
                        )}
                    </InfiniteLoader>
            }
        </AutoSizer>
    )
}