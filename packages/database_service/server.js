import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";

import {config} from './config';
import MailRoutes  from "./routes/MailRoutes.js";

import MailSchema from "./dbUtils/Models/Mail.js";

export const app = express();
app
    .use(bodyParser.json())
    .use('/', MailRoutes)

async function start() {
  try {
    await mongoose.connect(config.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(config.port, () => {
        console.info(`🚀 database server is started at http://localhost:${config.port}`);
    })
  } catch (e) {
    console.error(e)
  }

}

await start();