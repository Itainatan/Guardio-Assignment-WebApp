import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { API_URL, SortOrder } from "../constants";
import { toast } from "react-toastify";
import { Pokemon } from "../types";

const useHome = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const [items, setItems] = useState<Pokemon[]>([]);
  const [itemsSize, setItemsSize] = useState<number>(10000);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const [filter, setFilter] = useState<string>("");
  const [sort, setSort] = useState<SortOrder>(SortOrder.Ascending);

  useEffect(() => {
    if (shouldFetch) {
      fetchMoreData();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  const fetchMoreData = useCallback(async () => {
    if (!isLoading) {
      try {
        setIsLoading(true);

        const { data } = await axios.get(
          `${API_URL}?page=${page}&sort=${sort}${
            filter && `&filterBy=${filter}`
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
  }, [filter, page, items, isLoading]);

  const onClickShowPokemon = useCallback((hero: Pokemon) => {
    setPokemon(hero);
    setIsModalOpen(true);
  }, []);

  const onClickCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onFilter = (str: string) => {
    setFilter(str);
    setPage(1);
    setItems([]);
    setShouldFetch(true);
  };

  const handleSort = (order: SortOrder) => {
    setSort(order);
    setPage(1);
    setItems([]);
    setShouldFetch(true);
  };

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
  };
};

export default useHome;
