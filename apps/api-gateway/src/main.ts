import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { apiLimiter } from './middlewares/rate-limit.middleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Terapkan pembatasan laju ke semua rute
app.use(apiLimiter);

// Endpoint pemeriksaan kesehatan server
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API Gateway is running smoothly', timestamp: new Date().toISOString() });
});

// Jalur masuk utama gateway API v1
app.use('/api/v1', (req, res) => {
  res.status(200).json({ message: 'Welcome to AnimakerClone API Gateway v1' });
});

app.listen(PORT, () => {
  console.log(`🚀 API Gateway running on port ${PORT}`);
});
