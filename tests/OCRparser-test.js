var OCRparser = require('../utils/OCRparser.js');

const testString = "Cold Beverage 2.80 |\nCold Beverage 2.40 |\nLunch Small Salmon 12.90 |\nLunch Sa Inon 14.50\nLunch Cup Chix Cha/w 2.00\nLunch Fettuccine Carrabba 10.99\nLunch Small Salmon 12.90\nLunch Strawberry Salad 11.50\nLunch In Chix Bryan 12.70 |\nLunch House Salad Add On 2.00\nUessert Rusa 1.20nDessert Rusa 1.20\nSogno di Cloccolata 1.90\nSogno di Cloccolata 7.90";

const desiredOutput = [["Cold Beverage", "2.80"],["Cold Beverage", "2.40"],["Lunch Small Salmon", "12.90"],["Lunch Sa Inon", "14.50"],["Lunch Cup Chix Cha/w", "2.00"],["Lunch Fettuccine Carrabba","10.99"],["Lunch Small Salmon", "12.90"],["Lunch Strawberry Salad","11.50"],["Lunch In Chix Bryan","12.70"],["Lunch House Salad Add On", "2.00"],["Uessert Rusa","1.20"],["Dessert Rusa","1.20"],["Sogno di Cloccolata", "1.90"],["Sogno di Cloccolata", "7.90"]];

const result = OCRparser(testString);

console.log(result);
console.log(result === desiredOutput);
