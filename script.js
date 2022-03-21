//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  console.log(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  const container = document.querySelector(".main-container");
  container.classList = "main-container";
  rootElem.appendChild(container);

  episodeList.forEach((episode) => {
    const episodeDiv = document.createElement("div");
    episodeDiv.classList = "episodeDiv";
    container.appendChild(episodeDiv);

    episodeDiv.innerHTML += `
  <div class='ep-text-header'>
    <div>${episode.name}<span> -SE 0${episode.season}<span/></div>
       </div>
     <img class='ep-image' src="${episode.image.medium}" alt="" />
     <div class='main-text-div'>
    <p class="ep-text">${episode.summary}</p>
    </div>
</div>
    `;
  });
}

console.log(getAllEpisodes());
window.onload = setup;

