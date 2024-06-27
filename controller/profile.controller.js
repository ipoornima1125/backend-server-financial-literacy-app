
import User from '../model/user.model.js';

const getUserProfile = async (req, res) => {
  try {
    const userEmail = req.userEmail; 
    const user = await User.findOne({email:userEmail});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      email: user.email,
      // id: user._id.toString(),
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export default getUserProfile;
