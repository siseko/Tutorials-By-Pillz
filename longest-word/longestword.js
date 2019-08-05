function sentenceCount(sentence){
    return sentence.length;
}

console.log(sentenceCount("Life Thulile Fikasenzani Mpendulo Nicolas Nkhosi"));

function findTheLongestWord(){

var sentenceWithLongWord = "Life Thulile Fikasenzani Mpendulo Nicolas Nkhosi";

var arrayedSentenceWithLongWord = sentenceWithLongWord.split(' ');

console.log(arrayedSentenceWithLongWord);

//Start the looping process

var longestWordNumber = 0;
var longestWordValue;

for(var i = 0; i < arrayedSentenceWithLongWord.length; i++ ){
    if(arrayedSentenceWithLongWord[i].length > longestWordNumber){ //checking the lonhestword counter variable
        longestWordNumber = arrayedSentenceWithLongWord[i].length;
        longestWordValue = arrayedSentenceWithLongWord[i];
    }
}
    return {longestWordValue: longestWordValue, longestWordNumber: longestWordNumber};
}

function printMEaningFulSentence(){
    var valuesArrray = findTheLongestWord();
    var longestWordItself = valuesArrray.longestWordValue;
    var numberOfCharsInWord = valuesArrray.longestWordNumber;
    var meaningfulSentence = "The longest word has is " + longestWordItself + "and it contains " + numberOfCharsInWord + " characters."
    
    console.log(meaningfulSentence);
}
printMEaningFulSentence();

