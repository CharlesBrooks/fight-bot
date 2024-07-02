import { Router, Request, Response } from "express";
import { Fightcade } from "fightcade-api";

export const replayRouter = Router();

replayRouter.get("/", async (req: Request, res: Response) => {
  try {
    const replays = await Fightcade.GetReplays();
    res.json(replays);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});
