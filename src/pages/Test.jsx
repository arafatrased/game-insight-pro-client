import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Test = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {user} = useContext(AuthContext);
    console.log(user);
    console.log(items)

    const userEmail = user?.email; // Replace with the logged-in user's email

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`http://localhost:5000/items?email=${userEmail}`);
                const data = await response.json();
                console.log(data)
                setItems(data); // Update the state with the fetched items
            } catch (error) {
                console.error('Error fetching items:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchItems();
    }, [userEmail]);

    
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Your Items: {items.length}</h1>
          
        </div>
    );
};

export default Test;
