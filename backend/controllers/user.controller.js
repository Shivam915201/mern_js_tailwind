
// Write your controllers here

import User from '../models/User';

export const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  } catch (error) {
    console.error('Error creating user:', error);
  }
}
