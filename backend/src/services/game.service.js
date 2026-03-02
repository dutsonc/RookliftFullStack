import { Chess } from "chess.js";
const fs = require("fs");
const path = require("path");

const pgnFilePath = path.join(process.cwd(), "data", "lichesswhitewins.pgn");

let games = [];

function loadGamesFromPgn() {
    const fileContent = fs.readFileSync(pgnFilePath, 'utf8');

    const rawGames = fileContent.split(/\n(?=\[Event )/);

    games = rawGames.map((gameText, index) => {
        const id= index + 1;
        const whiteMatch = gameText.match(/\[White "([^"]+)"\]/);
        const blackMatch = gameText.match(/\[Black "([^"]+)"\]/);
        const whiteRatingMatch = gameText.match(/\[WhiteElo "(\d+)"\]/);
        const blackRatingMatch = gameText.match(/\[BlackElo "(\d+)"\]/);
        const resultMatch = gameText.match(/\[Result "([^"]+)"\]/);
        const dateMatch = gameText.match(/\[Date "([^"]+)"\]/);

        return {
            id,
            white: whiteMatch ? whiteMatch[1] : null,
            black: blackMatch ? blackMatch[1] : null,
            whiteRating: whiteRatingMatch ? parseInt(whiteRatingMatch[1]) : null,
            blackRating: blackRatingMatch ? parseInt(blackRatingMatch[1]) : null,
            result: resultMatch ? resultMatch[1] : null,
            date: dateMatch ? dateMatch[1] : null
        };
    });
}

loadGamesFromPgn();