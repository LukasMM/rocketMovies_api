const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class UsersController {
  async create(request, response) {
    const { name, email, password, avatar } = request.body

    const checkUserExists = await knex("users").where({ email }).first()

    if (checkUserExists){
      throw new AppError("Este e-mail já está em uso.")
    }

    const hashedPassword = await hash(password, 8)

    await knex("users").insert({
      name,
      email,
      password: hashedPassword,
      avatar
    })

    return response.status(201).json()
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const user_id = request.user.id

    const user = await knex("users").where({ id: user_id }).first()

    if(!user) {
      throw new AppError("Usuário não encontrado")
    }

    const userWithUpdatedEmail = await knex("users").where({ email }).first()

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso.")
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if(password && !old_password) {
      throw new AppError("Você informar a senha antiga para definir a nova senha")
    }

    if(password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if(!checkOldPassword) {
        throw new AppError("A senha antiga não confere.")
      }

      user.password = await hash(password, 8)
    }

    await knex("users").where('id', '=', user_id)
      .update({
        name: user.name,
        email: user.email,
        password: user.password
      })

    return response.json()
  }
}

module.exports = UsersController