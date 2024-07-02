import { Router, Request, Response } from "express";
import { Fightcade } from "fightcade-api";

export const userRouter = Router();

userRouter.get("/:username", async (req: Request, res: Response) => {
  try {
    const username = req.params.username;
    const user = await Fightcade.GetUser(username);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});
