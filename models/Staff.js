import mongoose from "mongoose";
import moment from "moment";

const Schema = mongoose.Schema;

let StaffSchema = new Schema({
  name: {
    type: String,
    required: true,
    description: "The full name of the employee.",
  },
  position: {
    type: String,
    required: true,
    description: "The job position of the employee.",
  },
  email: {
    type: String,
    required: true,
    description: "The email address of the employee.",
  },
  phone: {
    type: String,
    required: true,
    description: "The phone number of the employee.",
  },
  department: {
    type: String,
    required: true,
    description: "The department in which the employee works.",
  },
  location: {
    type: String,
    required: true,
    description: "The location where the employee is based.",
  },
  projects: [{ type: String }],
  hire_date: {
    type: String, // Change the type to String
    required: true,
    description: "The date the employee was hired (formatted as 'YYYY-MM-DD').",
  },
  salary: {
    type: Number,
    required: true,
    description: "The annual salary of the employee.",
  },
  skills: [String],
  education: {
    type: String,
    required: true,
    description: "The highest level of education of the employee.",
  },
  certifications: [String],
});

// Define a pre-save middleware to format hire_date
StaffSchema.pre("save", function (next) {
  if (this.hire_date instanceof Date) {
    // Format the hire_date as 'YYYY-MM-DD' using moment.js
    this.hire_date = moment(this.hire_date).format("YYYY-MM-DD");
  }
  next();
});

export default mongoose.model("staffs", StaffSchema);
