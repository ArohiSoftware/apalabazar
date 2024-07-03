import connectDB from './src/database/mongo.db.js';
import app from './app.js';
import { config } from 'dotenv';

const PORT = 5454;
import dotenv from 'dotenv';

dotenv.config({
  path: './.env',
});

config({
  path: './.env'
})




connectDB()


.then(() => {

  app.listen(PORT, () => {
    console.log(`⚙️  ⚙️   Server is running on port ${PORT} successfully 🎉  ➡️  ✈️  \n \t check health at http://localhost:${PORT}/`);
  });

})
.catch((err) => {
  console.error("MongoDB connection error => ", err);
});

