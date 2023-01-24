function ErrorMessage({error, setStatusFilter, setTitleFilter, setError}){
    const messages = [["noDoneResult", ["There are no itens marked as done.", " Clear the filter here" ," to see all items."]],
    ["noResultSearch", ["Your search found no results.", " Clean the search here"," to see all items"]]]; 
    const errorMessages = new Map(messages);

    return(
        <p>{errorMessages.get(error)[0]} <a onClick={() => handleError()} href="#/">{errorMessages.get(error)[1]}</a> {errorMessages.get(error)[2]} </p>
    )

    function handleError(){
        if(error === "noResultSearch"){
            setTitleFilter("");
        }else{
            setStatusFilter([]);
        }
        setError("");
    }
}

export default ErrorMessage;