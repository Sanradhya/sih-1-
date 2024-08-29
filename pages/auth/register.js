import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create new user
      user = new User({ name, email, password: hashedPassword });
      await user.save();

      res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  } else {
    res.status(405).json({ msg: 'Method not allowed' });
  }
}
