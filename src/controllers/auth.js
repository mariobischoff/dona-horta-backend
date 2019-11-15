import bcrypt from 'bcrypt'

module.exports = class Auth {

  constructor(user) {
    this.user = user
  }

  async login (req, res) {
    const { email, password } = req.body
    try {
      let user = await this.getOne({ email: email })
      if (bcrypt.compareSync(password, user.password)) {
        let token = jwt.sign(user.id, process.env.SECRET)
        return res.status(200).json({ token })
      } else {
        return res.status(401).json({ msg: 'Invalid Password' })
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({ msg: 'Invalid Email' })
    }
  }

  async register (req, res) {
    try {
      let plainPass = req.body.password
      delete req.body.password
      let salt = await bcrypt.genSalt(10)
      req.body.password = await bcrypt.hash(plainPass, salt)
      let result = this.user.save(req.body)
      return res.status(201).json(result)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error.errmsg })
    }
  }

}
