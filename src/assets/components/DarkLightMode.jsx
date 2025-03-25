import { useState } from "react";

export const DarkLightMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode =  () => {
        setDarkMode(!darkMode);
    }

    return (
        <div style={{ 
            backgroundColor: darkMode ? "#000" : "#fff", 
            color: darkMode ? "#fff" : "#000",
            height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"
          }}>
            <button onClick={toggleMode}>
        {darkMode ? "Modo Light" : "Modo Dark"}
      </button>
    </div>
    )
}
