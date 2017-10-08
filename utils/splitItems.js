module.exports = inputTransaction => {
    if (inputTransaction.party === undefined || inputTransaction.items === undefined) {
        throw 'party or items undefined on input object';
        return false;
    }
    else {
        let runningTotals = {};// dict for storing running totals for person in party array
        inputTransaction.items.forEach(item => {//go through each item in items
            const itemShare = item.price / item.person.length;//calculate cost of the item for each person splitting it
            item.person.forEach(person => {//go through the people splitting the item and update their totals
                runningTotals[person] = runningTotals[person] ? runningTotals[person] += itemShare : runningTotals[person] = itemShare;//increment if person already owes something, otherwise initialize
            });
        });
        inputTransaction.party.forEach(person => {//loop through party and update totals with values from runningTotals
            if (runningTotals[person.personId] === undefined) {
                throw 'party not found';//make sure the person is in the runningTotals dict
                return false;
            }
            else{ 
                person.total = runningTotals[person.personId];
                delete runningTotals[person.personId];//clean up dict
            }
        });
        if (Object.keys(runningTotals) != []) {
            throw 'items were split outside the party';
            return false;
        }
    }
    return inputTransaction;
};
