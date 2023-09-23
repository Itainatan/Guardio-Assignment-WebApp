import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { API_URL, SortOrder } from "../constants";
import { toast } from "react-toastify";
import { Pokemon } from "../types";
import { FixedSizeList } from "react-window";

export default function useHome() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const [items, setItems] = useState<Pokemon[]>([]);
  const [itemsSize, setItemsSize] = useState<number>(10000);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const [filterByType, setFilterByType] = useState<string>("");
  const [sort, setSort] = useState<SortOrder>(SortOrder.Ascending);

  const listRef = useRef<FixedSizeList | null>(null);

  useEffect(() => {
    if (shouldFetch) {
      setShouldFetch(false);
      fetchMoreData();
    }
  }, [shouldFetch]);

  const fetchMoreData = useCallback(async () => {
    if (!isLoading) {
      try {
        setIsLoading(true);

        const { data } = await axios.get(
          `${API_URL}?page=${page}&sort=${sort}${
            filterByType &&
            `&filters=${`type_one=${filterByType.replace(/\s/g, "")}`}`
          }`
        );

        page === 1 && setItemsSize(data.totalLength);

        if (data.list.length) {
          setItems([...items, ...data.list]);
          setPage(page + 1);
        }

        setIsLoading(false);
      } catch (error) {
        toast.error("there was an error, please try again");
        setIsLoading(false);
        console.log(error);
      }
    }
  }, [filterByType, page, items, isLoading]);

  const onClickShowPokemon = useCallback((hero: Pokemon) => {
    setPokemon(hero);
    setIsModalOpen(true);
  }, []);

  const onClickCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const reset = () => {
    setPage(1);
    setItems([]);
    setShouldFetch(true);
    listRef.current && listRef.current.scrollToItem(0);
  };

  const onFilter = useCallback(
    (str: string) => {
      if (str.toLowerCase() !== filterByType.toLowerCase()) {
        setFilterByType(str);
        reset();
      }
    },
    [setFilterByType, reset]
  );

  const handleSort = useCallback((order: SortOrder) => {
    setSort(order);
    reset();
  }, [setSort, reset]);

  return {
    fetchMoreData,
    onClickShowPokemon,
    onClickCloseModal,
    handleSort,
    onFilter,
    items,
    pokemon,
    isModalOpen,
    itemsSize,
    sort,
    listRef,
  };
}
