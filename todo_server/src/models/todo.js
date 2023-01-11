
import { DataTypes, literal } from 'sequelize';
import sequelize from '../config/database';

const { STRING, BOOLEAN, TIME, DATEONLY } = DataTypes;

const Todos = sequelize.define(
  'todos',
  {
    name: { type: STRING, allowNull: false ,unique: true},
    date: { type: DATEONLY, allowNull: true },
    time: { type: TIME, allowNull: true },
    note: { type: STRING, allowNull: false },
    is_delete: { type: BOOLEAN, defaultValue: false, allowNull: false},
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: 'TIMESTAMP',
      defaultValue: literal('CURRENT_TIMESTAMP'),
    },
  },
  {
    timestamps: true,
    schema: process.env.Schema,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

export default Todos;
