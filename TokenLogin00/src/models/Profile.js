import mongoose from ('mongoose');

const profileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    Skill: [{type: String}],
    SởThích: {type: String},
    Cácmụctiêucánhân : [{type: String}]
});

const Profile = mongoose.model('Profile', profileSchema);

exports  {Profile};
