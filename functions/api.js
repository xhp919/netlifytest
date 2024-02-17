const express = require("express");
const serverless = require("serverless-http");
const request = require("request");
const cors = require("cors");
const app = express();
const router = express.Router();
app.use(cors());

router.get("/", cors(), (req, res) => {
  request(
    {
      uri: "https://www.kdocs.cn/api/v3/ide/file/coSbKindNGuk/script/V2-1vfe2ZEaBdZd8MZhAmH2ic/sync_task",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "AirScript-Token": "2hubXLuA5BV5g4B5MP4ced",
      },
      body: JSON.stringify({ Context: { argv: {} } }),
    },
    function (err, resp, body) {
      res.setHeader("Content-Type", "application/json");
      res.send(resp);
    }
  );
});

app.use("/", router);
module.exports.handler = serverless(app);
