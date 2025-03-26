import { DarkLightMode} from "./assets/components/DarkLightmode";
import { LikeDislike}  from "./assets/components/LikeDislike";
import {GenerarColor} from "./assets/components/GenerarColor"
import { Contador } from "./assets/components/Contador";

export const App = () => {
  return (
    <div>
      <h1>Ejercicios con useState</h1>
      <DarkLightMode />
      <LikeDislike />
      <GenerarColor />
      <Contador />
    </div>
  );  
    
}


