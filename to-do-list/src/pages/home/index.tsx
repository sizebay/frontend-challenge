import { useState } from "react"
import { CreateTaskBar, FilterButton, ListTasks, SearchBar, TaskItem, OnVoidModal} from '../../components/index'
import { useTaskContext } from "../../services/taskServices/UseTaskContext"
import './style.css'


const Home = () =>{

    const { taskData } = useTaskContext()

    const [searchTerm, setSearchTerm] = useState<string | null>(null);
    const [isDoneStatus, setIsDoneStatus] = useState(false);
    const [isPendingStatus, setIsPendingStatus] = useState(false);

    const filteredTasks = taskData
        ?.filter((task) => {
            const textMatch = task.text.toLowerCase().includes(searchTerm?.toLowerCase() || "");
            const statusDoneMatch = isDoneStatus ? task.isDone === true : task;
            const statusPendingMatch = isPendingStatus ? task.isDone === false : task;
            return textMatch && statusDoneMatch && statusPendingMatch;
        })
    .reverse();
    
    return( 
        <main>
            <div className="container_home">
                <section className="section-filters_home">
                    <div className="search_home">
                        <SearchBar
                            placeholder="Search items"
                            width="100%"
                            height="48px"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="filters_home">
                        <FilterButton
                            placeholder="Done"
                            onClick={() => { 
                                setIsDoneStatus(!isDoneStatus); 
                                setIsPendingStatus(false)
                            }}
                            margin="0em 0em 0em 0.5em"
                            backgroundColor={isDoneStatus ? "#F7F7F8" : "transparent"}
                            border={ isDoneStatus ? "1.5px solid #4DA6B3" : "1.5px solid #DBDBDB"}
                            color={isDoneStatus ? "#4DA6B3" : "#848484"}
                            icon={
                                isDoneStatus && 
                                (
                                    <svg width={11.75} height={15} fill="none" stroke="#4DA6B3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24"  
                                        style={{margin: '0em 0.3em 0em 0em'}}  
                                    > 
                                        <path d="M19.5 6 9 18l-4.5-4.5" />
                                    </svg>
                                )
                                
                            }
                        />
                        <FilterButton
                            placeholder="Pending"
                            onClick={() => {
                                setIsPendingStatus(!isPendingStatus); 
                                setIsDoneStatus(false)
                            }}
                            margin="0em 0em 0em 0.5em"
                            backgroundColor={isPendingStatus ? "#F7F7F8" : "transparent"}
                            border={ isPendingStatus ? "1.5px solid #4DA6B3" : "1.5px solid #DBDBDB"}
                            color={isPendingStatus ? "#4DA6B3" : "#848484"}
                            icon={
                                isPendingStatus && 
                                (
                                    <svg width={11.75} height={15} fill="none" stroke="#4DA6B3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24"  
                                        style={{margin: '0em 0.3em 0em 0em'}}  
                                    > 
                                        <path d="M19.5 6 9 18l-4.5-4.5" />
                                    </svg>
                                )
                                
                            }
                        />
                    </div>
                </section>
                <section className="list-tasks_home">
                    {
                        !searchTerm && !isDoneStatus && !isPendingStatus && (
                            <CreateTaskBar />
                        )
                    }
                    {isDoneStatus && filteredTasks.length === 0 ? (
                            <OnVoidModal onClick={()=> setIsDoneStatus(!isDoneStatus)} />
                        ) : (
                            <div className="container-overflowTasks">
                                <ListTasks>
                                    {filteredTasks.map((task) => (
                                        <TaskItem key={task.id} text={task.text} id={task.id} />
                                    ))}
                                </ListTasks>
                            </div>
                        )
                    }
                    
                </section>
            </div>
        </main>
    )
}
export default Home