const container = document.getElementById("search");
let linksData;

fetch("/html/main/links.json")
  .then((response) => response.json())
  .then((data) => createGames(data)); // REMEMBER TO CHANGE THIS WHEN YOU MOVE links.json

function createGames(data) {
  for (gamesList of data.links) {
    section = document.createElement("section");
    section.className = "flex-container";
    for (game of gamesList.games) {
      link = document.createElement("a");
      link.href = game[2];
      link.className = "game-link container";
      gameTile = document.createElement("div");
      gameTile.className = "game-tile";
      icon = document.createElement("img");
      icon.className = "game-icon";
      icon.src = game[1];
      icon.loading = "lazy";
      title = document.createElement("h1");
      title.className = "game-title";
      title.innerHTML = game[0];
      gameTile.appendChild(icon);
      gameTile.appendChild(title);
      link.appendChild(gameTile);
      section.appendChild(link);
    }
    sectiontitle = document.createElement("h2");
    sectiontitlec = document.createElement("span");
    sectiontitlec.innerHTML = gamesList.title;
    sectiontitle.appendChild(sectiontitlec);
    container.appendChild(sectiontitle);
    container.appendChild(section);
  }
}
