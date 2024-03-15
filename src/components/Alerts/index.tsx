import { ClearSearchButton, NoResultsMessage } from "./styles";

interface NoResultsAlertProps {
  message: string;
  onClearFilter: () => void;
}

const NoResultsAlert = ({ message, onClearFilter }: NoResultsAlertProps) => (
  <NoResultsMessage>
    {message}{" "}
    <ClearSearchButton onClick={onClearFilter}>
      Clear the filter here
    </ClearSearchButton>{" "}
    to see all items.
  </NoResultsMessage>
);

export default NoResultsAlert;
