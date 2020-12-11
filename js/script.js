// let quotes = [
//     {
//         id: "1",
//         text: `"This is the Book about which there is no doubt, a guidance for those conscious of Allah"`,
//         author: "God in the Quran 2 : 2"
//     },
//     {
//         id: "2",
//         text: `"Every soul will taste death, and you will only be given your [full] compensation on the Day of Resurrection"`,
//         author: "God in the Quran 3 : 185"
//     }
// ];
    
// let getNewIndex = () => Math.floor(Math.random() * quotes.length);

// window.sessionStorage;
// sessionStorage.setItem("currentIndex", getNewIndex.toString());

// let getQuoteIndex = () => {
//     let newIndex = getNewIndex();

//     while(newIndex == sessionStorage.getItem("currentIndex")) {
//         newIndex = getNewIndex();
//     }
//     sessionStorage.setItem("currentIndex", newIndex.toString());
//     return newIndex;
// };

// let index = getQuoteIndex();

async function getNewVerse() {
    let newVerse;

    fetch("https://5f9b77e3856f4c00168bffb3.mockapi.io/quran-verse")
    .then(response => response.json())
    .then(function(data) {
        newVerse = Object.assign({}, data[Math.floor(Math.random() * data.length)]);
    })
    .catch(function(err) {
        console.log("Fetch error:", err)
    })

    return newVerse;
}

let tweetIntentURL = "https://twitter.com/intent/tweet?hashtags=Quran&related=freecodecamp&text=";

$(document).ready(function () {
    const verse = await getNewVerse();
    $("#text").text(verse.text);
    $("#author").text("- " + verse.author);
    $("#tweet-quote").attr("href", tweetIntentURL+(verse.text)+" - "+(verse.author));

    $("#new-quote").on("click", function () {
        const verse = await getNewVerse();
        $("#text").text(verse.text);
        $("#author").text("- " + verse.author);
        $("#tweet-quote").attr("href", tweetIntentURL+(verse.text)+" - "+(verse.author));
    });
});