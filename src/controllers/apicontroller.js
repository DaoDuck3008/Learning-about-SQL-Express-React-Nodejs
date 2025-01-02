import loginRegisterService from "../service/LoginRegisterService";

const testApi = (req, res) => {
  return res.status(200).json({
    message: "ok",
    data: "test api",
  });
};

const register = async (req, res) => {
  try {
    if (!req.body.username || !req.body.phone || !req.body.password) {
      return res.status(200).json({
        EM: "Missing required parameters.", // error message
        EC: "1", // error code
        DT: "", // data
      });
    }

    //service: create user
    let data = await loginRegisterService.register(req.body);
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: "", // data
    });
  } catch (e) {
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", //data
    });
  }
};

const login = async (req, res) => {
  try {
    let data = await loginRegisterService.handleLoginUser(req.body);
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: data.DT, // data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", //data
    });
  }
};

module.exports = { testApi, register, login };
