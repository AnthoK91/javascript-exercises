const repeatString = function(word, number) {
    wordHold = []
    if(number < 0) {
        wordHold.push("ERROR")
    } else {
    for (let i = 0; i < number; i++) {
			wordHold.push(word);
    }
}
    return wordHold.join("")

};

// Do not edit below this line
module.exports = repeatString;
