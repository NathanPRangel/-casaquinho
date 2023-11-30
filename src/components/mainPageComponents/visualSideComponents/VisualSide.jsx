import styled from "styled-components";
import { FeaturesWeather, TodayOrNext, NameAndLocation, NextDays } from "./";
import { useState } from "react";

export function VisualSide(props) {
    const {name, coord, main, wind, scale, mapData, darkOptions}= props;
    const [toggleMap, setToggleMap] = useState(true)
    const darkMode = darkOptions.darkMode;

    return (
        <CsVisualSide
            $darkMode={darkMode}        
        >
            <div className="container">
                
                <TodayOrNext
                    setToggleMap={setToggleMap} 
                    toggleMap={toggleMap}
                    darkOptions={darkOptions}
                 />
                <NameAndLocation
                    name={name}
                    coord={coord}
                    darkOptions={darkOptions}
                />

                {
                    toggleMap ?
                        <FeaturesWeather
                            scale={scale} 
                            main={main}
                            wind={wind}
                            darkOptions={darkOptions}
                        /> :
                        <NextDays 
                            scale={scale}
                            mapData={mapData}
                        />
                }
                

                <div className="siteInformation">Dados fornecidos pela Open Weather API</div>
            </div>
        </CsVisualSide>
    )
}

const CsVisualSide = styled.div`
    width: 70%;
    border: 1px;
    background-color: ${p => p.$darkMode ? '#000000' : '#EFEFEF'};
    padding: 1em 1.5em 0.5em; 

    .container{
        width: 100%;
        height: 100%;
        position: relative;

        .siteInformation{
            color: ${p => p.$darkMode ? '#ffffff' : '#000000' };
            position: absolute;
            left: 0%;
            bottom: 0%;
        }

    }

    @media (max-width: 600px) { 
        width: 100%;
    }
`
