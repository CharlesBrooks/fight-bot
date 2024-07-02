import { Router, Request, Response } from "express";

export const defaultRouter = Router();

defaultRouter.get("/", async (req: Request, res: Response) => {
  res.send(`
        <h1>API Debug Information</h1>
        <p>Available routes:</p>
        <ul>
          <li>/user/:username - Calls through to Fightcade.GetUser("username")</li>
          <li>/replays - Calls through to Fightcade.GetReplays()</li>
        </ul>
      `);
});
