import "./style.css";
const Card = ({ name, house, alive, image }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{house}</h3>
      <h3>{alive}</h3>
    </li>
  );
};

export default Card;
