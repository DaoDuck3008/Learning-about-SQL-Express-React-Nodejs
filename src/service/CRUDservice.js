import pool from "../config/database";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  const hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createUser = async (email, password, username) => {
  const hashPass = hashUserPassword(password);
  const [results, fields] = await pool.query(
    `INSERT INTO users (email, password, username) VALUES (?,?,?)`,
    [email, hashPass, username]
  );
  return results;
};

const deleteUser = async (id) => {
  const [results, fields] = await pool.query("DELETE FROM users WHERE id = ?", [
    id,
  ]);
  return results;
};

const printListUser = async () => {
  const [results, fields] = await pool.query(`SELECT * FROM users`, []);
  return results;
};

const getUserData = async (id) => {
  const [results, fields] = await pool.query(
    `SELECT * FROM users WHERE id = ?`,
    [id]
  );
  return results;
};

const UpdateUser = async (userData) => {
  const { email, username, id } = userData;
  const [results, fields] = await pool.query(
    `UPDATE users SET email = ?, username = ? WHERE id = ?`,
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
