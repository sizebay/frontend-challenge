import { useContext, useEffect } from "react";
import { TaskContext } from "../../Context/TaskContext";
import Body from "../Body";
import { Link } from "./Message";

function Message() {

    const { tasks, filteredTasks, percentage, search, setSearch, currentStatus, setCurrentStatus } = useContext(TaskContext);

    useEffect(() => {

    }, [search, currentStatus]);

    const getMessage = () => {
        if(search.length > 0 && currentStatus !== 'done') {
            return `Your search found no results.`;
        } else if (currentStatus === 'done') {
            return `There are no items marked as done.`;
        }
    }

    const clearFilters = () => {
        setSearch('');
        setCurrentStatus('');
    }

    return (
        <>
            {percentage !== 100 && tasks.length !== 0 && filteredTasks.length === 0 && (
                <Body dataCy="message">
                    {getMessage()} <Link onClick={() => clearFilters()} data-cy="clear-filter-link">Clean the search here</Link> to see all items.
                </Body>
            )}
        </>
    )
}

export default Message;