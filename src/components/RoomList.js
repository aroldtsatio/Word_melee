import React from "react";


export default function RoomList({ rooms }) {
    return (
        <div className="w-1/2 bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Rooms availabel</h2>
            <ul>
                {rooms.map((room) => (
                    <li key={room.id} className="flex items-center justify-between p-2 border-b">
                        <span>{room.name}</span>
                        <span>{room.id}</span>
                    </li>
                ))}
            </ul>

        </div>
    );
}