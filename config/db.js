const mongoose = require('mongoose');
require('dotenv').config();

const dbAtlas = process.env.mongoURI;
const dbLocal = process.env.localMongoURI;
const db = process.env.NODE_ENV == 'production' ? dbAtlas : dbLocal;
console.log(db);
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB connected`);
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
