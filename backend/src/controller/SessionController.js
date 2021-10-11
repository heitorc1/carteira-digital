const { User } = require("../models");

class SessionController {
  async store(req, res) {
    const { login, password } = req.body;

    const user = await User.findByPk(login);

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    if (!(await user.checarSenha(password))) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    return res.json({
      user,
      token: user.criarToken(),
    });
  }
}

module.exports = new SessionController();
