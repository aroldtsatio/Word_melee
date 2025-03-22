
import './App.css';
import React from 'react';
import ChooseLanguage from './components/ChooseLanguage';

function App() {
  const [language, setLanguage] = React.useState("en");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
       {/* Choose Language */}
       <ChooseLanguage language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default App;
