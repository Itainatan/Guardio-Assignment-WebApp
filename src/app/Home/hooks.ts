import { useCallback, useState } from "react";
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

  const handleSort = (order: SortOrder) => {
    let sortedData = [...items];

    if (order === SortOrder.Ascending) {
      sortedData.sort((a, b) => a.number - b.number);
    } else if (order === SortOrder.Descending) {
      sortedData.sort((a, b) => b.number - a.number);
    }

    setItems(sortedData);
    toast.info('List sorted');
  };

  const fetchMoreData = async () => {
    if (!isLoading) {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${API_URL}?page=${page}`);

        page === 1 && setItemsSize(data.totalLength);

        if (data.list.length) {
          setItems([...items, ...data.list]);
          setPage(page + 1);
        }

        setIsLoading(false);
      } catch (error) {
        toast.error("there was an error, please try again");
        setIsLoading(false)

        console.log(error);
      }
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
    handleSort,
    itemsSize,
  };
};

export default useHome;
