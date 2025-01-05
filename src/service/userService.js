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

const getUserWithPagination = async (page, limit) => {
  try {
    const offset = (page - 1) * limit;

    const { count, rows } = await db.User.findAndCountAll({
      offset: offset,
      limit: limit,
    });

    let totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      users: rows,
    };

    console.log(">>> check data: ", data);

    return {
      EM: "Paginate users successed!",
      EC: 0,
      DT: data,
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
    const user = await db.User.findOne({
      where: { id: userId },
    });

    if (user) {
      await db.User.destroy({
        where: { id: userId },
      });

      return {
        EM: "Delete user success!",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Cannot find user",
        EC: -1,
        DT: [],
      };
    }
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
  getUserWithPagination,
};
