import { Card } from "../models/card.js";
import { Memory } from "../models/memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    #memory;

    constructor()
    {
        super();

        this.#memory = new Memory()
    }

    get memory()
    {
        return this.#memory;
    }

    newGame()
    {
        this.#memory.newGame(10);
        this.notify();
        this.saveGame();
    }

    saveGame()
    {
        localStorage.setItem("save", JSON.stringify(this.#memory.toData()));
    }

    loadGame()
    {
        try
        {
            let save = localStorage.getItem("save");
            if (save === null)
            {
                return false;
            }
            this.#memory.fromData(JSON.stringify(save));
            return true;
        }
        catch (error)
        {
            return false;
        }
    }

    start()
    {
        if (!this.loadGame())
        {
            this.newGame();
        }

        this.notify();
    }
}
