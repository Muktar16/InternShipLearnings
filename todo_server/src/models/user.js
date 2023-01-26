import { BOOLEAN, literal, STRING } from "sequelize";
import sequelize from '../config/database';

const Users = sequelize.define(
    'users',
    {
        userName:{type:STRING, allowNull:false},
        email:{type:STRING, allowNull:false, unique:true},
        password:{type:STRING ,allowNull:false},
        is_delete: { type: BOOLEAN, defaultValue: false, allowNull: false},
        status:{
            type: STRING, 
            //ENUM: ['Pending', 'Active'],
            defaultValue: 'Pending'
        },
        confirmationCode: { 
            type: STRING, 
            unique: true 
        },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: literal('CURRENT_TIMESTAMP'),
          },
          updated_at: {
            type: 'TIMESTAMP',
            defaultValue: literal('CURRENT_TIMESTAMP'),
        }
    },
    {
        timestamps: true,
        schema: process.env.Schema,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
);

export default Users;