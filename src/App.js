import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./App.css";
import Card from "./components/Cards";
import Home from "./components/home";

function App() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setMembers(response))
      .catch((err) => console.log(err));
  }, []);

  const gryffindor = members.filter((member) => member.house === "Gryffindor");
  const slytherin = members.filter((member) => member.house === "Slytherin");
  const ravenclaw = members.filter((member) => member.house === "Ravenclaw");
  const hufflepuff = members.filter((member) => member.house === "Hufflepuff");

  const random = (arr) => {
    const item = arr[Math.floor(Math.random() * arr.length)];
    return item;
  };

  const handleButton = () => {
    setFilteredMembers([
      ...filteredMembers,
      random(gryffindor),
      random(slytherin),
      random(ravenclaw),
      random(hufflepuff),
    ]);
    console.log("funcionou");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home handleButton={handleButton} />
          </Route>
          <Route exact path="/cards">
            <ul>
              {filteredMembers.slice(0, 3).map((member, index) => (
                <Card
                  key={index}
                  name={member.name}
                  house={member.house}
                  alive={member.alive}
                  image={member.image}
                />
              ))}
            </ul>
            <Link to="/">
              <button onClick={() => setFilteredMembers([])}>Voltar</button>
            </Link>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
