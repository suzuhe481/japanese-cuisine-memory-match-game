import "./Card.css";

function Card(props) {
  const id = props.id;
  const name = props.name;

  const baseImageUrl = "src/assets/cardImages/foodImage";
  const imageExt = ".jpg";

  const imageUrl = baseImageUrl + id + imageExt;

  return (
    <div
      className="card"
      value={id}
      onClick={(value) => props.handleCardClicked(value)}
    >
      <div className="food-name">{name}</div>
      <img className="food-image" src={imageUrl}></img>
    </div>
  );
}

export default Card;
