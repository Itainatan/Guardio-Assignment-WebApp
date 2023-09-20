import { Hero } from "../types";

type Props = {
  hero: Hero | null;
  onClose: () => void;
  isOpen: boolean;
};

export type { Props };
