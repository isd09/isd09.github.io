var stringToChunk = "";
var stringToDisplay = "";

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const githubtextlink = "https://api.github.com/repos/ikd09/textbase/contents/homepagequotes.txt";

function lookup() {
    fetch(githubtextlink)
      .then(response => response.json())
      .then(data => {
        const textbase = atob(data.content);
        stringToChunk = textbase.split("-split-")
        stringToDisplay = getRandomItem(stringToChunk);
        if (stringToDisplay.length < 5) {lookup();}
        document.getElementById("qotd").innerHTML = stringToDisplay;
        return;
      })
      .catch(error => console.error(error));
}

lookup();