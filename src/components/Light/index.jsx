import React, { useState } from 'react';
import offUrl from '../Light/light-off.svg';
import onUrl from '../Light/light-on.svg';


const Light = ({name, state}) => {
    

    const [jeZapnuta, setJeZapnuta] = useState(state)

    const zapnout = () => setJeZapnuta('on');
	const vypnout = () => setJeZapnuta('off');



    return (
        <>
            <div className="light" onClick={jeZapnuta === 'on' ? vypnout : zapnout}>
					<div className="light__icon">
						<img src={jeZapnuta === 'on' ? onUrl : offUrl}
                         alt={jeZapnuta === 'on' ? onUrl : offUrl} />

					</div>
					<div className="light__name">
						{name}
					</div>
				</div>

                
                
        </>
    );
    
}

export default Light;