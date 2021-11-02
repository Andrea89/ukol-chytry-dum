import React from "react";
import Light from "../Light";


const Lights = ({lights}) => {
    return (
        <>
            <div className="lights">
                {lights.map(
                    light => {
                         return <Light
                            key={light.name}
                            name={light.name}
                            state={light.state}
                            />}
                )
                }
            </div>
            
        </>
    );
    
}

export default Lights;