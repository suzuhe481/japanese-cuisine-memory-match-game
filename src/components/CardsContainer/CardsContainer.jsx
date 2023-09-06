import Card from "../Card/Card";

import "./CardsContainer.css";

import { cardData } from "../../assets/cardData";

function CardsContainer() {
  const childrenItems = cardData.map((food) => (
    <Card key={food.id} id={food.id} name={food.name} />
  ));

  return <div className="cards-container">{childrenItems}</div>;
}

export default CardsContainer;
