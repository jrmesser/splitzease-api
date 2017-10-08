const splitItems = require('../utils/splitItems.js');

const inputTransaction = {
    party: [ {
        personId: 0,
        phone: 1234568790,
        total: 0
    },{
        personId: 1,
        phone: 0987654321,
        total: 0
    },{
        personId: 2,
        phone: 1112223333,
        total: 0
    }],
    items: [{
            "name": "Cold Beverage",
            "price": 2.8,
            "_id": "59da908f3b35be239cb142ee",
            "person": [0]
        },
        {
            "name": "Item not found",
            "price": 0,
            "_id": "59da908f3b35be239cb142ed",
            "person": [1]
        },
        {
            "name": "now Beverage no",
            "price": 1,
            "_id": "59da908f3b35be239cb142ec",
            "person": [2]
        },
        {
            "name": "Lunch S1311 Winn",
            "price": 13.9,
            "_id": "59da908f3b35be239cb142eb",
            "person": [1,2]
        },
        {
            "name": "Lunch Selim» 1-",
            "price": 3.5,
            "_id": "59da908f3b35be239cb142ea",
            "person": [1,2]
        },
        {
            "name": "Lunch Cup Chlx Chg/In",
            "price": 72,
            "_id": "59da908f3b35be239cb142e9",
            "person": [0,1]
        },
        {
            "name": "Lunch Fettucc1na Earrablla",
            "price": 10.9,
            "_id": "59da908f3b35be239cb142e8",
            "person": [0]
        },
        {
            "name": "meh Small SB1IOII",
            "price": 12.9,
            "_id": "59da908f3b35be239cb142e7",
            "person": [0,1,2]
        },
        {
            "name": "[mm Straublany Salad H.",
            "price": 530,
            "_id": "59da908f3b35be239cb142e6",
            "person": [1]
        },
        {
            "name": "um Sn mix Brynn",
            "price": 12.7,
            "_id": "59da908f3b35be239cb142e5",
            "person": [2]
        },
        {
            "name": "[um Hum Salad Add 01",
            "price": 2,
            "_id": "59da908f3b35be239cb142e4",
            "person": [1,2]
        },
        {
            "name": "[mead Roda",
            "price": 7.2,
            "_id": "59da908f3b35be239cb142e3",
            "person": [0,2]
        },
        {
            "name": "Dessert Rnsa",
            "price": 120,
            "_id": "59da908f3b35be239cb142e2",
            "person": [0,1,2]
        },
        {
            "name": "Sumo dl Ciuccohta .",
            "price": 90,
            "_id": "59da908f3b35be239cb142e1",
            "person": [0,1]
        },
        {
            "name": "Sasha d1 [ﬂocculata",
            "price": 1.9,
            "_id": "59da908f3b35be239cb142e0",
            "person": [0]
        }]
};

const expectedOutput = {
    
};

console.log(splitItems(inputTransaction));

