import { ReactNode } from "react";

export type TooltipProps = {
  children: ReactNode;
  delay?: number;
  toolTipContent: string;
};
