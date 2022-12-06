import { StyleEachC } from "./styleEachCharacter"

const EachCharacter = ({name, image}) => {
  return (
    <StyleEachC>
        <div className="topEach">
            <img src={image}/>

        </div>
        <h2>{name}</h2>

    </StyleEachC>
  )
}

export default EachCharacter