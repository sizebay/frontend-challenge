import { ReactNode } from "react";
import { Wrapper } from "./styles";

interface MainWrapperProps {
  children: ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps) => (
  <Wrapper>{children}</Wrapper>
);

export default MainWrapper;
