import mongoose from "mongoose";
import { playerSchema } from "./Player";

const { model, models, Schema } = mongoose;

const gameSchema = new Schema({
  createdBy: {
    ref: "Player",
    type: Schema.Types.ObjectId,
  },
  hasStarted: {
    default: false,
    type: Boolean,
  },
  isOver: {
    default: false,
    type: Boolean,
  },
  players: [playerSchema],
  startedAt: Number,
  words: [String],
});

const Game = models.Game || model("Game", gameSchema);

export default Game;
