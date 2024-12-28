const testApi = (req, res) => {
  return res.status(200).json({
    message: "ok",
    data: "test api",
  });
};

const register = (req, res) => {
  const userData = req.body;
  console.log(">>> Check user data: ", userData);
};

module.exports = { testApi, register };
