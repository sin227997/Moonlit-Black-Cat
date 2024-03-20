import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    HọvàTên:{
        type: String
    },
    NgàySinhNhật:{
        type: String
    } ,
    NơiSinh:{
        type: String
    },
    QuốcTịch:{
        type: String
    },
    Password:{
        type: String
    }
});

const User = mongoose.model('User', userSchema);

export default User;
