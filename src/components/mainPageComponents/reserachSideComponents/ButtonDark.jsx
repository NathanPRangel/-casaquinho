import styled from "styled-components";
import Switch from 'react-switch';




export function ButtonDark({darkOptions:{darkMode, setDarkMode}}){


    const handleChange = (checked) => {
        setDarkMode(checked);
    };
  

    return(
        <CsButtonDark
            $darkMode={darkMode}
        >
            <Switch
                checked={darkMode}
                onChange={handleChange}
            />
            <p>Dark Mode</p>
        </CsButtonDark>
    )
}

const CsButtonDark = styled.div`
    display: flex;
    align-items: center;
    p{  
        margin-left: 2em; 
        color: ${p=> p.$darkMode ? '#fff' : '#000' };
        @media (max-width: 600px) { 
            margin-left: 1em;
        }
    }
`
