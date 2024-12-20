import pool from "../configs/database";

const CreateUser = async (email, password, username) => {
  const [results, fields] = await pool.query(
    `INSERT INTO users (email, password, username) VALUES (?,?,?)`,
    [email, password, username]
  );
  return results;
};

module.exports = {
  CreateUser,
};
