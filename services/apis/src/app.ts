import express, { Request, Response, urlencoded, json } from 'express';
import swaggerUi from 'swagger-ui-express';
import { errorHandler } from './middlewares/error';
import { notFoundHandler } from './middlewares/not-found';
import { RegisterRoutes } from './routes';

const app = express();

RegisterRoutes(app);

app.get('/api/docs', swaggerUi.serve, async (_req: Request, res: Response) => {
  return res.send(swaggerUi.generateHTML(await import('./swagger.json')));
});

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(errorHandler);
app.use(notFoundHandler);

export default app;
