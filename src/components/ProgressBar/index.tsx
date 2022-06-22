import { Wrapper } from "./styles";

export interface iProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: iProgressBarProps) => {
  return (
    <Wrapper progress={progress}>
      <div></div>
    </Wrapper>
  );
};

export default ProgressBar;
