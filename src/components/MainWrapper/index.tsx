import { ReactNode } from "react";
import { Wrapper } from "./styles";

interface iMainWrapperProps {
  children: ReactNode;
}

const MainWrapper = ({ children }: iMainWrapperProps) => (
  <Wrapper>{children}</Wrapper>
);

export default MainWrapper;
