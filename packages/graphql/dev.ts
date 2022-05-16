import dotenv from 'dotenv';
import app from './api';
import { PORT } from './configs';

dotenv.config();

app.listen(PORT, () => console.info(`Server is listening on port ${PORT}`));
