// src/middleware/auth.js
const admin = require('../config/firebase-admin');

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'Access denied. No token provided.' 
      });
    }

    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Auth Error:', error);
    return res.status(403).json({ 
      success: false, 
      message: 'Invalid token or unauthorized access',
      error: error.message 
    });
  }
};

module.exports = { authenticateToken };