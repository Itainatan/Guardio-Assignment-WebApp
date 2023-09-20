import { ReactNode } from "react";

type Props = {
  onClose: () => void;
  open: boolean;
  title?: string;
  children: ReactNode
};

export type { Props };
