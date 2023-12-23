import User from "../models/user.model.js";

export const test = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();
  try {
    res.status(201).json("user created successfully");
  } catch {
    res.status(500).json(error.message);
  }
};
