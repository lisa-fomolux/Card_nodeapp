import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Card } from 'primereact/card';

function CardTemp (props) {
    return(
        <div onClick={props.clickCard}>
            <Card title={props.data.no} subTitle="">
                <p><i className="pi pi-user" style={{color: props.data.gender == 1 ? 'navy' : 'hotpink'}}></i></p>
                <p><span className='name'>{props.state.hideWord==true ? props.data.name[0]+'*'+props.data.name.slice(2) : props.data.name }</span></p>
                <section className='remark'>
                    {
                        props.remarks.map(r=>
                            <div key={uuidv4()}>
                                {props.data.remark[r.en]==='yes' && <i className={r.icon}></i>}
                            </div>
                        )
                    }
                </section>
            </Card>            
        </div>

    )
}

export default CardTemp;