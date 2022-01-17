import React from 'react';
import {useState} from 'react'

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eventData})
        getFilter(eventData)

    }

    return (
        <div>
            <form action="">
                <input placeholder='name' type="text" name={'name'} value={form.name} onChange={formHandler}/>
                <input placeholder='username' type="text" name={'username'} value={form.username}
                       onChange={formHandler}/>
                <input placeholder='email' type="text" name={'email'} value={form.email} onChange={formHandler}/>
            </form>
        </div>
    );
};

export default Form;