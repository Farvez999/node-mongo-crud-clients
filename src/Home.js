import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData()
    const [displayUser, setDisplayUser] = useState(users)

    const handleUserDelete = user => {
        const agree = window.confirm(`Are you sure you want to delete ${user.name}`)
        if (agree) {
            console.log(user._id)

            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully')
                        const remainingUser = displayUser.filter(usr => usr._id !== user._id);
                        setDisplayUser(remainingUser);
                    }
                })

        }

    }
    return (
        <div>
            <h3>User : {displayUser.length}</h3>
            <div>
                {
                    displayUser.map(user => <p key={user._id}>
                        {user.name} {user.email} <button
                            onClick={() => { handleUserDelete(user) }}
                        >X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;