import { Bar, BarStatus, confetti } from '../styles';
import Confetti from 'react-confetti'



function ProgressBar(props){

    const allTasks = props.tasks.length;

    function countCompletedTasks(){
        let count = 0;
        props.tasks.forEach(element => {
            if(element.status ===  'Done')
                count++;
        });
        return count;
    } 

    const progress = allTasks > 0 ? (countCompletedTasks() * 100) / allTasks : 0;
    return (
        <Bar color="#E4E4E4">
            {   progress === 100 && 
                <Confetti
                style={confetti}
                width={200}
                height={200}
                numberOfPieces={100}
                recycle={false}
                confettiSource={{ x: 100, y: 75, w: 200, h: 200 }}
                />
            }
            <BarStatus progress={progress} color='#5DE290'></BarStatus>
        </Bar>
        
    )
}

export default ProgressBar