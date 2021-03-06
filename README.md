This is an API for the MongoDB backend of the splitzease app.

This is really a data store for the app. 

It has one type of object: a transaction.

Transactions are structured as follows:
```javascript
{
transactionID: <String>,
id: <String>,
date: <DateTime>,
userID: <String>, //matches firebase ID used for authentication
party: [{ //defines the party the split is among
	personId: <Integer>,
	phone: <Integer>,
	total: <Float>
},
{
    personId: <Integer>,
	phone: <Integer>,
	total: <Float> 
}
]
items: [{ //defines the items on the receipt
	name: <String>,
	price: <Float>,
	person: <Array <Integer>> //defines the members of the party the item total is to be split evenly among
},
{
	name: <String>,
	price: <Float>,
	person: <Array <Integer>>
}]
}
```

Routes are RESTFUL, and function as follows:

* GET /transaction/:id - Gets transaction matching transaction ID. Response will contain an object with structure matching that above.
* POST /transaction - Creates a new transaction. Response will contain an object matching the structure above, with possibly not all fields defined. Post body must contain OCR text as a string in a field called 'OCRText', a User ID in the field 'userID'. Example: 
```javascript
 {
   OCRText: "Cold Beverage 2.80 |\nCold Beverage 2.40 |\nLunch Small Salmon 12.90 |\nLunch Sa Inon 14.50\nLunch Cup Chix Cha/w 2.00\nLunch Fettuccine Carrabba 10.99\nLunch Small Salmon 12.90\nLunch Strawberry Salad 11.50\nLunch In Chix Bryan 12.70 |\nLunch House Salad Add On 2.00\nUessert Rusa 1.20\nDessert Rusa 1.20\nSogno di Cloccolata 1.90\nSogno di Cloccolata 7.90",
* userId: "asdfqwer1234"
 }
```
* PUT /transaction/:id - Updates transaction matching ID. Put body must contain an array of "items"" with structure matching that above and an array of "party" matching that above. Response will return "true" after a successful calculation of totals for the party members.
* DELETE /transaction/:id - Will return "Nope!" because you can't delete our data.

In addition, we provide the following routes for user data:
* GET /user/:userID - Returns the transactions with the input userID as an array

