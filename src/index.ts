import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import morgan from 'morgan';
import router from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../public/swagger.json';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(morgan("dev"));;
app.use(router);
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
