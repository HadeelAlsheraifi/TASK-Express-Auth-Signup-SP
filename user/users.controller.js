const jsonwebtoken = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

const bcrypt = required("bcrypt");

const UserSchema = require("../models/User");

const saltRounds = 10;

exports.signUpController = async (req, res, next) => {
  try {
    const { password } = req.body;
    const saltRounds = 10;
    req.body.password = await bcrypt.hash(password, saltRounds);
    const newUser = await UserSchema.create(req.body);
    const payload = {
      _id: newUser._id,
      username: newUser.username,
      exp: Date.now() + 9000000,
    };
    const token = jsonwebtoken.sign(JSON.stringify(payload), JWT_SECRET);
  } catch (error) {}
};

// try {
//     const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
//     const insertResult = await User.create({
//       username: req.body.username,
//       password: hashedPwd,
//     });
//     res.send(insertResult);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server error Occured");
//   }
