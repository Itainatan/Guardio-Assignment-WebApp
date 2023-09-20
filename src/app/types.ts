type Hero = {
  id: string;
  name: string;
  biography: Biography;
  image: {
    url: string;
  };
  powerstats: PowerStats;
};

type PowerStats = {
  combat: string;
  durability: string;
  intelligence: string;
  power: string;
  speed: string;
  strength: string;
  [key: string]: string;
};

type Biography = {
  ["full-name"]: string;
  alignment: string;
  ["alter-egos"]: string;
  ["first-appearance"]: string;
  [key: string]: string;
};

export type { Hero, PowerStats };
