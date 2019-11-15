import bcrypt from 'bcrypt'
import User from '../models/user'

class Auth {

  register (req, res) {

    let { password: plainpw, name, email, address } = req.body
    bcrypt.hash(plainpw, 10)
      .then((password) => {
        User.Save({
            name,
            email,
            address,
            password
          })
            .then((data) => {
              return res.status(201).json(data)
            })
            .catch((error) => {
              return res.status(500).json(error)
            })
      })
      .catch((err) => {
        res.status(500).json({ msg: err })
      })
  }

}

export default Auth