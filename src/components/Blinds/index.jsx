import React, { useState } from 'react';
import zaluzieOtevrene from '../Blinds/blinds-open.svg';
import zaluzieZavrene from '../Blinds/blinds-closed.svg';

const Blinds = ({state}) => {
    
    const [jeZapnuta, setJeZapnuta] = useState(state)

    const zapnout = () => setJeZapnuta('on');
	const vypnout = () => setJeZapnuta('off');


    return (
        <>
        <div class="blinds">
				<div className="blinds__icon">
					<img src={jeZapnuta === 'on' ? zaluzieOtevrene : zaluzieZavrene}/>
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div class="blinds__controls">
					<button className={jeZapnuta === 'on' ? "button button--active": "button"} 
                        onClick={zapnout}
                        >Otevřeno</button>
					<button className={jeZapnuta === 'off' ? "button button--active" : "button"} 
                        onClick={vypnout}
                        >Zavřeno</button>
				</div>
			</div>
            
        </>
    );
    
}

export default Blinds;