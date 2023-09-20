import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../constants";
import { Pokemon } from "../types";

export default function usePokemonDialog({ isOpen, pokemon }: { pokemon: Pokemon | null; isOpen: boolean }) {
    const [image, setImage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        isOpen && fetchMoreData();
    }, [isOpen, pokemon?.name]);

    const fetchMoreData = async () => {
        try {
            setIsLoading(true);
            const { data: url } = await axios.get(
                `${API_URL}/icon/${pokemon?.name}`
            );
            setImage(url);
            setIsLoading(false);
        } catch (error) {
            toast.error("there was an error, please try again");
            console.log(error);
        }
    };

    return {
        image,
        isLoading,
    }
}
