import { SortOrder } from "../constants";

type Props = {
  onSort: (order: SortOrder) => void;
  onFilter: (order: string) => void;
  sortValue: SortOrder;
};

export type { Props };
