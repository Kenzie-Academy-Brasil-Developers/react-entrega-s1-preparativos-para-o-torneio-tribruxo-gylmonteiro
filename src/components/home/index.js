import "./style.css";

const Home = ({ handleButton }) => {
  return (
    <div>
      <h1>Torneio tribuxo</h1>
      <p>Clique no botão para encontrar o feiticeiro</p>
      <button onClick={handleButton}>Começar</button>
    </div>
  );
};

export default Home;
