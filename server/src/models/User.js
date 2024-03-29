const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true, sparse: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        enum: [1,2,3,4,5,6,7,8,9,10],
        default: 2
    },
    photo: String,
    status: {
        type: Number,
        enum: [1,2,3,4,5],
        default: 1
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: Date,
});


schema.pre('save', function (next) {
    const user = this;
    const now = new Date();
    user.updated_at = now;
    if (!user.created_at) {
        user.created_at = now;
    }
    if (!user.isModified('password')) {
        return next();
    }
    // generate a salt
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, (err1, hash) => {
            if (err1) { return next(err1); }
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

const User = mongoose.model('User', schema);
module.exports = User;
