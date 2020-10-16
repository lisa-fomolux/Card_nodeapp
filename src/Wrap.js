import React from 'react';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Wrap(props){
    return(
        <div>
            {props.children}
        </div>
    )
}

export default Wrap;