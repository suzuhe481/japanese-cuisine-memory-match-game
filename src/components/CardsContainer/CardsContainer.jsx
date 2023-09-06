import Card from "../Card/Card";

import "./CardsContainer.css";

import { cardData } from "../../../public/assets/cardData";

function randomizeCards() {
  const randomCardData = cardData.sort(() => Math.random() - 0.5);

  return randomCardData;
}

function CardsContainer({ handleCardClicked }) {
  const randomCards = randomizeCards();

  const childrenItems = randomCards.map((food) => (
    <Card
      key={food.id}
      id={food.id}
      name={food.name}
      handleCardClicked={handleCardClicked}
    />
  ));

  return <div className="cards-container">{childrenItems}</div>;
}

export default CardsContainer;
