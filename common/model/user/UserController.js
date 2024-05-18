const UserModel = require('./UserModel')

module.exports = {
  createUser: async (req, res) => {

    try {

      const { firstName, lastName, age, email, password } = req.body

      const user = await UserModel.createUser({ firstName, lastName, age, email, password })

      res.status(200).json({
        status: true,
        data: user
      })

    } catch (error) {
      res.status(500).json({
        status: false,
        error
      })

    }


  }
}