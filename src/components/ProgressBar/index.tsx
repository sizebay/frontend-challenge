import { Wrapper } from "./styles";

export interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <Wrapper progress={progress}>
      <div></div>
    </Wrapper>
  );
};

export default ProgressBar;
