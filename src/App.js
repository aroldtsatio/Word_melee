
import './App.css';
import React from 'react';
import ChooseLanguage from './components/ChooseLanguage';
import CreateRooms from './components/CreateRooms';
import RoomList from './components/RoomList';

function App() {
  const [language, setLanguage] = React.useState("en");
  const [rooms, setRooms] = React.useState([
    { id: "ABCDEF", name: "Room 1" },
    { id: "GHIJKL", name: "Room 2" },
    { id: "MNOPQR", name: "Room 3" },
  ]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
       {/* Choose Language */}
       <ChooseLanguage language={language} setLanguage={setLanguage} />


        {/* Create Rooms */}
        <CreateRooms setRooms={setRooms}/>

        {/* Room List */}
        <RoomList rooms={rooms} />
    </div>
    
  );
}

export default App;
