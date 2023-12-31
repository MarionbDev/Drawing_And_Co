const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname,  mail, hashedPassword, about, role, pseudo) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.hashedPassword,
        user.about,
        user.role,
        user.pseudo,
      ]
    );
  }

  update(user) {
    return this.database.query(`update ${this.table} set  ? where id = ?`, [
      user,
      user.id,
    ]);
  }

  find(id) {
    return this.database.query(
      `SELECT id, firstname, lastname,  mail, about, role, pseudo FROM  ${this.table} WHERE id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `select id, firstname, lastname,  mail, about, role, pseudo from  ${this.table}`
    );
  }

  findByEmail(email) {
    return this.database.query(
      `select * from  ${this.table} WHERE mail=?`,
      email
    );
  }
}

module.exports = UserManager;
