const { v4: uuidv4 } = require('uuid')

module.exports = (sequelize, DataTypes) => {
  const Porter = sequelize.define('Porter', {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4(),
      allowNull: false,
      primaryKey: true,
    },
    schoolId: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM(`MALE`, `FEMALE`),
    },
    passwordHash: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })
  return Porter
}
