let quotes = [
    {
        id: "1",
        text: '"This is the Book about which there is no doubt, a guidance for those conscious of Allah"',
        author: "God in the Quran 2 : 2"
    },
    {
        id: "2",
        text: '"Every soul will taste death, and you will only be given your [full] compensation on the Day of Resurrection"',
        author: "God in the Quran 3 : 185"
    },
    {
        id: "3",
        text: "Or were they created by nothing, or were they the creators [of themselves]?",
        author: "God in the Quran 52 : 35"
    },
    {
        id: "4",
        text: "Do they not then reflect on the Quran? Had it been from anyone other than Allah, they would have certainly found in it many inconsistencies",
        author: "God in the Quran 4 : 82"
    },
    {
        id: "5",
        text: "And He is the One Who originates the creation then will resurrect it—which is even easier for Him. To Him belong the finest attributes in the heavens and the earth. And He is the Almighty, All-Wise",
        author: "God in the Quran 30 : 27"
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
    $("#tweet-quote").attr("href", tweetIntentURL+(quotes[index].text)+" - "+(quotes[index].author));

    $("#new-quote").on("click", function () {
        index = getQuoteIndex();
        $("#text").text(quotes[index].text);
        $("#author").text("- " + quotes[index].author);
        $("#tweet-quote").attr("href", tweetIntentURL+(quotes[index].text)+" - "+(quotes[index].author));
    });
});