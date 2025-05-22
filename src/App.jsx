import { NavBarUser } from "./components/NavBarUser/NavBarUser";
import { MainContainer } from "./components/MainContainer/MainContainer";

export default function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <NavBarUser /> {/* Barra vertical izquierda fija */}
      <MainContainer /> {/* Ocupa todo lo demás */}
    </div>
  );
}
