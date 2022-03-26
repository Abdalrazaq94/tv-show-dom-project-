let shawall = []
function setup() {
  fetch('https://api.tvmaze.com/shows/82/episodes')
    .then((response) => response.json())
    .then((data) => init(data))
    .catch((error) => console.error(error));
  

}









function init(shows) {
  const rootElem = document.getElementById("root");
  const container = document.querySelector(".main-container");
  container.classList = "main-container";
  rootElem.appendChild(container);
  
  // forEach
 shawall =  shows.forEach((episode) => {
    const episodeDiv = document.createElement("div");
    episodeDiv.classList = "episodeDiv";
    container.appendChild(episodeDiv);
    console.log(shawall);
    episodeDiv.innerHTML += `
  <div class='ep-text-header'>
    <div>${episode.name}<span> -SE 0${episode.season}<span/></div>
       </div>
    <a href='${episode.url}'>
    <img class='ep-image' src="${episode.image.medium}" alt="" />
    <a/>
     <div class='main-text-div'>
    <p class="ep-text">${episode.summary}</p>
    </div>
</div>
    `;
   return {name: shawall.name, summary: shawall.summary}
  });
}


window.onload = setup;
