import styled from "styled-components";
import casaco from '../../../assets/casaco.svg'

export function Title ({darkOptions:{darkMode}}){
    return(
        <CsTitle
            $darkMode={darkMode}
        >
            <img src={casaco} alt="" />
           <h1>Levo um casaquinho?</h1>
        </CsTitle>
    )
}

const CsTitle = styled.div`
    color: ${p => p.$darkMode ? '#ffffff' : '#222' };  

    display: flex;
    align-items: center;
    margin-bottom: 40px;
    img{
        width: 100%; 
        max-width: 200px; 
    }
    h1{
        font-family: Poppins;
        font-size: 3vw; 
        font-weight: 600;
        @media (max-width: 600px) { 
            font-size: 5vw;
        }
    }
`
