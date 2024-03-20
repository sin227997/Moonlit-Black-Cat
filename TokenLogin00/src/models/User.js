import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    Họ và Tên:{
        type: String
    },
    Ngày Sinh Nhật:{
        type: String
    } ,
    Nơi Sinh:{
        type: String
    },
    Quốc Tịch:{
        type: String
    },
    Password:{
        type: String
    }
});

const User = mongoose.model('User', userSchema);

exports default User;
