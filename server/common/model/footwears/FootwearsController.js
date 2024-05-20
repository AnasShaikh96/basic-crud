const FootwearsModel = require('./FootwearsModel')


module.exports = {

  createFootwearInstance: async (req, res) => {

    try {

      const payload = req.body
      const data = await FootwearsModel.create(payload)

      res.status(200).json({
        status: true,
        data
      })

    } catch (error) {

      res.status(500).json({
        status: false,
        data
      })

    }
  }
}