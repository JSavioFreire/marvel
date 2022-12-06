import { useContext, useEffect, useState } from "react"
import { MarvelContext } from '../../context/contexApi'
import EachCharacter from "../../smallComponents/eachCharacter/EachCharacter"

import { HomeS } from "./StyleHome"

const Home = () => {

    const [dataHerous, setDataHerous] = useState()

    const { data } = useContext(MarvelContext)

    useEffect(()=>{
        if(data) setDataHerous(data.data.results)
    },[data])
    
    

    console.log(dataHerous)

    return (
        <HomeS>
            {dataHerous && dataHerous.map((hero) => (
            <EachCharacter key={hero.id} name={hero.name} image={hero.thumbnail.path + '.' + hero.thumbnail.extension}/>
            ))}
        </HomeS>
    )
}

export default Home