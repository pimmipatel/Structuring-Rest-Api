import User from "../models/userModel.js";


export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};


export const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const user = await User.create({ name, email, age });
  res.status(201).json(user);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedUser);
};


export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: "User deleted successfully" });
};
