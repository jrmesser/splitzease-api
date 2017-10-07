This is an API for the MongoDB backend of the splitzease app.

This is really a data store for the app. 

It has one type of object: a transaction.

Transactions are structured as follows:
````
{
transactionID: transID,
id: ObjectId,
date: DateNow,
userID: userID, //matches firebase ID used for authentication
party: [{ //defines the party the split is among
	personId: 1
	phone: 1231231234,
	total: 13.45 },
	{ personId: 2
	phone: 2131231234,
	total: 34.45 }
]
items: [{ //defines the items on the receipt
	name: “Doughnut”,
	price: 8.00,
	person: [1, 3] //defines the members of the party the item total is to be split evenly among
},
{
	name: “Pasta”,
	price: 15.00,
	person: [1]
}]
}
````
