import * as S from "./progressiveBar.styles";

type ProgressiveBarProps = {
  value: number;
};
export const ProgressiveBar = ({ value }: ProgressiveBarProps) => {
  return (
    <S.ExternalProgressiveBar>
      <S.InternalProgressiveBar width={value} />
    </S.ExternalProgressiveBar>
  );
};
