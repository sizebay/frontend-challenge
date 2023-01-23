import { Bar, BarStatus } from "../styles"


function ProgressBar(){
    const progress = 50;
    
    return (
        <div>
            <Bar color="#E4E4E4">
                <BarStatus progress={progress} color='#5DE290'>.</BarStatus>
            </Bar>
        </div>
    )
}

export default ProgressBar