import express from "express";
import cors from 'cors';
import collectionRouter from "./routes/collection.routes.js";
import mongoose from "mongoose";
import { PORT } from "./config/config.js";
import connectDB from "./database/mongodb.js";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5174', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // If using cookies/auth
}));

app.use('/api/v1/collections', collectionRouter);


app.get('/', (req, res) => {
    res.send("Hello World!");
});


// Database connection and server start
const startServer = async () => {
    try {
      await connectDB();
      const server = app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
  
      // Graceful shutdown
      const shutdown = async () => {
        console.log('\n🛑 Shutting down server...');
        server.close(async () => {
          console.log('🔒 Server closed');
          await mongoose.disconnect();
          console.log('🔌 MongoDB disconnected');
          process.exit(0);
        });
      };
  
      process.on('SIGINT', shutdown); // CTRL+C
  
    } catch (error) {
      console.error('❌ Failed to start application:', error);
      process.exit(1);
    }
  };
  
  startServer();