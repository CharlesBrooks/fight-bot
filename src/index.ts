import express from "express";
import { userRouter } from "./routes/fightcade-user-route";
import { replayRouter } from "./routes/fightcade-replay-route";
import { defaultRouter } from "./routes/default-route";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/user", userRouter);
app.use("/replays", replayRouter);
app.use("/", defaultRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
