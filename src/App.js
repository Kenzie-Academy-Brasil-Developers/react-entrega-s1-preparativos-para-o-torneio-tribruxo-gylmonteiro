import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Cards";
import Home from "./components/home";

function App() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
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
  };

  return (
    <div className="App">
      <header className="App-header">
        <Home handleButton={handleButton} />
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
      </header>
    </div>
  );
}

export default App;
