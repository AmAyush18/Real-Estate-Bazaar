import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-view&psig=AOvVaw1Evs6sHOQUcgBW3y1xGcFq&ust=1697264464307000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCODGkv6w8oEDFQAAAAAdAAAAABAE"
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;