import bcrypt from 'bcrypt'
import userSchema from '../schemas/user'

module.exports = class Auth {


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

  register (req, res) {
    console.log('jio')
    userSchema.create(req.body).then(user => {
      res.send(user)
    }).catch(error => {
      res.send(error)
    })
  }

}
