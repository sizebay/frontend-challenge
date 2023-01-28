// import { useRootContext } from '../../Hooks/useRootContext.js';
import { useRootContext } from '../../Hooks/useRootContext.js';
import {SemptyMessage} from './style.js'


const EmptyMessage = ({type}) => {
    const { setSearchTask, setTypeAction } = useRootContext();
    const messages = {
        noTasks: <span>No tasks created</span>,
        noTasksPending: <span>No tasks pending</span>,
        noTasksDone: <span>There are no items marked as done. Clear the filter <button onClick={() => setTypeAction('undone_tasks')}>here</button> to see all items.</span>,
        noTasksFound: <span>Your search found no results. <button onClick={() => setSearchTask('')}><p>Clean the search here</p></button> to see all items.</span>,  
    }
    return <SemptyMessage>{messages[type]}</SemptyMessage>;
}

export default EmptyMessage
