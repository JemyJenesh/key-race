import connectMongo from "../../../utils/connectMongo";
import Game from "../../../models/Game";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const player = req.body;

  try {
    const quotable = await fetch(
      "https://api.quotable.io/random?minLength=200"
    );
    const quote = await quotable.json();

    try {
      await connectMongo();

      const game = await Game.create({
        createdBy: player._id,
        words: quote.content,
        players: [player],
      });

      res.status(200).json(game);
    } catch (error) {
      res.status(500).json({ error });
    }
  } catch (error) {
    console.log("Quotable:", error);
  }
}
