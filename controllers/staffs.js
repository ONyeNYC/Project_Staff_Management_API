import Staff from "../models/Staff.js";

export const getStaffs = async (req, res) => {
  try {
    const staffs = await Staff.find();
    res.json(staffs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findById(id);

    if (staff) {
      return res.json(staff);
    }

    res.status(404).json({ message: "Staff not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createStaff = async (req, res) => {
  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.status(201).json(staff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findByIdAndUpdate(id, req.body);

    res.status(200).json(staff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Staff.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Staff deleted!");
    }

    res.status(404).json({ message: "Staff not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// export const getStaffByName = async (req, res) => {
//   const { name } = req.params;
//   const staff = await Staff.find({ name });
//   res.json(staff);
// };

export const getStaffByName = async (req, res) => {
  try {
    const { name } = req.params;
    const staff = await Staff.find({ name });

    if (staff.length > 0) {
      res.json(staff);
    } else {
      res.status(404).json({ message: "Staff not found for the given name." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
