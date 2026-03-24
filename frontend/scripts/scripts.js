let games = [];
let currentGameIndex = 0;

window.onload = async () => {
  // Load all games once
  try {
    const res = await fetch("http://localhost:8000/api/v1/games"); // backend endpoint
    games = await res.json();

    if (games.length > 0) {
      loadGameByIndex(0);
    }

    // Event listeners
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
  } catch (error) {
    console.error("Failed to load games:", error);
  }
};

// Load a single game from the array
function loadGameByIndex(index) {
  const gameDetails = games[index];
  document.getElementById("game-title").textContent = `${gameDetails.white} vs ${gameDetails.black} - ${gameDetails.result}`;
  document.getElementById("pgn-text").textContent = gameDetails.moves || "";
}
