import db from "../db/connection.js";
import Staff from "../models/Staff.js";
import staffs from "./staffs.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {
  // Reset Database
  await db.dropDatabase();

  // Insert Data
  await Staff.create(staffs);

  console.log(chalk.magenta("Staffs created!"));

  // Close DB Connection
  await db.close();
};

insertData();
