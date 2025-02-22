import { config } from "dotenv";

// Load the appropriate .env file
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });


// Export the variables
export const { PORT, DB_URL, NODE_ENV } = process.env; 