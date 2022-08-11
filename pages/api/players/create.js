import { setCookie } from "nookies";
import connectMongo from "../../../utils/connectMongo";
import Player from "../../../models/Player";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const body = req.body;

  try {
    await connectMongo();

    const player = await Player.create(body);

    setCookie({ res }, "playerId", player._id, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: true,
      secure: process.env.NODE_ENV !== "development",
    });

    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ error });
  }
}
