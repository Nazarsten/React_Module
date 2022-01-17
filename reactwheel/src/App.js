import './App.css';
import Form from './components/Form/Form.js'
import Users from './components/Users/Users.js'
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
                setFilteredUsers([...value])
            })

    }, [])


    const getFilter = (data) => {
        let filteredArr = [...users]

        if (data.name) {
            filteredArr = filteredArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filteredArr = filteredArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filteredArr = filteredArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFilteredUsers(filteredArr)
    }

    return (
        <div className='app'>
            <Form getFilter={getFilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
}

export default App;
