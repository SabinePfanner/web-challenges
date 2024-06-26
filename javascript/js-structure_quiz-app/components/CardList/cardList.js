import { Card } from "../Card/card.js";
import { cards } from "../../lit/data.js";

export function CardList() {
    const cardList = document.createElement("section");
    cardList.classList.add("card-list");
  
    cards.forEach((card) => {
      const cardElement = Card(card);
      cardList.append(cardElement);
    });
  
    return cardList;
  }