import db from "../models/models/index";

const getAllUser = async () => {
  try {
    const users = await db.User.findAll({
      attributes: ["id", "username", "email", "sex", "phone"],
      include: { model: db.Group },
    });
    console.log(">>> list user: ", users);
    return {
      EM: "get all users success!",
      EC: 0,
      DT: users,
    };
  } catch (error) {
    console.log(">>> There are something wrongs in service.", error);
    return {
      EM: "There are something wrongs in service.",
      EC: -2,
      DT: [],
    };
  }
};

const createNewUser = async (userData) => {
  try {
  } catch (error) {
    console.log(">>> There are something wrongs in service.", error);
    return {
      EM: "There are something wrongs in service.",
      EC: -2,
      DT: [],
    };
  }
};

const updateAnUser = async (data) => {
  try {
  } catch (error) {
    console.log(">>> There are something wrongs in service.", error);
    return {
      EM: "There are something wrongs in service.",
      EC: -2,
      DT: [],
    };
  }
};

const deleteAnUser = async (userId) => {
  try {
  } catch (error) {
    console.log(">>> There are something wrongs in service.", error);
    return {
      EM: "There are something wrongs in service.",
      EC: -2,
      DT: [],
    };
  }
};

module.exports = {
  getAllUser,
  createNewUser,
  updateAnUser,
  deleteAnUser,
};
