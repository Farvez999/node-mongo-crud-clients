import React from 'react';
import { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({})

    const handleAddUser = event => {
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                if (data.acknowledged) {
                    alert('User Added Success')
                    event.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h3>Please Add a user</h3>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='Name' />
                <br />
                <input onBlur={handleInputBlur} type="text" name='address' placeholder='Address' />
                <br />
                <input onBlur={handleInputBlur} type="email" name='email' placeholder='Email' />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUser;