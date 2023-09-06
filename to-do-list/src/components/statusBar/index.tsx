import { useEffect, useState } from 'react'
import { useTaskContext } from '../../services/taskServices/UseTaskContext';
import Lottie from "lottie-react";
import frameConfetti from '../../assets/frames/animation_frameConfetti.json'
import './style.css'


const StatusBar = () => {

    const { taskData } = useTaskContext()
    const [isFinishedStatus, setIsFinishedStatus] = useState(false)
    const [porcentageDoneTask, setPorcentageDoneTask] = useState(0)

    useEffect(() => {
        const doneTasks = taskData.filter(task => task.isDone).length;
        const porcentageDoneTasks = taskData.length === 0 ? 0 : (doneTasks / taskData.length) * 100;
        setPorcentageDoneTask(porcentageDoneTasks)
        if (porcentageDoneTasks === 100) {
            setIsFinishedStatus(true);
        }else{
            setIsFinishedStatus(false);
        }
    }, [taskData]);

    
    return(
        <div className='container_statusBar'>
            <div className='statusBar'>
                <span 
                    className='statusBar-content'
                    data-testid='statusBar-content'
                    style={{
                        width:`${porcentageDoneTask}%`
                    }}
                >
                    {isFinishedStatus &&
                        <span className='statusBar-frame'>
                            <Lottie
                                autoPlay={true}
                                animationData={frameConfetti}
                                loop={false}
                                style={{
                                   position: 'relative',
                                   width: '100%',
                                   height: '100%'
                                }}
                            />
                        </span>
                    }
                </span>
            </div>
        </div>
    )
}
export default StatusBar