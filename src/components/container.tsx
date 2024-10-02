import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type containerType = {
  children: ReactNode;
};

const Container = ({ children }: containerType) => {
  return <div className={cn("absolute bottom-24 right-12")}>{children}</div>;
};

export default Container;
