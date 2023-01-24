import styled from "styled-components";
import Confetti from 'react-confetti'

const Bar = styled.div`
        background: ${(props) => props.color} 0% 0% no-repeat padding-box;
        border-radius: 4px;
        width: 100%;
        height: 24px;
    `;

const BarStatus = styled.div`
        width: ${(props) => props.progress}%;
        height: inherit;
        background-color: ${(props) => props.color};
        border-radius: inherit;
        transition: all 500ms ease-out;
    `;

function ProgressBar(props){

    const confetti = {
        left: "50%",
        transform: "translate(80%)"
    }

    function countCompletedTasks(){
        let count = 0;
        props.tasks.forEach(element => {
            if(element.status ===  'Done')
                count++;
        });
        return count;
    } 

    const allTasks = props.tasks.length;
    const progress = allTasks > 0 ? (countCompletedTasks() * 100) / props.tasks.length : 0;
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