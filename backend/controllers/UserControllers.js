import Users from "../models/Users.js";

//    GetAllusers
export const GetAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.json({ data: users });
  } catch (err) {
    res.json({ error: err });
  }
};

//   GetOneUser
export const GetOneUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.json({ data: user });
  } catch (err) {
    res.json({ error: err });
  }
};

//   CreateNewUser
export const CreateNewUser = async (req, res) => {
  try {
    const newUser = await Users.create(req.body);
    res.json({ data: newUser });
  } catch (err) {
    res.json({ error: err });
  }
};

//   UpdateUser
export const UpdateUser = async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ data: updatedUser });
  } catch (err) {
    res.json({ error: err });
  }
};

//   DeleteUser
export const DeleteUser = async (req, res) => {
  try {
    const deletedUser = await Users.findByIdAndDelete(req.params.id);
    res.json({ data: deletedUser });
  } catch (err) {
    res.json({ error: err });
  }
};
