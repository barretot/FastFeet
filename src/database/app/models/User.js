import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs'; // Importando o bcrypt

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // Campo virtual
        password_hash: Sequelize.STRING, // Campo q salva o hash gerado da senha
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async user => {
      // Método que sempre será executado antes de alguma coisa
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }
}

export default User;
