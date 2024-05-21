import {Card} from "./card.js"

export class Memory
{
    #cards;

    constructor()
    {
        this.#cards = [];
    }

    newGame(pairsNumber)
    {
        for (let i = 0; i < pairsNumber; i++)
        {
            const card = new Card(Math.floor(Math.random()*(0x1F9FF - 0x1F90C ) + 0x1F90C));
            this.#cards.push(card);
            this.#cards.push(card);

        }

        let currentIndex = this.#cards.length;
        let tmp = null;

        while(currentIndex != 0)
        {
            let randomIndex = Math.floor(Math.random()*currentIndex);
            currentIndex--;

            this.#cards.splice(randomIndex, 0, this.#cards[currentIndex]);
            this.#cards.splice(currentIndex, 0, this.#cards[randomIndex]);
        }
    }

    getCardsNumber()
    {
        return this.#cards.length;
    }

    getCard(index)
    {
        return this.#cards[index];
    }

    toData()
    {
        const data = { cards: [] };

        for (let i = 0; i < this.#cards.length; i++)
        {
            data.cards.push(this.#cards[i].toData());
        }
        return data;
    }

    fromData(data)
    {
        for (let i = 0; i < this.#cards.length; i++)
        {
            this.#cards[i] = null;
            this.#cards[i] = data.cards;
        }
    }
}
