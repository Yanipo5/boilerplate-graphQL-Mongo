require("dotenv").config();
import mongoose from "mongoose";

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    process.env.mongoURI,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
