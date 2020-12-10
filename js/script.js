let quotes = [
    {
        text: `"This is the Book about which there is no doubt, a guidance for those conscious of Allah"`,
        author: "God in the Quran 2 : 2"
    },
    {
        text: `"Every soul will taste death, and you will only be given your [full] compensation on the Day of Resurrection"`,
        author: "God in the Quran 3 : 185"
    }
];

let getNewIndex = () => Math.floor(Math.random() * quotes.length);

window.sessionStorage;
sessionStorage.setItem("currentIndex", getNewIndex.toString());

let getQuoteIndex = () => {
    let newIndex = getNewIndex();

    while(newIndex == sessionStorage.getItem("currentIndex")) {
        newIndex = getNewIndex();
    }
    sessionStorage.setItem("currentIndex", newIndex.toString());
    return newIndex;
};

let index = getQuoteIndex();
let tweetIntentURL = "https://twitter.com/intent/tweet?hashtags=Quran&related=freecodecamp&text=";

$(document).ready(function () {
    $("#text").text(quotes[index].text);
    $("#author").text("- " + quotes[index].author);

    $("#new-quote").on("click", function () {
        index = getQuoteIndex();
        $("#text").text(quotes[index].text);
        $("#author").text("- " + quotes[index].author);
        $("#tweet-quote").attr("href", tweetIntentURL+(quotes[index].text)+" - "+(quotes[index].author));
    });
});