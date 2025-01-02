import db from "../models/models/index";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";
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

const checkPasswordCorrect = async (password, hashpass) => {
  return await bcrypt.compare(password, hashpass);
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

const handleLoginUser = async (rawData) => {
  try {
    // check email or phone exist?
    const user = await db.User.findOne({
      where: {
        [Op.or]: [
          {
            email: rawData.valueLogin,
          },
          {
            phone: rawData.valueLogin,
          },
        ],
      },
    });

    // console.log(">>> check sequelize object: ", user);
    console.log(">>> check javascript object: ", user.get({ plain: true }));
    if (user) {
      if (await checkPasswordCorrect(rawData.password, user.password)) {
        console.log("Login seccessfully!");
        return {
          EM: "Login successfully!",
          EC: 0,
          DT: "",
        };
      }
    }

    console.log(
      `Not found user email/phone number: ${rawData.valueLogin} with password: ${rawData.password} `
    );
    return {
      EM: "Wrong email address/ phone number or password!",
      EC: -1,
      DT: "",
    };
  } catch (error) {
    console.log(">>> Error: ", error);
    return {
      EM: "There are something wrongs in service.",
      EC: -2,
      DT: "",
    };
  }
};

module.exports = {
  register,
  handleLoginUser,
};
