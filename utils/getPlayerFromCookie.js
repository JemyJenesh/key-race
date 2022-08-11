import nookies from "nookies";
import Player from "../models/Player";
import connectMongo from "./connectMongo";

const getPlayerFromCookie = async (req) => {
  const { playerId } = nookies.get({ req });
  let player = null;

  if (playerId) {
    await connectMongo();

    player = await Player.findById(playerId);

    if (!player) {
      nookies.destroy({ res }, "playerId");
    }
  }

  return player;
};

export default getPlayerFromCookie;
