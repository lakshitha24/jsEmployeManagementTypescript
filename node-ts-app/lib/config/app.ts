import express from "express";
import * as bodyParser from "body-parser";
import mongoose from 'mongoose';
import environment from "../environment";

import { EmpRoute } from "../routes/empRoute";
mongoose.set('strictQuery', false);

class App {

   public app: express.Application;
   public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();

  private empRoute : EmpRoute = new EmpRoute();

   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      this.empRoute.route(this.app)
   }

   private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

   private mongoSetup(): void {
      mongoose.connect(this.mongoUrl);
   }

}
export default new App().app;