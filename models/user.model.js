const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        }
    }
);


userSchema.methods.getAll = () => {
    return Promise.resolve([]);
}

const User = mongoose.model('users', userSchema);

module.exports = User