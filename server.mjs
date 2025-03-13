import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './data/db.mjs';
import apiRoutes from './server/routes/api.mjs';
import customMiddleware from './server/middleware/logger.mjs';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(customMiddleware);

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});