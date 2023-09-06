import './style.css'


interface IOnVoidModalProps{
    onClick(): void;
}

const OnVoidModal = ({ onClick } : IOnVoidModalProps) => {
    
    return(
        <div className='container-onVoidModal'>
            <p>
                There are no items marked as done. 
                <button  onClick={onClick}>
                    Clear the filter here
                </button> 
                to see all items.
            </p>
        </div>
    )
}
export default OnVoidModal