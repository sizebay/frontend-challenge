import { useEffect, useState } from "react"
import { CreateTaskBar, FilterButton, ListTasks, SearchBar, TaskItem, OnVoidModal} from '../../components/index'
import { useTaskContext } from "../../services/taskServices/UseTaskContext"
import './style.css'


const Home = () =>{

    const { taskData } = useTaskContext()
    const [searchTerm, setSearchTerm] = useState<string | null>(null);
    const [filterStatus, setFilterStatus] = useState<string | null>(null);
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [showModal, setShowModal] = useState(false);
    

    const handleFilterTasks = (statusTask: string) => {
        if (isFilterActive && filterStatus === statusTask) {
          setIsFilterActive(false);
          setFilterStatus(null); 
        } else {
          setIsFilterActive(true);
          setFilterStatus(statusTask);
        }
    };
       
    const clearSearchAndFilters = () => {
        setSearchTerm(null);
        setIsFilterActive(false); 
        setFilterStatus(null);
    };

    const filteredTasks = taskData
        ?.filter((task) => {
            const textMatch = task.text.toLowerCase().includes(searchTerm?.toLowerCase() || "");
            const statusMatch = !filterStatus || task.isDone === (filterStatus === "Done");
            return textMatch && statusMatch;
        })
        .reverse();

    useEffect(() => {
        if (filterStatus === 'Done' && filteredTasks.length === 0) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [filterStatus, filteredTasks]);


    
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
                            onClick={() => handleFilterTasks("Done")}
                            margin="0em 0em 0em 0.5em"
                            isClicked={isFilterActive}
                        />
                        <FilterButton
                            placeholder="Pending"
                            onClick={() => handleFilterTasks("Pending")}
                            margin="0em 0em 0em 0.5em"
                            isClicked={isFilterActive}
                        />
                    </div>
                </section>
                <section className="list-tasks_home">
                    {
                        !searchTerm && !isFilterActive && (
                            <CreateTaskBar />
                        )
                    }
                    {showModal ? (
                            <OnVoidModal onClick={clearSearchAndFilters} />
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