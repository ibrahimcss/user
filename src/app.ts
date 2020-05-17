import * as express from "express";
import * as bodyParser from  "body-parser";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import routes from "./routes/index";
const  cors = require('cors');


// create typeorm connection
createConnection().then(connection => {


    // create and setup express app
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    // register routes
    app.use("/api", routes);
    // start express server
    app.listen(3000, () => {
        console.log("Server started on port 3000!");
    });
}).catch(error => console.log(error));
