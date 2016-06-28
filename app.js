import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import engines from 'consolidate';
// import hbs from 'handlebars';
import jade from 'jade';
import morgan from 'morgan';

import routes from './routes/index';

const app = express();

// View Engine config
// app.engine('hbs', engines.handlebars);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jade');

// JSON and URL-Encoded data parsing Middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Static assets config
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is now listening on localhost:${PORT}`);
});
