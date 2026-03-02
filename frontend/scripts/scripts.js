let games = [];
let currentGameIndex = 0;
async function loadGames() {
  const res = await fetch("/api/games");
  games = await res.json();

  if (games.length > 0) {
    loadGameByIndex(0);
  }
}
window.onload = loadGames;

async function loadGameByIndex(index) {
  const game = games[index];
  const res = await fetch(`/api/games/${game._id}`);
  const gameDetails = await res.json();
}
document.getElementById("game-title").textContent = `${gameDetails.white} vs ${gameDetails.black} - ${gameDetails.result}`;
document.getElementById("pgn-text").textContent = gameDetails.pgn;

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentGameIndex < games.length - 1) {
    currentGameIndex++;
    loadGameByIndex(currentGameIndex);
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentGameIndex > 0) {
    currentGameIndex--;
    loadGameByIndex(currentGameIndex);
  }
});