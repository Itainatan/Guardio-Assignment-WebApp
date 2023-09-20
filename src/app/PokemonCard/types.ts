import { Pokemon } from "../types";

type Props = {
  pokemon: Pokemon;
  onClickShowPokemon: () => void;
  onClickRemove: () => void;
};

export type { Props };
