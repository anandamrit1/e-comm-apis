import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authroute.js';
import productRoutes from './routes/productroute.js';
import orderRoutes from './routes/orderroute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
