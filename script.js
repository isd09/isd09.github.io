var stringToChunk = "";
var stringToDisplay = "";

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

var quotes = [
    "In a hole in the ground there lived a hobbit.",
    "I am looking for someone to share in an adventure that I am arranging, and it's very difficult to find anyone.",
    "There is more in you of good than you know, child of the kindly West.",
    "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
    "It does not do to leave a live dragon out of your calculations, if you live near him.",
    "I wish life was not so short, he thought. languages take such a time, and so do all the things one wants to know about.",
    "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
    "There is some good in this world, and it's worth fighting for.",
    "The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.",
    "May the wind under your wings bear you where the sun sails and the moon walks.",
    "I found it is the small everyday deeds of ordinary folk that keep the darkness at bay. Small acts of kindness and love.",
    "True courage is about knowing not when to take a life, but when to spare one.",
    "Even the smallest person can change the course of the future.",
    "I have found it is the small everyday deeds of ordinary folk that keep the darkness at bay. Small acts of kindness and love.",
    "If more people valued home above gold, this world would be a merrier place.",
    "It is not our part to master all the tides of the world, but to do what is in us for the succour of those years wherein we are set, uprooting the evil in the fields that we know, so that those who live after may have clean earth to till.",
    "Little by little, one travels far.",
    "I found it is the small everyday deeds of ordinary folk that keep the darkness at bay.",
    "Even the smallest person can change the course of the future.",
    "Do not meddle in the affairs of wizards, for they are subtle and quick to anger.",
    "May the wind under your wings bear you where the sun sails and the moon walks.",
];

function lookup() {
    var randomQuote = getRandomItem(quotes);
    document.getElementById("qotd").innerHTML = randomQuote;
    return;
}

document.addEventListener("DOMContentLoaded", function() {
    lookup();
});