import {useContext} from "react";
import {TasksContext} from "../contexts/Tasks";

import styled from "styled-components";

const Message = styled.p`
    font-size: 14px;
    color: #848484;
`;
const Underline = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;

function Messages(props) {
    const {clearFilters, completed, search} = useContext(TasksContext);
    return (
        <div>
            {search.length > 0 && props.searchLength == 0 && (
                <Message>
                    Your search found no results. <Underline onClick={clearFilters}>Clear the filter here</Underline> to see all items
                </Message>
            )}

            {props.completedTasks.length == 0 && completed == true && (
                <Message>
                    There is no items marked as done. <Underline onClick={clearFilters}>Clear the filter here</Underline> to see all items
                </Message>
            )}
        </div>
    );
}

export default Messages;
