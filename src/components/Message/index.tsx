import React from 'react'
import { EFilters } from '../../types/filters';
import { MessageContainer, MessageLink } from '../Modal/style';

interface MessageProps {
  filter: EFilters | undefined;
  onMessageClick: () => void;
}

export default function Message(props: MessageProps) {
  const { filter, onMessageClick } = props;
  return (
        <MessageContainer>
          {filter === EFilters.SEARCH
            ? "Your search found no results. "
            : `There are no items marked as ${filter}. `}
          <MessageLink onClick={() => onMessageClick()}>
            Clear the filter here
          </MessageLink>{" "}
          to see all items.
        </MessageContainer>
  )
}
