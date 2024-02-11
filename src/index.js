import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/index.js';
import connection from './utils/index.js';
import 'dotenv/config'
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use('/',routes)
connection.on("connect", () => console.log("database connected successfully"));
// Start the server



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
