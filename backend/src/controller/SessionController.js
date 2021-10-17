const { User } = require("../models");

class SessionController {
  async store(req, res) {
    const { login, password } = req.body;

    const user = await User.findOne({
      where: {
        login: login
      }
    });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const pwd = await user.checkPassword(password)
    if (!pwd) {
      return res.status(401).json({ message: "Incorret password" });
    }

    return res.json({
      user,
      token: user.createToken(),
    });
  }
}

module.exports = new SessionController();
