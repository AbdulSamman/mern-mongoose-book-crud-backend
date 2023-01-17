import * as model from "./model.js";
import express from "express";
import cors from "cors";
import * as config from "./config.js";

const app = express();
app.use(cors());
//LOGGER wird immer ausgefüht, an einige stelle als middleware
/* 
app.get('/books', logger,(req: express.Request, res: express.Response) => {
	res.json(model.getBooks());
});
*/

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(model.getApiInstructions());
});

app.listen(config.port, () => {
  console.log(`listening on port http://localhost:${config.port}`);
});
