import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { API_URL, SortOrder } from "../constants";
import { toast } from "react-toastify";
import { Pokemon } from "../types";

const useHome = () => {
  const [items, setItems] = useState<Pokemon[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Descending);

  const handleSort = (order: SortOrder) => {
    let sortedData = [...items];

    if (sortOrder === SortOrder.Ascending) {
      sortedData.sort((a, b) => a.number - b.number);
    } else if (sortOrder === SortOrder.Descending) {
      sortedData.sort((a, b) => b.number - a.number);
    }

    setItems(sortedData);
    setSortOrder(order);
    toast.info('List sorted');
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    try {
      const { data } = await axios.get(`${API_URL}?page=${page}`);

      if (data.length) {
        setItems([...items, ...data]);
        setPage(page + 1);
        // handleSort();
      } else {
        setHasMore(false);
      }
    } catch (error) {
      toast.error("there was an error, please try again");
      console.log(error);
    }
  };

  const onClickShowPokemon = useCallback((hero: Pokemon) => {
    setPokemon(hero);
    setIsModalOpen(true);
  }, []);

  const onClickCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    fetchMoreData,
    onClickShowPokemon,
    onClickCloseModal,
    items,
    pokemon,
    isModalOpen,
    hasMore,
    handleSort,
    sortOrder,
  };
};

export default useHome;
