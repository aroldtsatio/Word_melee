import React,{useState} from "react";


export default function CreateRooms({ setRooms }) {
    const [roomId, setRoomId] = useState("");
  
    // Fonction pour créer une salle avec un ID unique
    const createRoom = () => {
      const newRoomId = Math.random().toString(36).substr(2, 6).toUpperCase();
      setRooms((prev) => [...prev, { id: newRoomId, name: `Salle ${prev.length + 1}` }]);
    };
    return (
       <div className="mb-4">
        {/* Create Room */}
        <button onClick={createRoom} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Room</button>

        {/* Join Room */}
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Room id"
          className="p-2 border border-gray-300"
        />
        <button onClick={createRoom} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join Room</button>
       </div>  
    );
}