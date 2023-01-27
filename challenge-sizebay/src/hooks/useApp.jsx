import { createContext, useContext } from "react";

export const GlobalContext = createContext()

const useApp = () => {
    const {states, setters} = useContext(GlobalContext)
    
    return {states, setters}
}

export default useApp