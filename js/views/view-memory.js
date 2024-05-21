import { Observer } from "../patterns/observer.js";

export class ViewMemory extends Observer
{
    #controllerMemory;

    constructor(controllerMemory)
    {
        super();

        this.#controllerMemory = controllerMemory;
        this.#controllerMemory.addObserver(this);
    }

    notify()
    {
        this.displayCards();

        // const card = document.querySelector(".card");
        // card.addEventListener("click", () =>
        // {
        //     const card = document.querySelector(".card");
        //     card.remove();
        //     this.#controllerMemory.createCard();
        // });
    }

    displayCard(card)
    {
        const cardsElement = document.querySelector(".cards");

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const text = document.createElement("p");
        text.innerHTML = "&#x" + card.value.toString(16);

        cardElement.append(text);
        cardsElement.append(cardElement);
    }

    displayCards()
    {
        for (let i = 0; i < this.#controllerMemory.memory.getCardsNumber(); i++)
        {
            this.displayCard(this.#controllerMemory.memory.getCard(i));
        }
    }
}
