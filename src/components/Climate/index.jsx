import React, { useState } from 'react';
import temp from '../Climate/temp.svg';

const Climate = ({temperature, humidity}) => {
    const [teplota, setTeplota] = useState(temperature);

    return (
        <>
            <div class="climate">
				<div class="climate__icon">
					<img src={temp}/>
				</div>
				<div class="climate__content">
					<div class="climate__temperature">{teplota}&deg;C</div>
					<div class="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
				</div>
				<div class="climate__controls">
					<button class="button" onClick={()=>setTeplota(teplota+1)}>+</button>
					<button class="button" onClick={()=>setTeplota(teplota-1)}>-</button>
				</div>
			</div>
        </>
    );
    
}

export default Climate;