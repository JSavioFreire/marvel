import { createContext, useState } from "react";
import { useFetch } from '../hooks/useFetch'
import { url } from "../url/url";

export const MarvelContext = createContext()

export const MarvelContextProvider = ({children}) => {
    const [qtd, setQtd] = useState(100) 
    const {data, loading, error} = useFetch(url + '&limit=' + qtd)
    return(
        <MarvelContext.Provider value={{data, loading, error,setQtd}}>
            {children}
        </MarvelContext.Provider>
    )
}