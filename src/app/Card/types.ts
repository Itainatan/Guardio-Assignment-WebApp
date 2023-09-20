import { Hero } from "../types";

type Props = {
  hero: Hero;
  onClickShowHero: () => void;
  onClickRemove: () => void;
};

export type { Props };
