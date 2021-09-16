import "./style.css";
import { Link } from "react-router-dom";
const Home = ({ handleButton }) => {
  return (
    <div>
      <h1>Torneio tribuxo</h1>
      <p>Clique no botão para encontrar o feiticeiro</p>
      <Link to="/cards">
        <button onClick={handleButton}>Começar</button>
      </Link>
    </div>
  );
};

export default Home;
