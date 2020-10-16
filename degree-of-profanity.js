// tweets to be tested
const tweets = [
    {
        username: "mike",
        tweetContent: "Lorem Ipsum has been the FOOBAR standard FOO text ever since the 1500s. When an BAR printer took a FOOBAR of type. Scrambled it to make a type specimen book."
    },
    {
        username: "ross",
        tweetContent: "It has survived not only five centuries. But also the leap into electronic typesetting. Remaining essentially unchanged."
    },
    {
        username: "tom",
        tweetContent: "It was FOO in the BAR with the FOOBAR of FOO sheets containing Lorem Ipsum FOOBAR. More recently with FOO publishing FOOBAR like BAR. PageMaker including versions of Lorem Ipsum."
    }
];

// array of demo racial slurs
const racialSlurs = ["foo", "bar", "foobar"];

tweets.forEach(tweet => {
    const sentences = tweet.tweetContent.split(".");
    sentences.pop();
    console.log("***** " + tweet.username + " *****");
    sentences.forEach((sentence, sentenceIndex) => {
        var sentenceNumber;
        var numberOfRacialSlur = 0;
        var degreeOfProfanity = 0;
        const words = sentence.split(" ");
        if (words[0] === " " || words[0] == "")
            words.shift();
        words.forEach(word => {
            if (racialSlurs.includes(word.toLowerCase()))
                numberOfRacialSlur++;
        });
        /* calculating degree of profanity by dividing 
        number of racial slurs in a sentence by total number of words in a sentence. */
        degreeOfProfanity = Math.floor((numberOfRacialSlur / words.length) * 100) / 100;
        sentenceNumber = sentenceIndex + 1;
        console.log({ sentenceNumber, degreeOfProfanity });
    });
});