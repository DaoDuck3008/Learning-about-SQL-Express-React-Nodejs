import db from "../models/models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

const checkEmailExist = async (userEmail) => {
  const user = await db.User.findOne({ where: { email: userEmail } });
  if (user) {
    return true;
  }
  return false;
};

const checkPhoneExist = async (userPhone) => {
  const user = await db.User.findOne({ where: { phone: userPhone } });
  if (user) {
    return true;
  }
  return false;
};

const hashUserPassword = (userPassword) => {
  const hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const register = async (rawUserData) => {
  try {
    //check email/phone number exist
    let isEmailExist = await checkEmailExist(rawUserData.email);
    if (isEmailExist === true) {
      return {
        EM: "The email address is already exist",
        EC: 1,
      };
    }
    let isPhoneExist = await checkPhoneExist(rawUserData.phone);
    if (isPhoneExist == true) {
      return {
        EM: "The phone number is already exist",
        EC: 1,
      };
    }

    //hash user password
    const hashPassword = hashUserPassword(rawUserData.password);

    //create user
    await db.User.create({
      email: rawUserData.email,
      username: rawUserData.username,
      phone: rawUserData.phone,
      password: hashPassword,
    });

    return {
      EM: "A new user has created successfully!.",
      EC: 0,
    };
  } catch (e) {
    console.log(">>> Error: ", e);
    return {
      EM: "There are something wrongs in service.",
      EC: -2,
    };
  }
};

module.exports = {
  register,
};
