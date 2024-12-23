import pool from "../config/database";
import bcrypt from "bcryptjs";
import db from "../models/models/index";
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  const hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createUser = async (email, password, username) => {
  const hashPass = hashUserPassword(password);
  // const [results, fields] = await pool.query(
  //   `INSERT INTO user (email, password, username) VALUES (?,?,?)`,
  //   [email, hashPass, username]
  // );
  // return results;

  try {
    await db.User.create({
      username: username,
      email: email,
      password: hashPass,
    });
  } catch (error) {
    console.log(">>> error: ", error);
  }
};

const deleteUser = async (id) => {
  const [results, fields] = await pool.query("DELETE FROM user WHERE id = ?", [
    id,
  ]);
  return results;
};

const printListUser = async () => {
  const [results, fields] = await pool.query(`SELECT * FROM user`, []);
  return results;
};

const getUserData = async (id) => {
  const [results, fields] = await pool.query(
    `SELECT * FROM user WHERE id = ?`,
    [id]
  );
  return results;
};

const UpdateUser = async (userData) => {
  const { email, username, id } = userData;
  const [results, fields] = await pool.query(
    `UPDATE user SET email = ?, username = ? WHERE id = ?`,
    [email, username, id]
  );

  return results;
};

module.exports = {
  createUser,
  printListUser,
  deleteUser,
  getUserData,
  UpdateUser,
};
