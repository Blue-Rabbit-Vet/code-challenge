import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    img: String,
});

let user = mongoose.models.User || mongoose.model('User', UserSchema);

export default { user };