import { Pokemon } from "../types";

type Props = {
  pokemon: Pokemon | null;
  onClose: () => void;
  isOpen: boolean;
};

export type { Props };
