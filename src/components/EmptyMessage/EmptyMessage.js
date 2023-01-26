import { useRootContext } from "../../index";
import styled from "styled-components";

const SemptyMessage = styled.div`
margin: 38px 0px 0px 0px;
color: #848484;
font-size: 1rem;
font-family: 'Roboto', sans-serif;
text-align: start;
button{
  padding: 0;
  margin: 0px;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  outline: none;
  color: #848484;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  &:hover{
    cursor: pointer;
  }
}
`
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
