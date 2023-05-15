var stringToChunk = "";
var stringToDisplay = "";

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const githubtextlink = "https://api.github.com/repos/ikd09/textbase/contents/nerdwerd.txt";

function lookup() {
    fetch(githubtextlink)
      .then(response => response.json())
      .then(data => {
        const textbase = atob(data.content);
        stringToChunk = textbase.split("-")
        stringToDisplay = getRandomItem(stringToChunk);
        if (stringToDisplay.length < 2) {lookup();}
        document.getElementById("nerdword").innerHTML = "I'm "+stringToDisplay+" that wastes too much time.";
        document.getElementById("usingWord").innerHTML = "As previously mentioned, we're a bunch of "+stringToDisplay+" that waste too much of our time.";
        return;
      })
      .catch(error => console.error(error));
}

lookup();
