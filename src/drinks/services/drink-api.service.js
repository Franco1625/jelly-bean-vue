import axios from 'axios';
import {Drink} from "@/drinks/model/drink.entity.js";

export class DrinkApiService {
    constructor() {
        this.BASE_URL = 'https://jellybellywikiapi.onrender.com/api/Beans';
    }

    async getDrinks() {
        try {
            const response = await axios.get(`${this.BASE_URL}`);
            return response.data.items.map(drink => new Drink(
                drink.flavorName || drink.name,
                drink.ingredients.join(', '),
                drink.glutenFree,
                drink.sugarFree,
                drink.seasonal,
                drink.kosher,
                drink.imageUrl
            ));
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}