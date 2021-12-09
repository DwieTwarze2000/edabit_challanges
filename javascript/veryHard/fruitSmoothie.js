// Create a class Smoothie and do the following:
// Create a constructor property called ingredients.
// Create a getCost method which calculates the total cost of the ingredients used to make the smoothie.
// Create a getPrice method which returns the number from getCost plus the number from getCost multiplied by 1.5. Round to two decimal places.
// Create a getName method which gets the ingredients and puts them in alphabetical order into a nice descriptive sentence.
// If there are multiple ingredients, add the word "Fusion" to the end but otherwise, add "Smoothie". Remember to change "-berries" to "-berry".
// See the examples below.
// Ingredient	Price
// Strawberries	$1.50
// Banana	$0.50
// Mango	$2.50
// Blueberries	$1.00
// Raspberries	$1.00
// Apple	$1.75
// Pineapple	$3.50
// s1 = new Smoothie(["Banana"])
// s1.ingredients ➞ ["Banana"]
// s1.getCost() ➞ "$0.50"
// s1.getPrice() ➞ "$1.25"
// s1.getName() ➞ "Banana Smoothie"
// s2 = Smoothie(["Raspberries", "Strawberries", "Blueberries"])
// s2.ingredients ➞ ["Raspberries", "Strawberries", "Blueberries"]
// s2.getCost() ➞ "$3.50"
// s2.getPrice() ➞ "$8.75"
// s2.getName() ➞ "Blueberry Raspberry Strawberry Fusion"
const prices = {
    Strawberries: 1.5,
    Banana: 0.5,
    Mango: 2.5,
    Blueberries: 1.0,
    Raspberries: 1.0,
    Apple: 1.75,
    Pineapple: 3.5,
};

class Smoothie {
    constructor(ingredients) {
        this.ingredients = ingredients;
    }
    __getCost() {
        let cost = 0;
        for (let i = 0; i < this.ingredients.length; i++) {
            cost += prices[this.ingredients[i]];
        }
        return cost;
    }
    getCost() {
        return '$' + this.__getCost().toFixed(2);
    }
    getPrice() {
        return '$' + (this.__getCost() + this.__getCost() * 1.5).toFixed(2);
    }
    getName() {
        let result = '';
        this.ingredients = this.ingredients.sort();
        for (let i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].slice(this.ingredients[i].length - 7) == 'berries') {
                result += this.ingredients[i].slice(0, this.ingredients[i].length - 7) + 'berry ';
            } else {
                result += this.ingredients[i] + ' ';
            }
        }
        if (this.ingredients.length > 1) result += 'Fusion';
        else result += 'Smoothie';
        return result;
    }
}
s1 = new Smoothie(['Pineapple', 'Strawberries', 'Blueberries', 'Mango']);
console.log(s1.ingredients);
console.log(s1.getCost());
console.log(s1.getPrice());
console.log(s1.getName());
console.log(s1.ingredients);
