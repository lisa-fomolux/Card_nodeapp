import React, { useContext, useState } from 'react';

import {DataContext} from '../contexts/DataContext'

function Create () {
    const {url, remarks, setRemarks}=useContext(DataContext);
    const [data, setData]=useState({
        remark:{}        
    })

    const changeInput=(e)=>{
        if(e.target.dataset.name==='remark'){
            console.log('remark')
            setData({...data, remark: {...data.remark, [e.target.name]: e.target.value}})
        } else {
            setData({...data, [e.target.name]: e.target.value})
        }
    }

    const onSubmit=(e)=>{
        e.preventDefault();

        fetch(`${url}/create`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(()=> {
            console.log(data)
            // window.history.back()
        })
        .catch(err=>console.error('err', err))
    }

    return(
        <div>
            <h2>create</h2>
            <form onSubmit={onSubmit} id='create-form'>
                <label>編號：
                    <input type='text' name='no' placeholder='no' onChange={changeInput} />
                </label>
                <label>姓名：
                    <input type='text' name='name' placeholder='name' onChange={changeInput} />
                </label>
                <label>性別：
                    <select name='gender' form='create-form' onChange={changeInput}>
                        <option value='1' >male</option>
                        <option value='2' >female</option>
                    </select>                    
                </label>
                {
                    remarks.map((remark, i)=>
                        <label key={`${i}-${remark.icon}`}>
                            <i className={remark.icon}></i>{remark.zh}:
                            <select data-name='remark' name={remark.en} onChange={changeInput} >
                                <option>yes</option>
                                <option>no</option>
                            </select>
                        </label>
                    )
                }
                <button>submit</button>
            </form>
        </div>
    )
}

export default Create;