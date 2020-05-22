import express = require('express');
import * as bodyParser from  "body-parser";
import {createConnection} from "typeorm";
import routes from "./routes/index";

const cors = require('cors');

// create typeorm connection
createConnection().then(connection => {


    // create and setup express app
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.raw());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cors());


   // register routes
    app.use("/api", routes);

    app.use('/public', express.static('public'));
    app.use((req, res, next) => {
        // Error goes via `next()` method
        setImmediate(() => {
            next(new Error('Something went wrong'));
        });
    });

    // start express server
    app.listen(3000, () => {
        console.log("Server started on port 3000!");
    });
}).catch(error => console.log(error));
