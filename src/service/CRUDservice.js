import pool from "../configs/database";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  const hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const CreateUser = async (email, password, username) => {
  const hashPass = hashUserPassword(password);
  const [results, fields] = await pool.query(
    `INSERT INTO users (email, password, username) VALUES (?,?,?)`,
    [email, hashPass, username]
  );
  return results;
};

const printListUser = async () => {
  const [results, fields] = await pool.query(`SELECT * FROM users`, []);
  return results;
};

module.exports = {
  CreateUser,
  printListUser,
};
