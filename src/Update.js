import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const stordUser = useLoaderData()

    const [user, setUser] = useState({})

    const handleUpdateUser = event => {
        event.preventDefault();
        console.log(user);

        fetch(`http://localhost:5000/users/${stordUser._id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                if (data.modifiedCount > 0) {
                    alert('User Update Success')
                    console.log(data);
                }
            });
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h2>Please Update : {stordUser.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={stordUser.name} type="text" name='name' placeholder='Name' />
                <br />
                <input onChange={handleInputChange} defaultValue={stordUser.address} type="text" name='address' placeholder='Address' />
                <br />
                <input onChange={handleInputChange} defaultValue={stordUser.email} type="email" name='email' placeholder='Email' />
                <br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default Update; <h2>Please Update : </h2>