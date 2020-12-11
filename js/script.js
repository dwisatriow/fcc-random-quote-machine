async function getNewVerse() {
    let response = await fetch("https://5f9b77e3856f4c00168bffb3.mockapi.io/quran-verse");
    let data = await response.json();

    // console.log(data);
    return data;
}

getNewVerse();
// let verse = getNewVerse().then(value => value);
// console.log(verse);

let tweetIntentURL = "https://twitter.com/intent/tweet?hashtags=Quran&related=freecodecamp&text=";

// $(document).ready(function () {
//     const verse = Object.assign({}, getNewVerse().then());
//     $("#text").text(verse.text);
//     $("#author").text("- " + verse.author);
//     $("#tweet-quote").attr("href", tweetIntentURL+(verse.text)+" - "+(verse.author));

//     $("#new-quote").on("click", function () {
//         const verse = Object.assign({}, getNewVerse());
//         $("#text").text(verse.text);
//         $("#author").text("- " + verse.author);
//         $("#tweet-quote").attr("href", tweetIntentURL+(verse.text)+" - "+(verse.author));
//     });
// });