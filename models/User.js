const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        location: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        gender: { type: String, enum: ['male', 'female', 'other'], required: true },
        role: { type: String, enum: ['admin', 'client', 'salonowner'], required: true },
        createdAt: { type: Date, default: Date.now },
        updateAt: { type: Date, default: Date.now, required: false },
    }
);

// hash user's password with salt before saving document to db
userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(Number(process.env.SALT_NUM));
    this.password = await bcrypt.hash(this.password, salt)
})


userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = { User } 