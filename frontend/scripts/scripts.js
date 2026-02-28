let myGamesOutput = fetch("http://localhost:5000/api/games")
    .then(response => response.json())
    .then(data => {
        document.getElementById("myGamesOutput").innerHTML = data.map(game => `
            <div class="game">
                <p>Game ID: ${game.id}</p>
                <p>White Player: ${game.whitePlayer}</p>   
                <p>Black Player: ${game.blackPlayer}</p>
                <p>Result: ${game.result}</p>
            </div>
        `).join("");
    })
    .catch(error => console.error("Error fetching games:", error)); 
