import styled from "styled-components";

export function TodayOrNext({setToggleMap, toggleMap, darkOptions:{darkMode}}){
    return(
        <CsTodayOrNext
            $toggleMap={toggleMap?'.next':'.today'}
            $darkMode={darkMode}
        >
            <div 
                className="option today"
                onClick={()=>setToggleMap(true)}
            >
                Hoje
            </div>
            
            <div 
                className="option next"
                onClick={()=>setToggleMap(false)}
            >
                Próximos dias
            </div>
        </CsTodayOrNext>
    )
}

const CsTodayOrNext = styled.div`
    display: flex;
    margin-bottom: 2em; // Torna a margem responsiva
    color: ${p=>p.$darkMode ? '#ffffff' : '#000000'};

    .option{
        z-index: 10;
        font-size: 3vw;
        margin-right: 5vw;
        cursor: pointer;
        @media (max-width: 600px) { // Ajusta o tamanho da fonte e a margem para telas pequenas
            font-size: 6vw;
            margin-right: 10vw;
        }
    }
    ${p=>p.$toggleMap}{
        color: #C8C8C8;
    }
`
