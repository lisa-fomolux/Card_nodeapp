import React, { useContext, useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import {DataContext} from '../contexts/DataContext';
import Dialog from './DialogTemp';

function CardsDiv (){
    const {url, remarks, setRemarks}=useContext(DataContext);
    const [state, setState]=useState({
        hideWord: false,
        dialog: false,
    })
    const [data, setData]=useState([])
    const [thisCard, setThisCard]=useState({})

    useEffect(()=>{
        console.log('run useEffect fetch')
        fetch(`${url}/list`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                pw: new URL(window.location.href).searchParams.get('key')
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.data)
            var arr=[]
            data.data.map(d=>{
                console.log(d.remark.anesthesia)
                if(d.remark.anesthesia=='yes'){
                    // remarks
                }
            })
            return setData(data.data)
        })
        .catch(err=>console.error(err))
    }, [])

    const clickCard=(d)=>{
        console.log(`${url}/${d._id}`)
        fetch(`${url}/${d._id}`)
        .then(res=>res.json())
        .then(data=>{
            setThisCard(data);
            setState({...state, dialog: true})
        })
        .catch(err=>console.error(err))
    }

    const clickDelBtn=(id)=>{
        console.log(id)
        console.log(url)
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.error(err))
    }

    const changeInput=(e)=>{
        e.preventDefault();
        if(e.target.className==='remark-item'){
            setThisCard({...thisCard, remark: {...thisCard.remark, [e.target.name] : e.target.value}})
        } else {
            setThisCard({...thisCard, [e.target.name]: e.target.value})
        }
        e.preventDefault();
    }

    const onSubmit=(e)=>{
        e.preventDefault();

        fetch(`${url}/${thisCard._id}`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(thisCard)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setState({...state, dialog: false})
        })
        .catch(err=>console.error(err))
    }

    return(
        <div>
            <h1 style={{color: 'navy'}}>List</h1>
            <li>updated</li>
            <main id='CardsDiv'>
                <div className='cards-div'>
                    {
                        data.map(d=>
                            <div onClick={()=>clickCard(d)} key={uuidv4()}>
                                <Card title={d.no}>
                                    <p><i className="pi pi-user" style={{color: d.gender == 1 ? 'navy' : 'hotpink'}}></i></p>
                                    <p><span className='name'>{state.hideWord==true ? d.name[0]+'*'+d.name.slice(2) : d.name }</span></p>
                                    <section className='remark'>
                                    {
                                        remarks.map(r=>
                                            <div key={uuidv4()}>
                                                {d.remark[r.en]==='yes' && <i className={r.icon}></i>}
                                            </div>
                                        )
                                    }
                                    </section>
                                </Card>
                            </div>
                        )
                    }
                </div>  
                <section className='statistics-div'>
                        <Button label="隱藏名字" onClick={()=>{setState({...state, hideWord: !state.hideWord})}} />            
                </section>              
            </main>
            {
                state.dialog==true &&
                <section className='overlay'>
                    <div className='dialog'>
                        <i className="pi pi-times-circle" onClick={()=>{setState({...state, dialog: false})}}></i>
                        <Dialog 
                            thisCard={thisCard}
                            state={state}
                            remarks={remarks}
                            clickDelBtn={()=>(clickDelBtn(thisCard._id))}
                            changeInput={changeInput}
                            onSubmit={onSubmit}
                            key={uuidv4()}
                        />
                    </div>
                </section>
            }
        </div>
    )
}

export default CardsDiv;