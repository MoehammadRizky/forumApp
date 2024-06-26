const mongoose = require("mongoose")
const { Schema } = mongoose

const replySchema = new Schema({
    content: String,
    userId: {type: Schema.Types.ObjectId, ref:"User"},
    ThreadId: {type: Schema.Types.ObjectId, ref:"Thread"},

})

const Reply = mongoose.model("Reply", replySchema)

module.exports = Reply