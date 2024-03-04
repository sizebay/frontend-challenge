import styled from "styled-components";

const TooltipContainer = styled.div`
  position: absolute;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  height: 50px;
  color: white;
  font-size: 14px;
  padding: 2px 8px;
  margin-top: 14%;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: #848484 0% 0% no-repeat padding-box;

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-width: 0 6px 8px 6px;
    border-color: transparent transparent #848484 transparent;
  }
`;
const Tooltip = ({ isVisible, text }) => {
  return isVisible ? (
    <TooltipContainer>
      <span>{text}</span>
    </TooltipContainer>
  ) : null;
};

export default Tooltip;
