import styled from "styled-components";

export function NameAndLocation(props){
    const {name, coord, darkOptions:{darkMode}}= props;
    return(
        <CsNameAndLocation
            $darkMode={darkMode}
        >
            <h1>{name}</h1>
            <p>{`Lat: ${coord.lat}  Long: ${coord.lon}`}</p>
        </CsNameAndLocation>
    )
}

const CsNameAndLocation = styled.div`
    color: ${p=> p.$darkMode ? '#fff' : '#222'};
    h1{
        font-family: Poppins;
        font-size: 7vw;
        font-weight: 400;
    }
    p{
        font-family: Poppins;
        font-size: 1vw;
        font-weight: 400;
    }
`