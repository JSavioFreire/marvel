import styled from "styled-components";

export const StyleEachC = styled.div`
    width: 15%;
    height: 300px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: black;
    color: white;
    .topEach{
        width: 80%;
        transition: .3s;
        height: 60%;
        img{
            width: 100%;
    }  
    }
    
    :hover{

        .topEach{
            width: 95%;
        }
    }
`
