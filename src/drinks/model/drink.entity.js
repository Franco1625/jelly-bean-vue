export class Drink {
    constructor(flavorName = '', ingredients = '', glutenFree = '', sugarFree = '', seasonal = '', kosher = '', imageUrl = '', source = null) {
        this.flavorName = flavorName;
        this.ingredients = ingredients;
        this.glutenFree = glutenFree;
        this.sugarFree = sugarFree;
        this.seasonal = seasonal;
        this.kosher = kosher;
        this.imageUrl = imageUrl;

    }
}