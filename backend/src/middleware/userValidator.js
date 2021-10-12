const Joi = require("joi");
const UserService = require("../services/UserService");

const userValidator = {
  async validateUser(req, res, next) {
    const schema = Joi.object({
      login: Joi.string().min(3).max(50).required(),

      password: Joi.string().min(6).max(12).required(),

      name: Joi.string().min(3).max(50).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(422).json({
        message: error.details,
      });
    }

    const loginAlreadyExists = await UserService.checkLogin(req.body.login);
    if (loginAlreadyExists) {
      err = { message: "Login already exists" };
      return res.status(422).send(JSON.stringify(err));
    }

    next();
  },

  async userExists(req, res, next) {
    const user = await UserService.checkLogin(req.params.login);
    if (!user) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "User is not registered." }));
    }
    next();
  },
};

module.exports = userValidator;
