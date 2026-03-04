"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const UserCard = () => {
    const session = useSession();
    console.log(session);
    
    return (
        <div>
            <h2 className="font-bold">user-client</h2>
            <div className="border p-4 rounded">{JSON.stringify(session)}</div>
        </div>
    );
};

export default UserCard;