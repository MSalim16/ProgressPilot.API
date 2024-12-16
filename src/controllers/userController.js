// src/controllers/userController.js
const admin = require('../config/firebase-admin');

const userController = {
  // Get user profile
  getProfile: async (req, res) => {
    try {
      const userId = req.user.uid;
      const userRecord = await admin.auth().getUser(userId);
      
      res.json({
        success: true,
        data: {
          uid: userRecord.uid,
          email: userRecord.email,
          displayName: userRecord.displayName,
          photoURL: userRecord.photoURL
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching user profile',
        error: error.message
      });
    }
  },

  // Update user profile
  updateProfile: async (req, res) => {
    try {
      const userId = req.user.uid;
      const updates = req.body;

      await admin.auth().updateUser(userId, updates);
      
      res.json({
        success: true,
        message: 'Profile updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error updating profile',
        error: error.message
      });
    }
  }
};

module.exports = userController;