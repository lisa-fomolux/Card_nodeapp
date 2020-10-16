import React, { useContext, useState, createContext } from 'react';

export const DataContext=createContext();

export const DataProvider = (props) => {
    const [url, setUrl]=useState('http://localhost:9001/cards');
    const [remarks, setRemarks]=useState([
        {
            en: 'anesthesia',
            zh: '麻醉',
            icon: 'fas fa-syringe',
            qty: []
        },
        {
            en: 'vip',
            zh: 'vip',
            icon: 'fas fa-award',
            qty: [] 
        },
        {
            en: 'tmrout',
            zh: '明日出院',
            icon: 'fas fa-walking',
            qty: [] 
        },
        {
            en: 'nurse',
            zh: '看護',
            icon: 'fas fa-user-nurse',
            qty: [] 
        },
        {
            en: 'quarantine',
            zh: '隔離',
            icon: 'fas fa-people-arrows',
            qty: [] 
        }
    ])

    return(
        <DataContext.Provider value={{
            url, setUrl,
            remarks, setRemarks
        }}>
            {props.children}
        </DataContext.Provider>
    )    
}