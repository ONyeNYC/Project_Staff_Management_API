import mongoose from "mongoose";
import chalk from "chalk";

let MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/api-project";

//configuring a Mongoose option to control the behavior of document updates.
mongoose.set("returnOriginal", false);

mongoose.connect(MONGODB_URI).catch(err => {
  // mongodb+srv://dis2isaac:<password>@cluster0.knjlhgs.mongodb.net/?retryWrites=true&w=majority
  console.log(`Error connection go MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!!"));
});

mongoose.connection.on("error", err => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;
