
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const adminSchema = new mongoose.Schema({
    email: {type: String, required: 'Email can\'t be empty', unique: true},
    password: {type: String, required: 'Password can\'t be empty'},
    saltSecret: String
});

// Methods
adminSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

adminSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

const Admin = mongoose.model('admin', adminSchema);

export default Admin;