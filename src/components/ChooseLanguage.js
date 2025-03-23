import React from "react";

export default function ChooseLanguage({ language, setLanguage}) {
    return (
        <div className="mb-4"> 
           <label className="mr-2 text-blue-600">Choose your language:</label>
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="en" >English</option>
                <option value="fr">French</option>
                <option value="de">German</option> 
              </select>     
        </div>
    );
    }