import styled from "styled-components";

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
    `;

function ProgressBar(props){
    function countCompletedTasks(){
        let count = 0;
        props.tasks.forEach(element => {
            if(element.status ===  'Done')
                count++;
        });
        return count;
    } 
    const progress = (countCompletedTasks() * 100) / props.tasks.length;
    return (
        <Bar color="#E4E4E4">
            <BarStatus progress={progress} color='#5DE290'></BarStatus>
        </Bar>
    )
}

export default ProgressBar