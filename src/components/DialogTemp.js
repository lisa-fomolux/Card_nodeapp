import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import { Button } from 'primereact/button';

function Dialog (props) {

    return(
        <form onSubmit={props.onSubmit} className='dialog-form'>
            <main>
                <p>{props.thisCard._id}</p>
                <label>編號：
                    <input name='no' type='number' min='1' placeholder={props.thisCard.no} onChange={props.changeInput} />
                </label>
                <select htmlFor='gender' placeholder={props.thisCard.gender} onChange={props.changeInput}>
                    <option value={1}>男</option>
                    <option value={2}>女</option>
                </select>
                <label>姓名：
                    <input type='text' name='name' placeholder={props.thisCard.name} onChange={props.changeInput} />
                </label>
                <label className='remark-div'>備註：
                    {
                        props.remarks.map(r=>
                            <div key={uuidv4()}>
                                <i className={r.icon}></i>
                                <span>{r.zh}: </span>
                                    <select htmlFor={r.en} name={r.en} value={props.thisCard.remark[r.en]} onChange={props.changeInput} className='remark-item'>
                                        <option value='yes'>yes</option>
                                        <option value='no'>no</option>
                                    </select>
                                <span>{props.thisCard.remark[r.en]}</span>
                            </div>
                        )
                    }
                </label>
            </main>
            <footer>
                <Button label="確認" icon="pi pi-check" className="p-button-outlined" />
                <Button label="刪除" icon="pi pi-times" className="p-button-outlined p-button-danger" onClick={props.clickDelBtn} />
            </footer>
        </form>
    )
}

export default Dialog;