module.exports = inputText => {

    const regex = /\d+.?\d*$/; //regex matching decimal value at end of line

    return inputText.replace(/[|'"]+/g,'').split('\n').map(line => {
        line = line.trim(); //trim whitespace
        let index = line.search(regex); //returns index of beginning of match
        return [line.substring(0,index).trim(), parseFloat(line.substring(index).trim())]; //return array of two trimmed strings
    });
};

