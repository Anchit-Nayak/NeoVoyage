const user = require("../models/user");
const bcrypt = require('bcrypt')

const login = async (req, res, next) => {
    try {
        let { email, password } = req.body;
        if (!email) {
          res.status(401).send("Email is required");
        }
        if (!password) {
          res.status(401).send("The password field is required");
        }
        const user = await db.findOne({ email });
        if (!user) {
          res.status(401).send("User not Found. Please Sign Up!");
        }
        if (user) {
          if (!user.isActive) {
        user.otp = {
          value: Math.floor(100000 + Math.random() * 900000),
          epoch: moment().unix(),
        };
        await user.save()
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          res.status(401).send("Invalid credentials");
          return;
        }
    }}
    
      } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
      }
};

module.exports = {login};