module.exports = inputTransaction => {
    if (inputTransaction.party === undefined || inputTransaction.items === undefined) {
        throw 'party or items undefined on input object';
        return false;
    }
    else {
        let runningTotals = {};// dict for storing running totals for person in party array
        inputTransaction.items.forEach(item => {//go through each item in items
            const itemShare = item.price / item.person.length;//calculate cost of the item for each person splitting it
            console.log('itemShare', itemShare);
            item.person.forEach(person => {//go through the people splitting the item and update their totals
                runningTotals[person] = runningTotals[person] ? runningTotals[person] += itemShare : runningTotals[person] = itemShare;//increment if person already owes something, otherwise initialize
            });
        });
        console.log('runningTotals:', runningTotals);
        inputTransaction.party.forEach(person => {//loop through party and update totals with values from runningTotals
            person.total = runningTotals[person.personId];
        });
    }
    return inputTransaction;
};
